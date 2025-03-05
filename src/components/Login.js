import React, { use, useEffect, useRef, useState } from 'react';
import Header from './Header';
import { checkValidateData } from '../utils/validate';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../api/auth';

const Login = () => {

  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [isSignInForm, setIsSignInForm]  = useState(true);

  const emailRef = useRef(null);
  const  passwordRef = useRef(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);
    if(token){
      navigate("/browse");
    }
  }, [navigate])

  const handleLogin = async (e) => {
    e.preventDefault();
  

  const email = emailRef.current.value
  const password = passwordRef.current.value

  const result = await loginUser(email, password);

  if (result.success){
    navigate("/browse");
  } else {
    setError(result.message);
  }
  };
const toggleSignInForm = ()=> {
      setIsSignInForm(!isSignInForm);
  };

// const handleButtonClick = async() =>{
//   // Validate form data
//   const emailValue = email.current.value
//   const passwordValue = password.current.value

//   const response = await fetch("http://127.0.0.1:8000/api/login/",{
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ email: emailValue, password: passwordValue }),
//   });

//   const data = await response.json();
//   if (response.ok){
//     console.log("Login Successfully!", data);

//     localStorage.setItem("accessToken", data.access);
//     localStorage.setItem("refreshToken", data.refresh);
//   } else {
//     console.error("Login Failed:", data);
//   }


// }  
  return (
    <div className="relative w-full h-screen">
      <Header />
      
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          className="w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/04ef06cc-5f81-4a8e-8db0-6430ba4af286/web/IN-en-20250224-TRIFECTA-perspective_3a9c67b5-1d1d-49be-8499-d179f6389935_large.jpg"
          alt="Netflix Background"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Login Form */}
      <div className="flex justify-center items-center h-full bg-opacity-15">
        <form className="w-full h-1/2 max-w-md bg-black/80 p-12 rounded-lg shadow-lg" onSubmit={handleLogin}>
          <h2 className="text-white text-2xl font-bold mb-6 text-center">
            {isSignInForm ? "Sign In" : "Sign Up"}
            </h2>
            {error && <p className="text-red-500 text-sm">{error}</p>}

            {!isSignInForm  && (<input 
            type="text" 
            placeholder="Full Name" 
            className="w-full p-3 mb-4 bg-gray-400 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-500" 
          />
          )}  
          
          <input 
            ref={emailRef}
            type="text" 
            placeholder="Email Address" 
            className="w-full p-3 mb-4 bg-gray-400 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-500" 
          />
          
          <input 
            ref={passwordRef}
            type="password" 
            placeholder="Password" 
            className="w-full p-3 mb-4 bg-gray-400 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-500" 
          />
          
          <button 
            type="submit" 
            className="w-full bg-red-600 text-white py-3 rounded-md font-semibold hover:bg-red-700 transition">
             {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className='text-white pt-2 underline cursor-pointer' onClick={toggleSignInForm}>
            {isSignInForm ? "New to Netflix? Sign Up Now": "Already Registered"}</p>
        </form>
      </div>
    </div>
  );
};

export default Login;
