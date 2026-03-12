import React from 'react';

// Custom SVG Icons (simple)
const LightningIcon = () => (
  <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const LockIcon = () => (
  <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
);

const CodeIcon = () => (
  <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const features = [
  {
    icon: <LightningIcon />,
    title: 'Lightning Fast',
    description: 'High-performance local storage using IndexedDB for instant file access with no network delays.',
  },
  {
    icon: <LockIcon />,
    title: 'Authentication Required',
    description: 'Secure your access with browser isolation. Files are stored locally and never leave your device.',
  },
  {
    icon: <CodeIcon />,
    title: 'Easy Integration',
    description: 'Built with modern web technologies like React and TailwindCSS for a smooth and responsive experience.',
  },
];

export default function FeaturesSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 bg-gray-50">
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, idx) => (
          <div key={idx} className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
            <p className="text-gray-600 leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
