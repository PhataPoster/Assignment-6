import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import BuyItems from '../../assets/download.png'

const EmptyCard = () => {
    return (
        <div className='border border-gray-300 rounded-2xl shadow-2xl  gap-6 p-4'>
            <div className='text-lg font-bold'>
                Your Card
            </div>
            <div className='flex flex-col justify-center items-center py-15 gap-3 text-gray-400'>
                {/* <FontAwesomeIcon icon={faCartShopping} /> */}
                <img src={BuyItems} alt="shopping cart" />
                <p>Your card is empty</p>
            </div>
        </div>
    );
};

export default EmptyCard;