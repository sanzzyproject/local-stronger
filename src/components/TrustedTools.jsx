import React from 'react';

// Logo SVG asli (sederhana namun representatif)
const GitHubLogo = () => (
  <svg className="h-10 w-auto" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.682-.103-.253-.447-1.27.098-2.646 0 0 .84-.269 2.75 1.025.8-.223 1.65-.334 2.5-.334.85 0 1.7.111 2.5.334 1.91-1.294 2.75-1.025 2.75-1.025.545 1.376.201 2.393.099 2.646.64.698 1.03 1.591 1.03 2.682 0 3.841-2.337 4.687-4.565 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
);

const VercelLogo = () => (
  <svg className="h-10 w-auto" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L22 20H2L12 2z" />
  </svg>
);

const ReactLogo = () => (
  <svg className="h-10 w-auto" viewBox="0 0 24 24" fill="#61DAFB">
    <circle cx="12" cy="12" r="2.5" fill="currentColor" />
    <path d="M12 2.5c4.5 0 8.2 3.5 8.2 7.8 0 1.5-.4 2.9-1.2 4.2" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <path d="M12 21.5c-4.5 0-8.2-3.5-8.2-7.8 0-1.5.4-2.9 1.2-4.2" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <path d="M5.2 7.8c1.1-2 3.2-3.3 5.6-3.3s4.5 1.3 5.6 3.3" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <path d="M5.2 16.2c1.1 2 3.2 3.3 5.6 3.3s4.5-1.3 5.6-3.3" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <ellipse cx="12" cy="12" rx="7.8" ry="2.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
  </svg>
);

const TailwindLogo = () => (
  <svg className="h-10 w-auto" viewBox="0 0 24 24" fill="#38BDF8">
    <path d="M12 6c-2.5 0-4.5 1.3-6 4 1.5-1.3 3-1.5 4.5-1 1 .4 1.8 1.2 2.5 2 1-2 2.5-3 5-3 2.5 0 4.5 1.3 6 4-1.5-1.3-3-1.5-4.5-1-1 .4-1.8 1.2-2.5 2 1-2 2.5-3 5-3 2.5 0 4.5 1.3 6 4-1.5-1.3-3-1.5-4.5-1-1 .4-1.8 1.2-2.5 2 1-2 2.5-3 5-3 2.5 0 4.5 1.3 6 4-1.5-1.3-3-1.5-4.5-1-1 .4-1.8 1.2-2.5 2" />
  </svg>
);

const tools = [
  { name: 'GitHub', logo: <GitHubLogo /> },
  { name: 'Vercel', logo: <VercelLogo /> },
  { name: 'React', logo: <ReactLogo /> },
  { name: 'Tailwind', logo: <TailwindLogo /> },
];

export default function TrustedTools() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h3 className="text-2xl font-semibold text-gray-700 mb-12 tracking-wide">
          TRUSTED BY THE MOST AMBITIOUS TEAMS
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-16">
          {tools.map((tool, idx) => (
            <div key={idx} className="group hover:scale-110 transition-transform duration-300">
              <div className="text-gray-700 group-hover:text-blue-600 transition-colors">
                {tool.logo}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
