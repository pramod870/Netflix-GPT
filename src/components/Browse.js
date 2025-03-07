import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeUser } from "../utils/userSlice";
import Header from "./Header";
const Browse = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () =>{
    localStorage.removeItem("accessToken");
    dispatch(removeUser());
    navigate("/");
  }
  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;
