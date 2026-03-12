// src/db/database.js
import Dexie from 'dexie';

export const db = new Dexie('localVaultDB');

db.version(1).stores({
  files: '++id, name, type, size, category, createdAt' // indexed fields
});

db.open().catch(err => console.error('Failed to open DB:', err));

export default db;
