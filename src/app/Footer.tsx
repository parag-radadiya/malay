"use client"; 

import Link from 'next/link';
// Import icons from react-icons
import { FaFacebookF, FaInstagram, FaArrowUp } from 'react-icons/fa';

export default function Footer() {
  // Optional: Function to scroll to top when arrow is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scroll
    });
  };

  return (
    <footer className="w-full bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 py-8"> {/* Increased padding */}
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center text-center space-y-6"> {/* Centered layout & vertical spacing */}

        {/* Social Icons */}
        <div className="flex space-x-6">
          {/* Replace '#' with your actual social media links */}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-200"
          >
            <FaFacebookF size={20} />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-200"
          >
            <FaInstagram size={20} />
          </a>
        </div>

        {/* Navigation Links */}
        {/* Using <nav> for semantic HTML */}
        <nav className="flex flex-wrap justify-center space-x-6 md:space-x-8"> {/* Adjusted spacing */}
          <Link href="/" className="text-sm uppercase tracking-wider text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-200">
            Home
          </Link>
          <Link href="/about" className="text-sm uppercase tracking-wider text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-200">
            About
          </Link>
          <Link href="/portfolio" className="text-sm uppercase tracking-wider text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-200">
            Portfolio
          </Link>
          <Link href="/contact" className="text-sm uppercase tracking-wider text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-200">
            Contact
          </Link>
        </nav>

        {/* Copyright Text */}
        {/* Using the text from your original code */}
        <div className="text-sm text-gray-500 dark:text-gray-400">
          © 2024 Malay. All rights reserved.
          {/* Or use the text from the image: */}
          {/* All content Copyright © 2025 The Fishy Project */}
        </div>

        {/* Scroll to Top Arrow */}
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-200 focus:outline-none"
        >
          <FaArrowUp size={20} />
        </button>

      </div>
    </footer>
  );
}