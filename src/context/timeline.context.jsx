'use client';
import React, { createContext, useEffect, useState } from 'react';

export const TimelineContext = createContext();

const TimelineContextProvider = ({ children }) => {

    const [timelineData, setTimelineData] = useState(() => {
        if (typeof window !== "undefined") {
            const storedData = localStorage.getItem("timelineData");
            return storedData ? JSON.parse(storedData) : [];
        }
        return [];
    });

    useEffect(() => {
        localStorage.setItem("timelineData", JSON.stringify(timelineData));
    }, [timelineData]);

    return (
        <TimelineContext.Provider value={{ timelineData, setTimelineData }}>
            {children}
        </TimelineContext.Provider>
    );
};

export default TimelineContextProvider;