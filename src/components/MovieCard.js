import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({ posterPath }) => {
  console.log("PosterPath", posterPath);

  return (
    <div className='w-48 pr-4'>
      {posterPath ? (
        <img 
          alt='Movie Card'
          src={IMG_CDN_URL+posterPath}
        />
      ) : (
        <p>Loading image...</p>
      )}
    </div>
  );
};

export default MovieCard;
