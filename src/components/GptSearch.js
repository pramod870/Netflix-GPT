import React from 'react';
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestion from './GptMovieSuggestion';
import { LOGO } from '../utils/constants';
import { useSelector } from 'react-redux';

const GptSearch = () => {

  const darkMode = useSelector((store) =>store.theme.darkMode);
  return (
    <div
      className="relative flex flex-colitems-center justify-center py-20 bg-gray-100"
      style={{
        backgroundImage: `url(${LOGO})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black opacity-30 -z-10"></div>

      {/* Content on top of background */}
      <div className={`relative z-10 w-full max-w-2xl text-center ${darkMode ? "bg-black text-white": "bg-white text-black"}`}>
        <GptSearchBar />
        <GptMovieSuggestion />
      </div>
    </div>
  );
};

export default GptSearch;
