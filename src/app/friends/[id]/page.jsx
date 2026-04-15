import Image from 'next/image';
import React from 'react';
import { BsChatLeftText } from 'react-icons/bs';
import { FaVideo } from 'react-icons/fa';
import { FiArchive } from 'react-icons/fi';
import { IoCallOutline } from 'react-icons/io5';
import { MdOutlineDelete, MdOutlineNotificationsPaused } from 'react-icons/md';

const friendsPromise = async () => {
    const res = await fetch("http://localhost:3000/data.json");
    const data = await res.json();
    return data;
}

const FriendDetailsPage = async ({ params }) => {
    const friendsData = await friendsPromise();
    console.log(friendsData, "friendsData");

    const { id } = await params;
    console.log(id, "params");

    const friend = friendsData.find(friend => friend.id === parseInt(id));
    console.log(friend, "friend");

    return (
        <div className='w-11/12 xl:w-10/12 mx-auto my-10 xl:my-20'>
            <div className='grid grid-cols-1 md:grid-cols-5 gap-5 items-start'>

                {/* Left Side */}
                <div className='md:col-span-5 xl:col-span-2'>
                    <div className='bg-white shadow-sm text-center py-8 xl:py-10 rounded-xl mb-5'>

                        <div className="w-[80px] h-[80px] xl:w-[100px] xl:h-[100px] rounded-full overflow-hidden mx-auto mb-2">
                            <Image
                                src={friend.picture}
                                alt={friend.name}
                                width={100}
                                height={100}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <h4 className='text-xl xl:text-2xl font-semibold mb-4'>
                            {friend.name}
                        </h4>

                        <div className='mb-5'>
                            <span
                                className={`${friend.status === "Overdue" && "bg-[#EF4444] text-white"} 
                        ${friend.status === "On-Track" && "bg-[#244D3F] text-white"} 
                        ${friend.status === "Almost Due" && "bg-[#EFAD44] text-white"} 
                        py-2 px-3 rounded-full font-medium text-xs xl:text-sm`}
                            >
                                {friend.status}
                            </span>
                        </div>

                        <div className='flex flex-wrap justify-center gap-2 mb-5'>
                            {friend.tags.map((tag, index) => (
                                <span key={index}
                                    className='bg-[#CBFADB] text-[#244D3F] text-xs xl:text-sm px-3 py-1 rounded-full font-medium'>
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div>
                            <p className='text-[#64748B] font-medium text-sm xl:text-base px-4'>
                                {`"${friend.bio}"`}
                            </p>
                            <p className='text-[#64748B] text-sm'>{friend.email}</p>
                        </div>
                    </div>

                    <div className='grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-1 gap-3'>
                        <div className='bg-white shadow-sm flex items-center gap-2 justify-center py-3 rounded-sm cursor-pointer text-base xl:text-xl font-medium'>
                            <span><MdOutlineNotificationsPaused /></span>
                            <h4>Snooze 2 Weeks</h4>
                        </div>

                        <div className='bg-white shadow-sm flex items-center gap-2 justify-center py-3 rounded-sm cursor-pointer text-base xl:text-xl font-medium'>
                            <span><FiArchive /></span>
                            <h4>Archive</h4>
                        </div>

                        <div className='bg-white shadow-sm flex items-center gap-2 justify-center py-3 rounded-sm cursor-pointer text-base xl:text-xl font-medium text-red-500'>
                            <span><MdOutlineDelete /></span>
                            <h4>Delete</h4>
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className='md:col-span-5 xl:col-span-3 self-start xl:py-7'>

                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
                        <div className='bg-white p-5 lg:p-10 rounded-md shadow-md text-center flex flex-col justify-center'>
                            <h4 className='text-2xl xl:text-3xl font-bold text-[#244D3F]'>{friend.days_since_contact}</h4>
                            <p className='text-sm xl:text-base text-[#64748B]'>Days Since Contact</p>
                        </div>
                        <div className='bg-white p-5 lg:p-10 rounded-md shadow-md text-center flex flex-col justify-center'>
                            <h4 className='text-2xl xl:text-3xl font-bold text-[#244D3F]'>{friend.goal}</h4>
                            <p className='text-sm xl:text-base text-[#64748B]'>Goal (Days)</p>
                        </div>
                        <div className='bg-white p-5 lg:p-10 rounded-md shadow-md text-center flex flex-col justify-center'>
                            <h4 className='text-2xl xl:text-3xl font-bold text-[#244D3F]'>{friend.next_due_date}</h4>
                            <p className='text-sm xl:text-base text-[#64748B]'>Next Due</p>
                        </div>
                    </div>

                    <div className='bg-white shadow-sm flex justify-between sm:items-center mt-10 p-5 rounded-md gap-3'>
                        <div>
                            <p className='text-[#244D3F] text-lg xl:text-xl font-medium mb-2'>Relationship Goal</p>
                            <div className='flex gap-1 text-sm xl:text-base'>
                                <p className='text-[#64748B]'>Connect every</p>
                                <p className='font-bold'>{friend.goal} days</p>
                            </div>
                        </div>

                        <div>
                            <a className='bg-gray-200 py-2 px-4 rounded-sm font-medium cursor-pointer hover:bg-[#64748B] hover:text-white text-sm'>
                                Edit
                            </a>
                        </div>
                    </div>

                    <div className='bg-white shadow-sm mt-10 p-5 rounded-md'>
                        <p className='text-[#244D3F] text-lg xl:text-xl font-medium mb-4'>Quick Check-In</p>

                        <div className='grid grid-cols-3 gap-5'>
                            <div className='bg-[#F8FAFC] p-5 rounded-md flex flex-col gap-2 items-center justify-center cursor-pointer'>
                                <p className='text-xl xl:text-2xl text-[#1F2937] font-bold'><IoCallOutline /></p>
                                <p className='text-[#1F2937] font-semibold text-base xl:text-xl'>Call</p>
                            </div>
                            <div className='bg-[#F8FAFC] p-5 rounded-md flex flex-col gap-2 items-center justify-center cursor-pointer'>
                                <p className='text-xl xl:text-2xl text-[#1F2937] font-bold'><BsChatLeftText /></p>
                                <p className='text-[#1F2937] font-semibold text-base xl:text-xl'>Text</p>
                            </div>
                            <div className='bg-[#F8FAFC] p-5 rounded-md flex flex-col gap-2 items-center justify-center cursor-pointer'>
                                <p className='text-xl xl:text-2xl text-[#1F2937] font-bold'><FaVideo /></p>
                                <p className='text-[#1F2937] font-semibold text-base xl:text-xl'>Video</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FriendDetailsPage;