import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

  const movies = useSelector(store => store.movies)
  return (
    movies.nowPlayingMovies && (
    <div className='bg-black'>
      <div className='-m-56 pl-56 relative z-20'>
      <MovieList title={"Trending"} movies = {movies.nowPlayingMovies} />
      <MovieList title={"Popular"} movies = {movies.addPopularMovies} />
      <MovieList title={"Top Rated"} movies = {movies.topRatedMovies} />
      <MovieList title={"Upcoming Movies"} movies = {movies.topRatedMovies} />
      <MovieList title={"Horror Movies"} movies = {movies.nowPlayingMovies} />
      </div>
      </div>
    )  
  );
};

export default SecondaryContainer