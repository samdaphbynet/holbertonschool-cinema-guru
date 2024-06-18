import { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faStar } from "@fortawesome/free-solid-svg-icons";
import "./movies.css";
import Tag from "./Tag";

const MovieCard = ({ movies }) => {
  const [isFavorites, setIsFavorites] = useState(false);
  const [isWatchLater, setIsWatchLater] = useState(false);
  const availableImage = "https://archive.org/download/placeholder-image/placeholder-image.jpg"

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    // api favorite
    axios
      .get("http://localhost:8000/api/titles/favorite", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => response.data)
      .then((data) => {
        data.forEach((element) => {
          if (element.id === movies.id) {
            setIsFavorites(true);
          }
        });
      })
      .catch((error) => {
        console.log("from favorite api", error);
      });
    // api watch later
    axios
      .get("http://localhost:8000/api/titles/watchlater", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => response.data)
      .then((data) => {
        data.forEach((element) => {
          if (element.id === movies.id) {
            setIsWatchLater(true);
          }
        });
      })
      .catch((error) => {
        console.log("from watchlater api", error);
      });
  }, []);

  // function handle type
  const handleClick = (type) => {
    const token = localStorage.getItem("accessToken");
    // favorites type
    if (type === "favorite") {
      if (isFavorites) {
        setIsFavorites(false);
        axios
          .delete(`http://localhost:8000/api/titles/favorite/${movies.imdbId}`, {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          })
          .catch((error) => {
            console.log("from delete favorite", error);
          });
      } else {
        setIsFavorites(true);
        axios
          .post(
            `http://localhost:8000/api/titles/favorite/${movies.imdbId}`,
            {},
            {
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              },
            }
          )
          .catch((error) => {
            console.log("from post favorite", error);
          });
      }
    }
    // watch later type
    if (type === "watchlater") {
      if (isWatchLater) {
        setIsWatchLater(false);
        axios
          .delete(`http://localhost:8000/api/titles/watchlater/${movies.imdbId}`, {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          })
          .catch((error) => {
            console.log("from delete favorite", error);
          });
      } else {
        setIsWatchLater(true);
        axios
          .post(
            `http://localhost:8000/api/titles/watchlater/${movies.imdbId}`,
            {},
            {
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              },
            }
          )
          .catch((error) => {
            console.log("from post favorite", error);
          });
      }
    }
  };

  return (
    <li className="movie_card">
      <div className="icons-card">
        <span className="icon-later-container" onClick={() => { handleClick("watchlater"); }} >
          <FontAwesomeIcon icon={faClock} className={isWatchLater ? "icon-red" : ""}/>
        </span>
        <span className="icon-fav-container" onClick={() => { handleClick("favorite"); }} >
          <FontAwesomeIcon icon={faStar} className={isFavorites ? "icon-red" : ""}/>
        </span>
      </div>
      <div className="header-card">
        <picture className="card-container-img">
          {movies.imageurls ? (
            <img
              src={movies.imageurls}
              alt={movies.title}
              width={300}
              height={300}
              onError={(e) => {
                e.target.src = "placeholder.png";
                e.onerror = null;
              }}
            />
          ) : (
            <img
              src="placeholder.png"
              alt={movies.title}
              width={300}
              height={300}
            />
          )}
        </picture>
        <span className="title-card">{movies.title}</span>
      </div>
      <div className="body-card">
          <p className="synopsis-card">
            {movies.synopsis === "" ? "-Not Avalaible-" : movies.synopsis}
          </p>
          <div className="genres-container-card">
            {movies.genres.map((item) => (
              <Tag key={item} genre={item} filter={true} />
            ))}
          </div>
      </div>
    </li>
  );
};

export default MovieCard;
