'use client';

import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion'; // Import framer-motion
import Footer from "@/app/components/Footer";

// Dynamically import NavBar to prevent SSR issues
const NavBar = dynamic(() => import('@/app/components/NavBar'), { ssr: false });

export default function HelioPage() {
    useEffect(() => {
        const handleScroll = () => {
            // Handle scroll if necessary for other effects
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="bg-gray-900 text-white min-h-screen relative overflow-hidden">
            <NavBar/>

            <section
                className="h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 relative z-10">
                <div className="text-center">
                    <motion.h1
                        className="text-6xl md:text-8xl font-extrabold text-white mb-6"
                        initial={{opacity: 0, y: 100}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 1.5}}>
                        Welcome to <span className="text-indigo-500">Helio</span>
                    </motion.h1>
                    <motion.p
                        className="text-lg md:text-2xl font-light mb-8"
                        initial={{opacity: 0, y: 50}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 1, delay: 0.5}}>
                        Revolutionizing classrooms with interactive, collaborative, and visual learning tools.
                    </motion.p>
                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{duration: 1, delay: 1.5}}>
                        <a href="#next-section">
                            <button
                                className="px-6 py-3 text-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-lg">
                                Explore Now
                            </button>
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* New Visual Representation Section */}
            <section id="next-section" className="py-16 px-6 bg-gray-800 relative z-10">
                <div className="text-center">
                    <h2 className="text-3xl font-semibold mb-6">Visualizing the Power of Helio</h2>
                    <p className="text-lg max-w-2xl mx-auto mb-8">
                        Experience the dynamic features of Helio that are changing the landscape of education.
                    </p>
                </div>

                <div className="relative flex justify-center items-center space-x-8">
                    {/* Interactive Whiteboard */}
                    <div className="p-6 bg-gray-700 rounded-lg text-center shadow-lg w-1/4">
                        <div className="text-center mb-4">
                            <div className="h-24 w-full bg-gray-600 rounded-lg mb-4"></div>
                            {/* Placeholder for board */}
                        </div>
                        <h3 className="text-2xl font-semibold">Interactive Whiteboard</h3>
                        <p className="mt-2">
                            Draw, write, and interact with content in real-time on the digital whiteboard.
                        </p>
                    </div>

                    {/* Collaboration Tools */}
                    <div className="p-6 bg-gray-700 rounded-lg text-center shadow-lg w-1/4">
                        <div className="text-center mb-4">
                            <div className="h-24 w-full bg-gray-600 rounded-lg mb-4"></div>
                            {/* Placeholder for collaboration */}
                        </div>
                        <h3 className="text-2xl font-semibold">Collaboration Tools</h3>
                        <p className="mt-2">
                            Enable real-time collaboration among students, making group projects more efficient.
                        </p>
                    </div>

                    {/* Content Visualization */}
                    <div className="p-6 bg-gray-700 rounded-lg text-center shadow-lg w-1/4">
                        <div className="text-center mb-4">
                            <div className="h-24 w-full bg-gray-600 rounded-lg mb-4"></div>
                            {/* Placeholder for content visualization */}
                        </div>
                        <h3 className="text-2xl font-semibold">Content Visualization</h3>
                        <p className="mt-2">
                            Bring complex concepts to life with interactive visualizations that simplify learning.
                        </p>
                    </div>
                </div>

                <p className="mt-12 text-sm opacity-75 text-center">
                    Ready to explore more? Experience the potential of Helio in modern classrooms.
                </p>
            </section>

            <Footer/>
        </div>
    );
}
