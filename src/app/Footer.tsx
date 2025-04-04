'use client';

import Link from 'next/link';
import { useState, useRef } from 'react';
import { FaFacebookF, FaInstagram, FaArrowUp } from 'react-icons/fa';

const portfolioCategories = [
  { name: 'Architecture', path: '/portfolio/architecture' },
  { name: 'Residential Interiors', path: '/portfolio/residential-interiors' },
  { name: 'Office Interiors', path: '/portfolio/office-interiors' },
  { name: 'Institutions', path: '/portfolio/institutions' },
  { name: 'Restaurants & Retail', path: '/portfolio/retail' },
  { name: 'Analogue Work', path: '/portfolio/analogue-work' },
  { name: 'Non-commissioned work', path: '/portfolio/non-commissioned-work' },
];

export default function Footer() {
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);
  const portfolioTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handlePortfolioMouseEnter = () => {
    if (portfolioTimeoutRef.current) clearTimeout(portfolioTimeoutRef.current);
    setIsPortfolioOpen(true);
  };

  const handlePortfolioMouseLeave = () => {
    portfolioTimeoutRef.current = setTimeout(() => setIsPortfolioOpen(false), 150);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
      <footer className="w-full bg-white py-8 h-[80vh]">
        <div className="max-w-6xl mx-auto px-4 flex flex-col items-center text-center space-y-6 mt-40">

          {/* Social Icons */}
          <div className="flex space-x-6">
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-black hover:text-gray-500 transition">
              <FaFacebookF size={20} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-black hover:text-gray-500 transition">
              <FaInstagram size={20} />
            </a>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center space-x-6 md:space-x-8 mt-10">
            <Link href="/" className="text-sm uppercase tracking-wider text-black hover:text-gray-500 transition">Home</Link>
            <Link href="/about" className="text-sm uppercase tracking-wider text-black hover:text-gray-500 transition">About</Link>

            {/* Portfolio Dropdown */}
            <div
                className="relative"
                onMouseEnter={handlePortfolioMouseEnter}
                onMouseLeave={handlePortfolioMouseLeave}
            >
              <Link href="/portfolio" className="text-sm uppercase tracking-wider text-black hover:text-gray-500 transition">Portfolio</Link>

              {/* Dropdown Menu */}
              {isPortfolioOpen && (
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 bg-white shadow-lg z-50 py-2 text-center">
                    {portfolioCategories.map((category) => (
                        <Link
                            key={category.path}
                            href={category.path}
                            className="block py-2 px-4 text-sm text-black hover:text-gray-500 transition"
                        >
                          {category.name}
                        </Link>
                    ))}
                  </div>
              )}
            </div>

            <Link href="/contact" className="text-sm uppercase tracking-wider text-black hover:text-gray-500 transition">Contact</Link>
          </nav>

          {/* Copyright Text */}
          <div className="text-sm text-gray-500 dark:text-gray-400 mt-5">
            © 2024 Malay. All rights reserved.
          </div>

          {/* Scroll to Top Arrow */}
          <button onClick={scrollToTop} aria-label="Scroll to top" className="text-gray-500 hover:text-gray-900 transition mt-10">
            <FaArrowUp size={20} />
          </button>

        </div>
      </footer>
  );
}
