import React, { useEffect } from "react";
import Header from "./Header";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import SecondaryContainer from "./SecondaryContainer";
import MainContainer from "./MainContainer";
import UsePopularMovie from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GptSearch from "./GptSearch";



const Browse = () => {
  // Fetch data from tbmd API and update store then should create HOOK 

  const showGptSearch = useSelector(store => store.gpt.showGptSearch);


  useNowPlayingMovies();
  UsePopularMovie();
  useTopRatedMovies();
  useUpcomingMovies();


  return (
    <div>
      <Header />
      {
        showGptSearch ?  <GptSearch /> :    <><MainContainer />
        <SecondaryContainer /></>
      }
   
      {/**
       * Main COntainer
       * Video Backgorund
       * Video Title
       * 
       * Secondary Container
       * Movie List into n rows
       * Cards * n
       * 
       * 
       */}
    </div>
  );
};

export default Browse;
