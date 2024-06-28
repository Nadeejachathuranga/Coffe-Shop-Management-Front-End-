
import React, { useState, useEffect } from 'react'; 

export default function LoginIn() {
    const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);

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
          <input className=' mt-2 float-center border-2 h-8'
            type="text" 
            id="username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input className=' float-center border-2 h-8'
            type="password" 
            id="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required
          />
        </div>
        <button type="submit" className=" w-[250px] h-[50px] rounded-md bg-cyan-500  hover:bg-cyan-600 mt-4 mr-5">
        Login </button>
    
      </form>
    </div>
    </div>
    </div>
        </>
  )
}

