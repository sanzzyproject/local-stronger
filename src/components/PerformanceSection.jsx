import React from 'react';

const performanceData = [
  { value: '100%', label: 'Local Storage' },
  { value: '<250ms', label: 'File Access Speed' },
  { value: '2', label: 'Core Technologies' },
  { value: '100K', label: 'Lines Optimized Code' },
];

export default function PerformanceSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Extreme Performance</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {performanceData.map((item, idx) => (
          <div key={idx} className="text-center">
            <div className="text-5xl font-bold text-blue-600 mb-2">{item.value}</div>
            <div className="text-gray-600 uppercase text-sm tracking-wider">{item.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
