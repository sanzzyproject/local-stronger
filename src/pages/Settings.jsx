// src/pages/Settings.jsx
import React, { useState, useEffect } from 'react';
import StorageInfo from '../components/StorageInfo';
import { db } from '../db/database';

export default function Settings() {
  const [fileCount, setFileCount] = useState(0);

  useEffect(() => {
    db.files.count().then(setFileCount);
    const interval = setInterval(() => db.files.count().then(setFileCount), 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Settings & security</h2>

      <StorageInfo />

      <div className="glass rounded-2xl p-5 space-y-4">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Total files stored</span>
          <span className="font-mono font-medium">{fileCount}</span>
        </div>
        <div className="border-t border-white/30 my-2" />
        <h3 className="font-medium text-base">🔐 Security model</h3>
        <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2">
          <li>All files are stored locally in your browser's IndexedDB.</li>
          <li>Files never leave your device — no server upload, no cloud.</li>
          <li>Data is contained within this browser profile.</li>
          <li>Clearing browser cache / site data will permanently delete files.</li>
          <li>Storage is subject to browser quota (usually several GB).</li>
        </ul>

        <h3 className="font-medium text-base mt-4">💡 Use cases</h3>
        <p className="text-sm text-gray-700">
          Temporary file sharing between sessions, offline storage, quick APK transfer, or keeping private documents locally without cloud risks.
        </p>
        <p className="text-xs text-gray-500 mt-4 text-right">Developer: SANN404 FORUM</p>
      </div>
    </div>
  );
}
