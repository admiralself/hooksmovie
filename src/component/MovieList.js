import React from 'react'
import MovieCard from './MovieCard'
import '../../src/MovieList.css'

const MovieList = ({movieList}) => {
    return (
        
        <div className='movie-list'>
          {movieList.map(movie=><MovieCard movieCard={movie}></MovieCard>)}
        </div>
    )
}

export default MovieList;