import React from 'react';

// Simple SVG logos (you can replace with official ones if desired)
const GitHubLogo = () => (
  <svg className="h-8 w-auto" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.682-.103-.253-.447-1.27.098-2.646 0 0 .84-.269 2.75 1.025.8-.223 1.65-.334 2.5-.334.85 0 1.7.111 2.5.334 1.91-1.294 2.75-1.025 2.75-1.025.545 1.376.201 2.393.099 2.646.64.698 1.03 1.591 1.03 2.682 0 3.841-2.337 4.687-4.565 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
  </svg>
);

const VercelLogo = () => (
  <svg className="h-8 w-auto" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L22 20H2L12 2z"/>
  </svg>
);

// Similarly add others: HTML, TailwindCSS, React, JavaScript – you can use simple text or svg.
// For brevity, we'll use text labels with background.

const tools = [
  { name: 'GitHub', icon: <GitHubLogo /> },
  { name: 'Vercel', icon: <VercelLogo /> },
  { name: 'HTML5', icon: <span className="text-3xl font-bold text-orange-500">HTML</span> },
  { name: 'TailwindCSS', icon: <span className="text-3xl font-bold text-sky-400">Tailwind</span> },
  { name: 'React', icon: <span className="text-3xl font-bold text-blue-400">React</span> },
  { name: 'JavaScript', icon: <span className="text-3xl font-bold text-yellow-400">JS</span> },
];

export default function TrustedTools() {
  return (
    <section className="py-20 bg-gray-50">
      <h2 className="text-4xl font-bold text-center text-[#0f172a] mb-12">Trusted by the Tools We Use</h2>
      <div className="relative overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...tools, ...tools].map((tool, idx) => (
            <div key={idx} className="flex items-center mx-8">
              <div className="w-16 h-16 flex items-center justify-center bg-white rounded-2xl shadow-md">
                {tool.icon}
              </div>
              <span className="ml-3 text-lg font-medium text-gray-700">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
