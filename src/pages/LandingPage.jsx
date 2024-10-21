import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import WorkSection from "../components/WorkSection";
import PricingSection from "../components/PricingSection";
import SponsorsSection from "../components/SponsorsSection";
import FreeTrialSection from "../components/FreeTrialSection";

const LandingPage = () => (
  <div className="landing-page">
    <Header />
    <main>
      <HeroSection />
      <PricingSection />
      <WorkSection />
      <SponsorsSection />
      <FreeTrialSection />
    </main>
    <Footer />
  </div>
);

export default LandingPage;
