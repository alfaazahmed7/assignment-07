import React from 'react';
import { FaPlus } from 'react-icons/fa';

const Banner = () => {
    return (
        <div className='w-11/12 lg:w-10/12 2xl:w-8/12 mx-auto text-center py-10'>
            <h1 className='text-2xl sm:text-4xl lg:text-5xl 2xl:text-6xl text-[#131313] font-bold mb-5'>Friends to keep close in your life</h1>
            <p className='max-w-[550px] mx-auto text-gray-500 text-base'>Your personal shelf of meaningful connections. Browse, tend, and nurture the
                relationships that matter most.</p>

            <div className='flex items-center gap-1 bg-[#244D3F] text-white w-max px-4 py-2 rounded-md mx-auto mt-5 cursor-pointer font-semibold'>
                <FaPlus />
                <a>Add a Friend</a>
            </div>
        </div>
    );
};

export default Banner;