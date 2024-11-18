'use client';

import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion'; // Import framer-motion
import Footer from "@/app/components/Footer";
import Link from 'next/link';

// Dynamically import NavBar to prevent SSR issues
const NavBar = dynamic(() => import('@/app/components/NavBar'), { ssr: false });

type CardInfo = {
    title: string;
    description: string;
    route: string;
};

const cardData: CardInfo[] = [
    {
        title: 'Opti',
        description: 'Optimize your operations with our AI-driven platform for efficiency and scalability.',
        route: '/opti',
    },
    {
        title: 'Helio',
        description: 'Unlock cutting-edge AI capabilities to streamline decision-making and drive insights.',
        route: '/helio',
    },
    {
        title: 'Eqo Lite',
        description: 'Need something tailored? Let\'s work together on custom AI solutions for your business.',
        route: '/eqolite',
    },
];

export default function Home() {
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
                        initial={{opacity: 0, y: 100}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 1.5}}>
                        Welcome to the <span className="text-indigo-500">Eltuel</span>
                    </motion.h1>
                    <motion.p
                        className="text-lg md:text-2xl font-light mb-8"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}>
                        Discover how <span className="text-indigo-500">Eltuel</span> is shaping the world we live in.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1.5 }}>
                        <a href="#next-section">
                            <button className="px-6 py-3 text-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-lg">
                                Get Started
                            </button>
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Next Section */}
            <section id="next-section" className="py-16 px-6 bg-gray-800 relative z-10">
                <div className="text-center">
                    <motion.h2
                        className="text-3xl font-semibold mb-6 text-white"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}>
                        Our Products
                    </motion.h2>
                    <motion.p
                        className="text-lg max-w-2xl mx-auto text-white"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.5 }}>
                        Explore our innovative AI-powered products designed to optimize your business and creative processes.
                    </motion.p>
                </div>

                {/* Product Info Cards */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 1 }}
                    className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {/* Map over the cardData array to generate cards */}
                    {cardData.map((card, index) => (
                        <Link href={card.route} key={index}>
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{ scale: 1.05 }} // Hover effect: Scale up
                                whileTap={{ scale: 0.95 }} // Tap effect: Scale down
                                transition={{ duration: 0.6 }}
                                className="p-6 bg-gray-700 hover:bg-indigo-600 rounded-lg text-center shadow-lg relative z-10 group"
                            >
                                <div className="absolute top-0 left-0 right-0 -mt-8 mx-auto w-2 h-2 bg-gray-600 rounded-full"></div>
                                <h3 className="text-2xl font-semibold text-white group-hover:text-yellow-400 transition-colors duration-300">
                                    {card.title}
                                </h3>
                                <p className="mt-2 text-white">{card.description}</p>
                            </motion.div>
                        </Link>
                    ))}
                </motion.div>

                <p className="mt-12 text-sm opacity-75 text-center">
                    Ready to explore more? Stay tuned for our deep dive into AI.
                </p>
            </section>

            <Footer />
        </div>
    );
}