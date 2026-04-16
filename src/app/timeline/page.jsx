'use client';
import { TimelineContext } from '@/context/timeline.context';
import React, { useContext } from 'react';
import { IoCall } from 'react-icons/io5';
import { MdVideocam } from 'react-icons/md';
import { TiMessages } from 'react-icons/ti';

const TimelineHistory = () => {
    const { timelineData, setTimelineData } = useContext(TimelineContext);
    console.log(timelineData, "timelineData from context");

    return (
        <div className='my-10 w-10/12 mx-auto'>
            <h2 className='text-2xl font-bold text-[#131313] mb-4'>Timeline</h2>
            <div>
                {
                    timelineData.map((item, index) => {
                        return (
                            <div key={index}>
                                {item.type === "call" &&
                                    <div className='bg-white p-5 shadow-sm rounded-xl flex items-center gap-3 mb-5'>
                                        <div>
                                            <p className='text-3xl '><IoCall /></p>
                                        </div>
                                        <div>
                                            <div className='flex gap-1'>
                                                <p className='text-[#244D3F] text-xl font-medium'>Call</p>
                                                <p className='text-[#64748B] text-lg'>{`with ${item.name}`}</p>
                                            </div>
                                            <p className='text-[#64748B] font-medium'> {new Date(item.date).toLocaleDateString("en-US", {
                                                month: "long",
                                                day: "numeric",
                                                year: "numeric",
                                            })}</p>
                                        </div>
                                    </div>
                                }

                                {item.type === "text" &&
                                    <div className='bg-white p-5 shadow-sm rounded-xl flex items-center gap-3 mb-5'>
                                        <div>
                                            <p className='text-3xl '><TiMessages /></p>
                                        </div>
                                        <div>
                                            <div className='flex gap-1'>
                                                <p className='text-[#244D3F] text-xl font-medium'>Text</p>
                                                <p className='text-[#64748B] text-lg'>{`with ${item.name}`}</p>
                                            </div>
                                            <p className='text-[#64748B] font-medium'> {new Date().toLocaleDateString("en-US", {
                                                month: "long",
                                                day: "numeric",
                                                year: "numeric",
                                            })}</p>
                                        </div>
                                    </div>
                                }

                                {item.type === "video" &&
                                    <div className='bg-white p-5 shadow-sm rounded-xl flex items-center gap-3 mb-5'>
                                        <div>
                                            <p className='text-3xl '><MdVideocam /></p>
                                        </div>
                                        <div>
                                            <div className='flex gap-1'>
                                                <p className='text-[#244D3F] text-xl font-medium'>Video</p>
                                                <p className='text-[#64748B] text-lg'>{`with ${item.name}`}</p>
                                            </div>
                                            <p className='text-[#64748B] font-medium'> {new Date().toLocaleDateString("en-US", {
                                                month: "long",
                                                day: "numeric",
                                                year: "numeric",
                                            })}</p>
                                        </div>
                                    </div>
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default TimelineHistory;