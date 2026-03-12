import React from 'react';
import LandingHero from '../components/LandingHero';
import FeaturesSection from '../components/FeaturesSection';
import GettingStartedSection from '../components/GettingStartedSection'; // baru
import StatsSection from '../components/StatsSection';
import PerformanceSection from '../components/PerformanceSection';
import TrustedTools from '../components/TrustedTools';
import ContributionSection from '../components/ContributionSection';
import CtaSection from '../components/CtaSection';
import Footer from '../components/Footer';

export default function LandingPage() {
  return (
    <div className="bg-white text-gray-900 overflow-x-hidden">
      <LandingHero />
      <FeaturesSection />
      <GettingStartedSection /> {/* ditambahkan */}
      <StatsSection />
      <PerformanceSection />
      <TrustedTools />
      <ContributionSection />
      <CtaSection />
      <Footer />
    </div>
  );
}
