'use client'
import React from 'react';
import { usePathname } from 'next/navigation'
import Image from 'next/image';
import Logo from '../assets/logo.png';
import Link from 'next/link';
import Button from '@/app/components/Button';

type BtnConfig = {
    route: string,
    btnText: string,
}

const BtnList: BtnConfig[] = [
    { route: "/opti", btnText: "Opti" },
    { route: "/helio", btnText: "Helio" },
]

const NavBar = () => {
    const pathname = usePathname(); // Get the current route

    // Helper function to check if the current path matches the link
    const isActive = (path: string) => pathname === path;

    return (
        <nav className="fixed w-full h-20 bg-transparent">
            <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
                <Link href="/">
                    <Image
                        src={Logo}
                        alt="Logo"
                        layout="intrinsic"
                        height={0}
                        width={0}
                        style={{ height: '100%', width: 'auto' }}
                        className="cursor-pointer"
                        priority
                    />
                </Link>
                <div className="flex items-center space-x-2">
                    <ul className="flex items-center">
                        {BtnList.map((btnConfig) => (
                            <li key={btnConfig.route}>
                                <Link href={btnConfig.route}>
                                    <Button
                                        className={`ml-2 px-6 py-2 text-green-400 dark:text-white font-bold border-2 border-none rounded-lg shadow-md cursor-pointer ${
                                            isActive(btnConfig.route) ? 'dark:text-indigo-600 hover:text-white hover:bg-indigo-700/50' : 'hover:bg-indigo-700'
                                        }`}
                                    >
                                        {btnConfig.btnText}
                                    </Button>
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Vertical separator */}
                    <div className="border-l-2 border-gray-300 h-8 mx-6"></div> {/* Vertical line */}

                    {/* Contact Us button */}
                    <Link href="/contact">
                        <Button
                            className="ml-2 px-6 py-2 text-white font-bold border-2 border-none rounded-lg shadow-md bg-indigo-600 hover:bg-indigo-700 cursor-pointer"
                        >
                            Contact Us
                        </Button>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;