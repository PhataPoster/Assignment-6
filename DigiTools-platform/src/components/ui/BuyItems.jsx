// import React, { useState, useEffect } from 'react';

import { toast } from "react-toastify";

const BuyItems = ({ buyProducts, setBuyProducts }) => {

    // const [total,setTotal] = useState(0)

    // useEffect(() => {
    //     const sum = buyProducts.reduce((acc, item) => acc + item.price, 0);
    //     setTotal(sum);
    // }, [buyProducts]);
    let total = 0;
    buyProducts.forEach(item => {
        total += item.price;
    })

    const handleRemoveBtn = (item) => {
        const filterProducts = buyProducts.filter((buyItem) => buyItem.name !== item.name);
        setBuyProducts(filterProducts);
        toast.warning(`${item.name} removed from cart!`)
    };

    return (
        <div className='border border-gray-300 rounded-2xl shadow-2xl  gap-6 p-4'>
                    <div className='text-lg font-bold'>
                        Your Card
                    </div>
                    <div className='flex flex-col gap-3 text-gray-400 py-3'>
                        {buyProducts.map((item,index)=><div key={index} className='flex justify-between items-center px-5 py-4 rounded-lg bg-gray-100'>
                            <div className='flex justify-center items-center gap-2'>
                                <div className='p-2 bg-white rounded-full w-fit flex justify-center items-center border border-gray-100 '>
                                    <img className='w-6.25'  src={item.icon} alt={item.name} />
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <h2 className='text-xl text-black font-bold'>
                                        {item.name}
                                    </h2>
                                    <p className='text-gray-400'>${item.price}</p>
                                </div>
                            </div>
                            <div>
                                <button onClick={()=>handleRemoveBtn(item)} className='text-red-700 font-bold cursor-pointer'>Remove</button>
                            </div>
                        </div>)}
                    </div>
                    <div className='flex justify-between p-2 font-bold'>
                        <p>Total:</p>
                        <p>${total}</p>
                    </div>
                    <button onClick={()=>{setBuyProducts([])
                    toast.info('Checkout successful!')
                    }} className='text-white font-bold bg-linear-to-r from-blue-700 to-purple-700 rounded-full px-4 py-3 w-full'>Proceed To Checkout</button>
                </div>
    );
};

export default BuyItems;