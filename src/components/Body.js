import {createBrowserRouter} from "react-router-dom";
import React from 'react';
import Login from './Login';
import Browse from './Browse';
import { RouterProvider } from "react-router-dom";
const Body = () => {

  const PrivateRoute = ({ element }) =>{
    const token  = localStorage.getItem("accessToken");
    return token ? element: <Login />;
  }

  const appRouter = createBrowserRouter([
    {
          path: "/",
          element: <Login/>
    },
    {
      path: "/browse",
      element: <PrivateRoute element={<Browse />} />,
    }
  ])
  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body