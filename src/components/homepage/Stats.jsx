import React from 'react';

const Stats = () => {
    return (
        <div className='w-9/12 mx-auto'>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-5'>
                <div className='bg-white p-5 lg:p-10 rounded-md shadow-md text-center flex flex-col justify-center'>
                    <h4 className='text-3xl font-bold text-[#131313]'>10</h4>
                    <p className='text-base text-[#64748B]'>Total Friends</p>
                </div>
                <div className='bg-white p-10 rounded-md shadow-md text-center flex flex-col justify-center'>
                    <h4 className='text-3xl font-bold text-[#131313]'>3</h4>
                    <p className='text-base text-[#64748B]'>On Track</p>
                </div>
                <div className='bg-white p-10 rounded-md shadow-md text-center flex flex-col justify-center'>
                    <h4 className='text-3xl font-bold text-[#131313]'>6</h4>
                    <p className='text-base text-[#64748B]'>Need Attention</p>
                </div>
                <div className='bg-white p-10 rounded-md shadow-md text-center flex flex-col justify-center'>
                    <h4 className='text-3xl font-bold text-[#131313]'>12</h4>
                    <p className='text-base text-[#64748B]'>Interaction This Month</p>
                </div>
            </div>
        </div>
    );
};

export default Stats;