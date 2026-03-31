// import React, { use } from 'react';

const PlansCard = ({ planData }) => {
    console.log(planData);

    return (


        <div className={`flex flex-col gap-6 p-6 shadow-2xl rounded-2xl justify-between relative ${planData.tagType ==='Most Popular'? 'bg-linear-to-r from-blue-500 to-purple-700 text-white':'bg-gray-100'}`}>
            <div className="flex flex-col gap-4">
                <div className="flex absolute -mt-8.75 right-30">
                    <span className={`rounded-full px-3 py-1 text-sm font-bold ${planData.tagType === 'Most Popular' ? 'bg-yellow-200 text-yellow-800' : ""}`}>{planData.tagType}</span>
                </div>
                <div className="flex ">
                    <h2 className="text-3xl font-bold">{planData.name}</h2>
                </div>
                <div className="flex ">
                    <p className={`"text-gray-400" ${planData.tagType === 'Most Popular' && ' text-white'}`}>{planData.description}</p>
                </div>
                <span className="text-xl flex justify-between">${planData.price}/{planData.period}</span>
                <ul className={`" gap-2 text-xs text-gray-400 ${planData.tagType === 'Most Popular' && ' text-white'} font-bold flex flex-col "`}>
                    {planData.features.map((feature, index) => <li key={index}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        <span>{feature}</span>
                    </li>)}

                </ul>
            </div>
            <div className="rounded-full">
                <button className={` ${planData.tagType === 'Most Popular' ? 'btn-block font-bold bg-white rounded-full px-4 py-3  ':' btn-block text-white font-bold bg-linear-to-r from-blue-500 to-purple-600 rounded-full px-4 py-3'}`}>
                    <span className={`${planData.tagType === 'Most Popular' ? 'bg-clip-text text-transparent bg-linear-to-r from-blue-700 to-purple-700' : ''}`}>{planData.button.text}</span>
                </button>
            </div>
        </div>


    );
};

export default PlansCard;