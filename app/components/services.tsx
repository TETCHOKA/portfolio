"use client"
import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ChevronDown, Code, Database, Figma, ArrowRight, ExternalLink, Menu, X, Link } from 'lucide-react';

export default function Portfolio() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const Proil = {
    name: "TETCHOKA PIERRE LOIC",
    url: "/images/profile.jpg"
  }
  const [activeFilter, setActiveFilter] = useState('Tous');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e: { clientX: number; clientY: number; }) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Traitament!');
    setFormData({ name: '', email: '', subject: '', message: '' });
    
  };

  const navItems = ['À propos', 'Compétences', 'Projets', 'Contact'];

  const scrollToSection = (item: string) => {
    const sectionId = item.toLowerCase().replace('à ', '');
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const skills = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Développement Full-Stack",
      description: "Création d'applications web modernes et performantes",
      technologies: [
        { name: "React", level: 80 },
        { name: "Next.js", level: 50 },
        { name: "TypeScript", level: 80 },
        { name: "Laravel", level: 80 },
        { name: "JavaScript", level: 80 },
        { name: "Html5 / Css3", level: 90 },
        { name: "Python", level: 85 },
        { name: "PostgreSQL / MongoDB / MySql", level: 80 }
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
        { name: "Excel", level: 80 },
        { name: "Data Visualization", level: 87 }
      ]
    },
    {
      icon: <Figma className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Conception de maquettes et prototypes interactifs",
      technologies: [
        { name: "Figma", level: 85 },
        { name: "Adobe XD", level: 80 },
        { name: "Prototypage", level: 88 },
        { name: "Design System", level: 85 },
        { name: "UX Research", level: 82 }
      ]
    }
  ];

  const projects = [
    {
      title: "MediTrack",
      category: "Développement",
      description: "Application web de suivi medicale avec intégration de téléconsultation et prise de rendez-vous",
      image: "/images/medecine.png", 
      tags: ["React.js","TypeScript", "Laravel", "MySQL"],
      link: "https://github.com/TETCHOKA/projet_frontend.git"
    },
    {
      title: "Générateur de CV",
      category: "Développement",
      description: "Plate forme permettant de constuire un cv rapidement",
      image:"/images/gene.jpeg", 
      tags: ["HTML5", "CSS3", "Tailwind css", "Javascript"],
      link: "https://github.com/FredhKhelyan/GenerateurCV.git"
    },
    {
      title: "Hospital Management",
      category: "Développement",
      description: "Application web permettant de gérer un hopital",
      image:"/images/hos.png", 
      tags: ["HTML5", "CSS3", "Bootstrap", "Javascript", "Php", "MySQL"],
      link: "https://github.com/TETCHOKA/Hospital_php_dure.git"
    },
     {
      title: "AfriPay",
      category: "Développement",
      description: "Application web de payement en ligne",
      image:"/images/afri.png", 
      tags: ["Next.js","TypeScript", "Tailwind css", "MySQL" ],
      link: "https://github.com/TETCHOKA/Acceuil_nextjs.git"
    },
    {
      title: "Dashboard Analytics",
      category: "Data Analysis",
      description: "Tableau de bord interactif pour visualiser les KPIs business en temps réel",
      image: "/images/anal.jpg", // Remplacez par votre vraie image
      tags: ["Python", "Power BI", "SQL"]
    },
    {
      title: "Prédiction des Ventes",
      category: "Data Analysis",
      description: "Modèle ML pour prédire les tendances de ventes avec 92% de précision",
      image: "/images/ma.jpg", 
      tags: ["Python", "Scikit-learn", "Pandas"]
    },
    {
      title: "MediTrack",
      category: "Design",
      description: "Système de design complet pour une cohérence visuelle sur tous les services",
      image: "/images/medecine.png", 
      tags: ["Figma", "Components", "Documentation"],
      link:"https://www.figma.com/design/kwgzQ0e7H0E3UoSKHDYeQs/Fil_rouge?node-id=0-1&t=3SJcj2ueEvJIM4LC-1"
    },
    {
      title: "GoMobil",
      category: "Design",
      description: "Maquettes haute-fidélité pour une application de transport mobile moderne",
      image: "/images/mobile.png", 
      tags: ["Figma", "Prototypage", "UX Research"],
      link: "https://www.figma.com/design/4vl5tmDyS3iQVA6jeQZyF6/Untitled?node-id=0-1&m=dev&t=xWvNVZ5UmKlMp397-1"
    },
    {
      title: "Estates",
      category: "Design",
      description: "Maquettes haute-fidélité pour une application  moderne",
      image: "/images/br.png", 
      tags: ["Figma", "Prototypage", "UX Research"],
      link: "https://www.figma.com/design/89K4msUEfNj4nm4f3FXFTS/Brief_Project_0?node-id=0-1&t=SMUqbOlj5bR8gn2K-1"
    }
  ];

  const filterCategories = ['Tous', 'Développement', 'Data Analysis', 'Design'];

  const filteredProjects = activeFilter === 'Tous' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white overflow-hidden">
      {/* Gradient animé en arrière-plan */}
      <div 
        className="fixed inset-0 opacity-30 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 40%)`
        }}
      />

      {/* Particules flottantes */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-lg bg-slate-950/50 border-b border-blue-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className={`text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
            Tetchoka.dev
          </div>
          
          {/* Menu Desktop */}
          <div className="hidden md:flex gap-6 items-center">
            {navItems.map((item, i) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`hover:text-blue-400 transition-all duration-300 hover:scale-110 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Burger Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-blue-500/20 rounded-lg transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-blue-400" />
            ) : (
              <Menu className="w-6 h-6 text-blue-400" />
            )}
          </button>
        </div>

        {/* Menu Mobile */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-6 py-4 space-y-4 bg-slate-900/95 backdrop-blur-lg border-t border-blue-500/20">
            {navItems.map((item, i) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left px-4 py-3 hover:bg-blue-500/20 rounded-lg transition-all duration-300 hover:translate-x-2"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 relative">
        <div className={`max-w-5xl text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}><br/><br/><br/>
          
          {/* Photo de profil */}
          <div className="mb-8 flex justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300 animate-pulse"></div>
              <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-blue-500/50 backdrop-blur-sm bg-slate-800/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <div className="w-full h-full bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center text-6xl font-bold">
                  <img src={Proil.url} alt={Proil.name} className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>

          {/* Nom et Titre */}
          <div className="mb-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white">
              TETCHOKA PIERRE LOIC
            </h2>
            <p className="text-lg md:text-xl text-blue-300 font-semibold">
              Ingénieur en Génie Informatique
            </p>
          </div>

          <div className="mb-6 inline-block">
            <span className="px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-300 text-sm backdrop-blur-sm">
              Disponible pour de nouveaux projets
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent animate-pulse">
            Développeur Full-Stack
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-200 mb-4">
            & Data Analyst | UI/UX Designer
          </p>
          
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10">
            Je transforme vos idées en solutions digitales innovantes, 
            de la conception à la mise en production, avec une expertise en analyse de données.
          </p>

          <div className="flex gap-4 justify-center mb-12">
            <button 
                            onClick={() => {
                const el = document.getElementById('projets');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              Voir mes projets
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
                          onClick={() => {
                const el = document.getElementById('contact');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="px-8 py-4 border-2 border-blue-500/50 rounded-lg font-semibold hover:bg-blue-500/10 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
            >
              Me contacter
            </button>
          </div>

          <div className="flex gap-6 justify-center">
            {[
              { Icon: Github, href: "https://github.com/TETCHOKA", target: "_blank" },
              { Icon: Linkedin, href: "#" },
              { Icon: Mail, href:"mailto:tetchokapierre3@gmail.com" }
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                className="p-3 bg-slate-800/50 rounded-lg hover:bg-blue-500/20 hover:scale-110 transition-all duration-300 backdrop-blur-sm border border-blue-500/20"
              >
                <Icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-blue-400" />
        </div>
      </section>

      {/* Skills Section */}
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

      {/* Projects Section */}
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
                  <a href={project.link}  target="_blank" className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors group-hover:translate-x-2 duration-300">
                    Voir le projet
                    <ExternalLink className="w-4 h-4" />
                  </a>
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

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <div className="p-12 rounded-3xl bg-gradient-to-br from-slate-800/40 to-blue-900/20 backdrop-blur-xl border border-blue-500/20">
            <h2 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Travaillons Ensemble
            </h2>
            <p className="text-center text-slate-400 mb-12 text-lg">
              Un projet en tête ? Discutons-en !
            </p>

            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Votre nom"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="px-6 py-4 bg-slate-900/50 border border-blue-500/30 rounded-xl focus:border-blue-400 focus:outline-none transition-colors backdrop-blur-sm"
                />
                <input
                  type="email"
                  placeholder="Votre email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="px-6 py-4 bg-slate-900/50 border border-blue-500/30 rounded-xl focus:border-blue-400 focus:outline-none transition-colors backdrop-blur-sm"
                />
              </div>
              <input
                type="text"
                placeholder="Sujet"
                value={formData.subject}
                onChange={(e) => setFormData({...formData, subject: e.target.value})}
                className="w-full px-6 py-4 bg-slate-900/50 border border-blue-500/30 rounded-xl focus:border-blue-400 focus:outline-none transition-colors backdrop-blur-sm"
              />
              <textarea
                rows={6}
                placeholder="Votre message"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full px-6 py-4 bg-slate-900/50 border border-blue-500/30 rounded-xl focus:border-blue-400 focus:outline-none transition-colors backdrop-blur-sm resize-none"
              />
              <button
                onClick={handleSubmit}
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105"
              >
                Envoyer le message
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-blue-500/20 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-slate-400">
            © { Date() } Tetchoka Portfolio.
          </p>
        </div>
      </footer>
    </div>
  );
}