
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANG } from "../utils/constants";
import { changeLanguage } from "../utils/appConfigSlice";


const Header = () => {
  const user = useSelector((state) => state.user);
  const isLoggedIn = localStorage.getItem("accessToken");

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    dispatch(removeUser());
    // navigate("/");
    window.location.href = "http://localhost:3000/";
    

  };

  const hanldeGptSearchClick = () =>{

    // Toggle my GPT Search

    dispatch(toggleGptSearchView());

  };

  const handleLanguageChange = (e) =>{
    dispatch(changeLanguage(e.target.value));

  };

  return (
    <div className="flex items-center justify-between bg-gradient-to-b from-black px-8 py-4 w-full">
      {/* Logo */}
      <img
        className="w-44"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"             
      />

      {/* Right Section: Profile & Buttons */}
      <div className="flex items-center gap-4">
      {showGptSearch &&<select className="py-2 px-4 m-2 bg-slate-200 text-black rounded-md" onChange={handleLanguageChange}>
        {SUPPORTED_LANG.map((lang) => (
          <option key={lang.identifier} value={lang.identifier}>{lang.name}
          </option>
        ))}
      </select>}
        <button 
        onClick={hanldeGptSearchClick}
        className="py-2 px-4 m-2 bg-purple-800 text-white rounded-md">{showGptSearch ? "Home Page": "GPT Search"}</button>
        {user.profile_picture && (
          <img
            src={user.profile_picture}
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
        )}

        {isLoggedIn && (
          <button
            onMouseOver={handleLogout}
            className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg shadow-md transition duration-300"
          >
            Sign Out
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;

