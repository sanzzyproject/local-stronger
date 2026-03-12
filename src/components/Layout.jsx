// src/components/Layout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import BottomNavbar from './BottomNavbar';

export default function Layout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/80 to-white flex flex-col">
      <main className="flex-1 pb-24 px-4 pt-6 max-w-lg mx-auto w-full">
        <Outlet />
      </main>
      <BottomNavbar />
      <footer className="text-center text-sm text-gray-500 py-4 bg-transparent">
        Developer: SANN404 FORUM
      </footer>
    </div>
  );
}
