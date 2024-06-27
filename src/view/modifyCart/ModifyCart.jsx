
import React, { useState, useEffect } from 'react';
import { Product } from '../product/Product';

let itemList = [];


export default function ModifyCart({ data }) {
   
    const [itemCount, setItemCount] = useState(1);

    useEffect(() => {
        if (data.isAdded) {
            const existingItem = itemList.find(item => item.product.id === data.product.id);
            if (!existingItem) {
                itemList.push({
                    product: data.product,
                    itemCount: itemCount
                });
                console.log(itemList);
            }
        }
    }, []);

    useEffect(() => {
        const existingItem = itemList.find(item => item.product.id === data.product.id);
        if (existingItem) {
            const index = itemList.indexOf(existingItem);
            itemList.splice(index, 1, {
                product: data.product,
                itemCount: itemCount
            });
            console.log(itemList);
        }
    }, [itemCount]);

    const onDecreaseItemCount = () => {
        if (itemCount > 1) {
            setItemCount(itemCount - 1);
        } else {
            alert("Item count can't be less than 1");
          
        }
       
    };

    const onIncreaseItemCount = () => {
        setItemCount(itemCount + 1);
    };

    return (
        <div className="w-full mt-6 p-[4px] bg-blue-300 text-[12px] border-gray-500 border-[0.5px]">
            <button
                className="float-left text-[12px] bg-yellow-300 rounded-lg h-5 w-7"
                onClick={onDecreaseItemCount}
            >
                -
            </button>
            <small className="text-[12px] ml-12">{itemCount}</small>
            <button
                className="float-right text-[12px] bg-yellow-300 rounded-lg h-5 w-7"
                onClick={onIncreaseItemCount}
            >
                +
            </button>
        </div>
    );
}
