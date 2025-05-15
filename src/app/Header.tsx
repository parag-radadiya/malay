'use client';

import Link from 'next/link';
import { useState, useRef } from 'react';

const portfolioCategories = [
  { name: 'Architecture', path: '/portfolio/architecture' },
  { name: 'Residential Interiors', path: '/portfolio/residential-interiors' },
  { name: 'Office Interiors', path: '/portfolio/office-interiors' },
  { name: 'Institutions', path: '/portfolio/institutions' },
  { name: 'Restaurants & Retail', path: '/portfolio/retail' },
  { name: 'Analogue Work', path: '/portfolio/analogue-work' },
  { name: 'Non-commissioned work', path: '/portfolio/non-commissioned-work' },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);
  const [isMobilePortfolioOpen, setIsMobilePortfolioOpen] = useState(false);
  const portfolioTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handlePortfolioMouseEnter = () => {
    if (portfolioTimeoutRef.current) clearTimeout(portfolioTimeoutRef.current);
    setIsPortfolioOpen(true);
  };

  const handlePortfolioMouseLeave = () => {
    portfolioTimeoutRef.current = setTimeout(() => setIsPortfolioOpen(false), 150);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isMobileMenuOpen) setIsMobilePortfolioOpen(false);
  };

  const toggleMobilePortfolio = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMobilePortfolioOpen(!isMobilePortfolioOpen);
  };

  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
    setIsMobilePortfolioOpen(false);
  };

  const PortfolioDropdownContent = ({ onItemClick }: { onItemClick?: () => void }) => (
      <>
        {portfolioCategories.map((category) => (
            <Link
                key={category.path}
                href={category.path}
                onClick={onItemClick}
                className="block py-2 px-4 text-lg text-center text-black hover:text-gray-500 transition"
            >
              {category.name}
            </Link>
        ))}
      </>
  );

  return (
      <nav className="fixed top-0 w-full z-50 font-barlow text-white text-[14px] leading-[21px] font-medium">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="text-xl font-bold">
              Malay
            </Link>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                  onClick={toggleMobileMenu}
                  className="p-2 text-white hover:text-gray-500"
                  aria-label="Toggle menu"
                  aria-expanded={isMobileMenuOpen}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMobileMenuOpen ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-4">
              <Link href="/" className="py-2 px-3 hover:text-gray-300 transition">
                Home
              </Link>
              <Link href="/about" className="py-2 px-3 hover:text-gray-300 transition">
                About
              </Link>

              <div className="relative" onMouseEnter={handlePortfolioMouseEnter} onMouseLeave={handlePortfolioMouseLeave}>
                <Link
                    href="/portfolio"
                    className="py-2 px-3 transition flex items-center hover:text-gray-300"
                    aria-haspopup="true"
                    aria-expanded={isPortfolioOpen}
                >
                  Portfolio
                </Link>
                {isPortfolioOpen && (
                    <div
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-white shadow-lg z-50 py-2"
                        onMouseEnter={handlePortfolioMouseEnter}
                        onMouseLeave={handlePortfolioMouseLeave}
                    >
                      <PortfolioDropdownContent />
                    </div>
                )}
              </div>

              <Link href="/contact" className="py-2 px-3 hover:text-gray-300 transition">
                Contact
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
            <div className="fixed inset-0 bg-white z-50 overflow-auto flex flex-col items-center justify-center text-center font-barlow text-black">
              {/* Close Button */}
              <button
                  onClick={toggleMobileMenu}
                  className="absolute top-5 right-5 p-2 hover:text-gray-500"
                  aria-label="Close menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <Link href="/" onClick={handleMobileLinkClick} className="block py-3 px-4 text-lg hover:text-gray-500 transition">
                Home
              </Link>
              <Link href="/about" onClick={handleMobileLinkClick} className="block py-3 px-4 text-lg hover:text-gray-500 transition">
                About
              </Link>

              {/* Portfolio Dropdown Button */}
              <button
                  onClick={toggleMobilePortfolio}
                  className="w-full flex items-center justify-center py-3 px-4 text-lg hover:text-gray-500 transition"
                  aria-expanded={isMobilePortfolioOpen}
              >
                <span>Portfolio</span>
                <svg className={`w-4 h-4 ml-2 transition-transform ${isMobilePortfolioOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Portfolio Dropdown Content */}
              {isMobilePortfolioOpen && (
                  <div className="w-full bg-gray-50">
                    <PortfolioDropdownContent onItemClick={handleMobileLinkClick} />
                  </div>
              )}

              <Link href="/contact" onClick={handleMobileLinkClick} className="block py-3 px-4 text-lg hover:text-gray-500 transition">
                Contact
              </Link>
            </div>
        )}
      </nav>
  );
}
