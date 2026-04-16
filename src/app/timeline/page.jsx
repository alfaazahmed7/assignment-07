'use client';
import { TimelineContext } from '@/context/timeline.context';
import React, { useContext, useState } from 'react';
import { FaRegClock } from 'react-icons/fa';
import { IoCall } from 'react-icons/io5';
import { MdVideocam } from 'react-icons/md';
import { TiMessages } from 'react-icons/ti';

const TimelineHistory = () => {
    const { timelineData, setTimelineData } = useContext(TimelineContext);

    const [filter, setFilter] = useState("all");

    const filteredData =
        filter === "all"
            ? timelineData
            : timelineData.filter(item => item.type === filter);

    const handleClearAll = () => {
        localStorage.removeItem("timelineData");
        setTimelineData([]);
    };

    return (
        <div className='my-10 w-10/12 mx-auto'>
            <h2 className='text-2xl font-bold text-[#131313] mb-4'>Timeline</h2>

            <div className="dropdown mb-6">
                <div tabIndex={0} role="button" className="btn m-1">
                    {
                        filter === "all"
                            ? "Filter Timeline"
                            : `Filter: ${filter.charAt(0).toUpperCase() + filter.slice(1)}`
                    }
                </div>

                <ul
                    tabIndex={-1}
                    className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow"
                >
                    <li>
                        <a
                            onClick={() => setFilter("all")}
                            className={filter === "all" ? "font-bold text-blue-500" : ""}
                        >
                            All
                        </a>
                    </li>
                    <li>
                        <a
                            onClick={() => setFilter("text")}
                            className={filter === "text" ? "font-bold text-blue-500" : ""}
                        >
                            Text
                        </a>
                    </li>
                    <li>
                        <a
                            onClick={() => setFilter("call")}
                            className={filter === "call" ? "font-bold text-blue-500" : ""}
                        >
                            Call
                        </a>
                    </li>
                    <li>
                        <a
                            onClick={() => setFilter("video")}
                            className={filter === "video" ? "font-bold text-blue-500" : ""}
                        >
                            Video
                        </a>
                    </li>
                </ul>
            </div>

            <div>
                {timelineData.length === 0 ? (
                    <div className="flex flex-col items-center justify-center bg-white border border-gray-200 rounded-2xl shadow-sm p-10 text-center">

                        <div className="bg-blue-100 text-blue-500 p-4 rounded-full mb-4">
                            <FaRegClock className="text-3xl" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                            No Timeline History
                        </h3>
                        <p className="text-gray-500 max-w-sm">
                            You haven't added any interactions yet. Start calling, texting, or video chatting to see your timeline here.
                        </p>
                    </div>
                ) : (
                    filteredData.map((item, index) => (
                        <div key={index}>

                            {item.type === "call" && (
                                <div className='bg-white p-5 shadow-sm rounded-xl flex items-center gap-3 mb-5'>
                                    <p className='text-3xl'><IoCall /></p>
                                    <div>
                                        <div className='flex gap-1'>
                                            <p className='text-[#244D3F] text-xl font-medium'>Call</p>
                                            <p className='text-[#64748B] text-lg'>{`with ${item.name}`}</p>
                                        </div>
                                        <p className='text-[#64748B] font-medium'>
                                            {new Date(item.date).toLocaleDateString("en-US", {
                                                month: "long",
                                                day: "numeric",
                                                year: "numeric",
                                            })}
                                        </p>
                                    </div>
                                </div>
                            )}

                            {item.type === "text" && (
                                <div className='bg-white p-5 shadow-sm rounded-xl flex items-center gap-3 mb-5'>
                                    <p className='text-3xl'><TiMessages /></p>
                                    <div>
                                        <div className='flex gap-1'>
                                            <p className='text-[#244D3F] text-xl font-medium'>Text</p>
                                            <p className='text-[#64748B] text-lg'>{`with ${item.name}`}</p>
                                        </div>
                                        <p className='text-[#64748B] font-medium'>
                                            {new Date(item.date).toLocaleDateString("en-US", {
                                                month: "long",
                                                day: "numeric",
                                                year: "numeric",
                                            })}
                                        </p>
                                    </div>
                                </div>
                            )}

                            {item.type === "video" && (
                                <div className='bg-white p-5 shadow-sm rounded-xl flex items-center gap-3 mb-5'>
                                    <p className='text-3xl'><MdVideocam /></p>
                                    <div>
                                        <div className='flex gap-1'>
                                            <p className='text-[#244D3F] text-xl font-medium'>Video</p>
                                            <p className='text-[#64748B] text-lg'>{`with ${item.name}`}</p>
                                        </div>
                                        <p className='text-[#64748B] font-medium'>
                                            {new Date(item.date).toLocaleDateString("en-US", {
                                                month: "long",
                                                day: "numeric",
                                                year: "numeric",
                                            })}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))
                )}

                {timelineData.length > 0 && (
                    <div className="text-center mt-6">
                        <button
                            onClick={handleClearAll}
                            className="btn bg-red-500 hover:bg-red-600 text-white"
                        >
                            Clear All Timeline
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TimelineHistory;