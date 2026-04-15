import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FriendsCard = ({ friend }) => {
    return (
        <Link href={`/friends/${friend.id}`}>
            <div className='bg-white shadow-sm rounded-xl text-center py-10'>
                <div className="w-[100px] h-[100px] rounded-full overflow-hidden mx-auto mb-2">
                    <Image
                        src={friend.picture}
                        alt={friend.name}
                        width={100}
                        height={100}
                        className="w-full h-full object-cover"
                    />
                </div>
                <h4 className='text-2xl font-semibold mb-2'>{friend.name}</h4>
                <p className='text-[#64748B] text-sm mb-3'>{friend.days_since_contact}d ago</p>
                <div className='flex justify-center gap-2 mb-5'>
                    {friend.tags.map((tag, index) => {
                        return (
                            <span key={index}
                                className='bg-[#CBFADB] text-[#244D3F] text-sm px-3 py-1 rounded-full font-medium'>
                                {tag}
                            </span>
                        )
                    })}
                </div>
                <span
                    className={`${friend.status === "Overdue" && "bg-[#EF4444] text-white"} ${friend.status === "On-Track" && "bg-[#244D3F] text-white"} ${friend.status === "Almost Due" && "bg-[#EFAD44] text-white"} py-2 px-3 rounded-full font-medium`}
                >
                    {friend.status}</span>
            </div>
        </Link >
    );
};

export default FriendsCard;