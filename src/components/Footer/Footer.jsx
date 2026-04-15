import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className=' my-10 bg-[#244D3F] pt-10'>
            <div className='w-10/12 mx-auto'>
                <div className='text-center mb-5'>
                    <h2 className='text-white text-5xl font-bold mb-3'>Keen<span className='font-semibold'>Keeper</span></h2>
                    <p className='text-white opacity-70'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                </div>

                <div className='text-center'>
                    <p className='text-white text-lg font-medium mb-3'>Social Links</p>
                    <div className="flex items-center justify-center gap-5">
                        <ul className="flex items-center gap-5">
                            <li className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#0f1117] text-xl cursor-pointer">
                                <FaInstagram />
                            </li>
                            <li className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#0f1117] text-xl cursor-pointer">
                                <FaFacebookF />
                            </li>
                            <li className='w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#0f1117] text-xl cursor-pointer'>
                                <FaXTwitter />
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='md:w-9/12 mx-auto '>
                    <hr className='border-white opacity-10 my-10' />
                    <div className='md:flex text-center justify-between gap-10'>
                        <p className='text-white opacity-70 mb-3'>© 2026 KeenKeeper. All rights reserved.</p>
                        <div>
                            <ul className='flex gap-5 text-white opacity-70 text-sm justify-center md:justify-start'>
                                <li>Privacy Policy </li>
                                <li>Terms of Service </li>
                                <li>Cookies </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;