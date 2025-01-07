"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Github, ArrowRight } from "lucide-react";
import Link from "next/link";

const GridBackground = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="relative w-full h-full">
                {/* Horizontal lines */}
                {[...Array(20)].map((_, i) => (
                    <div
                        key={`h-${i}`}
                        className="absolute w-full h-px bg-gray-700/20"
                        style={{ top: `${(i + 1) * 5}%` }}
                    />
                ))}

                {/* Vertical lines */}
                {[...Array(20)].map((_, i) => (
                    <div
                        key={`v-${i}`}
                        className="absolute top-0 bottom-0 w-px bg-gray-700/20"
                        style={{ left: `${(i + 1) * 5}%` }}
                    />
                ))}
            </div>
        </div>
    );
};

const descriptions = [
    "Master the command line through an interactive and fun learning experience.",
    "Engage in hands-on practice with real-time feedback.",
    "Perfect for beginners and experienced users alike.",
    "Contribute to open-source and improve together!",
];

const HomePage = () => {
    const [currentDescription, setCurrentDescription] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDescription((prev) => (prev + 1) % descriptions.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative min-h-screen bg-gray-900 text-gray-200">
            <GridBackground />

            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-6">
                {/* Logo Section */}
                <div className="text-center mb-8">
                    <Image
                        src="/l1.png"
                        alt="App Logo"
                        width={300}
                        height={300}
                        className="mx-auto rounded-full shadow-lg"
                        priority
                    />
                    <h1 className="text-4xl font-extrabold text-green-400 mt-4">
                        GitashLearn
                    </h1>
                </div>

                {/* Animated Description Section */}
                <div className="relative max-w-xl text-center h-16">
                    <p
                        key={currentDescription}
                        className="uppercase text-[24px] bg-transparent px-6 py-3 font-work-sans font-bold text-white opacity-0 animate-float-in"
                    >
                        {descriptions[currentDescription]}
                    </p>
                </div>

                {/* Buttons Section */}
                <div className="mt-16 flex gap-6">
                    <Link
                        href="https://github.com/your-repo-url"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-all duration-300 shadow-md hover:shadow-xl"
                    >
                        <Github className="w-5 h-5" />
                        Contribute on GitHub
                    </Link>

                    <Link
                        href="/gitash"
                        className="flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-400 text-white rounded-lg transition-all duration-300 shadow-md hover:shadow-xl"
                    >
                        <ArrowRight className="w-5 h-5" />
                        Continue
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HomePage;