import React from 'react';
import circle from "../../../assets/circle.png";
import play from "../../../assets/play.png";
import banner from "../../../assets/banner.png";
const Banner = () => {
    return (
        <div className='flex flex-col-reverse justify-center items-center px-2 gap-8 mt-15 mb-15 lg:flex-row lg:gap-20 lg:px-50 lg:justify-start lg:items-start'>
            <div className='flex flex-col gap-4 justify-center items-center lg:items-start text-center lg:text-start' >
                <div className='flex gap-2 bg-blue-100 rounded-full px-4 py-2 w-fit'>
                    <img src={circle} alt="circle logo" />
                    <p className='bg-clip-text text-transparent bg-linear-to-r from-blue-700 to-purple-700'>New: Ai-Powered Tools Available</p>
                </div>
                <h1 className='text-5xl font-bold'>Supercharge  <br></br>
                    Digital Workflow</h1>
                <p className='text-gray-600'>Access premium AI tools, design assets, templates, and productivity <br></br>

                    software—all in one place. Start creating faster today.
                    <br />


                    Explore Products
                </p>
                <div className='flex gap-4'>
                    <button className='text-white font-bold bg-linear-to-r from-blue-700 to-purple-700 rounded-full px-3 py-2'>Explore Products</button>
                    <button className='bg-transparent border border-purple-700 rounded-full flex gap-1 px-2 py-3 font-bold'>
                        <img src={play} alt="play icon" />
                        <span className='bg-clip-text text-transparent bg-linear-to-r from-blue-700 to-purple-700'>Watch Demo</span>
                    </button>
                </div>
            </div>
            <div className='shadow-lg rounded-2xl'>
                <img className='shadow-2xl ' src={banner} alt="" />
            </div>
        </div>
    );
};

export default Banner;