import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from "../components/MovieList";

const GptMovieSuggestion = () => {

  const {movieResults, movieName} = useSelector(store => store.gpt);


  if(!movieName) return null;
  return (
    <div className='p-4 m-4 bg-black bg-opacity-70 text-white'>
      {movieName}
      <MovieList title={movieName} movies={movieResults} />
      </div>
  )
}

export default GptMovieSuggestion