// src/pages/Photos.jsx
import React, { useState, useEffect } from 'react';
import FileCard from '../components/FileCard';
import { db } from '../db/database';

export default function Photos() {
  const [files, setFiles] = useState([]);

  const loadFiles = async () => {
    const all = await db.files.where('category').equals('photos').toArray();
    setFiles(all);
  };

  useEffect(() => { loadFiles(); }, []);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Photos</h2>
      {files.length === 0 ? (
        <p className="text-center text-gray-400 py-10 glass rounded-2xl">No photos stored.</p>
      ) : (
        <div className="grid grid-cols-2 gap-3">
          {files.map(f => <FileCard key={f.id} file={f} onDelete={loadFiles} />)}
        </div>
      )}
    </div>
  );
}
