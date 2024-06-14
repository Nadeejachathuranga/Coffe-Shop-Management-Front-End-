import React from 'react'
import hall from '../../img/coverPage.JPG';
import {Link, Route, Routes} from "react-router-dom";

export  function InitialUi() {
  return (
    <>
    <div className=" bg-blue-300 position: relative;">
        <img className=" h-screen w-screen brightness-25" src={hall} alt="" />
            <div className="h-[100px] w-[400px] bg-transparent absolute top-[350px] ml-[260px] flex">
                 <button  className=" w-[250px] h-[50px] rounded-md bg-cyan-500  hover:bg-cyan-600 mt-4 mr-5">
                  <Link to= {"/Home"}> Get Start </Link></button>
            </div>
    </div>
    </>
  )
}
