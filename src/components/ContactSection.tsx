
import React, { useState } from 'react';
import { Linkedin, Github, Mail, Copy, Check } from 'lucide-react';
import { Button } from './ui/button';
import { toast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [copied, setCopied] = useState(false);
  const emailAddress = "bolsoni161@gmail.com";
  
  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress)
      .then(() => {
        setCopied(true);
        toast({
          title: "Email copiado!",
          description: `${emailAddress} foi copiado para sua área de transferência.`
        });
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(err => {
        console.error('Falha ao copiar email: ', err);
        toast({
          title: "Erro ao copiar",
          description: "Não foi possível copiar o email. Por favor, tente novamente.",
          variant: "destructive"
        });
      });
  };

  const contactLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/alexandre-hackbardt-bolsoni-155b03258/",
      icon: <Linkedin size={24} />,
      className: "linkedin",
      isExternal: true
    },
    {
      name: "GitHub",
      url: "https://github.com/AlexandreBolsoni",
      icon: <Github size={24} />,
      className: "github",
      isExternal: true
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container-custom">
        <h2 className="section-title">Contato</h2>
        
        <div className="max-w-3xl mx-auto mt-12">
          <p className="text-lg text-center mb-10">
            Interessado em trabalhar juntos? Entre em contato através de uma das opções abaixo.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`contact-button ${link.className}`}
              >
                {link.icon}
                <span>{link.name}</span>
              </a>
            ))}
            
            {/* Email Button with Copy Functionality */}
            <button 
              onClick={handleCopyEmail}
              className="contact-button email bg-accent text-white hover:bg-accent/80 flex items-center justify-center gap-2 py-3 px-6 rounded-lg font-medium transition-all duration-300 transform hover:-translate-y-1"
            >
              <Mail size={24} />
              <span className="flex-grow">E-mail</span>
              {copied ? <Check size={20} /> : <Copy size={20} />}
            </button>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-muted-foreground">
              {emailAddress}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
