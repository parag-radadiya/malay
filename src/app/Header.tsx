'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function Header() {
  useEffect(() => {
    const btn = document.querySelector('.mobile-menu-button');
    const menu = document.querySelector('.mobile-menu');

    btn?.addEventListener('click', () => {
      menu?.classList.toggle('hidden');
    });
  }, []);
  return (
    <nav className="fixed top-0 w-full bg-transparent z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold">Malay</Link>
          </div>
          <div className="flex space-x-4">
            <div className="md:hidden flex items-center">
              <button className="mobile-menu-button">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
            <div className="md:flex items-center space-x-1">
              <Link href="/" className="py-2 px-3 text-sm font-medium rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">Home</Link>
              <Link href="/about" className="py-2 px-3 text-sm font-medium rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">About</Link>
              <Link href="/portfolio" className="py-2 px-3 text-sm font-medium rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">Portfolio</Link>
              <Link href="/contact" className="py-2 px-3 text-sm font-medium rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mobile-menu hidden md:hidden">
        <Link href="/" className="block py-2 px-4 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">Home</Link>
        <Link href="/about" className="block py-2 px-4 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">About</Link>
        <Link href="/portfolio" className="block py-2 px-4 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">Portfolio</Link>
        <Link href="/contact" className="block py-2 px-4 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">Contact</Link>
      </div>
    </nav>
  );
}