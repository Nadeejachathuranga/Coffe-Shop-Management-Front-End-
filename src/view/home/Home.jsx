
import React, { useState, useEffect } from 'react';
import {Product} from "../product/Product";



export default function Home() {

const [data, setData] = useState([]);

useEffect(() => {
  fetchData();
}, []); 

const fetchData = async () => {
  try {
    const res = await fetch('/product-data.json');
    const jData = await res.json();
    setData(jData);
  } catch (error) {
    console.log("Error: " + error);
  }
};

  return (
    <>
    <div className="flex">
                <div className="mt-5 mb-5 flex flex-wrap justify-center items-center mx-auto">
                    {/*<Product></Product>*/}

                    {
                       data.map((product) => 
                        <Product key={product.id} data={product} />
                      )
                    }

                </div>
            </div>
    </>
  )
}
