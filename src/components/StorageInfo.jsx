// src/components/StorageInfo.jsx
import React, { useState, useEffect } from 'react';
import { db } from '../db/database';
import { formatSize } from '../utils/formatSize';

export default function StorageInfo() {
  const [used, setUsed] = useState(0);
  const [total, setTotal] = useState(0);
  const [quota, setQuota] = useState(null);

  useEffect(() => {
    const fetchStorage = async () => {
      // calculate used from IndexedDB files
      const files = await db.files.toArray();
      const totalUsed = files.reduce((acc, f) => acc + (f.size || 0), 0);
      setUsed(totalUsed);

      if (navigator.storage && navigator.storage.estimate) {
        const estimate = await navigator.storage.estimate();
        setQuota(estimate.quota || 0);
        // total available is quota (the rest is free)
        setTotal(estimate.usage ? estimate.quota - estimate.usage + totalUsed : estimate.quota);
      } else {
        setTotal(10 * 1024 * 1024 * 1024); // fallback 10GB
      }
    };
    fetchStorage();
    // refresh when files change (can be hooked via event, but simple interval for demo)
    const interval = setInterval(fetchStorage, 2000);
    return () => clearInterval(interval);
  }, []);

  const usedPercent = quota ? Math.min(100, (used / quota) * 100) : 0;

  return (
    <div className="glass rounded-2xl p-4 text-sm">
      <div className="flex justify-between text-gray-700 mb-2">
        <span>Storage used</span>
        <span className="font-mono">{formatSize(used)} / {quota ? formatSize(quota) : '~10 GB'}</span>
      </div>
      <div className="w-full bg-gray-200/50 rounded-full h-2 overflow-hidden">
        <div className="bg-primary h-2 rounded-full transition-all duration-300" style={{ width: `${usedPercent}%` }} />
      </div>
      <p className="text-xs text-gray-500 mt-3 leading-relaxed">
        Files are stored only in this browser (IndexedDB). Clearing browsing data will erase them. No server upload.
      </p>
    </div>
  );
}
