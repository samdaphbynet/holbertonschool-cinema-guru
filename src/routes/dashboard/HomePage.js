import React from 'react'
import MovieCard from '../../components/movies/MovieCard'
import Filter from '../../components/movies/Filter'
import "./dashboard.css"

const HomePage = () => {
  return (
    <div className='home_page'>
      <Filter />

      <MovieCard />
    </div>
  )
}

export default HomePage