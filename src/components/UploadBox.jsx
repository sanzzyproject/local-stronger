// src/components/UploadBox.jsx
import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { db } from '../db/database';
import { getCategoryFromFile } from '../utils/fileTypeDetector';
import { IconUpload } from './IconComponents';

export default function UploadBox({ onUploadComplete }) {
  const onDrop = useCallback(async (acceptedFiles) => {
    for (const file of acceptedFiles) {
      const category = getCategoryFromFile(file);
      const fileBlob = file; // File is a Blob
      await db.files.add({
        name: file.name,
        type: file.type,
        size: file.size,
        category,
        fileBlob,
        createdAt: Date.now(),
      });
    }
    if (onUploadComplete) onUploadComplete();
  }, [onUploadComplete]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      {...getRootProps()}
      className={`glass-card rounded-2xl p-8 border-2 border-dashed text-center cursor-pointer transition-all duration-200 hover:scale-[1.01] ${
        isDragActive ? 'border-primary bg-blue-50/50' : 'border-gray-300'
      }`}
    >
      <input {...getInputProps()} />
      <IconUpload className="w-12 h-12 mx-auto text-primary/70" />
      <p className="mt-4 text-gray-700 font-medium">
        {isDragActive ? 'Drop files here' : 'Drag & drop or tap to upload'}
      </p>
      <p className="text-sm text-gray-500 mt-1">Any file type — stored only in your browser</p>
    </div>
  );
}
