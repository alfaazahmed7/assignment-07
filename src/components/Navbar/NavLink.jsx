import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({ href, icon, children }) => {
    const pathname = usePathname();

    return (
        <Link href={href}
            className={`flex items-center gap-1 ${pathname === href ? "bg-[#244D3F] px-2 py-2 text-white rounded-lg" : ""} font-semibold text-base`}
        >
            {icon}
            {children}
        </Link>
    );
};

export default NavLink;