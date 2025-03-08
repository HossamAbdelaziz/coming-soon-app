"use client";

import Image from "next/image";
import Typewriter from "typewriter-effect";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-6">
            {/* Logo - Bigger and Better Positioned */}
            <div className="w-40 md:w-56 lg:w-64 mb-4">
                <Image src="/logo.png" alt="Coach Asmaa Logo" width={300} height={300} className="w-full" />
            </div>

            {/* Main Content */}
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg text-center max-w-md w-full mt-2">
                {/* Coach's Photo - Responsive */}
                <Image
                    src="/asmaa.jpg"
                    alt="Coach Asmaa"
                    width={300}
                    height={300}
                    className="rounded-full mx-auto border-4 border-gray-300 w-40 md:w-48 lg:w-56"
                />

                {/* Animated Typing Effect for Coming Soon */}
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 font-handwriting">
                    <Typewriter
                        options={{
                            strings: ["Coming Soon..."],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </h1>

                {/* Short Program Description - Responsive Text */}
                <p className="text-gray-600 mt-4 text-sm md:text-base">
                    Coach Asmaa specializes in <strong>mental solutions for eating disorders</strong>.
                    Our program helps you develop a <strong>healthy mindset</strong> and <strong>sustainable habits</strong>.
                </p>

                {/* Stripe Payment Button - Full Width on Mobile */}
                <a
                    href="https://buy.stripe.com/bIY2bO0kO7L9gpiaEF"
                    target="_blank"
                    className="mt-6 inline-block bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-blue-600 transition w-full md:w-auto"
                >
                    Enroll Now
                </a>
            </div>
        </div>
    );
}
