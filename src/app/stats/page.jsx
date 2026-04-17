'use client';
import { TimelineContext } from '@/context/timeline.context';
import React, { useContext } from 'react';
import { FiPieChart } from 'react-icons/fi';
import { Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

const StatsPage = () => {
    const { timelineData } = useContext(TimelineContext);

    const textCount = timelineData.filter(item => item.type === "text").length;
    const callCount = timelineData.filter(item => item.type === "call").length;
    const videoCount = timelineData.filter(item => item.type === "video").length;

    const data = [
        { name: 'Text', value: textCount, fill: '#3B82F6' },
        { name: 'Call', value: callCount, fill: '#10B981' },
        { name: 'Video', value: videoCount, fill: '#F59E0B' },
    ];

    return (
        <div className='w-10/12 mx-auto my-8'>
            <h2 className='text-[#1F2937] text-2xl md:text-4xl lg:text-5xl mb-8 font-bold'>Friendship Analytics</h2>
            <div className='bg-white rounded-lg shadow-md p-4'>
                <p className='text-[#244D3F] font-medium mb-5'>By Interaction Type</p>

                {timelineData.length === 0 ?
                    <div className="flex flex-col items-center justify-center bg-white border border-gray-200 rounded-2xl shadow-sm p-10 text-center">
                        <div className="bg-purple-100 text-purple-500 p-4 rounded-full mb-4">
                            <FiPieChart className="text-4xl" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                            No Analytics Data
                        </h3>
                        <p className="text-gray-500 max-w-sm">
                            Your interaction stats will appear here once you start adding calls, texts, or video activities.
                        </p>
                    </div>

                    : <div className="w-full max-w-md mx-auto">
                        <ResponsiveContainer width="100%" height={300}>
                            <PieChart>
                                <Pie
                                    data={data}
                                    dataKey="value"
                                    innerRadius="70%"
                                    outerRadius="100%"
                                    cornerRadius={10}
                                    paddingAngle={5}
                                    isAnimationActive={true}
                                />
                                <Tooltip />
                                <Legend wrapperStyle={{ marginTop: 10 }} />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                }
            </div>
        </div>
    );
};

export default StatsPage;