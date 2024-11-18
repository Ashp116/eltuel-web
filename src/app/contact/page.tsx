'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Footer from "@/app/components/Footer";
import NavBar from "@/app/components/NavBar";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="bg-gray-900 text-white min-h-screen flex flex-col">
            <NavBar />

            <main className="flex flex-col items-center justify-center py-16 px-6 sm:px-12 2xl:px-16 flex-grow mt-16">
                <h1 className="text-4xl font-semibold mb-8 text-indigo-500">Contact Us</h1>

                <form className="w-full max-w-3xl bg-gray-800 p-8 rounded-lg shadow-md">
                    <div className="mb-6">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-400">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-4 mt-2 text-white bg-transparent border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-400">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-4 mt-2 text-white bg-transparent border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    <div className="mb-6">
                        <label
                            htmlFor="message"
                            className="block text-sm font-medium text-gray-400"
                        >
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={4}
                            className="w-full p-4 mt-2 text-white bg-transparent border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled
                        className="w-full p-4 mt-6 text-white rounded-md bg-gray-400 cursor-not-allowed"
                    >
                        Submit
                    </button>
                </form>
            </main>

            <Footer />
        </div>
    );
};