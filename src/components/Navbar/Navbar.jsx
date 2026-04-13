'use client';
import Link from 'next/link';
import React from 'react';
import { FaRegClock } from 'react-icons/fa';
import { IoMdHome } from 'react-icons/io';
import { TfiStatsUp } from 'react-icons/tfi';
import NavLink from './NavLink';

const Navbar = () => {
    return (
        <div className="navbar md:w-11/12 lg:w-10/12 mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow gap-2">

                        <NavLink href={"/"} icon={<IoMdHome />}>
                            Home
                        </NavLink>
                        <NavLink href={"/timeline"} icon={<FaRegClock />}>
                            Timeline
                        </NavLink>
                        <NavLink href={"/stats"} icon={<TfiStatsUp />}>
                            Stats
                        </NavLink>

                    </ul>
                </div>
                <Link href={"/"} className="text-[#1F2937] text-3xl font-bold">Keen<span className='text-[#244D3F]'>Keeper</span></Link>
            </div>
            <div className="navbar-end hidden md:flex">
                <ul className="menu menu-horizontal px-1 gap-4">

                    <NavLink href={"/"} icon={<IoMdHome />}>
                        Home
                    </NavLink>
                    <NavLink href={"/timeline"} icon={<FaRegClock />}>
                        Timeline
                    </NavLink>
                    <NavLink href={"/stats"} icon={<TfiStatsUp />}>
                        Stats
                    </NavLink>

                </ul>
            </div>
        </div>
    );
};

export default Navbar;