import React from 'react';

const Activity = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 bg-linear-to-r from-blue-700 to-purple-700 text-white text-center py-15 px-2 lg:px-50 mb-30 gap-8'>
            <div className='flex flex-col gap-2 px-25'>
                <h1 className='text-5xl font-bold'>50K+</h1>
                <p className='text-lg'>Active Users</p>
            </div>
            <div className='flex flex-col gap-2 px-25 lg:border-x-2 border-gray-400'>
                <h1 className='text-5xl font-bold '>200+</h1>
                <p className='text-lg'>Premium Tools</p>
            </div>
            <div className='flex flex-col gap-2 px-25'>
                <h1 className='text-5xl font-bold'>4.9</h1>
                <p className='text-lg'>Rating</p>
            </div>
        </div>
    );
};

export default Activity;