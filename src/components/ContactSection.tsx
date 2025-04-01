
import React from 'react';
import { Linkedin, Github, Mail } from 'lucide-react';

const ContactSection = () => {
  const contactLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/alexandre-hackbardt-bolsoni-155b03258/",
      icon: <Linkedin size={24} />,
      className: "linkedin"
    },
    {
      name: "GitHub",
      url: "https://github.com/AlexandreBolsoni",
      icon: <Github size={24} />,
      className: "github"
    },
    {
      name: "E-mail",
      url: "mailto:bolsoni161@gmail.com",
      icon: <Mail size={24} />,
      className: "email"
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
