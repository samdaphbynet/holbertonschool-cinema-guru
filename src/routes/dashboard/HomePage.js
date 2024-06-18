import React, {useState, useEffect} from 'react'
import axios from 'axios'
import MovieCard from '../../components/movies/MovieCard'
import Filter from '../../components/movies/Filter'
import Button from "../../components/general/Button"
import "./dashboard.css"

const HomePage = () => {

  const [movies, setMovies] = useState([])
  const [minYear, setMinYear] = useState(1970)
  const [maxYear, setMaxYear] = useState(2022)
  const [sort, setSort] = useState("")
  const [genres, setGenres] = useState([])
  const [title, setTitle] = useState("")
  const [page, setPage] = useState(1)

  useEffect(() => {
    loadMovies()
  }, [minYear, maxYear, genres, sort, title])

  function loadMovies(page) {
    const token = localStorage.getItem("accessToken")
    const params = {
      minYear,
      maxYear,
      sort,
      genres: genres.join(","),
      title,
      limit: 15
    };
    const options = {
      method: "GET",
      url: "http://localhost:8000/api/titles/advancedsearch",
      params: {page: page, ...params},
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
    }

    axios.request(options)
    .then((response) => {
      setMovies(response.data.titles)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  const handleLoadMore = () => {
    setPage(page + 1)
  }

  return (
    <div className='home_page'>
      <Filter
        minYear={minYear}
        setMinYear={setMinYear}
        maxYear={maxYear}
        setMaxYear={setMaxYear}
        sort={sort}
        setSort={setSort}
        genres={genres}
        setGenres={setGenres}
        title={title}
        setTitle={setTitle}
      />

      <ul className="cards">
        {movies?.map((movie) => (
          <MovieCard movies={movie} key={movie.imdbId} />
        ))}
      </ul>
      <Button label="Lead More..." className="load_more" onClick={handleLoadMore} />
    </div>
  )
}

export default HomePage