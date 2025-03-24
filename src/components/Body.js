import {createBrowserRouter, Navigate} from "react-router-dom";
import React, { useEffect } from 'react';
import Login from './Login';
import Browse from './Browse';
import { RouterProvider } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { BASE_URL } from "../api/config";
import { addUser } from "../utils/userSlice";
import { jwtDecode } from "jwt-decode"; // ✅ Correct way



const Body = () => {
  const dispatch = useDispatch()
  const PrivateRoute = ({ element }) =>{
    const token  = localStorage.getItem("accessToken");

    const user = useSelector(state => state.user);
    return user.userId && token ? element : <Navigate to="/browse" Browse/>;
  };
  const PublicRoute = ({ element }) => {
    const user = useSelector(state => state.user); // Get user from Redux store
    const token = localStorage.getItem("accessToken"); // Get token from localStorage

 
  
    if (user.userId && token) {
      return <Navigate to="/browse" Browse />; // Redirect to /browse if already logged in
    }
  
    return element; // Otherwise, show the login page
  };
  
  const appRouter = createBrowserRouter([
    {
          path: "/",
          // element: <Login/>
          element: <PublicRoute element={<Login />} />, 
    },
    {
      path: "/browse",
      element: <PrivateRoute element={<Browse />} />,
    }
  ])

  useEffect (() =>{
    const fetchUserData = async () => {
      const token = localStorage.getItem("accessToken");

      if (!token) return;

      try {
        // Decode token to extract user ID
        const decodedToken = jwtDecode(token);
        const userId = decodedToken.user_id; // Ensure this matches your back

        const response = await axios.get(`${BASE_URL}/user/${userId}`, {
          headers: {Authorization: `Bearer ${token}`},
        });

        if (response.status === 200){
       
          dispatch(
            addUser({
              userId:response.data.id,
              email: response.data.email,
              profile_picture: response.data.user_profile // Ensure correct field
            })
           
          );
          
        }
      } catch (error){
 
      }
    };

    fetchUserData();

  }, [dispatch])
  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body