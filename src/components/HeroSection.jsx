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

            {/* UPDATE: Widget-widget kecil di atas judul */}
            <div className="flex items-center gap-3 mb-6 justify-center md:justify-start">
              {/* Widget Penyimpanan Besar */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-medium border border-gray-200 shadow-inner">
                <svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
                Penyimpanan Besar 33GB
              </div>
              {/* Widget Privasi Total */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-medium border border-gray-200 shadow-inner">
                <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Privasi Total
              </div>
              {/* Widget Cepat & Tanpa Akun */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-medium border border-gray-200 shadow-inner">
                <svg className="w-4 h-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Cepat & Tanpa Akun
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

          {/* Visual Modern & Elegan di sisi kanan - tidak diubah */}
          <div className="relative md:w-1/2 flex justify-center mt-12 md:mt-0">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-transparent rounded-full blur-3xl opacity-60 w-[400px] h-[400px]"></div>
            <div className="relative w-full max-w-md aspect-square rounded-[2.5rem] bg-white border border-gray-100 shadow-2xl overflow-hidden flex flex-col">
              <div className="h-12 bg-gray-50 border-b border-gray-100 flex items-center px-6 gap-2">
                <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                <div className="w-3 h-3 rounded-full bg-gray-300"></div>
              </div>
              <div className="flex-1 p-8 bg-gradient-to-b from-blue-50/50 to-white flex items-center justify-center">
                 
                 {/* UPDATE: Logo diganti dengan gambar 1:1 di sini - tidak diubah */}
                 <img 
                   src="https://k.top4top.io/p_3724t57qm0.jpg" 
                   alt="App Visual"
            
                 />
                 
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
