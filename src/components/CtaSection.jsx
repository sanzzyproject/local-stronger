import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function CtaSection() {
  const navigate = useNavigate();

  return (
    <section className="relative bg-blue-600 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-500"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>

      <div className="relative max-w-4xl mx-auto px-6 text-center text-white">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">Need a Powerful Local Storage Tool?</h2>
        <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
          LocalVault delivers fast, reliable, and private local storage to supercharge your workflow.
        </p>
        <button
          onClick={() => navigate('/app')}
          className="group relative px-12 py-5 bg-white text-blue-600 rounded-xl font-bold text-lg overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
        >
          <span className="relative z-10">Start Using Now →</span>
          <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
      </div>
    </section>
  );
}
