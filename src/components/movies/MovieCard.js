import { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faStar } from "@fortawesome/free-solid-svg-icons";
import "./movies.css";

const MovieCard = ({ movies }) => {
  const [isFavorites, setIsFavorites] = useState(false);
  const [isWatchLater, setIsWatchLater] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    // api favorite
    axios
      .get("http://localhost:8000/api/titles/favorite", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setIsFavorites(response.data.isFavorites);
        setIsWatchLater(response.data.isWatchLater);
        console.log(response.data);
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
      .then((response) => {
        setIsFavorites(response.data.isFavorites);
        setIsWatchLater(response.data.isWatchLater);
        console.log(response.data);
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
        setIsFavorites(false)
        axios
          .delete(`http://localhost:8000/api/titles/${type}/movie.imdId`, {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          })
          .catch((error) => {
            console.log("from delete favorite", error);
          });
      } else {
        setIsFavorites(true)
        axios
          .post(
            `http://localhost:8000/api/titles/${type}/movie.imdId`,
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
            setIsWatchLater(false)
          axios
            .delete(`http://localhost:8000/api/titles/${type}/movie.imdId`, {
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              },
            })
            .catch((error) => {
              console.log("from delete favorite", error);
            });
        } else {
            setIsWatchLater(true)
          axios
            .post(
              `http://localhost:8000/api/titles/${type}/movie.imdId`,
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
    <div className="movie_card">
      <ul>
        <li>
          <FontAwesomeIcon icon={faClock} onClick={(e) => {
            e.preventDefault();
            handleClick("watchlater")
            }}
          />
          <FontAwesomeIcon icon={faStar} onClick={(e) => {
            e.preventDefault();
            handleClick("favorite")
            }}
          />
        </li>
      </ul>
    </div>
  );
};

export default MovieCard;
