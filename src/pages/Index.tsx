
import React, { useEffect } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import IntroductionSection from "@/components/IntroductionSection";
import DroneFeatures from "@/components/DroneFeatures";
import UseCasesSection from "@/components/UseCasesSection";
import AppInterface from "@/components/AppInterface";
import TechnologySection from "@/components/TechnologySection";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Update title and meta description
    document.title = "Project A_N_D - Assistant Nursing Drone";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Project A_N_D: Revolutionary Assistant Nursing Drone technology for emergency healthcare response");
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      <main>
        <HeroSection />
        <IntroductionSection />
        <DroneFeatures />
        <UseCasesSection />
        <AppInterface />
        <TechnologySection />
        <TeamSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
