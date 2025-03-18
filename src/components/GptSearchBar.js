import React from 'react'
import lang from '../utils/languageConstants';
import { useSelector } from 'react-redux';

// const GptSearchBar = () => {
//   return (
//     <div className='pt-[20%]'>
//         <form className='w-1/2 p-6 m-6 grid grid-cols-12'>
//             <input type='text' className='p-4 m-4' placeholder='what would you like watch today?' />
//             <button className='col-span-4 py-2 px-4 bg-red-300 text-white rounded-lg'>Search</button>

//         </form>
//     </div>
//   )
// }

// export default GptSearchBar;

const GptSearchBar = () => {
  const langKey = useSelector(store => store.config.lang)
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6 flex">
        <input
          type="text"
          className="flex-1 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          placeholder={lang[langKey].gptSearchPlaceHolder}
        />
        <button
          className="px-6 py-3 bg-red-500 text-white p-2 font-semibold rounded-lg shadow-md hover:bg-red-600 transition-all duration-300"
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};


export default GptSearchBar;