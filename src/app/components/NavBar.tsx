'use client';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Logo from '../assets/logo.png';
import Link from 'next/link';
import Button from '@/app/components/Button';
import { Menu01Icon, ArrowTurnBackwardIcon } from 'hugeicons-react'; // Import from hugeicons-react

type BtnConfig = {
    route: string;
    btnText: string;
};

const BtnList: BtnConfig[] = [
    { route: '/opti', btnText: 'Opti' },
    { route: '/helio', btnText: 'Helio' },
    { route: '/eqolite', btnText: 'Eqo Lite' },
];

const NavBar = () => {
    const pathname = usePathname(); // Get the current route
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false); // State for mobile menu

    const isActive = (path: string) => pathname === path;

    const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

    return (
        <nav className="fixed w-full h-20 backdrop-blur-lg bg-white/10 border-gray-200 shadow-md z-50">
            <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
                <Link href="/">
                    <Image
                        src={Logo}
                        alt="Logo"
                        layout="intrinsic"
                        height={80} // Set a fixed height for the logo
                        width={160} // Auto width to maintain aspect ratio
                        className="cursor-pointer"
                        priority
                    />
                </Link>

                {/* Hamburger icon for mobile */}
                <div className="lg:hidden flex items-center">
                    <button
                        className="text-2xl text-gray-800 dark:text-white focus:outline-none"
                        onClick={toggleMobileMenu}
                    >
                        {isMobileMenuOpen ? (
                            <ArrowTurnBackwardIcon className="w-8 h-8" />
                        ) : (
                            <Menu01Icon className="w-8 h-8" />
                        )}
                    </button>
                </div>

                {/* Desktop navigation */}
                <div className="hidden lg:flex items-center space-x-2">
                    <ul className="flex items-center">
                        {BtnList.map((btnConfig) => (
                            <li key={btnConfig.route}>
                                <Link href={btnConfig.route}>
                                    <Button
                                        className={`ml-2 px-6 py-2 text-green-400 font-bold border-2 border-none rounded-lg shadow-md cursor-pointer ${
                                            isActive(btnConfig.route)
                                                ? 'dark:text-indigo-600 hover:text-white hover:bg-indigo-700/50'
                                                : 'dark:text-white hover:bg-indigo-700'
                                        }`}
                                    >
                                        {btnConfig.btnText}
                                    </Button>
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className="border-l-2 border-gray-300 h-8 mx-6"></div>

                    <Link href="/contact">
                        <Button className="ml-2 px-6 py-2 text-white font-bold border-2 border-none rounded-lg shadow-md bg-indigo-600 hover:bg-indigo-700 cursor-pointer">
                            Contact Us
                        </Button>
                    </Link>
                </div>
            </div>

            {/* Mobile menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden absolute top-20 left-0 w-full bg-white dark:bg-gray-800 shadow-lg">
                    <ul className="flex flex-col items-center space-y-4 py-4">
                        {BtnList.map((btnConfig) => (
                            <li key={btnConfig.route}>
                                <Link href={btnConfig.route} onClick={toggleMobileMenu}>
                                    <Button
                                        className={`px-6 py-2 text-green-400 font-bold border-2 border-none rounded-lg shadow-md cursor-pointer ${
                                            isActive(btnConfig.route)
                                                ? 'dark:text-indigo-600 hover:text-white hover:bg-indigo-700/50'
                                                : 'dark:text-white hover:bg-indigo-700'
                                        }`}
                                    >
                                        {btnConfig.btnText}
                                    </Button>
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Link href="/contact" onClick={toggleMobileMenu}>
                                <Button className="px-6 py-2 text-white font-bold border-2 border-none rounded-lg shadow-md bg-indigo-600 hover:bg-indigo-700 cursor-pointer">
                                    Contact Us
                                </Button>
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default React.memo(NavBar);