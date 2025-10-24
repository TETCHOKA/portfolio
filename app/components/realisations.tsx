
"use client"

import { useState } from "react";

function Projets(){

   const [activeFilter, setActiveFilter] = useState('Tous');
   
  const projects = [
    {
      title: "MediTrack",
      category: "Développement",
      description: "Application web de suivi medicale avec intégration de téléconsultation et prise de rendez-vous",
      image: "/images/medecine.png", 
      tags: ["React.js","TypeScript", "Laravel", "MySQL"]
    },
    {
      title: "Générateur de CV",
      category: "Développement",
      description: "Plate forme permettant de constuire un cv rapidement",
      image:"/images/gene.jpeg", 
      tags: ["HTML5", "CSS3", "Tailwind css", "Javascript"]
    },
    {
      title: "Hospital Management",
      category: "Développement",
      description: "Application web permettant de gérer un hopital",
      image:"/images/hos.png", 
      tags: ["HTML5", "CSS3", "Bootstrap", "Javascript", "Php", "MySQL"]
    },
     {
      title: "AfriPay",
      category: "Développement",
      description: "Application web de payement en ligne",
      image:"/images/afri.png", 
      tags: ["Next.js","TypeScript", "Tailwind css", "MySQL" ]
    },
    {
      title: "Dashboard Analytics",
      category: "Data Analysis",
      description: "Tableau de bord interactif pour visualiser les KPIs business en temps réel",
      image: "/projects/dashboard.jpg", // Remplacez par votre vraie image
      tags: ["Python", "Power BI", "SQL"]
    },
    {
      title: "Prédiction des Ventes",
      category: "Data Analysis",
      description: "Modèle ML pour prédire les tendances de ventes avec 92% de précision",
      image: "/projects/ml-prediction.jpg", // Remplacez par votre vraie image
      tags: ["Python", "Scikit-learn", "Pandas"]
    },
    {
      title: "Design System Entreprise",
      category: "Design",
      description: "Système de design complet pour une cohérence visuelle sur tous les produits",
      image: "/projects/design-system.jpg", // Remplacez par votre vraie image
      tags: ["Figma", "Components", "Documentation"]
    },
    {
      title: "App Mobile Banking",
      category: "Design",
      description: "Maquettes haute-fidélité pour une application bancaire mobile moderne",
      image: "/projects/mobile-banking.jpg", // Remplacez par votre vraie image
      tags: ["Figma", "Prototypage", "UX Research"]
    }
  ];

  const filterCategories = ['Tous', 'Développement', 'Data Analysis', 'Design'];

  const filteredProjects = activeFilter === 'Tous' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);


  return(

    <>
        
              <section id="projets" className="py-8 px-6 relative">
                <div className="max-w-7xl mx-auto">
                  <h2 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    Projets Récents
                  </h2>
                  <p className="text-center text-slate-400 mb-6 text-lg">
                    Découvrez mes réalisations
                  </p>
        
                  {/* Filtres */}
                  <div className="flex flex-wrap justify-center gap-4 mb-8">
                    {filterCategories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setActiveFilter(category)}
                        className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm ${
                          activeFilter === category
                            ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/50 scale-105'
                            : 'bg-slate-800/40 border border-blue-500/20 text-slate-300 hover:border-blue-400/50 hover:scale-105'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
        
                  {/* Compteur de projets */}
                  <div className="text-center mb-8">
                    <p className="text-blue-300 text-sm">
                      {filteredProjects.length} projet{filteredProjects.length > 1 ? 's' : ''} trouvé{filteredProjects.length > 1 ? 's' : ''}
                    </p>
                  </div>
        
                  <div className="grid md:grid-cols-3 gap-8">
                    {filteredProjects.map((project, i) => (
                      <div
                        key={project.title}
                        className="group relative rounded-2xl bg-gradient-to-br from-slate-800/40 to-blue-900/20 backdrop-blur-xl border border-blue-500/20 overflow-hidden hover:border-blue-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 animate-fadeIn"
                        style={{ 
                          animationDelay: `${i * 100}ms`,
                          animation: 'fadeIn 0.5s ease-out forwards'
                        }}
                      >
                        {/* Image du projet */}
                        <div className="relative h-48 overflow-hidden bg-slate-800/50">
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent z-10"></div>
                          <img 
                            src={project.image} 
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
        
                        <div className="p-8">
                          <div className="inline-block px-3 py-1 bg-blue-500/20 border border-blue-400/30 rounded-full text-sm text-blue-300 mb-4">
                            {project.category}
                          </div>
                          <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                          <p className="text-slate-400 mb-6">{project.description}</p>
                          <div className="flex flex-wrap gap-2 mb-6">
                            {project.tags.map((tag, j) => (
                              <span
                                key={j}
                                className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full text-sm text-blue-300"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors group-hover:translate-x-2 duration-300">
                            Voir le projet
                            <ExternalLink className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
        
                  {/* Message si aucun projet */}
                  {filteredProjects.length === 0 && (
                    <div className="text-center py-20">
                      <p className="text-slate-400 text-lg">
                        Aucun projet trouvé pour cette catégorie.
                      </p>
                    </div>
                  )}
                </div>
        
                <style jsx>{`
                  @keyframes fadeIn {
                    from {
                      opacity: 0;
                      transform: translateY(20px);
                    }
                    to {
                      opacity: 1;
                      transform: translateY(0);
                    }
                  }
                `}</style>
              </section>
    </>

  );
}

export default Projets;