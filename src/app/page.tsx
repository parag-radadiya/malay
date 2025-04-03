"use client";

import { useState, useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import Image from "next/image";
import Link from "next/link";
import Header from "./Header";

interface ImageSliderProps {
  images: string[];
  interval?: number;
  className?: string;
  onIndexChange?: (index: number) => void; // To notify parent of index changes
}

const ImageSlider = forwardRef<{ goToPrev: () => void; goToNext: () => void }, ImageSliderProps>(
  ({ images, interval = 5000, className, onIndexChange }, ref) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Function to update index and notify parent
    const updateIndex = (newIndex: number) => {
      // Ensure index wraps around correctly
      const normalizedIndex = (newIndex + images.length) % images.length;
      setCurrentIndex(normalizedIndex);
      onIndexChange?.(normalizedIndex); // Call the callback if provided
    };

    useImperativeHandle(ref, () => ({
      goToPrev,
      goToNext
    }));

    useEffect(() => {
      // Notify parent of the initial index
      if (images.length > 0) {
         onIndexChange?.(currentIndex);
      }

      // Only set interval if there's more than one image
      let timer: NodeJS.Timeout | null = null;
      if (images.length > 1) {
        timer = setInterval(() => {
          updateIndex(currentIndex + 1); // Use the update function
        }, interval);
      }

      return () => {
        if (timer) clearInterval(timer);
      };
      // Add currentIndex and onIndexChange to dependency array
      // Run effect when images array itself changes too
    }, [images, interval, currentIndex, onIndexChange]); 

    const goToPrev = () => {
      console.log("goToPrev called via ref");
      updateIndex(currentIndex - 1); // Use the update function
    };

    const goToNext = () => {
      console.log("goToNext called via ref");
      updateIndex(currentIndex + 1); // Use the update function
    };

    // Handle case where images array might be empty
    if (!images || images.length === 0) {
      return <div className="w-full h-full bg-gray-200"></div>; // Placeholder for no images
    }

    return (
      // Removed the outer 'group' div and internal buttons
      <div className="relative w-full h-full">
        <Image
          // Add a key to help React with transitions when the src changes
          key={images[currentIndex]} 
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          fill
          className={`${className} pointer-events-none transition-opacity duration-700 ease-in-out`} // Basic fade transition
          priority={currentIndex === 0} // Prioritize the first image
        />
      </div>
    );
  }
);


const ImageSliderWithRef = ImageSlider;

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<{goToPrev: () => void, goToNext: () => void}>(null);

  // Define the images and their corresponding portfolio links
const sliderItems = [
  { image: '/images/A1.jpg', link: '/portfolio/project-a1', title: 'INTERIOR' }, // Example title
  { image: '/images/A2.jpg', link: '/portfolio/project-a2', title: 'LIVING ROOM' },
  { image: '/images/B1.jpg', link: '/portfolio/project-b1', title: 'BEDROOM DESIGN' },
  { image: '/images/B2.jpg', link: '/portfolio/project-b2', title: 'MODERN KITCHEN' },
  { image: '/images/B3.jpg', link: '/portfolio/project-b3', title: 'OFFICE SPACE' },
  { image: '/images/B4.jpg', link: '/portfolio/project-b4', title: 'EXTERIOR VIEW' },
];

// Extract just the image paths for the ImageSlider component
const images = sliderItems.map(item => item.image);
  // Determine the current portfolio link and title based on the index
  const currentItem = sliderItems[currentIndex] || sliderItems[0]; // Fallback to first item
  const currentPortfolioLink = currentItem.link;
  const currentTitle = currentItem.title; // Get the title

  const handlePrevClick = () => {
    sliderRef.current?.goToPrev();
  };

  const handleNextClick = () => {
    sliderRef.current?.goToNext();
  };

  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 -z-10">
        <ImageSlider 
          ref={sliderRef}
          images={images}
          interval={5000}
          className="object-cover"
          onIndexChange={setCurrentIndex}
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      <Header />
      
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          <div className="flex gap-4">
          <button
        type="button"
        onClick={handlePrevClick}
        className="absolute top-1/2 left-4 md:left-8 -translate-y-1/2 z-10 flex items-center justify-center h-10 w-10 md:h-12 md:w-12 rounded-full bg-black/30 hover:bg-black/50 cursor-pointer group focus:outline-none transition-colors duration-300"
        aria-label="Previous Slide"
      >
        <svg className="w-4 h-4 md:w-5 md:h-5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
        </svg>
      </button>
      <button
        type="button"
        onClick={handleNextClick}
        className="absolute top-1/2 right-4 md:right-8 -translate-y-1/2 z-10 flex items-center justify-center h-10 w-10 md:h-12 md:w-12 rounded-full bg-black/30 hover:bg-black/50 cursor-pointer group focus:outline-none transition-colors duration-300"
        aria-label="Next Slide"
      >
        <svg className="w-4 h-4 md:w-5 md:h-5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
        </svg>
      </button>
          </div>
          <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white p-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-wider uppercase text-center" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>
          {currentTitle}
        </h1>
          <Link
          href={currentPortfolioLink}
          className="py-2 px-5 bg-white/80 text-black rounded hover:bg-white transition-colors duration-300 text-base font-semibold shadow-md backdrop-blur-sm mt-4" // Adjusted styling
        >
          View Project {/* Changed text slightly */}
        </Link>
        </div>
        </main>
      </div>
    </div>
  );
}
