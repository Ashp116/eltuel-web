'use client';

import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion'; // Import framer-motion
import Footer from "@/app/components/Footer";

// Dynamically import NavBar to prevent SSR issues
const NavBar = dynamic(() => import('@/app/components/NavBar'), { ssr: false });

export default function EqoLitePage() {
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

            <section
                className="h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 relative z-10">
                <div className="text-center">
                    <motion.h1
                        className="text-6xl md:text-8xl font-extrabold text-white mb-6"
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5 }}>
                        Welcome to <span className="text-indigo-500">EqoLite</span>
                    </motion.h1>
                    <motion.p
                        className="text-lg md:text-2xl font-light mb-8"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}>
                        Empowering students with cutting-edge interactive learning and collaboration tools.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1.5 }}>
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
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-semibold text-white mb-6">EqoLite’s Tools Roadmap</h2>
                    <p className="text-lg max-w-2xl mx-auto text-white mb-8">
                        Discover the key tools in EqoLite&#39;s journey that work together to revolutionize classroom
                        experiences and student engagement.
                    </p>
                </div>

                {/* Desktop Version */}
                <div className="hidden md:flex items-center justify-between space-x-12 z-10 relative">
                    {/* Roadmap Cards */}
                    {[
                        {
                            number: 1,
                            title: "AI-Powered Study Assistant",
                            description: "Personalized learning paths guided by AI to offer real-time feedback and support."
                        },
                        {
                            number: 2,
                            title: "Virtual Classroom",
                            description: "Conduct live sessions, share materials, and engage students remotely from anywhere."
                        },
                        {
                            number: 3,
                            title: "Real-Time Analytics",
                            description: "Monitor student performance and engagement instantly, enabling data-driven decisions."
                        },
                        {
                            number: 4,
                            title: "Digital Resource Library",
                            description: "Access a variety of learning resources, including videos, quizzes, and more."
                        },
                        {
                            number: 5,
                            title: "Gamification",
                            description: "Boost engagement with games, challenges, and rewards that motivate students."
                        }
                    ].map((tool) => (
                        <div
                            key={tool.number}
                            className="relative flex flex-col items-center w-1/5 p-6 bg-gray-700 rounded-xl shadow-xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:bg-indigo-700">
                            <div
                                className="w-12 h-12 bg-indigo-600 rounded-full text-white flex items-center justify-center mb-4 shadow-lg">
                                {tool.number}
                            </div>
                            <h3 className="text-lg text-white font-semibold mb-2">{tool.title}</h3>
                            <p className="text-center text-sm text-white opacity-80">{tool.description}</p>
                        </div>
                    ))}

                    {/* Horizontal Connector Line */}
                    <div className="absolute top-1/2 left-1/5 w-[calc(100%_-_3rem)] h-1 bg-indigo-500 -z-10"></div>
                </div>

                {/* Mobile Version */}
                <div className="md:hidden">
                    {[
                        {
                            number: 1,
                            title: "AI-Powered Study Assistant",
                            description: "Personalized learning paths guided by AI to offer real-time feedback and support."
                        },
                        {
                            number: 2,
                            title: "Virtual Classroom",
                            description: "Conduct live sessions, share materials, and engage students remotely from anywhere."
                        },
                        {
                            number: 3,
                            title: "Real-Time Analytics",
                            description: "Monitor student performance and engagement instantly, enabling data-driven decisions."
                        },
                        {
                            number: 4,
                            title: "Digital Resource Library",
                            description: "Access a variety of learning resources, including videos, quizzes, and more."
                        },
                        {
                            number: 5,
                            title: "Gamification",
                            description: "Boost engagement with games, challenges, and rewards that motivate students."
                        }
                    ].map((tool) => (
                        <div
                            key={tool.number}
                            className="relative flex flex-col items-center w-full p-6 bg-gray-700 rounded-xl shadow-xl mb-8 transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:bg-indigo-700">
                            <div
                                className="w-12 h-12 bg-indigo-600 rounded-full text-white flex items-center justify-center mb-4 shadow-lg">
                                {tool.number}
                            </div>
                            <h3 className="text-lg text-white font-semibold mb-2">{tool.title}</h3>
                            <p className="text-center text-sm text-white opacity-80">{tool.description}</p>
                        </div>
                    ))}
                </div>

                <p className="mt-12 text-sm opacity-75 text-center text-white">
                    Ready to explore more? See how EqoLite’s tools are shaping the future of education.
                </p>
            </section>

            <Footer />
        </div>
    );
}