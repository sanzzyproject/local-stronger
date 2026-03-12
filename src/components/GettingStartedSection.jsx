import React, { useEffect, useRef } from 'react';

const steps = [
  { number: '01', title: 'Open the Web App', desc: 'Navigate to LocalVault – no signup required.' },
  { number: '02', title: 'Upload Your Files', desc: 'Drag & drop or select any file type.' },
  { number: '03', title: 'Store Files Locally', desc: 'Files are saved instantly in your browser.' },
  { number: '04', title: 'Download Anytime', desc: 'Access and download whenever you need.' },
];

export default function GettingStartedSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1 }
    );

    const items = document.querySelectorAll('.step-item');
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="max-w-7xl mx-auto px-6 py-20 bg-gradient-to-b from-white to-gray-50">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
        Getting <span className="text-blue-600">Started</span>
      </h2>
      <div className="grid md:grid-cols-4 gap-8">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="step-item opacity-0 translate-y-10 transition-all duration-700"
            style={{ transitionDelay: `${idx * 150}ms` }}
          >
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white text-2xl font-bold rounded-2xl mb-6 shadow-lg">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
