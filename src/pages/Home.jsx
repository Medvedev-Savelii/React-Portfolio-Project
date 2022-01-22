import React from "react";
import HeroSections from "../components/HeroSections";
import AboutSection from "../components/AboutSection";
import ServiceSection from "../components/ServiceSection";
export default function Home() {
  return (
    <div>
      <HeroSections />
      <AboutSection />
      <ServiceSection />
    </div>
  );
}
