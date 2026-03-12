import React from 'react';

export default function ContributionSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Contribution</h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-16">
        {/* Developer */}
        <div className="text-center">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 mx-auto mb-4 flex items-center justify-center text-white text-4xl font-bold">
            S
          </div>
          <h3 className="text-2xl font-bold text-gray-900">SANN404 FORUM</h3>
          <p className="text-gray-600">Developer</p>
          <div className="flex justify-center gap-4 mt-4">
            <a href="#" className="text-gray-600 hover:text-blue-600">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8 0-5.52-4.48-10-10-10z"/></svg>
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8 0-5.52-4.48-10-10-10z"/></svg>
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8 0-5.52-4.48-10-10-10z"/></svg>
            </a>
          </div>
        </div>

        {/* UI/UX Designer */}
        <div className="text-center">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 mx-auto mb-4 flex items-center justify-center text-white text-4xl font-bold">
            N
          </div>
          <h3 className="text-2xl font-bold text-gray-900">Nekolabs</h3>
          <p className="text-gray-600">UI & UX Inspiration</p>
          <div className="flex justify-center gap-4 mt-4">
            <a href="#" className="text-gray-600 hover:text-purple-600">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8 0-5.52-4.48-10-10-10z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
