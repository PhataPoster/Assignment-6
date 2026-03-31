import React, { use, useState } from 'react';
import Card from '../../ui/Card';
import EmptyCard from '../../ui/EmptyCard';
import BuyItems from '../../ui/BuyItems';

const Tools = ({ dataPromise , buyProducts, setBuyProducts}) => {
    const [isCardSelected, setIsCardSelected] = useState(true);
    const data = use(dataPromise);
    

    return (
        <div className='px-2 lg:px-50 mb-30'>
            <div className='flex flex-col gap-4 justify-center items-center mb-10'>
                <h1 className='text-4xl font-bold'>Premium Digital Tools</h1>
                <p className='text-gray-400 text-center'>Choose from our curated collection of premium digital products designed <br />
                    to boost your productivity and creativity.</p>

                <div className='flex border border-gray-300 rounded-full p-1'>
                    <button onClick={()=> setIsCardSelected(true)} className={`btn ${isCardSelected ? "text-white font-bold bg-linear-to-r from-blue-700 to-purple-700 rounded-full px-3 py-2":"bg-white border-none rounded-full"}`}>Products</button>
                    <button onClick={()=> setIsCardSelected(false)} className={`btn ${isCardSelected == false ? "text-white font-bold bg-linear-to-r from-blue-700 to-purple-700 rounded-full px-3 py-2":"bg-white border-none rounded-full"}`}>card ({buyProducts.length})</button>
                </div>
            </div>
            {isCardSelected ? <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 '>
                {data.map((item, index) => (
                    <Card key={index} item={item} buyProducts={buyProducts} setBuyProducts={setBuyProducts}></Card>
                ))}
            </div> : <div>
                {
                    buyProducts.length === 0 ? <EmptyCard></EmptyCard> : <BuyItems buyProducts={buyProducts} setBuyProducts={setBuyProducts}> </BuyItems>
                }
            </div>
                }
        </div>
    );
};

export default Tools;