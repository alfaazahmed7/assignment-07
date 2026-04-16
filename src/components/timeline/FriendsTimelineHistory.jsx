'use client';
import { TimelineContext } from '@/context/timeline.context';
import React, { useContext } from 'react';
import { BsChatLeftText } from 'react-icons/bs';
import { FaVideo } from 'react-icons/fa';
import { IoCallOutline } from 'react-icons/io5';

const FriendsTimelineHistory = ({ friend }) => {
    const { timelineData, setTimelineData } = useContext(TimelineContext);
    console.log(timelineData, "timelineData from context");

    const handleTimelineHistory = (type) => {
        setTimelineData([
            ...timelineData,
            {
                ...friend,
                type,
                id: Date.now(),
                date: new Date().toISOString()
            }
        ]);
    };

    return (
        <div className='grid grid-cols-3 gap-5'>
            <button
                onClick={() => handleTimelineHistory("call")}
                className='bg-[#F8FAFC] p-5 rounded-md flex flex-col gap-2 items-center justify-center cursor-pointer'>
                <p className='text-xl xl:text-2xl text-[#1F2937] font-bold'><IoCallOutline /></p>
                <p className='text-[#1F2937] font-semibold text-base xl:text-xl'>Call</p>
            </button>
            <button
                onClick={() => handleTimelineHistory("text")}
                className='bg-[#F8FAFC] p-5 rounded-md flex flex-col gap-2 items-center justify-center cursor-pointer'>
                <p className='text-xl xl:text-2xl text-[#1F2937] font-bold'><BsChatLeftText /></p>
                <p className='text-[#1F2937] font-semibold text-base xl:text-xl'>Text</p>
            </button>
            <button
                onClick={() => handleTimelineHistory("video")}
                className='bg-[#F8FAFC] p-5 rounded-md flex flex-col gap-2 items-center justify-center cursor-pointer'>
                <p className='text-xl xl:text-2xl text-[#1F2937] font-bold'><FaVideo /></p>
                <p className='text-[#1F2937] font-semibold text-base xl:text-xl'>Video</p>
            </button>
        </div>
    );
};

export default FriendsTimelineHistory;