import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './dashboard.css'
import MovieCard from '../../components/movies/MovieCard'

const WatchLater = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const token = localStorage.getItem("accessToken")
    axios.get("http://localhost:8000/api/titles/watchlater", {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    })
    .then((response) => {
      setMovies(response.data)
    })
    .catch((error) => {
      console.log("from watch later api", error)
    })
  }, [])

  return (
    <div className="favorite_page">
      <h1>Movies to watch Later</h1>
      <div className='card_like'>
        {movies.map((item) => (
          <MovieCard movies={item} key={item.imdbId} />
        ))}
      </div>
    </div>
  )
}

export default WatchLater