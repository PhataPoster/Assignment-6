import React from 'react';
import User from '../../../assets/user.png'
import Package from '../../../assets/package.png'
import Rocket from '../../../assets/rocket.png'

const GetStart = () => {
    return (
        <div className='flex flex-col gap-8 justify-center items-center text-center lg:px-50 px-3 py-30 bg-gray-100 rounded-2xl'>
            <div>
                <h1 className='text-4xl font-bold mb-4'>Get Started In 3 Steps</h1>
                <p className='text-gray-400 text-sm'>Start using premium digital tools in minutes, not hours.</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                <div className='flex flex-col gap-4 bg-white p-3 rounded-2xl'>
                    <div className='flex justify-end  text-white font-bold items-center '>
                        <p className='bg-linear-to-r from-blue-700 to-purple-700 p-2 rounded-full'>01</p>
                    </div>
                    <div className='flex justify-center items-center 
                    text-center bg-purple-100 p-3 w-fit rounded-full mx-auto'>
                        <img src={User} alt="User" />
                    </div>
                    <h1 className='text-xl font-bold'>Create Account</h1>
                    <p className='text-gray-400 mb-6 '>Sign up for free in seconds. No credit card required to get started.</p>
                </div>
                <div className='flex flex-col gap-4 bg-white p-3 rounded-2xl'>
                    <div className='flex justify-end  text-white font-bold items-center '>
                        <p className='bg-linear-to-r from-blue-700 to-purple-700 p-2 rounded-full'>02</p>
                    </div>
                    <div className='flex justify-center items-center 
                    text-center bg-purple-100 p-3 w-fit rounded-full mx-auto'>
                        <img src={Package} alt="Package" />
                    </div>
                    <h1 className='text-xl font-bold'>Choose Plan</h1>
                    <p className='text-gray-400 mb-6 '>Select the perfect plan for your needs. Upgrade or downgrade at any time.</p>
                </div>
                <div className='flex flex-col gap-4 bg-white p-3 rounded-2xl'>
                    <div className='flex justify-end  text-white font-bold items-center '>
                        <p className='bg-linear-to-r from-blue-700 to-purple-700 p-2 rounded-full'>03</p>
                    </div>
                    <div className='flex justify-center items-center 
                    text-center bg-purple-100 p-3 w-fit rounded-full mx-auto'>
                        <img src={Rocket} alt="Rocket" />
                    </div>
                    <h1 className='text-xl font-bold'>Start Creating</h1>
                    <p className='text-gray-400 mb-6 '>Download and start using your premium
                        tools immediately.</p>
                </div>
            </div>
        </div>
    );
};

export default GetStart;