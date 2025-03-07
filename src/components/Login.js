import React, { use, useEffect, useRef, useState } from 'react';
import Header from './Header';
import { checkValidateData } from '../utils/validate';
import { useNavigate } from 'react-router-dom';
import { loginUser, registerUser } from '../api/auth';

const Login = () => {

  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [isSignInForm, setIsSignInForm]  = useState(true);

  const nameRef = useRef(null);
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
    setError("");
  

  const email = emailRef.current.value
  const password = passwordRef.current.value

  if (isSignInForm) {
    // Login Logic
    const result = await loginUser(email, password);
    if (result.success) {
      navigate("/browse");
    } else {
      setError(result.message);
    }
  } else {
    // Registration Logic
    const name = nameRef.current.value;
    if (!name) {
      setError("Full Name is required");
      return;
    }

    const result = await registerUser(name, email, password);
    if (result.success) {
      setIsSignInForm(true); // Switch to Sign In after successful registration
    } else {
      setError(result.message);
    }
  }
};

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
      <div className="flex justify-center items-center h-full opacity-70">
        <form className="w-full h-1/2 max-w-md bg-black/80 p-12 rounded-lg shadow-lg" onSubmit={handleLogin}>
          <h2 className="text-white text-2xl font-bold mb-6 text-center">
            {isSignInForm ? "Sign In" : "Sign Up"}
            </h2>
            {error && <p className="text-red-500 text-lg font-bold p-4">{error}</p>}

            {!isSignInForm  && (<input 
            ref={nameRef}
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
          <p className='text-white pt-2 underline cursor-pointer'onClick={() => setIsSignInForm(!isSignInForm)}>
            {isSignInForm ? "New to Netflix? Sign Up Now": "Already Registered"}</p>
        </form>
      </div>
    </div>
  );
};

export default Login;
