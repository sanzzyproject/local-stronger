import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Layout from './components/Layout';
import Home from './pages/Home';
import Photos from './pages/Photos';
import Videos from './pages/Videos';
import Documents from './pages/Documents';
import Apk from './pages/Apk';
import Settings from './pages/Settings';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing page at root */}
        <Route path="/" element={<LandingPage />} />
        
        {/* Main app under /app */}
        <Route path="/app" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="photos" element={<Photos />} />
          <Route path="videos" element={<Videos />} />
          <Route path="documents" element={<Documents />} />
          <Route path="apk" element={<Apk />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
