import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function LandingHero() {
  const navigate = useNavigate();

  return (
    <>
      {/* Navbar Atas dengan efek Blur Modern saat discroll */}
      <nav className="sticky top-0 z-50 bg-white/60 backdrop-blur-lg border-b border-gray-100 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900 tracking-tight">LocalStronge</span>
          
          {/* Foto Profil tanpa background & border (1:1) */}
          <img 
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100&h=100&fit=crop" 
            alt="Profile" 
            className="w-10 h-10 object-cover rounded-full"
          />
        </div>
      </nav>

      <section className="max-w-7xl mx-auto px-6 py-24 md:py-32 overflow-hidden bg-white">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">
          <div className="md:w-1/2 text-center md:text-left z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-medium text-sm mb-6 border border-blue-100">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
              </span>
              Memperkenalkan LocalVault
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-[1.1] tracking-tight">
              Building digital <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
                products & brands.
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

          {/* Visual Modern & Elegan di sisi kanan */}
          <div className="relative md:w-1/2 flex justify-center mt-12 md:mt-0">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-transparent rounded-full blur-3xl opacity-60 w-[400px] h-[400px]"></div>
            <div className="relative w-full max-w-md aspect-square rounded-[2.5rem] bg-white border border-gray-100 shadow-2xl overflow-hidden flex flex-col">
              <div className="h-12 bg-gray-50 border-b border-gray-100 flex items-center px-6 gap-2">
                <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                <div className="w-3 h-3 rounded-full bg-gray-300"></div>
              </div>
              <div className="flex-1 p-8 bg-gradient-to-b from-blue-50/50 to-white flex items-center justify-center">
                 
                 {/* UPDATE: Logo diganti dengan gambar 1:1 di sini */}
                 <img 
                   src="https://h.top4top.io/p_37230f75i0.jpg" 
                   alt="App Visual"
                   className="w-40 h-40 object-cover rounded-3xl shadow-lg rotate-3 transform hover:rotate-0 transition-all duration-500"
                 />
                 
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
