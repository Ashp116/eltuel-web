'use client';

import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion'; // Import framer-motion
import Footer from "@/app/components/Footer";

// Dynamically import NavBar to prevent SSR issues
const NavBar = dynamic(() => import('@/app/components/NavBar'), { ssr: false });

export default function OptiAIPage() {
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
            <NavBar />

            {/* Hero Section */}
            <section className="h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 relative z-10">
                <div className="text-center relative z-10 px-6 md:px-12">
                    <motion.h1
                        className="text-6xl md:text-8xl font-extrabold text-white mb-6"
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5 }}>
                        Welcome to <span className="text-indigo-500">OptiAI</span>
                    </motion.h1>
                    <motion.p
                        className="text-lg md:text-2xl font-light mb-8"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}>
                        Discover how <span className="text-indigo-500">OptiAI</span> is revolutionizing the way we optimize operations with AI.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1.5 }}>
                        <a href="#next-section">
                            <button className="px-6 py-3 text-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-lg">
                                Learn More
                            </button>
                        </a>
                    </motion.div>
                </div>
            </section>

            <section id="next-section" className="py-16 px-6 bg-gray-800 relative z-10">
                <div className="text-center">
                    <h2 className="text-3xl font-semibold mb-6">Why OptiAI Matters</h2>
                    <p className="text-lg max-w-2xl mx-auto">
                        Artificial Intelligence (OptiAI) is at the forefront of technological innovation.
                        It enhances efficiency, fosters creativity, and personalizes experiences like never before.
                    </p>
                </div>

                {/* Roadmap Section */}
                <div className="relative mt-16">
                    <div className="flex justify-center items-center relative">
                        {/* Connecting Line */}
                        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-600 z-0"></div>

                        {/* Roadmap Cards */}
                        <div className="relative z-10 flex flex-wrap justify-center gap-8">
                            {/* Card for Efficiency */}
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{ scale: 1.05 }} // Hover effect: Scale up
                                whileTap={{ scale: 0.95 }} // Tap effect: Scale down
                                transition={{ duration: 0.6 }}
                                className="p-6 bg-gray-700 hover:bg-indigo-600 rounded-lg text-center shadow-lg sm:w-full md:w-1/3 lg:w-1/4 xl:w-1/4 relative z-10"
                            >
                                <div className="absolute top-0 left-0 right-0 -mt-8 mx-auto w-2 h-2 bg-gray-600 rounded-full"></div>
                                <h3 className="text-2xl font-semibold">Efficiency</h3>
                                <p className="mt-2">Automate repetitive tasks to save time and reduce errors.</p>
                            </motion.div>

                            {/* Card for Innovation */}
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{ scale: 1.05 }} // Hover effect: Scale up
                                whileTap={{ scale: 0.95 }} // Tap effect: Scale down
                                transition={{ duration: 0.6 }}
                                className="p-6 bg-gray-700 hover:bg-indigo-600 rounded-lg text-center shadow-lg sm:w-full md:w-1/3 lg:w-1/4 xl:w-1/4 relative z-10"
                            >
                                <div className="absolute top-0 left-0 right-0 -mt-8 mx-auto w-2 h-2 bg-gray-600 rounded-full"></div>
                                <h3 className="text-2xl font-semibold">Innovation</h3>
                                <p className="mt-2">Unlock new possibilities in research, science, and industry.</p>
                            </motion.div>

                            {/* Card for Personalization */}
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{ scale: 1.05 }} // Hover effect: Scale up
                                whileTap={{ scale: 0.95 }} // Tap effect: Scale down
                                transition={{ duration: 0.6 }}
                                className="p-6 bg-gray-700 hover:bg-indigo-600 rounded-lg text-center shadow-lg sm:w-full md:w-1/3 lg:w-1/4 xl:w-1/4 relative z-10"
                            >
                                <div className="absolute top-0 left-0 right-0 -mt-8 mx-auto w-2 h-2 bg-gray-600 rounded-full"></div>
                                <h3 className="text-2xl font-semibold">Personalization</h3>
                                <p className="mt-2">Tailor experiences to individual needs and preferences.</p>
                            </motion.div>
                        </div>
                    </div>

                    <p className="mt-12 text-sm opacity-75 text-center">
                        Ready to explore more? Stay tuned for our deep dive into OptiAI.
                    </p>
                </div>
            </section>

            <Footer />
        </div>
    );
}