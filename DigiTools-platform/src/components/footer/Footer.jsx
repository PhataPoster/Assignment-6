import React from 'react';
import FaceBook from '../../assets/products/facebook.png'
import Twitter from '../../assets/products/twitter.png'
import Instagram from '../../assets/products/instagram.png'



const Footer = () => {
    return (
        <div className='bg-[#101727] lg:px-50 pt-30 pb-8 text-white'>
            <div className='flex justify-between gap-6 pb-20'>
                <div className=''>
                    <h1 className='text-4xl font-bold mb-4'>DigiTools</h1>
                    <p className='text-sm'>Premium digital tools for creators, <br /> professionals, and businesses. Work smarter <br /> with our suite of powerful tools.</p>
                </div>
                <div className='flex gap-10'>
                    <div className='flex flex-col gap-3'>
                        <h2 className='font-bold'>Product</h2>
                        <p className='text-sm'>Features</p>
                        <p className='text-sm'>Pricing</p>
                        <p className='text-sm'>Integrations</p>
                        <p className='text-sm'>Updates</p>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h2 className='font-bold'>Company</h2>
                        <p className='text-sm'>About</p>
                        <p className='text-sm'>Careers</p>
                        <p className='text-sm'>Blog</p>
                        <p className='text-sm'>Contact</p>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h2 className='font-bold'>Resources</h2>
                        <p className='text-sm'>Documentation</p>
                        <p className='text-sm'>Help Center</p>
                        <p className='text-sm'>Community</p>
                        <p className='text-sm'>Contact</p>
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    <h2 className='font-bold'>Social Links</h2>
                    <div className='flex gap-4'>
                        <div>
                            <img src={FaceBook} alt="Facebook" />
                        </div>
                        <div>
                            <img src={Twitter} alt="Twitter" />
                        </div>
                        <div>
                            <img src={Instagram} alt="Instagram" />
                        </div>
                    </div>

                </div>
            </div>
            <div className='pt-8 border-t border-gray-500 flex justify-between'>
                <div>
                    <p className='text-sm text-gray-400'>© 2026 Digitools. All rights reserved.</p>
                </div>
                <div className='flex gap-8'>
                    <p className='text-sm text-gray-400'>Privacy Policy</p>
                    <p className='text-sm text-gray-400'>Terms of Service</p>
                    <p className='text-sm text-gray-400'>Cookie</p>
                </div>
            </div>
        </div>

    );
};

export default Footer;