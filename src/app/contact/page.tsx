import Header from "@/app/Header";
import React from "react";

export default function Contact() {
    return (
        <div className="relative min-h-screen flex flex-col bg-[#fdf9f7]">
            {/* Background Image Section */}
            <div
                className="relative w-full h-[80vh] bg-cover bg-center flex flex-col items-center justify-center px-6 text-center"
                style={{ backgroundImage: "url('/images/MB1.jpg')" }} // Replace with your actual image path
            >
                <Header />
                <div className="absolute inset-0 bg-black/40"></div> {/* Dark overlay */}
                <h1 className="relative text-5xl sm:text-6xl mt-96 text-white tracking-wider uppercase">Get in Touch</h1>
                <p className="relative text-lg sm:text-xl mt-2 text-white uppercase">Always excited to talk!</p>
            </div>

            {/* New Section After Image */}
            <div className="bg-[#fdf9f7] max-w-4xl w-full mx-auto p-6 sm:p-10 text-start mt-10 ">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">Would love to hear from you!</h2>
                <p className="text-sm sm:text-base text-gray-600 mt-4 font-semibold leading-relaxed">
                    Irrespective of whether you have a project to document or just want to talk about
                    architecture and architecture photography in general or simply to say Hello, do give
                    a shout out on Instagram or email at
                    <a href="mailto:ishi@thefishyproject.com" className="text-blue-600 font-medium ml-1 underline">
                        ishi@thefishyproject.com
                    </a>.
                </p>
            </div>

            {/* Contact Form Section */}
            <div className="max-w-4xl w-full bg-white p-8 mt-12 mx-auto mb-15">
                <form>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Your Name *</label>
                        <input
                            type="text"
                            className="w-full border-b border-gray-400 py-2 px-3 focus:outline-none focus:border-gray-700 text-black"
                            placeholder="Enter your name"
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Email Address *</label>
                        <input
                            type="email"
                            className="w-full border-b border-gray-400 py-2 px-3 focus:outline-none focus:border-gray-700 text-black"
                            placeholder="Enter your email"
                        />
                    </div>

                    {/* Project Type Radio Buttons */}
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2">What type of project do you want to document?</label>
                        <div className="text-gray-600">
                            <label className="flex items-center mb-2">
                                <input type="radio" name="projectType" className="mr-2" /> Architecture
                            </label>
                            <label className="flex items-center mb-2">
                                <input type="radio" name="projectType" className="mr-2" /> Residential Interiors
                            </label>
                            <label className="flex items-center mb-2">
                                <input type="radio" name="projectType" className="mr-2" /> Office Interiors
                            </label>
                            <label className="flex items-center">
                                <input type="radio" name="projectType" className="mr-2" /> Other
                            </label>
                        </div>
                    </div>

                    {/* How Did You Hear About Me? Dropdown */}
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2">How did you hear about me?</label>
                        <select className="w-full border-b border-gray-400 py-2 px-3 focus:outline-none focus:border-gray-700 text-black">
                            <option className="text-black hover:bg-gray-100">Select option</option>
                            <option className="text-black hover:bg-gray-100">Instagram</option>
                            <option className="text-black hover:bg-gray-100">Website</option>
                            <option className="text-black hover:bg-gray-100">Friend</option>
                            <option className="text-black hover:bg-gray-100">Other</option>
                        </select>
                    </div>

                    {/* Project Details Textarea */}
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Please give some details about your project *</label>
                        <textarea
                            className="w-full border-b border-gray-400 py-2 px-3 focus:outline-none focus:border-gray-700 text-black"

                            placeholder="Describe your project..."
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="text-center">
                        <button
                            type="submit"
                            className="bg-[#b55656] text-white py-3 px-6 rounded-full shadow-md hover:bg-[#a34c4c] transition duration-200"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>

        </div>
    );
}