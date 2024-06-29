import React, { useState, useEffect } from 'react';
import cover from '../../img/UABackground.jpg';
import userImage from '../../img/userImage.png';
import { useLocation } from 'react-router-dom'
import Home from '../home/Home';

/*function userAccount() {
  const location = useLocation();


  const queryParams = new URLSearchParams(location.search);
  const name = queryParams.get('name');


  return (
    <>
    <div className="h-screen w-screen  position: relative">
    <img className=" h-screen w-screen brightness-25" src={cover} alt="" />
    <div className="h-[500px] w-[800px] bg-white top-[150px] absolute ml-[460px]">
    <h1 className="text-4xl text-center text-green-800 mt-5">
        Welcome to our Platform { name}  
      </h1>
    </div>
    <div className="rounded-full h-[100px] w-[150px] bg-#f5f6fa top-[90px] absolute ml-[780px]">
    <img className="rounded-full h-[100px] w-[150px] brightness-25" src={userImage} alt="" />
    </div>
    </div>
    <Home></Home>
    </>
  )
}

export default userAccount*/
function UserAccount() {
  const location = useLocation();

  // Extract the name from query parameters
  const queryParams = new URLSearchParams(location.search);
  const name = queryParams.get('name');

  // State management for email, contact number, and password
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [password, setPassword] = useState('');

  // Fetch user data when component mounts or name changes
  useEffect(() => {
    if (name) {
      fetchUserData(name);
    }
  }, [name]);

  // Function to fetch user data
  const fetchUserData = async (username) => {
    try {
      const response = await axios.get(`http://localhost:8070/user/find/`+username, {
       // params: { name: username },
      });

      if (response.status === 200) {
        const userData = response.data;
        setEmail(userData.email);
        setContactNumber(userData.contactNumber);
        setPassword(userData.password); 
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
      alert('Failed to load user data');
    }
  };

  // Function to handle the "Change Password" button click
  const handleChangePassword = async () => {
    try {
      const response = await axios.put('http://localhost:4000/user/update', {
        name,
        email,
        contactNumber,
        password, // We are sending the updated password here
      });

      if (response.status === 200) {
        alert('Details updated successfully');
      }
    } catch (error) {
      console.error('Error updating details:', error);
      alert('Failed to update details');
    }
  };

  return (
    <>
      <div className="h-screen w-screen position: relative">
        <img className="h-screen w-screen brightness-25" src={cover} alt="Cover" />
        <div className="h-[500px] w-[800px] bg-white top-[150px] absolute ml-[460px] p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl text-center text-green-800 mt-5">
            Welcome to our Platform, {name}
          </h1>
          <form className="mt-8">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contactNumber">
                Contact Number
              </label>
              <input
                type="text"
                id="contactNumber"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                placeholder="Enter your contact number"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                New Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                placeholder="Enter a new password"
              />
            </div>
            <button
              type="button"
              onClick={handleChangePassword}
              className="w-full h-[50px] rounded-md bg-cyan-500 hover:bg-cyan-600 text-white font-bold"
            >
              Change Password
            </button>
          </form>
        </div>
        <div className="rounded-full h-[100px] w-[150px] bg-gray-100 top-[90px] absolute ml-[780px]">
          <img className="rounded-full h-[100px] w-[150px] brightness-25" src={userImage} alt="User" />
        </div>
      </div>
      <Home />
    </>
  );
}

export default UserAccount;