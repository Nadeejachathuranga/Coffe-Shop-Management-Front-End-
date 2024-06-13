import React from 'react'
import hall from '../../img/coverPage.JPG';

export  function Home() {
  return (
    <>
    <div className=" bg-blue-300 position: relative;">
        <img className=" h-screen w-screen brightness-25" src={hall} alt="" />
            <div className="h-[100px] w-[400px] bg-transparent absolute top-[350px] ml-[260px] flex">
                 <button  className=" w-[150px] h-[50px] rounded-md bg-cyan-500  hover:bg-cyan-600 mt-4 mr-5">Register</button>
                 <button className=" w-[150px] h-[50px] rounded-md bg-cyan-500 hover:bg-cyan-600 mt-4 mr-2 ">Sign Up</button>

            </div>
    </div>
    </>
  )
}
