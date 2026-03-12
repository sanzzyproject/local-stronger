import React from 'react';

const steps = [
  {
    number: '1',
    title: 'Open the Web App',
    description: 'Navigate to LocalVault and you’re ready to start – no account needed.',
  },
  {
    number: '2',
    title: 'Upload Your Files',
    description: 'Drag and drop or select files. All types are supported.',
  },
  {
    number: '3',
    title: 'Store Files Locally',
    description: 'Files are saved directly in your browser’s IndexedDB instantly.',
  },
  {
    number: '4',
    title: 'Download Anytime',
    description: 'Access and download your files whenever you need them.',
  },
];

export default function GettingStartedSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Getting Started</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step) => (
          <div key={step.number} className="relative">
            <div className="text-6xl font-bold text-blue-100 mb-4">{step.number}</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
