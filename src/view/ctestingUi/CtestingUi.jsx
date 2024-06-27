import React from 'react'
import hall from '../../img/coverPage.JPG';


export default function CtestingUi() {
  return (
    <>
    
       <h1 className="ml-5 text-zinc-950	 text-5xl color: rgb(9 9 11);"> Island Wide Outlet Coverage</h1>  
           <div className=" position: relative;">
            <div >
              <h1 className='text-3xl mt-[90px] ml-5 '>We’ve got you covered many
                 outlets scattered island-wide, <br />guaranteeing that you will always <br />find us nearby whenever you’re craving a perfect cup of coffee.</h1>
            </div>
            <div className='absolute ml-[960px] top-[850px] absolute'>
              <img className='h-[300px] w-[600px] ' src={hall} alt="" />
            </div>
            </div> 


            <h1 className="ml-5 text-zinc-950	 text-5xl mt-[250px] color: rgb(9 9 11);"> Professional Baristas</h1>  
           <div className=" position: absolute;">
            <div >
              <h1 className='text-3xl mt-[90px] ml-5 '>We have highly skilled, VTA, and NVQ-certified <br />
              professional baristas, ensuring that every visit to Barista is not<br /> just about 
               the coffee but also about the unique connection and <br />delight  that comes with it.</h1>
            </div>
            <div className=' ml-[960px] top-[-180px] relative'>
              <img className='h-[300px] w-[600px] ' src={hall} alt="" />
            </div>
            </div> 
   

            <h1 className="ml-5 text-zinc-950	 text-5xl mt-[20px] color: rgb(9 9 11);"> Barista Branded Customer Service</h1>  
           <div className=" position: absolute;">
            <div >
              <h1 className='text-3xl mt-[90px] ml-5 '>Our commitment is to deliver exceptional customer service <br />and a coffee 
              experience that stands out from the rest. We strive to <br /> create a
               memorable experience with every sip.</h1>
            </div>
            <div className=' ml-[960px] top-[-180px] relative'>
              <img className='h-[300px] w-[600px] ' src={hall} alt="" />
            </div>
            </div> 



            <h1 className="ml-5 text-zinc-950	 text-5xl mt-[50px] color: rgb(9 9 11);"> Adapting to New Trends and Technology</h1>  
           <div className=" position: absolute;">
            <div >
              <h1 className='text-3xl mt-[90px] ml-5 '>We have implemented innovative technologies, including <br />the Mobile app, 
                E-shop, Coffee Drive-thru, and store <br />within stores to ensure a  smooth and convenient
                <br /> experience for our customers.</h1>
            </div>
            <div className=' ml-[960px] top-[-180px] relative'>
              <img className='h-[300px] w-[600px] ' src={hall} alt="" />
            </div>
            </div> 

    </>
  )
}
