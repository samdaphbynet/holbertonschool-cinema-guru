import React, { useState, useEffect } from "react";
import axios from "axios";
import "./dashboard.css";
import MovieCard from "../../components/movies/MovieCard";

const Favorites = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    axios
      .get("http://localhost:8000/api/titles/favorite", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => response.data)
      .then((data) => {
        setMovies(data);
      })
      .catch((error) => {
        console.log("from favorite api", error);
      });
  }, []);
  return (
    <div className="favorite_page">
      <h1>Movies you like</h1>

      <div className="card_like">
        {movies.map((item) => (
          <MovieCard movies={item} key={item.imdbId} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
