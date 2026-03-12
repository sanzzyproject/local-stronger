import React from 'react';

const steps = [
  {
    num: "01",
    title: "Akses Aplikasi",
    description: "Buka platform langsung melalui browser Anda. Tidak perlu mengunduh ekstensi atau melakukan instalasi pihak ketiga.",
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    )
  },
  {
    num: "02",
    title: "Unggah File",
    description: "Tarik dan lepas (Drag & Drop) file apa saja. Semua format file didukung untuk memberikan fleksibilitas tanpa batas.",
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
      </svg>
    )
  },
  {
    num: "03",
    title: "Penyimpanan Lokal Aman",
    description: "Data Anda 100% aman. File disimpan sementara menggunakan IndexedDB langsung di penyimpanan browser Anda, tanpa server.",
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    num: "04",
    title: "Kelola & Unduh",
    description: "Akses, putar media, kelola, atau unduh kembali file Anda secara instan dari dashboard yang super cepat dan responsif.",
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    )
  }
];

export default function HowItWorksSection() {
  return (
    <section className="bg-slate-50 py-24 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-blue-600 font-bold tracking-wide uppercase text-sm mb-3">Panduan Penggunaan</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Cara Kerja yang Simpel
          </h3>
          <p className="mt-6 text-lg text-gray-500">
            Hanya butuh beberapa detik untuk mulai. Tidak ada pendaftaran, tidak ada server terpusat. Sepenuhnya berada di kendali perangkat Anda.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div 
              key={idx} 
              className="relative bg-white rounded-3xl p-8 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 hover:shadow-[0_8px_30px_rgb(37,99,235,0.08)] transition-all duration-300 transform hover:-translate-y-2 group overflow-hidden"
            >
              {/* Nomor Transparan di Belakang */}
              <div className="absolute -bottom-6 -right-2 text-9xl font-black text-slate-50 opacity-50 group-hover:text-blue-50 transition-colors duration-500 pointer-events-none">
                {step.num}
              </div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <div className="group-hover:text-white transition-colors duration-300">
                    {step.icon}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h4>
                <p className="text-gray-500 leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
