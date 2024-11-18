'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

type BtnConfig = {
    route: string;
    btnText: string;
};

const BtnList: BtnConfig[] = [
    { route: '/about', btnText: 'About Us' },
    { route: '/terms', btnText: 'Terms of Service' },
    { route: '/privacy', btnText: 'Privacy Policy' },
];

export default function Footer() {
    const pathname = usePathname(); // Get the current route

    const isActive = (path: string) => pathname === path;

    return (
        <footer className="w-full backdrop-blur-lg bg-white/10 shadow-md py-6">
            <div className="flex flex-col lg:flex-row justify-between items-center px-4 2xl:px-16">
                {/* Footer navigation */}
                <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-6 text-sm">
                    <ul className="flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-4">
                        {BtnList.map((btnConfig) => (
                            <li key={btnConfig.route}>
                                <Link
                                    href={btnConfig.route}
                                    className={`text-gray-400 hover:text-indigo-600 ${
                                        isActive(btnConfig.route)
                                            ? 'text-indigo-600'
                                            : ''
                                    }`}
                                >
                                    {btnConfig.btnText}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Us */}
                <div className="mt-4 lg:mt-0 text-sm">
                    <Link
                        href="/contact"
                        className="text-gray-400 hover:text-indigo-600"
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
        </footer>
    );
};
