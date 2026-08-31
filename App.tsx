import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Download, 
  ExternalLink, 
  Code, 
  Layers, 
  User, 
  Send,
  Sparkles,
  Award,
  ChevronRight,
  Terminal,
  Menu,
  X,
  CheckCircle,
  Twitter
} from 'lucide-react';
import { PROJECTS, SKILLS, EXPERIENCES } from './constants';
import profileImage from './src/assets/images/regenerated_image_1778589715331.png';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains('reveal-left') || entry.target.classList.contains('reveal-right')) {
            entry.target.classList.add('revealed-side');
          } else {
            entry.target.classList.add('revealed');
          }
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    elements.forEach(el => observerRef.current?.observe(el));

    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
      const scrollPos = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observerRef.current?.disconnect();
    };
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
  ];

  return (
    <div className="min-h-screen relative selection:bg-indigo-500/30 overflow-x-hidden bg-slate-950 text-slate-100">
      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-600/10 blur-[130px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[130px] rounded-full"></div>
        <div className="absolute top-[35%] right-[10%] w-[35%] h-[35%] bg-purple-600/5 blur-[120px] rounded-full"></div>
      </div>

      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10 backdrop-blur-md">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#home" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-gradient-to-tr from-indigo-600 to-blue-500 rounded-xl flex items-center justify-center font-black text-white shadow-lg shadow-indigo-500/25 group-hover:scale-105 transition-transform">
                B
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-indigo-300">
                  br41n7.
                </span>
                <span className="text-[10px] text-indigo-400 font-semibold tracking-wider flex items-center gap-1 -mt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Available for Hire
                </span>
              </div>
            </a>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
              <div className="bg-slate-900/60 p-1.5 rounded-full border border-white/5 flex items-center space-x-1">
                {navItems.map(item => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
                      activeSection === item.id
                        ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
              <a
                href="#contact"
                className="ml-4 px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white rounded-full text-xs font-bold transition-all shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/40 hover:scale-105 active:scale-95"
              >
                Hire Me
              </a>
            </div>

            {/* Mobile Nav Toggle */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className="p-2.5 rounded-xl bg-slate-900/80 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-all focus:outline-none"
                aria-label="Toggle Menu"
              >
                {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden bg-slate-950/98 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-8 pt-24"
          >
            <div className="flex flex-col space-y-4">
              <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest px-2">Navigation</span>
              {navItems.map(item => (
                <a
                  key={`mobile-${item.id}`}
                  href={`#${item.id}`}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-3 rounded-2xl text-xl font-bold transition-all flex items-center justify-between ${
                    activeSection === item.id
                      ? 'bg-indigo-600/20 text-indigo-400 border border-indigo-500/30'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight size={18} className="opacity-50" />
                </a>
              ))}
            </div>

            <div className="space-y-4 pt-6 border-t border-white/10">
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="w-full py-4 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl text-center text-base font-bold text-white shadow-xl shadow-indigo-600/30 block"
              >
                Get In Touch
              </a>
              <div className="flex items-center justify-center gap-6 pt-2">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"><Github size={20} /></a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"><Linkedin size={20} /></a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"><Twitter size={20} /></a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28">
        
        {/* Hero Section */}
        <section id="home" className="min-h-[85vh] sm:min-h-[90vh] flex flex-col items-center justify-center text-center space-y-8 sm:space-y-10 py-12 sm:py-20 reveal relative overflow-hidden">
          {/* Video / Glow Background */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 -z-20 overflow-hidden pointer-events-none rounded-3xl"
          >
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover scale-110 opacity-30 blur-[2px]"
            >
              <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-elements-in-blue-1574-large.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/60 to-slate-950"></div>
          </motion.div>

          {/* Badge */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-indigo-500/30 text-indigo-300 text-xs sm:text-sm font-semibold shadow-lg shadow-indigo-950/50"
          >
            <Sparkles size={16} className="animate-pulse text-indigo-400" />
            <span className="tracking-wider uppercase font-extrabold text-[10px] sm:text-xs">Senior Full Stack Web Architect</span>
          </motion.div>
          
          {/* Main Title */}
          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05] sm:leading-[1] max-w-5xl mx-auto"
          >
            Pioneering High Performance <br className="hidden sm:inline" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-blue-400 to-emerald-400">
              Modern Web Systems.
            </span>
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-base sm:text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal px-2"
          >
            I'm <span className="text-white font-bold underline decoration-indigo-500 decoration-2 underline-offset-4">Iyanu Olalegan</span> (br41n7), architecting robust applications with <span className="text-indigo-400 font-semibold">Django</span> & <span className="text-indigo-400 font-semibold">React</span> with over 4 years of production expertise.
          </motion.p>

          {/* Buttons CTA */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto px-4"
          >
            <a
              href="#projects"
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white rounded-2xl font-bold transition-all transform hover:scale-105 shadow-xl shadow-indigo-600/30 flex items-center justify-center gap-2"
            >
              Explore Case Studies <ChevronRight size={18} />
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 glass hover:bg-white/10 text-slate-200 hover:text-white rounded-2xl font-bold transition-all flex items-center justify-center gap-2 border border-white/10"
            >
              Contact Me
            </a>
          </motion.div>

          {/* Tech Badges Strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="pt-6 sm:pt-8 flex flex-wrap justify-center items-center gap-2 sm:gap-3 text-xs text-slate-400"
          >
            {['Django', 'ReactJS', 'Python', 'PostgreSQL', 'Supabase', 'Docker', 'Bootstrap 5', 'Tailwind'].map((tech, idx) => (
              <span key={`tech-pill-${idx}`} className="px-3 py-1.5 rounded-xl bg-slate-900/80 border border-white/10 font-medium hover:border-indigo-500/40 transition-colors">
                {tech}
              </span>
            ))}
          </motion.div>

          {/* Social Links */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="pt-6 flex items-center justify-center gap-4"
          >
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-xl text-slate-300 hover:text-indigo-400 hover:scale-110 transition-all border border-white/10" aria-label="GitHub Profile">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-xl text-slate-300 hover:text-indigo-400 hover:scale-110 transition-all border border-white/10" aria-label="LinkedIn Profile">
              <Linkedin size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-xl text-slate-300 hover:text-indigo-400 hover:scale-110 transition-all border border-white/10" aria-label="Twitter Profile">
              <Twitter size={20} />
            </a>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 sm:py-24 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="aspect-[4/5] max-w-md mx-auto rounded-3xl overflow-hidden glass p-3 sm:p-4 transform hover:scale-[1.01] transition-all duration-500 relative z-10 group shadow-2xl border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500 z-10"></div>
              <img 
                src={profileImage} 
                alt="Iyanu Olalegan" 
                className="w-full h-full object-cover rounded-2xl transition-all duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay Text */}
              <div className="absolute bottom-6 left-6 right-6 z-20">
                <p className="text-white font-black text-xl sm:text-2xl tracking-tight">IYANU OLALEGAN</p>
                <p className="text-indigo-400 font-bold text-xs tracking-widest uppercase">Senior Full Stack Developer</p>
              </div>
            </div>
            
            {/* Geometric Glows */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-indigo-600/20 blur-3xl rounded-full"></div>
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-blue-600/20 blur-3xl rounded-full"></div>

            {/* Tech4Dev Badge */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mt-4 lg:mt-0 lg:absolute lg:-bottom-6 lg:-right-6 glass p-4 sm:p-5 rounded-2xl border border-indigo-500/30 shadow-2xl z-20 max-w-xs mx-auto lg:mx-0"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-xl text-white shadow-lg shrink-0">
                  <Award size={28} />
                </div>
                <div>
                  <p className="text-[10px] text-indigo-400 uppercase font-extrabold tracking-widest">Certified Expert</p>
                  <p className="text-base font-bold text-white">Tech4Dev '24</p>
                  <p className="text-xs text-slate-400">Software Developer</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold">
              <User size={14} />
              <span>Biography & Skills Overview</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
              Engineering High Impact Systems with <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-blue-400">Precision.</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              With over <span className="text-white font-semibold">4 years of dedicated engineering experience</span>, I craft resilient web solutions that combine robust Django backends with reactive, responsive React frontends.
            </p>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              As a graduate of the prestigious <span className="text-white font-medium italic">2024 Tech4Dev Software Developer program</span>, I specialize in full lifecycle software creation—from relational schema design to cloud-native microservices deployment.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-4">
              {[
                { label: 'Frontend Expertise', val: 'React / Bootstrap' },
                { label: 'Backend Mastery', val: 'Python / Django' },
                { label: 'Experience', val: '4 Full Years' },
                { label: 'Certified', val: 'Tech4Dev 2024' }
              ].map((item, i) => (
                <div key={`stat-${i}`} className="p-4 glass rounded-2xl border border-white/10 hover:border-indigo-500/40 transition-all bg-slate-900/50">
                  <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider mb-1">{item.label}</p>
                  <p className="font-bold text-white text-sm sm:text-base">{String(item.val)}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 sm:py-24 space-y-10 sm:space-y-12">
          <div className="text-center space-y-4 reveal">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold">
              <Code size={14} />
              <span>Technical Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
              Technical <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-blue-400">Arsenal</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
              A comprehensive breakdown of stack proficiencies honed across 4+ years of building full-stack applications.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 reveal">
            {SKILLS.map((skill, idx) => (
              <div
                key={`skill-${idx}`}
                className="glass p-6 rounded-2xl group border border-white/10 hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-1 bg-slate-900/40 shadow-xl"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-extrabold text-indigo-400 uppercase tracking-widest px-2.5 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20">
                    {skill.category}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle size={14} className="text-emerald-400" />
                    <span className="text-xs font-bold text-slate-300 group-hover:text-indigo-300 transition-colors">{skill.level}%</span>
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-4 text-white group-hover:text-indigo-300 transition-colors">{skill.name}</h3>
                <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden p-0.5 border border-white/5">
                  <div 
                    className="h-full bg-gradient-to-r from-indigo-500 via-blue-500 to-emerald-400 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-16 sm:py-24 space-y-10 sm:space-y-12">
          <div className="text-center space-y-4 reveal">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold">
              <Layers size={14} />
              <span>Career Trajectory</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
              Professional <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-blue-400">Experience</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
              Track record of building enterprise platforms, microservices, and leading full-stack workflows.
            </p>
          </div>

          <div className="max-w-4xl mx-auto relative px-2 sm:px-4 reveal">
            {/* Timeline center line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500/0 via-indigo-500/40 to-indigo-500/0"></div>
            
            {EXPERIENCES.map((exp, idx) => (
              <div
                key={`exp-${idx}`}
                className={`relative mb-12 sm:mb-16 pl-12 md:pl-0 ${
                  idx % 2 === 0 ? 'md:w-1/2 md:pr-12 md:text-right md:ml-0' : 'md:w-1/2 md:ml-auto md:pl-12'
                }`}
              >
                {/* Timeline node */}
                <div
                  className={`absolute w-5 h-5 rounded-full bg-slate-950 border-2 border-indigo-500 ring-4 ring-indigo-500/20 top-2 left-4 md:left-auto ${
                    idx % 2 === 0 ? 'md:-right-2.5' : 'md:-left-2.5'
                  }`}
                ></div>

                <div className="glass p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-indigo-500/40 transition-all shadow-2xl bg-slate-900/60 group">
                  <span className="text-xs font-extrabold text-indigo-400 uppercase tracking-widest inline-block mb-2 px-3 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20">
                    {exp.period}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white mb-1 group-hover:text-indigo-300 transition-colors">{exp.role}</h3>
                  <p className="text-sm sm:text-base text-slate-300 font-medium mb-4">{exp.company}</p>

                  <ul className={`space-y-2.5 ${idx % 2 === 0 ? 'md:items-end' : ''}`}>
                    {exp.description.map((item, i) => (
                      <li
                        key={`exp-${idx}-item-${i}`}
                        className={`flex items-start gap-2.5 text-slate-300 text-xs sm:text-sm leading-relaxed ${
                          idx % 2 === 0 ? 'md:flex-row-reverse md:text-right' : ''
                        }`}
                      >
                        <ChevronRight size={16} className={`mt-0.5 text-indigo-400 shrink-0 ${idx % 2 === 0 ? 'md:rotate-180' : ''}`} />
                        <span>{String(item)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 sm:py-24 space-y-10 sm:space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 reveal">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold">
                <Terminal size={14} />
                <span>Featured Works</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
                Case <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-blue-400">Studies</span>
              </h2>
              <p className="text-slate-400 max-w-xl text-sm sm:text-base">
                A selection of full-stack engineering projects demonstrating real-world solutions and clean design.
              </p>
            </div>
            <a
              href="https://github.com/Br41n7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 glass rounded-2xl text-indigo-300 font-bold hover:bg-white/10 transition-all border border-white/10 shadow-lg text-sm"
            >
              Explore GitHub Repositories <ExternalLink size={16} />
            </a>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 reveal">
            {PROJECTS.map((project) => (
              <article
                key={`proj-${project.id}`}
                className="glass rounded-3xl overflow-hidden group border border-white/10 hover:border-indigo-500/40 transition-all duration-300 flex flex-col h-full shadow-2xl bg-slate-900/50 hover:-translate-y-1.5"
              >
                <div className="relative aspect-video overflow-hidden bg-slate-900">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-slate-950/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3.5 bg-white text-slate-950 rounded-2xl hover:scale-110 transition-transform shadow-xl font-bold flex items-center gap-2 text-xs"
                        aria-label={`View code for ${project.title}`}
                      >
                        <Github size={18} />
                        Code
                      </a>
                    )}
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-4 flex-1 flex flex-col">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag, i) => (
                      <span
                        key={`tag-${project.id}-${i}`}
                        className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-md bg-white/5 text-slate-300 border border-white/10 group-hover:text-indigo-300 group-hover:border-indigo-500/30 transition-colors"
                      >
                        {String(tag)}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors">{String(project.title)}</h3>

                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed flex-1">
                    {String(project.description)}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 sm:py-24 border-t border-white/10 reveal">
          <div className="glass rounded-3xl p-6 sm:p-10 md:p-16 grid lg:grid-cols-2 gap-10 lg:gap-16 overflow-hidden relative shadow-2xl bg-slate-900/60 border border-white/10">
            <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-600/15 blur-[120px] rounded-full pointer-events-none"></div>
            
            <div className="space-y-8 relative z-10">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-4">
                  <Mail size={14} />
                  <span>Get In Touch</span>
                </div>
                <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
                  Let's Build <br />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-blue-400 to-emerald-400">Something Great.</span>
                </h2>
              </div>

              <p className="text-base sm:text-lg text-slate-300 max-w-md leading-relaxed">
                I am currently open to senior full-stack roles, lead developer positions, or high-impact technical consultations.
              </p>
              
              <div className="space-y-6 pt-2">
                <div className="flex items-center gap-4 sm:gap-5 group">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 glass rounded-2xl flex items-center justify-center text-indigo-400 shadow-xl group-hover:bg-indigo-600 group-hover:text-white transition-all shrink-0 border border-white/10">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 uppercase font-extrabold tracking-widest">Email Address</p>
                    <a href="mailto:iyanuolalegan@gmail.com" className="text-base sm:text-xl font-bold text-white hover:text-indigo-400 transition-colors break-all">iyanuolalegan@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-center gap-4 sm:gap-5 group">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 glass rounded-2xl flex items-center justify-center text-indigo-400 shadow-xl group-hover:bg-indigo-600 group-hover:text-white transition-all shrink-0 border border-white/10">
                    <Linkedin size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 uppercase font-extrabold tracking-widest">LinkedIn Profile</p>
                    <a href="https://linkedin.com/in/iyanu-olalegan" target="_blank" rel="noopener noreferrer" className="text-base sm:text-xl font-bold text-white hover:text-indigo-400 transition-colors break-all">linkedin.com/in/iyanu-olalegan</a>
                  </div>
                </div>
              </div>
            </div>

            <form className="space-y-5 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Your Name</label>
                  <input type="text" className="w-full glass bg-slate-950/60 rounded-xl p-4 text-sm text-white focus:ring-2 focus:ring-indigo-500 outline-none transition-all border border-white/10 focus:border-indigo-500" placeholder="Jane Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Email Address</label>
                  <input type="email" className="w-full glass bg-slate-950/60 rounded-xl p-4 text-sm text-white focus:ring-2 focus:ring-indigo-500 outline-none transition-all border border-white/10 focus:border-indigo-500" placeholder="jane@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Message</label>
                <textarea className="w-full glass bg-slate-950/60 rounded-xl p-4 text-sm text-white focus:ring-2 focus:ring-indigo-500 outline-none transition-all min-h-[140px] border border-white/10 focus:border-indigo-500" placeholder="Tell me about your project..."></textarea>
              </div>
              <button className="w-full py-4 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white rounded-xl font-extrabold text-sm uppercase tracking-widest transition-all transform hover:scale-[1.01] active:scale-[0.99] shadow-xl shadow-indigo-600/30 flex items-center justify-center gap-2">
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="py-12 sm:py-16 border-t border-white/10 mt-16 sm:mt-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8 sm:gap-12">
          <div className="flex flex-col items-center md:items-start gap-3">
            <a href="#home" className="flex items-center gap-3">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center font-bold text-white">B</div>
              <span className="text-xl font-black tracking-tight text-white">br41n7.</span>
            </a>
            <p className="text-slate-400 text-xs sm:text-sm max-w-xs text-center md:text-left leading-relaxed">
              Iyanu Olalegan (br41n7) — Senior Full Stack Developer. Crafting enterprise Django & React software.
            </p>
          </div>
          
          <div className="flex gap-10 sm:gap-16">
             <div className="space-y-3">
               <h4 className="text-xs font-black text-white uppercase tracking-widest">Navigation</h4>
               <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
                 {navItems.map(item => <li key={`foot-nav-${item.id}`}><a href={`#${item.id}`} className="hover:text-indigo-400 transition-colors">{item.label}</a></li>)}
               </ul>
             </div>
             <div className="space-y-3">
               <h4 className="text-xs font-black text-white uppercase tracking-widest">Connect</h4>
               <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
                 <li><a href="https://github.com/Br41n7" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">GitHub</a></li>
                 <li><a href="https://linkedin.com/in/iyanu-olalegan" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">LinkedIn</a></li>
                 <li><a href="mailto:iyanuolalegan@gmail.com" className="hover:text-indigo-400 transition-colors">Email</a></li>
               </ul>
             </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 mt-10 pt-6 border-t border-white/5 text-center">
          <p className="text-slate-500 text-[11px] tracking-widest uppercase">
            © {new Date().getFullYear()} br41n7 (Iyanu Olalegan). Certified Tech4Dev Developer.
          </p>
        </div>
      </footer>

    </div>
  );
};

export default App;