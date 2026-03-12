// src/components/FileCard.jsx
import React, { useState } from 'react';
import { downloadFile } from '../utils/downloadFile';
import { formatSize } from '../utils/formatSize';
import { IconDownload, IconDelete } from './IconComponents';
import { db } from '../db/database';

export default function FileCard({ file, onDelete }) {
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleDownload = () => {
    downloadFile(file.fileBlob, file.name);
  };

  const handleDelete = async () => {
    await db.files.delete(file.id);
    if (onDelete) onDelete(file.id);
  };

  // create preview for images/videos/pdf
  React.useEffect(() => {
    if (file.category === 'photos' || file.type.startsWith('image/')) {
      const url = URL.createObjectURL(file.fileBlob);
      setPreviewUrl(url);
      return () => URL.revokeObjectURL(url);
    }
    if (file.category === 'videos' || file.type.startsWith('video/')) {
      const url = URL.createObjectURL(file.fileBlob);
      setPreviewUrl(url);
      return () => URL.revokeObjectURL(url);
    }
    if (file.type === 'application/pdf') {
      const url = URL.createObjectURL(file.fileBlob);
      setPreviewUrl(url);
      return () => URL.revokeObjectURL(url);
    }
  }, [file]);

  const renderPreview = () => {
    if (!previewUrl) {
      return (
        <div className="w-full h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center text-gray-500 text-sm">
          {file.name.split('.').pop()?.toUpperCase() || 'FILE'}
        </div>
      );
    }
    if (file.category === 'photos') {
      return <img src={previewUrl} alt={file.name} className="w-full h-24 object-cover rounded-xl" />;
    }
    if (file.category === 'videos') {
      return <video src={previewUrl} controls className="w-full h-24 rounded-xl bg-black/5" />;
    }
    if (file.type === 'application/pdf') {
      return (
        <div className="w-full h-24 bg-red-50 rounded-xl flex items-center justify-center text-red-600 font-medium">
          📄 PDF
        </div>
      );
    }
    return (
      <div className="w-full h-24 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 font-medium">
        {file.name.split('.').pop()?.toUpperCase()}
      </div>
    );
  };

  return (
    <div className="glass-card rounded-2xl p-3 flex flex-col gap-2 animate-fade-in">
      {renderPreview()}
      <div className="flex items-start justify-between">
        <div className="truncate flex-1 pr-2">
          <p className="font-medium text-sm truncate">{file.name}</p>
          <p className="text-xs text-gray-500">{formatSize(file.size)}</p>
        </div>
        <div className="flex gap-1">
          <button onClick={handleDownload} className="p-2 hover:bg-blue-100 rounded-full" title="Download">
            <IconDownload className="w-5 h-5 text-gray-600" />
          </button>
          <button onClick={handleDelete} className="p-2 hover:bg-red-100 rounded-full" title="Delete">
            <IconDelete className="w-5 h-5 text-red-500" />
          </button>
        </div>
      </div>
    </div>
  );
}
