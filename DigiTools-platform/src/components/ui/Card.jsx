import React from 'react';
// import check from '../../assets/check.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { toast } from 'react-toastify';

const Card = ({ item, buyProducts, setBuyProducts }) => {

    const [isAdded, setIsAdded] = React.useState(false)
    const handleBuyNowBtn =()=>{
        setBuyProducts([...buyProducts,item])
        setIsAdded(true)
        toast.success(`${item.name} added to cart!`)
    }
    // console.log(data);
    return (
        
            <div className="card bg-base-100 shadow-md border border-gray-200 rounded-lg flex flex-col gap-4 justify-between h-full">
                <div className="flex flex-col gap-2 justify-between h-full p-6">
                    <div className="flex justify-end">
                        <span className={`badge badge-xs badge-warning py-2.5 px-3 rounded-full border-none ${item.tagType === 'Best Seller' ? 'bg-yellow-200 text-yellow-800' : item.tagType === 'Popular' ? 'bg-blue-200 text-blue-800' : 'bg-green-200 text-green-800'}`}>{item.tagType}</span>
                    </div>
                    <div className='flex justify-center items-center border border-gray-100 p-2 rounded-full w-fit'>
                        <img className='w-6.25' src={item.icon} alt={item.name} />
                    </div>
                    <div className="flex justify-between">
                        <h2 className="text-3xl font-bold">{item.name}</h2>
                    </div>
                    <div>
                        <p className="text-gray-400">{item.description}</p>
                    </div>
                    <span className="text-xl">${item.price}/{item.period}</span>
                    <ul className="flex flex-col gap-2 text-xs text-gray-400 font-bold">
                        {item.features.map((feature,index)=><li key ={index}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>{feature}</span>
                        </li>)}
                            
                    </ul>
                    <div className="rounded-full">
                        <button onClick={handleBuyNowBtn} className={`${isAdded ? 'btn-block text-white font-bold bg-linear-to-r from-green-500 to-green-600 rounded-full px-4 py-3' : 'btn-block text-white font-bold bg-linear-to-r from-blue-700 to-purple-700 rounded-full px-4 py-3'} `}>
                            {isAdded ? <div className='flex justify-center items-center gap-2'><FontAwesomeIcon icon={faCheck} />Added to Cart!</div> : 'Buy Now'}
                        </button>
                    </div>
                </div>
            </div>
    );
};

export default Card;