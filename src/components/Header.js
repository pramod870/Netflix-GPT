import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeUser } from "../utils/userSlice";



const Header = () => {

  const user = useSelector((state) => state.user)
  console.log("USER PICTURE", user.profile_picture)
  const isLoggedIn = localStorage.getItem("accessToken");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout =() =>{
    localStorage.removeItem("accessToken");
    dispatch(removeUser);
    navigate("/")

  }

  return (
    <>
    <div>
      <div className='absolute w-2/5 px-8 py-2 bg-gradient-to-b'>
        <img
        className='w-44'
        src='https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='logo' />
      </div> 

        {user.profile_picture && (
              <img
                src={user.profile_picture}
                alt='Profile'
                className='w-10 h-10 rounded-full mr-4 float-end'
              />
            )}
      <div className='text-right pt-2'>
        {isLoggedIn && (
    
      <button 
      onMouseOver={handleLogout}
      className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg shadow-md transition duration-300 cursor-pointer">
        Sign Out
      </button>

      )};

      
      </div>
        
    </div>
    </>
    
  )
}

export default Header
