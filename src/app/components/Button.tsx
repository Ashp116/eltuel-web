import React from 'react';

interface ButtonProps {
    children: React.ReactNode; // Content inside the button
    onClick?: () => void; // Optional click handler
    className?: string; // Optional additional Tailwind classes
    href?: string; // Optional link URL (if the button acts as a link)
}
const baseStyle =
    "px-6 py-3 text-white font-bold bg-indigo-500 border-2 border-indigo-500 rounded-lg shadow-md hover:bg-white hover:text-indigo-500 cursor-pointer";

const Button: React.FC<ButtonProps> = ({ children, onClick, className = baseStyle, href}) => {
    return href ? (
        <a
            href={href}
            className={`${className}`}
        >
            {children}
        </a>
    ) : (
        <button
            onClick={onClick}
            className={`${className}`}
        >
            {children}
        </button>
    );
};

export default Button;