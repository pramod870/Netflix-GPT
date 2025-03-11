import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {
    // console.log("one movies", movies[0]);
  return (
    <div className='px-6'>
          <h1 className='text-3xl font-bold text-white'>{title}</h1>
        <div className='flex overflow-x-scrollp'>
            <div className='flex m-2'>
                {/* <MovieCard posterPath={movies[0].poster_path}/> */}
                {/* <MovieCard posterPath={movies[0]?.poster_path}/> */}

                {movies && movies.length > 0 ? (
                    movies.map(movie => (
                        <MovieCard 
                        key={movie.id} 
                        posterPath={movie?.poster_path} 
                        />
                    ))
                    ) : (
                    <p>Loading movies or no movies available</p>
                    )}

            </div>

        </div>
    </div>
  );
};

export default MovieList;