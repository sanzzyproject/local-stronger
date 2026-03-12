import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LandingHero() {
  const navigate = useNavigate();
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={heroRef} className="max-w-7xl mx-auto px-6 py-20 md:py-28 transition-all duration-1000 opacity-0 translate-y-10">
      <div className="text-center">
        {/* Badge dengan efek blur */}
        <div className="inline-flex items-center bg-white/80 backdrop-blur-sm text-blue-700 rounded-full px-4 py-2 text-sm font-medium mb-8 shadow-lg border border-white/20">
          <span className="w-2 h-2 bg-blue-600 rounded-full mr-2 animate-pulse"></span>
          Local Only • Free Forever
        </div>

        {/* Title dengan gradient */}
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
          Build Faster with{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
            Local Browser Storage
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
          Access a fast and private temporary storage system directly in your browser.
          Store files locally using IndexedDB – no servers, no tracking.
        </p>

        {/* Buttons with hover animations */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate('/app')}
            className="group relative px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold overflow-hidden transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105"
          >
            <span className="relative z-10">Get Started</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          <a
            href="https://t.me/yourchannel"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 hover:shadow-lg hover:scale-105 backdrop-blur-sm bg-white/30"
          >
            Join Developer Channel
          </a>
        </div>

        {/* Decorative blur elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      </div>
    </section>
  );
}
