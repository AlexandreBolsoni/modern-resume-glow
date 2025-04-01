
import React from 'react';
import { Code, Database, Server } from 'lucide-react';

const SkillsSection = () => {
  const skills = [
    {
      name: "JavaScript",
      icon: <Code size={36} className="text-[#F7DF1E]" />,
      description: "Desenvolvimento frontend com foco em aplicações interativas e responsivas.",
      color: "border-[#F7DF1E]"
    },
    {
      name: "Flutter",
      icon: <Code size={36} className="text-[#02569B]" />,
      description: "Criação de aplicativos multiplataforma com experiências de usuário nativas.",
      color: "border-[#02569B]"
    },
    {
      name: "Node.js",
      icon: <Server size={36} className="text-[#339933]" />,
      description: "Construção de APIs robustas e servidores escaláveis.",
      color: "border-[#339933]"
    },
    {
      name: "SQL",
      icon: <Database size={36} className="text-[#4479A1]" />,
      description: "Modelagem e gerenciamento de bancos de dados relacionais.",
      color: "border-[#4479A1]"
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container-custom">
        <h2 className="section-title">Habilidades</h2>
        
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="skill-card group border-t-4 relative overflow-hidden"
              style={{ borderColor: skill.color.split('-')[1] }}
            >
              {/* Background decorations */}
              <div className="absolute top-0 right-0 h-24 w-24 bg-muted rounded-full -m-12 opacity-20 transition-all duration-300 group-hover:scale-150"></div>
              
              {/* Content */}
              <div className="mb-4 relative">
                <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-muted/30 mx-auto mb-4 transition-transform duration-300 group-hover:scale-110">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold">{skill.name}</h3>
              </div>
              <p className="text-muted-foreground text-sm">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
