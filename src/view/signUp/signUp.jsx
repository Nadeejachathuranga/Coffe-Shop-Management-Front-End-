import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
    
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Contact Number:", contactNumber);
    console.log("Password:", password);
   
    const data = {
      name,
      email,
      contactNumber,
      password,
    };

    try {
     
      const response = await axios.post('http://localhost:8070/user/save', data);
      
      
      if (response.status === 200) {
        console.log('Sign up successful', response.data);
        
       
        navigate(`/us?name=`+name);
      } else {
        alert("Sign up failed. Please try again.")
        console.log('Sign up failed', response.data);
        setError('Sign up failed. Please try again.');
      }
    } catch (error) {
      console.error('There was an error with the sign-up:', error);
      setError('There was an error. Please check your input and try again.');
    }
alert("clicked")
  };

  return (
    <div className="sign-up-container">
      <div className="flex h-screen bg-gray-800">
        <div className="mt-4 h-auto mb-4 px-9 mx-auto border-gray-600 border-[1px] bg-white rounded-lg shadow-lg">
          <h2 className="p-2 text-3xl text-center text-black">Sign Up</h2>
          <form className="h-auto p-2 justify-center" onSubmit={handleSubmit}>
            <div className="form-group mb-4">
              <label htmlFor="name" className="block mb-2 text-gray-700">Name</label>
              <input 
                className="mt-2 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                type="text" 
                id="name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                required
              />
            </div>
            <div className="form-group mb-4">
              <label htmlFor="email" className="block mb-2 text-gray-700">Email</label>
              <input 
                className="mt-2 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                type="email" 
                id="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required
              />
            </div>
            <div className="form-group mb-4">
              <label htmlFor="contactNumber" className="block mb-2 text-gray-700">Contact Number</label>
              <input 
                className="mt-2 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                type="text" 
                id="contactNumber" 
                value={contactNumber} 
                onChange={(e) => setContactNumber(e.target.value)} 
                required
              />
            </div>
            <div className="form-group mb-4">
              <label htmlFor="password" className="block mb-2 text-gray-700">Password</label>
              <input 
                className="mt-2 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                type="password" 
                id="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required
              />
            </div>
            <button 
              type="submit" 
              className="w-full h-[50px] rounded-md bg-cyan-500 hover:bg-cyan-600 text-white font-bold"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;