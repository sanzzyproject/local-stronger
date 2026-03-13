import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function LandingHero() {
  const navigate = useNavigate();

  return (
    <>
      {/* Navbar Atas dengan efek Blur Modern saat discroll */}
      <nav className="sticky top-0 z-50 bg-white/60 backdrop-blur-lg border-b border-gray-100 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900 tracking-tight">LocalVault</span>
          
          {/* Foto Profil tanpa background & border (1:1) */}
          <img 
            src="https://i.top4top.io/p_3723u1lwj0.jpg" 
            alt="Profile" 
            className="w-10 h-10 object-cover rounded-full"
          />
        </div>
      </nav>

      <section className="max-w-7xl mx-auto px-6 py-24 md:py-32 overflow-hidden bg-white">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">
          <div className="md:w-1/2 text-center md:text-left z-10">
            {/* Badge Memperkenalkan - kurangi margin bawah sedikit */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-medium text-sm mb-4 border border-blue-100">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
              </span>
              Memperkenalkan LocalVault
            </div>

            {/* UPDATE: Widget-widget kecil di atas judul - Dibuat lebih modern, berwarna, dan rame */}
            <div className="flex flex-wrap items-center gap-3 mb-6 justify-center md:justify-start">
              {/* Widget 1: Penyimpanan */}
              <div className="cursor-default inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white text-gray-700 text-xs sm:text-sm font-medium border border-gray-200 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] hover:shadow-[0_4px_15px_-3px_rgba(6,81,237,0.15)] transition-all duration-300 hover:-translate-y-0.5">
                <div className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-50 text-blue-600">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                33GB Storage
              </div>

              {/* Widget 2: Privasi */}
              <div className="cursor-default inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white text-gray-700 text-xs sm:text-sm font-medium border border-gray-200 shadow-[0_2px_10px_-3px_rgba(34,197,94,0.1)] hover:shadow-[0_4px_15px_-3px_rgba(34,197,94,0.15)] transition-all duration-300 hover:-translate-y-0.5">
                <div className="flex items-center justify-center w-5 h-5 rounded-full bg-green-50 text-green-600">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                Total Privacy
              </div>

              {/* Widget 3: Kecepatan */}
              <div className="cursor-default inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white text-gray-700 text-xs sm:text-sm font-medium border border-gray-200 shadow-[0_2px_10px_-3px_rgba(245,158,11,0.1)] hover:shadow-[0_4px_15px_-3px_rgba(245,158,11,0.15)] transition-all duration-300 hover:-translate-y-0.5">
                <div className="flex items-center justify-center w-5 h-5 rounded-full bg-amber-50 text-amber-500">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                Ultra Fast
              </div>

              {/* Widget 4: Local First */}
              <div className="cursor-default inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white text-gray-700 text-xs sm:text-sm font-medium border border-gray-200 shadow-[0_2px_10px_-3px_rgba(168,85,247,0.1)] hover:shadow-[0_4px_15px_-3px_rgba(168,85,247,0.15)] transition-all duration-300 hover:-translate-y-0.5">
                <div className="flex items-center justify-center w-5 h-5 rounded-full bg-purple-50 text-purple-500">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 12h14M5 12a4 4 0 01-4-4O5 12zm0 0a4 4 0 00-4 4O5 12zm14 0a4 4 0 014-4O19 12zm0 0a4 4 0 004 4O19 12zM12 5v14m0-14a4 4 0 00-4-4O12 5zm0 0a4 4 0 014-4O12 5zm0 14a4 4 0 004 4O12 19zm0 0a4 4 0 01-4 4O12 19z" />
                  </svg>
                </div>
                Local First
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-[1.1] tracking-tight">
              Private Browser <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
                Based File Storage.
              </span>
            </h1>
            
            <p className="mt-6 text-lg md:text-xl text-gray-500 max-w-lg leading-relaxed mx-auto md:mx-0">
              Collaborate with brands and agencies to create impactful results with secure and reliable solutions.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button
                onClick={() => navigate('/app')}
                className="px-8 py-4 bg-blue-600 text-white rounded-full font-semibold text-lg hover:bg-blue-700 hover:-translate-y-1 transition-all duration-300 shadow-[0_8px_30px_rgb(37,99,235,0.25)] hover:shadow-[0_12px_40px_rgb(37,99,235,0.4)]"
              >
                Coba Sekarang →
              </button>
            </div>
          </div>

          {/* Visual Modern & Elegan di sisi kanan - Diupdate tanpa border/window */}
          <div className="relative md:w-1/2 flex justify-center mt-12 md:mt-0">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-transparent rounded-full blur-3xl opacity-60 w-[400px] h-[400px]"></div>
            
            <div className="relative z-10 w-full max-w-md flex items-center justify-center">
                 {/* Gambar 1:1 langsung ditampilkan tanpa border */}
                 <img 
                   src="https://k.top4top.io/p_3724t57qm0.jpg" 
                   alt="App Visual"
                   className="w-full h-auto object-contain"
                 />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
