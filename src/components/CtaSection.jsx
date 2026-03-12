import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function CtaSection() {
  const navigate = useNavigate();

  return (
    <section className="bg-[#0f172a] py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Need a Powerful Local Storage Tool?</h2>
        <p className="text-xl text-gray-300 mb-10">
          This web application allows developers and users to temporarily store files directly in their browser using modern web technologies.
        </p>
        <button
          onClick={() => {
            document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="px-10 py-5 bg-white text-[#0f172a] rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
        >
          Start Using Now
        </button>
      </div>
    </section>
  );
}
