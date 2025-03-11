import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';


const VideoBackground = ({ movieId }) => {
    // fetch the trailer via video API and updated the store with trailer video data 

    // Use State for the 
    // const [trailerId, setTrailerId] = useState(null);
    useMovieTrailer(movieId);

    const trailerVideo = useSelector(store => store.movies?.trailerVideo);

  return (
    <div>
        <iframe 
              className='w-screen aspect-video'
                // src={"https://www.youtube.com/embed/dpw1LDw9ABU?si="+trailerVideo?.key +"&autoplay=1"} autoplay functionilty 
                src={"https://www.youtube.com/embed/dpw1LDw9ABU?si="+trailerVideo?.key} 
                
                title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" allowFullScreen>

        </iframe>
        
    </div>
  )
}

export default VideoBackground;