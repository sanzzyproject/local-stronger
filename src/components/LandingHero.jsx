import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function LandingHero() {
  const navigate = useNavigate();

  return (
    <section className="max-w-6xl mx-auto px-6 py-24 md:py-32">
      <div className="text-center md:text-left md:flex md:items-center md:justify-between">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-[#0f172a] leading-tight">
            Build Faster with <br className="hidden md:block" />
            <span className="text-[#0b3b7a]">Local Browser Storage</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-xl">
            Access a fast and private temporary storage system directly in your browser.
            Store files like images, videos, PDFs, APKs and other files locally using IndexedDB
            without uploading anything to external servers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button
              onClick={() => navigate('/app')}
              className="px-8 py-4 bg-[#0f172a] text-white rounded-xl font-semibold hover:bg-[#1e293b] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Get Started
            </button>
            <a
              href="https://t.me/yourchannel"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-[#0f172a] text-[#0f172a] rounded-xl font-semibold hover:bg-[#0f172a] hover:text-white transition-all duration-300"
            >
              Join Developer Channel
            </a>
          </div>
        </div>
        <div className="hidden md:block md:w-1/2">
          {/* Abstract illustration or decorative element - you can add a simple SVG here */}
          <div className="w-72 h-72 bg-gradient-to-br from-[#0b3b7a] to-[#0f172a] rounded-3xl rotate-6 opacity-10 mx-auto"></div>
        </div>
      </div>
    </section>
  );
}
