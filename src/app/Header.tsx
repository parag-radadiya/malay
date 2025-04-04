'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';

// Define portfolio categories and their routes
const portfolioCategories = [
  { name: 'Architecture', path: '/portfolio/architecture' },
  { name: 'Residential Interiors', path: '/portfolio/residential-interiors' },
  { name: 'Office Interiors', path: '/portfolio/office-interiors' },
  { name: 'Institutions', path: '/portfolio/institutions' },
  { name: 'Restaurants', path: '/portfolio/retail' }, // both retail and Restaurants come in single page
  // { name: 'Retail', path: '/portfolio/retail' },
  // { name: 'Clubhouses', path: '/portfolio/clubhouses' },
  // { name: 'Hotels', path: '/portfolio/hotels' },
  { name: 'Analogue Work', path: '/portfolio/analogue-work' },
  { name: 'Non-commissioned work', path: '/portfolio/non-commissioned-work' },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false); // For desktop hover dropdown
  const [isMobilePortfolioOpen, setIsMobilePortfolioOpen] = useState(false); // For mobile accordion
  const portfolioTimeoutRef = useRef<NodeJS.Timeout | null>(null); // Ref for desktop hover delay

  const handlePortfolioMouseEnter = () => {
    if (portfolioTimeoutRef.current) {
      clearTimeout(portfolioTimeoutRef.current);
      portfolioTimeoutRef.current = null;
    }
    setIsPortfolioOpen(true);
  };

  const handlePortfolioMouseLeave = () => {
    // Add a small delay before closing to allow moving mouse to dropdown
    portfolioTimeoutRef.current = setTimeout(() => {
      setIsPortfolioOpen(false);
    }, 150); // Adjust delay (in ms) as needed
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Close portfolio dropdown if mobile menu is closed
    if (isMobileMenuOpen) {
      setIsMobilePortfolioOpen(false);
    }
  };

  const toggleMobilePortfolio = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent link navigation if it's a link
    setIsMobilePortfolioOpen(!isMobilePortfolioOpen);
  }

  // Close mobile menu when a link inside it is clicked
  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
    setIsMobilePortfolioOpen(false);
  }

  // Helper component for the Portfolio Dropdown Content
  const PortfolioDropdownContent = ({ onItemClick }: { onItemClick?: () => void }) => (
      <>
        {portfolioCategories.map((category) => (
            <Link
                key={category.path}
                href={category.path}
                onClick={onItemClick} // Close mobile menu on click if provided
                className="block py-2 px-4 text-sm text-center hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-300 transition-colors"
            >
              {category.name}
            </Link>
        ))}
      </>
  );

  return (
      <nav className="fixed top-0 w-full bg-transparent z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Link href="/" className="text-xl font-bold">Malay</Link>
            </div>
            <div className="flex space-x-4">

              {/* Desktop Menu & Mobile Menu Button */}
              <div className="md:hidden flex items-center">
                <div className="md:hidden">
                  <button
                      onClick={toggleMobileMenu}
                      className="mobile-menu-button p-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white"
                      aria-label="Toggle menu"
                      aria-expanded={isMobileMenuOpen}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg">
                      {isMobileMenuOpen ? (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"></path> // Close icon
                      ) : (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"></path> // Hamburger icon
                      )}
                    </svg>
                  </button>
                </div>
              </div>


              {/* Desktop Menu */}
              <div className="md:flex items-center">
                <Link href="/"
                      className="py-2 px-3 text-sm font-medium rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">Home</Link>
                <Link href="/about"
                      className="py-2 px-3 text-sm font-medium rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">About</Link>
                <div
                    className="relative"
                    onMouseEnter={handlePortfolioMouseEnter}
                    onMouseLeave={handlePortfolioMouseLeave}
                >
                  {/* Make the text itself the trigger area */}
                  <Link
                      href="/portfolio" // Or maybe just make this non-clickable and rely on dropdown? Your choice.
                      className="py-2 px-3 text-sm font-medium rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors flex items-center"
                      aria-haspopup="true"
                      aria-expanded={isPortfolioOpen}
                      // Prevent default if you don't want the main /portfolio link to be clickable
                      // onClick={(e) => e.preventDefault()}
                  >
                    Portfolio
                  </Link>
                  {/* Dropdown Menu */}
                  {isPortfolioOpen && (
                      <div
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-white dark:bg-gray-800 rounded-md shadow-xl z-50 py-2"
                          // Keep open when mouse enters the dropdown itself
                          onMouseEnter={handlePortfolioMouseEnter}
                          onMouseLeave={handlePortfolioMouseLeave}
                      >
                        <PortfolioDropdownContent/>
                      </div>
                  )}
                </div>
                <Link href="/contact"
                      className="py-2 px-3 text-sm font-medium rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">Contact</Link>
              </div>
            </div>
          </div>
        </div>


        {/* Mobile Portfolio Accordion */}
        <div
            className={`mobile-menu md:hidden bg-white dark:bg-gray-900 ${isMobileMenuOpen ? 'block' : 'hidden'} absolute w-full shadow-lg`}>
          <Link href="/" onClick={handleMobileLinkClick}
                className="block py-3 px-4 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">Home</Link>
          <Link href="/about" onClick={handleMobileLinkClick}
                className="block py-3 px-4 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">About</Link>
          <div>
            <button
                onClick={toggleMobilePortfolio}
                className="w-full flex justify-between items-center py-3 px-4 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-expanded={isMobilePortfolioOpen}
            >
              <span>Portfolio</span>
              {/* Arrow Icon */}
              <svg
                  className={`w-4 h-4 transition-transform duration-200 ${isMobilePortfolioOpen ? 'rotate-180' : 'rotate-0'}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            {/* Portfolio Sub-menu (Collapsible) */}
            {isMobilePortfolioOpen && (
                <div className="pl-4 bg-gray-50 dark:bg-gray-800/50">
                  <PortfolioDropdownContent onItemClick={handleMobileLinkClick}/>
                </div>
            )}
          </div>

          <Link href="/contact" onClick={handleMobileLinkClick}
                className="block py-3 px-4 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">Contact</Link>
        </div>

      </nav>
  )
      ;
}