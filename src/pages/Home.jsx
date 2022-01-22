import React from "react";
import HeroSections from "../components/HeroSections";
import AboutSection from "../components/AboutSection";
import ServiceSection from "../components/ServiceSection";
import ProjectsSection from "../components/ProjectsSection";
export default function Home() {
  return (
    <div>
      <HeroSections />
      <AboutSection />
      <ServiceSection />
      <ProjectsSection />
    </div>
  );
}
