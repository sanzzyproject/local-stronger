// src/pages/Apk.jsx
import React, { useState, useEffect } from 'react';
import FileCard from '../components/FileCard';
import { db } from '../db/database';

export default function Apk() {
  const [files, setFiles] = useState([]);
  useEffect(() => {
    db.files.where('category').equals('apk').toArray().then(setFiles);
  }, []);
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">📦 APK files</h2>
      {files.length === 0 ? <p className="text-center text-gray-400 py-10 glass rounded-2xl">No APK files.</p> : (
        <div className="grid grid-cols-2 gap-3">{files.map(f => <FileCard key={f.id} file={f} onDelete={() => db.files.where('category').equals('apk').toArray().then(setFiles)} />)}</div>
      )}
    </div>
  );
}
