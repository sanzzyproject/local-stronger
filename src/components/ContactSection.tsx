import React from 'react';

export default function ContactSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 bg-gray-50">
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Tell me about your next project
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <a
            href="mailto:developer@example.com"
            className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Email Me
          </a>
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
