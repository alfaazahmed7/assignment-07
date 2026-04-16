"use client";
import TimelineContextProvider from '@/context/timeline.context';
import React from 'react';

const Providers = ({ children }) => {
    return (
        <TimelineContextProvider>
            {children}
        </TimelineContextProvider>
    );
};

export default Providers;