import React from 'react';

const metrics = [
  { value: '100%', label: 'Local Storage' },
  { value: '<250ms', label: 'File Access' },
  { value: '2', label: 'Core Tech' },
  { value: '100K', label: 'Lines Code' },
];

export default function PerformanceSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
        Extreme <span className="text-blue-600">Performance</span>
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {metrics.map((item, idx) => (
          <div key={idx} className="group">
            <div className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{item.value}</div>
              <div className="text-gray-600 uppercase text-sm tracking-wider">{item.label}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
