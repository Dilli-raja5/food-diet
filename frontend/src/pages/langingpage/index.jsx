import React from 'react';
import { Outlet } from 'react-router-dom';

export default function LandingPage() {
    return (
        <div className="flex flex-col lg:flex-row h-screen w-full">
            {/* Left Side (Image) */}
            <div className="flex flex-col justify-center items-center w-full lg:items-center lg:h-full lg:w-1/2">                
                <div className="text-center m-1 mt-3 pt-2"> 
                    <div className="text-3xl font-bold text-green-800 mb-2">🥗 Recipe & Nutrition Tracker</div>
                    <p className="text-sm text-gray-600"> Helping clients eat better and live healthier.</p>
                </div>
                <img
                    src="/images/plan2.webp"
                    alt="Logo"
                    className="object-contain"
                />
            </div>

            {/* Right Side (Forms) */}
            <div className="flex flex-col justify-center w-full lg:w-1/2 h-1/2 lg:h-full">
                <Outlet />
            </div>
        </div>
    );
}
