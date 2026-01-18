
import React from 'react';
import Hero from './components/Hero';
import PainSection from './components/PainSection';
import ScienceSection from './components/ScienceSection';
import MethodPhases from './components/MethodPhases';
import SocialProof from './components/SocialProof';
import OfferDetails from './components/OfferDetails';
import Guarantee from './components/Guarantee';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';

// Main Application entry component
const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-emerald-500/30">
      <Hero />
      <PainSection />
      <ScienceSection />
      <MethodPhases />
      <SocialProof />
      <OfferDetails />
      <Guarantee />
      <Footer />
      <StickyCTA />
    </div>
  );
};

export default App;
