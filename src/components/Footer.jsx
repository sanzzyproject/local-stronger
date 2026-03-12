import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-6 text-center text-gray-600">
        <p>Developed by <span className="font-semibold text-blue-600">SANN404 FORUM</span></p>
        <p className="text-sm mt-2">© {new Date().getFullYear()} LocalVault. All rights reserved.</p>
      </div>
    </footer>
  );
}
