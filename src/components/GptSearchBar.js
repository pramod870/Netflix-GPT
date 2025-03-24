import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";
import { useNavigate } from "react-router-dom";


const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const dispatch = useDispatch();
  const searchText = useRef(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [movies, setMovies] = useState([]);
  const [showMovie, setShowMovie] = useState([]);

  const navigate = useNavigate();



  const darkMode = useSelector((store) => store.theme.darkMode);


  // Search Movie from TMDB Search Movie

  const searchMovieTMDB = async (movie) =>{

    const response = await fetch("https://api.themoviedb.org/3/search/movie?query="+
      movie+"&include_adult=false&language=en-US&page=1", API_OPTIONS
    );

    if(!response.ok){
      throw new error(`HTTP error ! status:${response.status}`);
    }

    const json = await response.json();
    console.log(json);


    // Check if Movie exists

    if(json.results && json.results.length> 0){
      return json.results;

    } else {
      return setError("Movie not Found");
    }
    
  } 
  const handleGptSearchClick = async () => {
    const query = searchText.current.value.trim();
    if (!query) {
      setError("Please enter a movie query.");
      return;
    }

    setLoading(false);
    setError(null);
    setMovies([]);



    (async () =>{
      const tmdbResults = await searchMovieTMDB(query);

      if (tmdbResults && tmdbResults.length >0){

      const movieName =  tmdbResults[0]?.original_title;
      dispatch(addGptMovieResult({movieName: movieName, movieResults: tmdbResults}));
      navigate('/browse');
      
      } else {
        setError("Bhag Sake");
      }
    })();

 
  };

  return (
    <div className={`flex flex-col w-full justify-center items-center min-h-screen p-4 ${darkMode ? "bg-black text-white":"bg-white text-black"}`}
      >
      <form
        className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6 flex"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className={`flex-1 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 ${darkMode ? "bg-black text-white":"bg-white text-black"}`}
          placeholder={lang[langKey]?.gptSearchPlaceHolder || "Search movies..."}
        />
        <button
          onClick={handleGptSearchClick}
          className="px-6 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition-all duration-300 disabled:opacity-50"
          disabled={loading}
        >
          {loading ? "Searching..." : lang[langKey]?.search || "Search"}
        </button>
      </form>

      {/* Error Message */}
      {error && <p className="text-red-500 mt-3">{error}</p>}
      <p className="text-red-500 mt-3">{showMovie}</p>

      {/* Display Movie Recommendations */}
      {movies.length > 0 && (
        <div className="mt-5 bg-white shadow-md p-4 rounded-lg w-full max-w-lg">
          <h3 className="text-lg font-semibold mb-3">Recommended Movies:</h3>
          <ul className="list-disc list-inside">
            {movies.map((movie, index) => (
              <li key={index} className="text-gray-700">
                {movie}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default GptSearchBar;
