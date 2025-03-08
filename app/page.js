"use client"; // ✅ Tells Next.js to run this component in the client only

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
    const text = "Coming Soon...";
    const [displayedText, setDisplayedText] = useState("");
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText((prev) => prev + text[index]);
                setIndex(index + 1);
            }, 150);
            return () => clearTimeout(timeout);
        }
    }, [index]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-6">
            {/* Logo */}
            <div className="w-40 md:w-56 lg:w-64 mb-4">
                <Image src="/logo.png" alt="Coach Asmaa Logo" width={300} height={300} className="w-full" />
            </div>

            {/* Main Content */}
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg text-center max-w-md w-full mt-2">
                {/* Coach's Photo */}
                <Image
                    src="/asmaa.jpg"
                    alt="Coach Asmaa"
                    width={300}
                    height={300}
                    className="rounded-full mx-auto border-4 border-gray-300 w-40 md:w-48 lg:w-56"
                />

                {/* Animated Typing Effect */}
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 font-handwriting">
                    {displayedText}
                </h1>

                {/* Short Program Description */}
                <p className="text-gray-600 mt-4 text-sm md:text-base">
                    Coach Asmaa specializes in <strong>mental solutions for eating disorders</strong>.
                    Our program helps you develop a <strong>healthy mindset</strong> and <strong>sustainable habits</strong>.
                </p>

                {/* Stripe Payment Button */}
                <a
                    href="YOUR_STRIPE_PAYMENT_LINK"
                    target="_blank"
                    className="mt-6 inline-block bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-blue-600 transition w-full md:w-auto"
                >
                    Enroll Now
                </a>
            </div>
        </div>
    );
}
