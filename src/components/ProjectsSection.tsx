
import React, { useState, useEffect } from 'react';
import { Github, Link, Loader } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  topics: string[];
  language: string;
  fork: boolean;
  stargazers_count: number;
  updated_at: string;
}

const ProjectsSection = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const response = await fetch('https://api.github.com/users/AlexandreBolsoni/repos');
        
        if (!response.ok) {
          throw new Error('Falha ao carregar os repositórios');
        }
        
        const data = await response.json();
        // Filter out forks and sort by updated date, stars, and size
        const filteredRepos = data
          .filter((repo: Repository) => !repo.fork && repo.description) // Remove forks and repos without description
          .sort((a: Repository, b: Repository) => {
            // Sort by stars first, then by updated date
            const starsA = a.stargazers_count || 0;
            const starsB = b.stargazers_count || 0;
            if (starsB !== starsA) return starsB - starsA;
            return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
          })
          .slice(0, 6); // Limit to 6 repositories
        setRepositories(filteredRepos);
        setLoading(false);
      } catch (err) {
        setError('Não foi possível carregar os projetos. Por favor, tente novamente mais tarde.');
        setLoading(false);
        console.error('Error fetching repositories:', err);
      }
    };

    fetchRepositories();
  }, []);

  // Function to generate language colors
  const getLanguageColor = (language: string) => {
    const colors: Record<string, string> = {
      JavaScript: 'bg-yellow-400',
      TypeScript: 'bg-blue-600',
      HTML: 'bg-orange-600',
      CSS: 'bg-blue-400',
      Dart: 'bg-blue-500',
      Python: 'bg-green-600',
      Java: 'bg-red-700',
      'C#': 'bg-purple-600',
      PHP: 'bg-indigo-600',
      Ruby: 'bg-red-600',
      Go: 'bg-cyan-600',
      Swift: 'bg-orange-500',
    };
    return colors[language] || 'bg-gray-600';
  };

  // Placeholder repositories for fallback when API fails
  const placeholderRepos: Repository[] = [
    {
      id: 1,
      name: "portfolio-website",
      description: "Meu site de portfólio pessoal construído com React e Tailwind CSS",
      html_url: "https://github.com/AlexandreBolsoni/portfolio-website",
      homepage: "",
      topics: ["react", "tailwind", "portfolio"],
      language: "JavaScript",
      fork: false,
      stargazers_count: 0,
      updated_at: "2024-01-01T00:00:00Z"
    },
    {
      id: 2,
      name: "flutter-todo-app",
      description: "Aplicativo de gerenciamento de tarefas desenvolvido com Flutter",
      html_url: "https://github.com/AlexandreBolsoni/flutter-todo-app",
      homepage: "",
      topics: ["flutter", "mobile", "todo-app"],
      language: "Dart",
      fork: false,
      stargazers_count: 0,
      updated_at: "2024-01-01T00:00:00Z"
    },
    {
      id: 3,
      name: "node-express-api",
      description: "API RESTful construída com Node.js, Express e MongoDB",
      html_url: "https://github.com/AlexandreBolsoni/node-express-api",
      homepage: "",
      topics: ["nodejs", "express", "mongodb", "api"],
      language: "JavaScript",
      fork: false,
      stargazers_count: 0,
      updated_at: "2024-01-01T00:00:00Z"
    },
    {
      id: 4,
      name: "sql-database-project",
      description: "Projeto de modelagem e otimização de banco de dados SQL",
      html_url: "https://github.com/AlexandreBolsoni/sql-database-project",
      homepage: "",
      topics: ["sql", "database", "optimization"],
      language: "SQL",
      fork: false,
      stargazers_count: 0,
      updated_at: "2024-01-01T00:00:00Z"
    }
  ];

  // Use placeholder repos if there's an error or no repos available
  const displayRepos = repositories.length > 0 ? repositories : placeholderRepos;

  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="container-custom">
        <h2 className="section-title">Projetos</h2>
        
        {loading && (
          <div className="flex justify-center items-center py-20">
            <Loader className="animate-spin mr-2" />
            <span>Carregando projetos...</span>
          </div>
        )}
        
        {error && !loading && (
          <div className="text-center py-10 max-w-lg mx-auto">
            <p className="text-destructive mb-4">{error}</p>
            <p className="text-muted-foreground">Mostrando projetos de exemplo:</p>
          </div>
        )}
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {!loading &&
            displayRepos.map((repo) => (
              <div key={repo.id} className="project-card">
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-2 line-clamp-1">{repo.name}</h3>
                  
                  <p className="text-muted-foreground mb-4 flex-grow line-clamp-3">
                    {repo.description || "Sem descrição disponível"}
                  </p>
                  
                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {repo.language && (
                      <span className="flex items-center text-xs px-2 py-1 rounded-full bg-muted">
                        <span className={cn("w-2 h-2 rounded-full mr-1", getLanguageColor(repo.language))}></span>
                        {repo.language}
                      </span>
                    )}
                    {repo.topics && repo.topics.slice(0, 3).map((topic, i) => (
                      <span key={i} className="text-xs px-2 py-1 rounded-full bg-muted">
                        {topic}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <a 
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1 text-sm px-4 py-2 rounded-md bg-muted hover:bg-muted/80 transition-colors flex-grow text-center"
                    >
                      <Github size={14} />
                      <span>Código</span>
                    </a>
                    {repo.homepage && (
                      <a 
                        href={repo.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1 text-sm px-4 py-2 rounded-md bg-accent text-white hover:bg-accent/80 transition-colors flex-grow text-center"
                      >
                        <Link size={14} />
                        <span>Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://github.com/AlexandreBolsoni"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-foreground text-background hover:bg-foreground/80 transition-colors"
          >
            <Github size={20} />
            <span>Ver todos os projetos no GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
