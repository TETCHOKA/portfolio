"use client"
import { Github, Linkedin, Mail, ChevronDown, Code, Database, Figma, ArrowRight, ExternalLink, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

function Skills(){
      const [isVisible, setIsVisible] = useState(false);
      useEffect(() => {
          setIsVisible(true);
          const handleMouseMove = (e: { clientX: number; clientY: number; }) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
          };
      const skills = [
        {
          icon: <Code className="w-8 h-8" />,
          title: "Développement Full-Stack",
          description: "Création d'applications web modernes et performantes",
          technologies: [
            { name: "React / Next.js", level: 90 },
            { name: "Node.js / Express", level: 85 },
            { name: "TypeScript", level: 88 },
            { name: "Python / Django", level: 82 },
            { name: "PostgreSQL / MongoDB", level: 80 }
          ]
        },
        {
          icon: <Database className="w-8 h-8" />,
          title: "Data Analysis",
          description: "Analyse et visualisation de données pour des insights pertinents",
          technologies: [
            { name: "Python (Pandas, NumPy)", level: 88 },
            { name: "SQL / Database", level: 90 },
            { name: "Power BI", level: 85 },
            { name: "Machine Learning", level: 78 },
            { name: "Data Visualization", level: 87 }
          ]
        },
        {
          icon: <Figma className="w-8 h-8" />,
          title: "UI/UX Design",
          description: "Conception de maquettes et prototypes interactifs",
          technologies: [
            { name: "Figma", level: 92 },
            { name: "Adobe XD", level: 80 },
            { name: "Prototypage", level: 88 },
            { name: "Design System", level: 85 },
            { name: "UX Research", level: 82 }
          ]
        }
      ];

    return(
        <>

             <section id="competences" className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Mes Compétences
          </h2>
          <p className="text-center text-slate-400 mb-10 text-lg">
            Une expertise complète pour vos projets digitaux
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill, i) => (
              <div
                key={i}
                className="group p-8 rounded-2xl bg-gradient-to-br from-slate-800/40 to-blue-900/20 backdrop-blur-xl border border-blue-500/20 hover:border-blue-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
                style={{ animationDelay: `${i * 200}ms` }}
              >
                <div className="mb-6 p-4 bg-blue-500/20 rounded-xl w-fit group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-blue-300">
                  {skill.title}
                </h3>
                <p className="text-slate-400 mb-6">
                  {skill.description}
                </p>
                
                {/* Barres de progression (jauges) */}
                <div className="space-y-4">
                  {skill.technologies.map((tech, j) => (
                    <div key={j} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-blue-200">{tech.name}</span>
                        <span className="text-blue-400 font-semibold">{tech.level}%</span>
                      </div>
                      <div className="h-2 bg-slate-700/50 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: isVisible ? `${tech.level}%` : '0%',
                            transitionDelay: `${(i * 200) + (j * 100)}ms`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



        </>
    );
}

export default Skills;