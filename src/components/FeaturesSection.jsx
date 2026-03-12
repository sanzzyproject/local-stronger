import React from 'react';

// Custom SVG Icons
const LightningIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#0b3b7a" strokeWidth="1.5">
    <path d="M13 2L3 14h8l-2 8 10-12h-8l2-8z" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const LockIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#0b3b7a" strokeWidth="1.5">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
);

const CodeIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#0b3b7a" strokeWidth="1.5">
    <path d="M16 18L22 12L16 6M8 6L2 12L8 18"/>
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
    title: 'Secure Local Storage',
    description: 'Files are stored directly inside your browser and never uploaded to any external server.',
  },
  {
    icon: <CodeIcon />,
    title: 'Easy Integration',
    description: 'Built with modern web technologies like React and TailwindCSS for a smooth and responsive experience.',
  },
];

export default function FeaturesSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <h2 className="text-4xl font-bold text-center text-[#0f172a] mb-16">Why Choose LocalVault?</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#0b3b7a]/20 group"
          >
            <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
              {feature.icon}
            </div>
            <h3 className="text-2xl font-semibold text-[#0f172a] mb-3">{feature.title}</h3>
            <p className="text-gray-600 leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
