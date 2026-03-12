import React from 'react';

const stats = [
  { value: '5000+', label: 'Files Stored' },
  { value: '10K+', label: 'Active Users' },
  { value: '50+', label: 'Supported Types' },
];

export default function StatsSection() {
  return (
    <section className="relative bg-blue-600 py-20 overflow-hidden">
      {/* Background blur circles */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center text-white">
          {stats.map((stat, idx) => (
            <div key={idx} className="backdrop-blur-sm bg-white/10 rounded-2xl p-8 border border-white/20">
              <div className="text-5xl font-bold mb-2">{stat.value}</div>
              <div className="text-lg text-blue-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
