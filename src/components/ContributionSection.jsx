import React from 'react';

export default function ContributionSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
        Meet the <span className="text-blue-600">Creator</span>
      </h2>
      <div className="flex justify-center">
        <div className="text-center max-w-md">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-blue-600 rounded-full blur-xl opacity-30 animate-pulse"></div>
            <div className="relative w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white text-5xl font-bold shadow-2xl mb-6">
              S
            </div>
          </div>
          <h3 className="text-3xl font-bold text-gray-900 mb-2">SANN404 FORUM</h3>
          <p className="text-xl text-gray-600 mb-6">Developer & Creator</p>
          <div className="flex justify-center gap-6">
            <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8 0-5.52-4.48-10-10-10z"/></svg>
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8 0-5.52-4.48-10-10-10z"/></svg>
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8 0-5.52-4.48-10-10-10z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
