import React from 'react';
import HeroSection from '../components/landing/HeroSection';
import FeaturesSection from '../components/landing/FeaturesSection';
import GettingStartedSection from '../components/landing/GettingStartedSection';
import StatsSection from '../components/landing/StatsSection';
import PerformanceSection from '../components/landing/PerformanceSection';
import TrustedSection from '../components/landing/TrustedSection';
import ContributionSection from '../components/landing/ContributionSection';
import CtaSection from '../components/landing/CtaSection';
import Footer from '../components/landing/Footer';

export default function LandingPage() {
  return (
    <div className="bg-white text-gray-900">
      <HeroSection />
      <FeaturesSection />
      <GettingStartedSection />
      <StatsSection />
      <PerformanceSection />
      <TrustedSection />
      <ContributionSection />
      <CtaSection />
      <Footer />
    </div>
  );
}
