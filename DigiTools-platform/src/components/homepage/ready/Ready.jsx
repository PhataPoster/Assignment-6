import React from 'react';

const Ready = () => {
    return (
        <div className='flex flex-col gap-10 justify-center px-3 lg:px-50 py-30 items-center text-center bg-linear-to-r from-blue-500 to-purple-700 text-white'>
            <div className='text-center'>
                <h1 className='text-4xl font-bold mb-4'>Ready to Transform Your Workflow?</h1>
                <p className='text-sm'>Join thousands of professionals who are already using Digitools to work smarter. <br />
                    Start your free trial today.</p>
            </div>

            <div className='flex flex-col gap-4'>
                <div className='flex gap-4 justify-between items-center '>
                    <button className='btn-block font-bold bg-white rounded-full px-4 py-3'><span className='bg-clip-text text-transparent bg-linear-to-r from-blue-700 to-purple-700 '>Explore Products</span ></button>
                    <button className='btn-block font-bold border border-white bg-transparent rounded-full px-4 py-3'> View Pricing</button>
                </div>
                <p className='text-sm'>
                    14-day free trial • No credit card required • Cancel anytime
                </p>

            </div>
        </div>
    );
};

export default Ready;