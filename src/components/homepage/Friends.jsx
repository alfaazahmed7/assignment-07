import React from 'react';
import FriendsCard from '../ui/FriendsCard';

const appPromise = async () => {
    const res = await fetch("https://keenkeeper-zeta.vercel.app/data.json");
    const data = await res.json();
    return data;
}

const Friends = async () => {
    const data = await appPromise();
    console.log(data);

    return (
        <div className='w-9/12 mx-auto my-10'>
            <h2 className='text-2xl font-bold text-[#131313]'>Your Friends</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 mt-6'>
                {data.map((friend, index) => {
                    return (
                        <FriendsCard key={index} friend={friend} />
                    )
                })}
            </div>
        </div>
    );
};

export default Friends;