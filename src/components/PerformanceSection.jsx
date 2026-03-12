import React from 'react';

const performanceData = [
  { value: '100%', label: 'Local Storage' },
  { value: '<250ms', label: 'File Access Speed' },
  { value: '2', label: 'Core Technologies' },
  { value: '100K', label: 'Lines Optimized Code' },
];

export default function PerformanceSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <h2 className="text-4xl font-bold text-center text-[#0f172a] mb-16">Extreme Performance</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {performanceData.map((item, idx) => (
          <div key={idx} className="text-center">
            <div className="text-4xl font-bold text-[#0b3b7a] mb-2">{item.value}</div>
            <div className="text-gray-600">{item.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
