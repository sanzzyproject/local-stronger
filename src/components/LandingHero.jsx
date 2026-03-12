import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function LandingHero() {
  const navigate = useNavigate();

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 md:py-28">
      <div className="text-center md:text-left md:flex md:items-center md:justify-between">
        <div className="md:w-1/2">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            Building digital products,<br />brands, and experience.
          </h1>
          <p className="mt-6 text-xl text-gray-600 max-w-xl">
            Collaborate with brands and agencies to create impactful results.
          </p>
          <button
            onClick={() => navigate('/app')}
            className="mt-8 px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Learn More →
          </button>
        </div>
        <div className="hidden md:block md:w-1/2">
          {/* Placeholder for illustration or abstract shape */}
          <div className="w-96 h-96 bg-gradient-to-br from-blue-100 to-blue-50 rounded-3xl"></div>
        </div>
      </div>
    </section>
  );
}
