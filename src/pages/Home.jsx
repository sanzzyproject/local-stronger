// src/pages/Home.jsx
import React, { useState, useEffect } from 'react';
import UploadBox from '../components/UploadBox';
import FileCard from '../components/FileCard';
import StorageInfo from '../components/StorageInfo';
import { db } from '../db/database';

export default function Home() {
  const [recentFiles, setRecentFiles] = useState([]);

  const loadRecent = async () => {
    const files = await db.files.orderBy('createdAt').reverse().limit(5).toArray();
    setRecentFiles(files);
  };

  useEffect(() => { loadRecent(); }, []);

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-light bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">LocalVault</h1>
        <p className="text-gray-500 text-sm mt-1">Temporary • Private • Local</p>
      </div>

      <UploadBox onUploadComplete={loadRecent} />

      <StorageInfo />

      <div>
        <h2 className="text-lg font-medium mb-3 flex items-center gap-2">Recent files</h2>
        {recentFiles.length === 0 ? (
          <p className="text-center text-gray-400 py-6 glass rounded-2xl">No files yet. Upload something!</p>
        ) : (
          <div className="grid grid-cols-2 gap-3">
            {recentFiles.map(file => (
              <FileCard key={file.id} file={file} onDelete={loadRecent} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
