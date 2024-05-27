'use client';
import React from "react";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-black text-white py-4">
            <div className="container mx-auto flex flex-col md:flex-row justify-center items-center md:justify-between space-y-4 md:space-y-0">
                <div className="flex justify-center space-x-6">
                    <Link href="https://www.facebook.com/luismariano.gutierrezdivas" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
                        <FaFacebookF size={24} />
                    </Link>
                    <Link href="https://x.com/Mariano87581813" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
                        <FaTwitter size={24} />
                    </Link>
                    <Link href="https://www.instagram.com/lm_gudi/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
                        <FaInstagram size={24} />
                    </Link>
                    <Link href="https://www.linkedin.com/in/luis-mariano-gutierrez-divas-938a48281/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
                        <FaLinkedinIn size={24} />
                    </Link>
                </div>
                <div className="text-center mt-4 md:mt-0">
                    <p className="text-sm">&copy; {new Date().getFullYear()} Mariano-Gudi. Derechos Reservados.</p>
                </div>
            </div>
        </footer>
    );
}



