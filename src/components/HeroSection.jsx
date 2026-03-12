import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 md:py-28">
      <div className="text-center">
        {/* Badge */}
        <div className="inline-flex items-center bg-blue-50 text-blue-700 rounded-full px-4 py-2 text-sm font-medium mb-8">
          <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
          Local Only • Free Forever
        </div>

        {/* Main Title */}
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
          Build Faster with{' '}
          <span className="text-blue-600">Local Browser Storage</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
          Access a fast and private temporary storage system directly in your browser.
          Store files like images, videos, PDFs, APKs and other files locally using IndexedDB
          without uploading anything to external servers.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate('/app')}
            className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Get Started
          </button>
          <a
            href="https://t.me/yourchannel"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
          >
            Join Developer Channel
          </a>
        </div>
      </div>
    </section>
  );
}
