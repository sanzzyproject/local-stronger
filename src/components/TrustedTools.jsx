import React from 'react';

// Logo sederhana (gunakan teks atau SVG sesuai kebutuhan)
const GitHubLogo = () => <span className="text-2xl font-bold text-gray-800">GitHub</span>;
const VercelLogo = () => <span className="text-2xl font-bold text-gray-800">Vercel</span>;
const ReactLogo = () => <span className="text-2xl font-bold text-blue-500">React</span>;
const TailwindLogo = () => <span className="text-2xl font-bold text-cyan-500">Tailwind</span>;

const tools = [
  { name: 'GitHub', logo: <GitHubLogo /> },
  { name: 'Vercel', logo: <VercelLogo /> },
  { name: 'React', logo: <ReactLogo /> },
  { name: 'Tailwind', logo: <TailwindLogo /> },
];

export default function TrustedTools() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h3 className="text-2xl font-semibold text-gray-700 mb-12">
          TRUSTED BY THE MOST AMBITIOUS TEAMS
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-12">
          {tools.map((tool, idx) => (
            <div key={idx} className="flex items-center space-x-2">
              {tool.logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
