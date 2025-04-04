import Header from "@/app/Header";
import React from "react";
import ImageGalleryPage from "@/app/components/ImageGalleryPage";

export default function ResidentialInteriors() {
    const images = [
        "/images/A.jpg", "/images/A2.jpg", "/images/B.jpg", "/images/B4.jpg",
        "/images/B5.jpg", "/images/B6.jpg", "/images/C.jpg", "/images/FA.jpg",
        "/images/FB.jpg", "/images/K1.jpg", "/images/K2.jpg", "/images/P1.jpg",
        "/images/P2.jpg", "/images/PB.jpg", "/images/A1.jpg", "/images/B1.jpg",
        "/images/B2.jpg", "/images/B3.jpg", "/images/FB.jpg", "/images/K1.jpg",
        "/images/A.jpg", "/images/A2.jpg", "/images/B.jpg", "/images/B4.jpg",
        "/images/B5.jpg", "/images/B6.jpg", "/images/C.jpg", "/images/FA.jpg",
        "/images/FB.jpg", "/images/K1.jpg", "/images/K2.jpg", "/images/P1.jpg",
        "/images/P2.jpg", "/images/PB.jpg", "/images/A1.jpg", "/images/B1.jpg",
        "/images/B2.jpg", "/images/B3.jpg", "/images/FB.jpg", "/images/K1.jpg",
    ];

    return (
        <ImageGalleryPage 
            images={images} 
            backgroundImage="/images/MB1.jpg" 
            title="ARCHITECTURE PHOTOGRAPHY" 
        />
    );
}
