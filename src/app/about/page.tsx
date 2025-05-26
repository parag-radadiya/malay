import React from "react";
import Header from "@/app/Header";

export default function About() {
    return (
        <div className="min-h-screen bg-gray-100 text-black flex flex-col items-center">
            {/* Top Section with Background Image */}
            <div
                className="relative w-full h-[100vh] bg-cover bg-center flex items-center justify-center "
                style={{ backgroundImage: "url('/images/A2.jpg')" }}
            >
                <Header />
                <div className="relative inset-0 bg-white bg-opacity-50"></div>
                <h1 className="mt-50 text-white text-4xl md:text-5xl  mb-6 uppercase text-center tracking-wider">HELLO Y'ALL!</h1>
            </div>

            {/* Content Section */}
            <div className="max-w-5xl mx-auto p-8 text-start mt-18">
                <h2 className="text-3xl font-semibold mb-4">The Story of a Photographer</h2>
                <p className="text-lg mb-4">
                    While Ishita Sitwala has studied architecture from renowned institutes namely
                    Bachelors Of Architecture from SCET, Surat and Masters in Architecture from
                    Cornell University, no later than 3 years into the practice, she ventured
                    into making a career out of her love for photography.
                </p>
                <p className="text-lg mb-4">
                    The passion for documenting and capturing buildings budded quite early,
                    while studying architecture, going back to the basics of photography through
                    Lomography and later in Chicago, documenting each & every building during
                    her few months there. But love inspired her to change her path completely.
                    Getting married to an educator who also happened to be a marvelous photographer,
                    Ravi Mistry, re-wrote the success story for her.
                </p>
                <p className="text-lg">
                    It was at this time that a few college friends gave her her first break at
                    documenting their projects, one project led to another but her eye for details
                    fastened her the way through this new field. She was lucky enough to have gotten
                    published quickly, got to document many privileged projects with some fabulous
                    architects and designers and she has not looked back ever since.
                </p>
            </div>

            {/* Circular Image Section */}
            <div className="w-64 h-64 md:w-180 md:h-180 rounded-full overflow-hidden mt-18 mb-12">
                <img src="/images/K1.jpg" alt="Profile" className="w-full h-full object-cover" />
            </div>

            {/* "As Featured In" Section (Exact Design) */}
            <div className="flex flex-col items-center text-center my-12 px-6">
                <h3 className="text-sm  tracking-widest uppercase mb-6">
                    As Featured In
                </h3>


                {/* First Row */}
                <div className="flex flex-wrap justify-center gap-9 text-gray-800 text-lg font-medium mb-2">
                    <span>ARCHDAILY</span>
                    <span>YELLOWTRACE</span>
                    <span>DOMUS WEB</span>
                    <span>DEZEEN</span>
                    <span>ARCHITECTURE DIGEST</span>
                    <span>ELLE DECOR</span>
                    <span>BEAUTIFULHOMES.IN</span>
                </div>

                {/* Second Row */}
                <div className="flex flex-wrap justify-center gap-9 text-gray-800 text-lg font-medium">
                    <span>BETTER INTERIORS</span>
                    <span>INSIDE OUTSIDE</span>
                    <span>HOME REVIEW</span>
                    <span>GOOD HOMES</span>
                    <span>HOME & DESIGN TRENDS</span>
                </div>
            </div>

            {/* Contact Button */}
            <div className="mb-20">
                <button className="bg-red-900 text-white px-6 py-3 rounded-full text-sm font-medium shadow-md hover:bg-red-700">
                    Contact Me
                </button>
            </div>
        </div>
    );
}