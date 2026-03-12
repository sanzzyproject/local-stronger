import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function CtaSection() {
  const navigate = useNavigate();

  return (
    <section className="bg-blue-600 py-20">
      <div className="max-w-4xl mx-auto px-6 text-center text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">NEED A POWERFUL LOCAL STORAGE TOOL?</h2>
        <p className="text-xl text-blue-100 mb-10">
          LocalVault delivers fast, reliable, and private local storage to supercharge your workflow.
        </p>
        <button
          onClick={() => navigate('/app')}
          className="inline-flex items-center px-10 py-5 bg-white text-blue-600 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
        >
          <span className="mr-2">▶</span> START USING NOW <span className="ml-2">▶</span>
        </button>
      </div>
    </section>
  );
}
