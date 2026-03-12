// src/utils/fileTypeDetector.js
export const getCategoryFromFile = (file) => {
  const type = file.type;
  const name = file.name.toLowerCase();

  if (type.startsWith('image/') || /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(name)) {
    return 'photos';
  }
  if (type.startsWith('video/') || /\.(mp4|webm|mov|avi|mkv)$/i.test(name)) {
    return 'videos';
  }
  if (type === 'application/pdf' || name.endsWith('.pdf') ||
      /\.(doc|docx|txt|xls|xlsx|ppt|pptx)$/i.test(name)) {
    return 'documents';
  }
  if (type === 'application/vnd.android.package-archive' || name.endsWith('.apk')) {
    return 'apk';
  }
  return 'others';
};
