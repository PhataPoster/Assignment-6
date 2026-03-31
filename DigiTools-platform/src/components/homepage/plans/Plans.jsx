import React, { Suspense, use } from 'react';
import PlansCard from '../../ui/PlansCard';


const Plans = ({ plansDataPromise }) => {
    const plansData = use(plansDataPromise);
    return (

        <div className='flex flex-col gap-8 justify-center px-3 lg:px-50 py-30'>
            <div className='text-center'>
                <h1 className='text-4xl font-bold mb-4'>Simple, Transparent Pricing</h1>
                <p className='text-gray-400 text-sm'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    plansData.map((planData, index) => (
                        <PlansCard key={index} planData={planData} />
                    ))
                }

            </div>
        </div>

    );
};

export default Plans;