import React from 'react';
import LandingHero from '../components/LandingHero';
import ClientLogos from '../components/ClientLogos';
import FeaturesSection from '../components/FeaturesSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function LandingPage() {
  return (
    <div className="bg-white text-gray-900">
      <LandingHero />
      <ClientLogos />
      <FeaturesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
