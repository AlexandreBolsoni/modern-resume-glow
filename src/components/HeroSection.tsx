
import React from 'react';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="min-h-screen pt-24 flex flex-col justify-center home-gradient">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Alexandre Hackbardt Bolsoni
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
            Desenvolvedor Full-Stack | Especialista em JavaScript, Flutter, Node.js e SQL
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#contact"
              className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Entre em contato
            </a>
            <a 
              href="#projects"
              className="bg-accent text-white px-6 py-3 rounded-lg font-medium hover:bg-accent/90 transition-colors"
            >
              Ver projetos
            </a>
          </div>
        </div>
        <div className="flex justify-center mt-16">
          <a 
            href="#about"
            className="animate-bounce-soft p-2 rounded-full bg-white shadow-md"
            aria-label="Role para baixo"
          >
            <ArrowDown className="text-primary" size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
