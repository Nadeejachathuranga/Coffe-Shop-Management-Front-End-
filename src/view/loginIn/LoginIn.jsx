
import React, { useState, useEffect } from 'react'; 
import userAccount from '../userAccount/userAccount';
import {Route, Routes} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Home from '../home/Home';
import axios from 'axios';

export default function LoginIn() {
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);




  /*  if(password==="nadee"){
        alert("you re welcome")
        setIsActive(!isActive);
        navigate('/us?name='+username);
    }else{
      alert("Miss match the password")
    }*/
     /* try {
        const response = await axios.get(`http://localhost:8070/user/Userlogin`);
        setProductData(response.data);
      } catch (error) {
        console.error('Error searching product:', error);
      }*/

        try {
         
          const lUser = { email, password };
         const response = await axios.get('http://localhost:8070/user/Userlogin',lUser );
          
         
          if (!response.data.authenticated) {
            navigate('/us?name='+email);
          } else {
            alert("Incorrect username or password. Please try again.");
          }
        } catch (error) {
          console.error('Error during login:', error);
          alert("An error occurred during login. Please try again later.");
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
            id="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
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

