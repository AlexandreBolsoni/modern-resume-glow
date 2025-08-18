import React from 'react';
import { Calendar, MapPin, GraduationCap } from 'lucide-react';
import { cn } from '@/lib/utils';

const AboutSection = () => {
  // Updated profile image URL to the uploaded image
  const profileImageUrl = "/lovable-uploads/f7fb962d-97fa-49d1-8186-6a7bd70f62bc.png";

  const infoItems = [
    { 
      icon: <Calendar size={20} />, 
      label: "Data de Nascimento", 
      value: "02 de dezembro de 2003" 
    },
    { 
      icon: <MapPin size={20} />, 
      label: "Localização", 
      value: "Santa Teresa, Espírito Santo, Brasil" 
    },
    { 
      icon: <GraduationCap size={20} />, 
      label: "Formação", 
      value: "Graduação em Sistemas para internet no Instituto Federal do Espirito Santo - campus Santa Teresa" 
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container-custom">
        <h2 className="section-title">Sobre Mim</h2>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
          {/* Profile Image */}
          <div className="md:col-span-2 flex justify-center">
            <div className="relative">
              <div className="w-60 h-60 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <img 
                  src={profileImageUrl} 
                  alt="Alexandre Hackbardt Bolsoni" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-accent opacity-20"></div>
            </div>
          </div>
          
          {/* About Text */}
          <div className="md:col-span-3">
            <h3 className="text-2xl font-bold mb-4">Olá, eu sou Alexandre!</h3>
            <p className="text-lg mb-6">
              Apaixonado por tecnologia e inovação, com experiência no desenvolvimento web e mobile. 
              Também tenho conhecimentos em edição de fotos e vídeos.
            </p>
            
            {/* Info Items */}
            <div className="space-y-4 mb-6">
              {infoItems.map((item, index) => (
                <div 
                  key={index} 
                  className={cn(
                    "flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm border-l-4",
                    index === 0 && "border-primary",
                    index === 1 && "border-accent",
                    index === 2 && "border-secondary"
                  )}
                >
                  <div className={cn(
                    "p-2 rounded-md flex items-center justify-center",
                    index === 0 && "text-primary",
                    index === 1 && "text-accent",
                    index === 2 && "text-secondary"
                  )}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      {item.label}
                    </p>
                    <p className="font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
