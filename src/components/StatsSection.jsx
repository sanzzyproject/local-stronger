import React from 'react';

const stats = [
  { value: '5000+', label: 'Files Stored' },
  { value: '10K+', label: 'Active Users' },
  { value: '50+', label: 'Supported File Types' },
];

export default function StatsSection() {
  return (
    <section className="bg-blue-600 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center text-white">
          {stats.map((stat, idx) => (
            <div key={idx}>
              <div className="text-5xl font-bold mb-2">{stat.value}</div>
              <div className="text-lg text-blue-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
