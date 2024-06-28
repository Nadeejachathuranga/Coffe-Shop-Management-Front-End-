
import React, { useState, useEffect } from 'react'; 
import userAccount from '../userAccount/userAccount';
import {Route, Routes} from "react-router-dom";
import { useNavigate } from 'react-router-dom';

export default function LoginIn() {
    const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);




    if(password==="nadee"){
        alert("you re welcome")
        setIsActive(!isActive);
        navigate('/us?name='+username);
    }else{
      alert("Miss match the password")
    }



  };
  return (
    <>
    <div className="login-container">
        <div className="flex h-screen bg-black">
        <div className={"mt-4 h-auto mb-4 pl-9 pr-9 mx-auto border-gray-600 border-[1px] bg-white"}>
      <h2 className={"p-2 text-3xl text-center"}>Login</h2>
      <form className={"h-auto p-2 justify-center"} onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input className="mt-2 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
            type="text" 
            id="username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input  className="mt-2 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
            type="password" 
            id="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required
          />
        </div>
        <button type="submit" className=" mt-2 w-full h-[50px] rounded-md bg-cyan-500 hover:bg-cyan-600 text-white font-bold">
        Login </button>
    
      </form>
    </div>
    </div>
    </div>
  
        </>
  )
}

