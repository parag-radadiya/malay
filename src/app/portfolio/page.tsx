import { IoIosArrowRoundForward } from "react-icons/io";
import Link from "next/link";
import Header from "@/app/Header";
import React from "react";

export default function Portfolio() {
    return (
        <div className="bg-white flex flex-col">
            {/* First Section */}
            <div className="relative h-[94vh]">
                {/* Background Image */}
                <div className="absolute inset-0 bg-cover bg-center bg-[url('/images/K2.jpg')]"></div>
                <Header />
                {/* Overlay (for better readability) */}
                <div className="relative inset-0 bg-black bg-opacity-40"></div>

                {/* Portfolio Links */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
                    <h1 className="text-white text-4xl font-bold tracking-wide text-center">
                        PORTFOLIO LINKS
                    </h1>
                </div>
            </div>

            {/* Second Section */}
            <Link href="/portfolio/architecture" className="relative min-h-screen mt-20 flex items-center justify-start bg-cover bg-center bg-[url('/images/A.jpg')] px-6 sm:px-16 block">
                {/* Dark overlay for readability */}
                <div className="relative inset-0 bg-black bg-opacity-40"></div>

                {/* Text & Link */}
                <div className="flex relative">
                    <div className="text-white text-left">
                        <h2 className="text-3xl sm:text-4xl font-bold">Architecture Photography</h2>
                    </div>
                    <div className="absolute mt-70 text-left">
                        <svg
                            width="140"
                            height="25"
                            viewBox="0 0 150 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <line x1="2" y1="12" x2="148" y2="12" stroke="#FFFFFF" strokeWidth="2" />
                            <polyline points="138,4 148,12 138,20" fill="none" stroke="#FFFFFF" strokeWidth="2" />
                        </svg>
                    </div>
                </div>
            </Link>
            {/* 3 Section */}
            <Link href="/portfolio/residential-interiors" className="relative min-h-screen mt-20 flex items-center justify-start bg-cover bg-center bg-[url('/images/P1.jpg')] px-6 sm:px-16 block">
                {/* Dark overlay for readability */}
                <div className="relative inset-0 bg-black bg-opacity-40"></div>

                {/* Text & Link */}
                <div className="flex relative">
                    <div className="text-white text-left">
                        <h2 className="text-3xl sm:text-4xl font-bold">Residential Interior Photography</h2>
                    </div>
                    <div className="absolute mt-70 text-left">
                        <svg
                            width="140"
                            height="25"
                            viewBox="0 0 150 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <line x1="2" y1="12" x2="148" y2="12" stroke="#FFFFFF" strokeWidth="2" />
                            <polyline points="138,4 148,12 138,20" fill="none" stroke="#FFFFFF" strokeWidth="2" />
                        </svg>
                    </div>
                </div>
            </Link>
            {/* 4 Section */}
            <Link href="/portfolio/office-interiors" className="relative min-h-screen mt-20 flex items-center justify-start bg-cover bg-center bg-[url('/images/PB.jpg')] px-6 sm:px-16 block">
                {/* Dark overlay for readability */}
                <div className="relative inset-0 bg-black bg-opacity-40"></div>

                {/* Text & Link */}
                <div className="flex relative">
                    <div className="text-white text-left">
                        <h2 className="text-3xl sm:text-4xl font-bold">Office Interiors Photography</h2>
                    </div>
                    <div className="absolute mt-70 text-left">
                        <svg
                            width="140"
                            height="25"
                            viewBox="0 0 150 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <line x1="2" y1="12" x2="148" y2="12" stroke="#FFFFFF" strokeWidth="2" />
                            <polyline points="138,4 148,12 138,20" fill="none" stroke="#FFFFFF" strokeWidth="2" />
                        </svg>
                    </div>
                </div>
            </Link>
            {/* 5 Section */}
            <Link href="/portfolio/institutions" className="relative min-h-screen mt-20 flex items-center justify-start bg-cover bg-center bg-[url('/images/P2.jpg')] px-6 sm:px-16 block">
                {/* Dark overlay for readability */}
                <div className="relative inset-0 bg-black bg-opacity-40"></div>

                {/* Text & Link */}
                <div className="flex relative">
                    <div className="text-white text-left">
                        <h2 className="text-3xl sm:text-4xl font-bold">Institution Photography</h2>
                    </div>
                    <div className="absolute mt-70 text-left">
                        <svg
                            width="140"
                            height="25"
                            viewBox="0 0 150 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <line x1="2" y1="12" x2="148" y2="12" stroke="#FFFFFF" strokeWidth="2" />
                            <polyline points="138,4 148,12 138,20" fill="none" stroke="#FFFFFF" strokeWidth="2" />
                        </svg>
                    </div>
                </div>
            </Link>
            {/* 6 Section */}
            <Link href="/portfolio/retail" className="relative min-h-screen mt-20 flex items-center justify-start bg-cover bg-center bg-[url('/images/B3.jpg')] px-6 sm:px-16 block">
                {/* Dark overlay for readability */}
                <div className="relative inset-0 bg-black bg-opacity-40"></div>

                {/* Text & Link */}
                <div className="flex relative">
                    <div className="text-white text-left">
                        <h2 className="text-3xl sm:text-4xl font-bold">Retail & Restaurants Photography</h2>
                    </div>
                    <div className="absolute mt-70 text-left">
                        <svg
                            width="140"
                            height="25"
                            viewBox="0 0 150 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <line x1="2" y1="12" x2="148" y2="12" stroke="#FFFFFF" strokeWidth="2" />
                            <polyline points="138,4 148,12 138,20" fill="none" stroke="#FFFFFF" strokeWidth="2" />
                        </svg>
                    </div>
                </div>
            </Link>
            {/* 7 Section */}
            <Link href="/portfolio/clubhouses" className="relative min-h-screen mt-20 flex items-center justify-start bg-cover bg-center bg-[url('/images/C.jpg')] px-6 sm:px-16 block">
                {/* Dark overlay for readability */}
                <div className="relative inset-0 bg-black bg-opacity-40"></div>

                {/* Text & Link */}
                <div className="flex relative">
                    <div className="text-white text-left">
                        <h2 className="text-3xl sm:text-4xl font-bold">Clubhouses Photography</h2>
                    </div>
                    <div className="absolute mt-70 text-left">
                        <svg
                            width="140"
                            height="25"
                            viewBox="0 0 150 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <line x1="2" y1="12" x2="148" y2="12" stroke="#FFFFFF" strokeWidth="2" />
                            <polyline points="138,4 148,12 138,20" fill="none" stroke="#FFFFFF" strokeWidth="2" />
                        </svg>
                    </div>
                </div>
            </Link>
            {/* 8 Section */}
            <Link href="/portfolio/analogue-work" className="relative min-h-screen mt-20 flex items-center justify-start bg-cover bg-center bg-[url('/images/FA.jpg')] px-6 sm:px-16 block">
                {/* Dark overlay for readability */}
                <div className="relative inset-0 bg-black bg-opacity-40"></div>

                {/* Text & Link */}
                <div className="flex relative">
                    <div className="text-white text-left">
                        <h2 className="text-3xl sm:text-4xl font-bold">Analogue Photography I Personal</h2>
                    </div>
                    <div className="absolute mt-70 text-left">
                        <svg
                            width="140"
                            height="25"
                            viewBox="0 0 150 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <line x1="2" y1="12" x2="148" y2="12" stroke="#FFFFFF" strokeWidth="2" />
                            <polyline points="138,4 148,12 138,20" fill="none" stroke="#FFFFFF" strokeWidth="2" />
                        </svg>
                    </div>
                </div>
            </Link>
            {/* 9 Section */}
            <Link href="/portfolio/non-commissioned-work" className="relative min-h-screen mt-20 flex items-center justify-start bg-cover bg-center bg-[url('/images/FP1.jpg')] px-6 sm:px-16 block">
                {/* Dark overlay for readability */}
                <div className="relative inset-0 bg-black bg-opacity-40"></div>

                {/* Text & Link */}
                <div className="flex relative">
                    <div className="text-white text-left">
                        <h2 className="text-3xl sm:text-4xl font-bold">Non-commissioned I Personal</h2>
                    </div>
                    <div className="absolute mt-70 text-left">
                        <svg
                            width="140"
                            height="25"
                            viewBox="0 0 150 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <line x1="2" y1="12" x2="148" y2="12" stroke="#FFFFFF" strokeWidth="2" />
                            <polyline points="138,4 148,12 138,20" fill="none" stroke="#FFFFFF" strokeWidth="2" />
                        </svg>
                    </div>
                </div>
            </Link>

        </div>
    );
}