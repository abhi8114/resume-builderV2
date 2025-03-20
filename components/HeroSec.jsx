import React from 'react';
import { CardSpotlight } from './ui/card-spotlight';
import Link from 'next/link';

const HeroSec = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-purple-50 py-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Left Side: Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Build Your Perfect Resume with AI
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Smart Resume Creation - Generate ATS-optimized resumes with AI assistance.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <Link href="/resume">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
              Create Your Resume Now
            </button>
            </Link>
            <button className="bg-transparent border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition duration-300">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Side: Image or Illustration */}
        <div className="md:w-1/2 mt-10 md:mt-0">
          <img
            src="/illustration2.png" // Replace with your image path
            alt="Resume Illustration"
            className="w-full h-auto"
          />
        </div>
      </div>
      
    </section>
    
  );
};

export default HeroSec;