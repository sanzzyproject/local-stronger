import React from 'react';

const ContributionSection = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <h2 className="text-4xl font-bold text-center text-[#0f172a] mb-16">Contribution</h2>
      <div className="flex flex-col items-center">
        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#0b3b7a] to-[#0f172a] mb-6 overflow-hidden">
          {/* Placeholder for developer photo */}
          <div className="w-full h-full flex items-center justify-center text-white text-4xl font-bold">S</div>
        </div>
        <h3 className="text-3xl font-semibold text-[#0f172a]">SANN404 FORUM</h3>
        <p className="text-xl text-gray-600 mt-2">Developer</p>
        <div className="flex gap-6 mt-6">
          <a href="#" className="text-[#0f172a] hover:text-[#0b3b7a] transition">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8 0-5.52-4.48-10-10-10z"/></svg>
          </a>
          <a href="#" className="text-[#0f172a] hover:text-[#0b3b7a] transition">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8 0-5.52-4.48-10-10-10z"/></svg>
          </a>
          <a href="#" className="text-[#0f172a] hover:text-[#0b3b7a] transition">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8 0-5.52-4.48-10-10-10z"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContributionSection;
