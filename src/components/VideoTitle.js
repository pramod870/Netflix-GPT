import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-[30%] px-24 absolute text-white bg-gradient-to-r from-black ' >
        <h1 className='text-6xl font-bold text-white'>{title}</h1>
        <p className='py-6 text-lg w-1/4 text-white'>{overview}</p>

        <div className=''>
        <button className="bg-white hover:bg-blue-700 bg-opacity-80 text-black  font-bold py-2 px-16 rounded shadow-md transition duration-300 ease-in-out transform hover:scale-105">
  Play
</button>

            <button className="bg-blue-500 hover:bg-blue-700 bg-opacity-70 mx-2 text-white font-bold py-2 px-8 rounded shadow-md transition duration-300 ease-in-out transform hover:scale-105">More Info</button>
        </div>
    </div>
  )
}


export default VideoTitle;