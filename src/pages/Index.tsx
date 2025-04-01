
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { initScrollReveal } from '@/utils/scrollReveal';

const Index = () => {
  useEffect(() => {
    initScrollReveal();
  }, []);

  return (
    <>
      <Header />
      
      <main>
        <HeroSection />
        <div className="fade-in-animation">
          <AboutSection />
        </div>
        <div className="fade-in-animation">
          <SkillsSection />
        </div>
        <div className="fade-in-animation">
          <ProjectsSection />
        </div>
        <div className="fade-in-animation">
          <ContactSection />
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default Index;
