import React from "react";
import HeroSections from "../components/HeroSections";
import AboutSection from "../components/AboutSection";
import ServiceSection from "../components/ServiceSection";
import ProjectsSection from "../components/ProjectsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import ContactBanner from "../components/ContactBanner";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <HeroSections />
      <AboutSection />
      <ServiceSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ContactBanner />
      <Footer />
    </div>
  );
}
