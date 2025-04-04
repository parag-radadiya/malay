"use client";

// src/components/ImageGalleryPage.tsx
import React, { useState, useEffect } from "react";
import Header from "@/app/Header";

interface ImageGalleryPageProps {
  images: string[];
  backgroundImage: string;
  title: string;
}

export default function ImageGalleryPage({
  images,
  backgroundImage,
  title
}: ImageGalleryPageProps) {
  const [isMobile, setIsMobile] = useState(false);

  // Effect to detect screen size
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkIsMobile();

    // Add event listener for window resize
    window.addEventListener('resize', checkIsMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  return (
    <div className="bg-white flex flex-col">
      {/* Hero Section */}
      <div className="relative h-[94vh]">
        {/* Background Image */}
        <div className={`absolute inset-0 bg-cover bg-center`} style={{ backgroundImage: `url('${backgroundImage}')` }}></div>
        <Header />
        {/* Overlay */}
        <div className="relative inset-0 bg-black bg-opacity-40"></div>

        {/* Page Title */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <h1 className="portfolio-title text-[40px]">{title}</h1>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="p-8 max-w-9/10 mx-auto">
        <div className="grid grid-cols-2 gap-2">
          {images.map((src, index) => (
            <div
              key={index}
              className={`overflow-hidden ${generateGridSpan(index, images.length, isMobile)}`}
            >
              <img
                src={src}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* Dynamic grid layout generator */
function generateGridSpan(index: number, totalImages: number, isMobile: boolean) {
  // Desktop pattern for larger screens
  const desktopPattern = [
    "col-span-1 row-span-3",
    "col-span-1 row-span-1",
    "col-span-1 row-span-2",
    "col-span-1 row-span-1",
    "col-span-2 row-span-1",
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
    "col-span-2 row-span-2",
    "col-span-1 row-span-1",
    "col-span-1 row-span-1"
  ];

  // Mobile pattern with 1 image per row
  const mobilePattern = ["col-span-2 row-span-2"];

  // Select the appropriate pattern based on screen size
  const basePattern = isMobile ? mobilePattern : desktopPattern;

  // Use modulo to cycle through the pattern for any number of images
  const patternIndex = index % basePattern.length;
  return basePattern[patternIndex];
}