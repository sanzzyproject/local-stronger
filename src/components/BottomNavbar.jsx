// src/components/BottomNavbar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { IconHome, IconPhotos, IconVideos, IconDocuments, IconApk, IconSettings } from './IconComponents';

const navItems = [
  { to: '/', label: 'Home', icon: IconHome },
  { to: '/photos', label: 'Photos', icon: IconPhotos },
  { to: '/videos', label: 'Videos', icon: IconVideos },
  { to: '/documents', label: 'Docs', icon: IconDocuments },
  { to: '/apk', label: 'APK', icon: IconApk },
  { to: '/settings', label: 'Settings', icon: IconSettings },
];

export default function BottomNavbar() {
  return (
    <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[calc(100%-2rem)] max-w-md glass rounded-2xl px-3 py-2 flex justify-around items-center z-50 shadow-2xl">
      {navItems.map(({ to, label, icon: Icon }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) =>
            `flex flex-col items-center p-2 rounded-xl transition-all duration-200 ${
              isActive
                ? 'text-primary bg-blue-100/70 shadow-inner scale-105'
                : 'text-gray-600 hover:bg-white/40'
            }`
          }
        >
          <Icon className="w-6 h-6" />
          <span className="text-[11px] mt-1 font-medium">{label}</span>
        </NavLink>
      ))}
    </nav>
  );
}
