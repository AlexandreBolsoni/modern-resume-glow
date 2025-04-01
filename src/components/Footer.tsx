
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-foreground text-background py-10">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <p className="font-medium">Alexandre Hackbardt Bolsoni</p>
            <p className="text-background/70 text-sm">Desenvolvedor Full-Stack</p>
          </div>
          
          <div className="mt-6 md:mt-0">
            <p className="text-sm text-background/70">
              © {currentYear} Todos os direitos reservados
            </p>
            <p className="text-sm mt-1 italic text-background/60">
              Desenvolvido por IA para fins de demonstração
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
