'use client';
import React, { createContext, useEffect, useState } from 'react';

export const TimelineContext = createContext();

const TimelineContextProvider = ({ children }) => {

    //  Initialize state from localStorage
    const [timelineData, setTimelineData] = useState(() => {
        if (typeof window !== "undefined") {
            const storedData = localStorage.getItem("timelineData");
            return storedData ? JSON.parse(storedData) : [];
        }
        return [];
    });

    //  Save to localStorage whenever data changes
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