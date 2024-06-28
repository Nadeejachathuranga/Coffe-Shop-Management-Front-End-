import React from 'react'
import cover from '../../img/UABackground.jpg';
import userImage from '../../img/userImage.png';
import { useLocation } from 'react-router-dom'

function userAccount() {
  const location = useLocation();

  // Extract the query parameters from the URL
  const queryParams = new URLSearchParams(location.search);
  const name = queryParams.get('name');


  return (
    <>
    <div className="h-screen w-screen  position: relative">
    <img className=" h-screen w-screen brightness-25" src={cover} alt="" />
    <div className="h-[500px] w-[800px] bg-white top-[150px] absolute ml-[460px]">
    <h1 className="text-4xl text-center text-green-800">
        Welcome to our Platform{ name ? `, ${name}` : '!' }
      </h1>
    </div>
    <div className="rounded-full h-[100px] w-[150px] bg-#f5f6fa top-[90px] absolute ml-[780px]">
    <img className="rounded-full h-[100px] w-[150px] brightness-25" src={userImage} alt="" />
    </div>
    </div>
    </>
  )
}

export default userAccount