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
    <div className="min-h-screen relative selection:bg-indigo-500/30 overflow-x-hidden">
      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-500/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-500/10 blur-[120px] rounded-full"></div>
        <div className="absolute top-[30%] right-[-5%] w-[30%] h-[30%] bg-purple-500/5 blur-[100px] rounded-full"></div>
      </div>

      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-600/20">
                B
              </div>
              <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
                br41n7.
              </span>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                {navItems.map(item => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`text-sm font-medium transition-colors ${
                      activeSection === item.id ? 'text-indigo-400' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
                <a 
                  href="#contact" 
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-full text-sm font-medium transition-all shadow-lg shadow-indigo-600/20"
                >
                  Hire Me
                </a>
              </div>
            </div>

            {/* Mobile Nav Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className="p-2 text-slate-400 hover:text-white transition-colors"
                aria-label="Toggle Menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden bg-slate-950/98 backdrop-blur-xl flex flex-col items-center justify-center space-y-8 animate-in fade-in duration-300">
          {navItems.map(item => (
            <a
              key={`mobile-${item.id}`}
              href={`#${item.id}`}
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl font-semibold text-slate-300 hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a 
            href="#contact" 
            onClick={() => setIsMenuOpen(false)}
            className="px-8 py-3 bg-indigo-600 rounded-full text-lg font-medium shadow-xl shadow-indigo-600/20"
          >
            Contact Me
          </a>
        </div>
      )}

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        
        {/* Hero Section */}
        <section id="home" className="min-h-[90vh] flex flex-col items-center justify-center text-center space-y-8 py-20 reveal relative overflow-hidden">
          {/* Video Animation Background */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="absolute inset-0 -z-20 overflow-hidden pointer-events-none"
          >
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover scale-110 opacity-40 blur-[2px]"
            >
              <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-elements-in-blue-1574-large.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/40 to-slate-950"></div>
            <div className="absolute inset-0 bg-indigo-950/20 mix-blend-overlay"></div>
          </motion.div>

          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-indigo-500/20 text-indigo-400 text-sm font-medium relative z-10"
          >
            <Sparkles size={16} className="animate-pulse" />
            <span className="tracking-wider uppercase font-bold text-[10px]">Senior Full Stack Architect</span>
          </motion.div>
          
          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.85] max-w-5xl mx-auto relative z-10"
          >
            Pioneering <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-blue-400 to-emerald-400">
              Modern Web.
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-medium relative z-10"
          >
            I'm <span className="text-white">Iyanu Olalegan</span>, crafting high-performance systems with <span className="text-indigo-400">Django</span> & <span className="text-indigo-400">React</span> for 4+ years.
          </motion.p>

          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <a href="#projects" className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 rounded-full font-bold transition-all transform hover:scale-105 shadow-xl shadow-indigo-600/30 flex items-center gap-2">
              View My Work <ChevronRight size={20} />
            </a>
            <a href="#contact" className="px-8 py-4 glass hover:bg-white/5 rounded-full font-bold transition-all flex items-center gap-2">
              Get In Touch
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="pt-12 flex items-center gap-6"
          >
            <a href="https://github.com" target="_blank" className="p-3 glass rounded-xl hover:text-indigo-400 transition-all hover:-translate-y-1"><Github size={24} /></a>
            <a href="https://linkedin.com" target="_blank" className="p-3 glass rounded-xl hover:text-indigo-400 transition-all hover:-translate-y-1"><Linkedin size={24} /></a>
            <a href="https://twitter.com" target="_blank" className="p-3 glass rounded-xl hover:text-indigo-400 transition-all hover:-translate-y-1"><Twitter size={24} /></a>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "circOut" }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden glass p-4 transform -rotate-3 hover:rotate-0 transition-all duration-700 relative z-10 group shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <img 
                src={profileImage} 
                alt="Iyanu Olalegan" 
                className="w-full h-full object-cover rounded-[2.5rem] transition-all duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay Text */}
              <div className="absolute bottom-10 left-10 right-10 translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
                <p className="text-white font-black text-2xl tracking-tighter">IYANU OLALEGAN</p>
                <p className="text-indigo-400 font-bold text-sm tracking-widest uppercase">Senior Full Stack Developer</p>
              </div>
            </div>
            
            {/* Background geometric shapes */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-indigo-500/20 blur-2xl rounded-full animate-pulse"></div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-blue-500/10 blur-3xl rounded-full animate-pulse delay-700"></div>

            {/* Tech4Dev Badge */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -bottom-8 -right-4 md:-right-8 glass p-6 rounded-3xl border-2 border-indigo-500/30 shadow-2xl z-20"
            >
              <div className="flex items-center gap-4">
                <div className="p-4 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl text-white shadow-lg">
                  <Award size={32} />
                </div>
                <div>
                  <p className="text-[10px] text-indigo-400 uppercase font-black tracking-[0.2em]">Certified Expert</p>
                  <p className="text-lg font-bold text-white">Tech4Dev '24</p>
                  <p className="text-xs text-slate-400">Software Developer</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold flex items-center gap-4">
              <User className="text-indigo-500" />
              About Iyanu
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed">
              With over <span className="text-white font-semibold">4 years of production experience</span>, I bridge the gap between complex backend logic and intuitive frontend interactions. My toolkit is centered around <span className="text-indigo-400 font-semibold">Django</span> for secure data and <span className="text-indigo-400 font-semibold">React</span> for dynamic interfaces.
            </p>
            <p className="text-lg text-slate-400 leading-relaxed">
              I am a proud <span className="text-white font-medium italic">2024 Tech4Dev Software Developer graduate</span>, a certification that sharpened my ability to build cloud-native applications and work effectively in collaborative, agile teams.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                { label: 'Frontend Expertise', val: 'React / Bootstrap' },
                { label: 'Backend Mastery', val: 'Python / Django' },
                { label: 'Experience', val: '4 Full Years' },
                { label: 'Certified', val: 'Tech4Dev 2024' }
              ].map((item, i) => (
                <div key={`stat-${i}`} className="p-4 glass rounded-2xl border-white/5 hover:border-indigo-500/20 transition-all">
                  <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest mb-1">{item.label}</p>
                  <p className="font-bold text-white">{String(item.val)}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 space-y-12">
          <div className="text-center space-y-4 reveal">
            <h2 className="text-3xl md:text-5xl font-bold flex items-center justify-center gap-4">
              <Code className="text-indigo-500" />
              Technical Arsenal
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              A comprehensive set of tools and languages I've mastered over the last 4 years.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 reveal">
            {SKILLS.map((skill, idx) => (
              <div key={`skill-${idx}`} className="glass p-6 rounded-2xl group hover:border-indigo-500/50 transition-all hover:-translate-y-2">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">{skill.category}</span>
                  <div className="flex items-center gap-1">
                    <CheckCircle size={12} className="text-emerald-500" />
                    <span className="text-sm font-bold text-white/60 group-hover:text-indigo-400 transition-colors">{skill.level}%</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4">{skill.name}</h3>
                <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-indigo-600 to-blue-400 transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24 space-y-12">
           <div className="text-center space-y-4 reveal">
            <h2 className="text-3xl md:text-5xl font-bold flex items-center justify-center gap-4">
              <Layers className="text-indigo-500" />
              Work History
            </h2>
          </div>

          <div className="max-w-4xl mx-auto relative px-4 reveal">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/0 via-indigo-500/50 to-indigo-500/0 hidden md:block"></div>
            
            {EXPERIENCES.map((exp, idx) => (
              <div key={`exp-${idx}`} className={`relative mb-16 md:w-1/2 ${idx % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:ml-auto md:pl-12'}`}>
                <div className={`absolute w-4 h-4 rounded-full bg-indigo-500 ring-4 ring-indigo-500/20 top-2 hidden md:block ${idx % 2 === 0 ? '-right-2' : '-left-2'}`}></div>
                <div className="glass p-8 rounded-3xl border-white/5 hover:border-indigo-500/20 transition-all shadow-xl shadow-black/20">
                  <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest block mb-2">{exp.period}</span>
                  <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                  <p className="text-lg text-slate-300 font-medium mb-4">{exp.company}</p>
                  <ul className={`space-y-3 ${idx % 2 === 0 ? 'md:items-end' : ''}`}>
                    {exp.description.map((item, i) => (
                      <li key={`exp-${idx}-item-${i}`} className={`flex items-start gap-3 text-slate-400 text-sm leading-relaxed ${idx % 2 === 0 ? 'md:flex-row-reverse md:text-right' : ''}`}>
                        <ChevronRight size={16} className={`mt-1 text-indigo-500 shrink-0 ${idx % 2 === 0 ? 'md:rotate-180' : ''}`} />
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
        <section id="projects" className="py-24 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 reveal">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold flex items-center gap-4">
                <Terminal className="text-indigo-500" />
                Case Studies
              </h2>
              <p className="text-slate-400 max-w-xl">
                A deep dive into high-performance full-stack applications.
              </p>
            </div>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 glass rounded-full text-indigo-400 font-bold hover:bg-white/5 transition-all shadow-lg">
              Open GitHub <ExternalLink size={20} />
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 reveal">
            {PROJECTS.map((project) => (
              <article key={`proj-${project.id}`} className="glass rounded-[2rem] overflow-hidden group border-white/5 hover:border-indigo-500/20 transition-all flex flex-col h-full shadow-lg shadow-black/20">
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-indigo-950/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-4 bg-white rounded-full text-indigo-900 hover:scale-110 transition-transform shadow-xl">
                        <Github size={24} />
                      </a>
                    )}
                    <a href="#" className="p-4 bg-indigo-600 rounded-full text-white hover:scale-110 transition-transform shadow-xl">
                      <ExternalLink size={24} />
                    </a>
                  </div>
                </div>
                <div className="p-8 space-y-5 flex-1 flex flex-col">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={`tag-${project.id}-${i}`} className="text-[9px] font-black uppercase tracking-widest px-2 py-1 rounded-md bg-white/5 text-slate-400 border border-white/5 group-hover:text-indigo-400 group-hover:border-indigo-400/20 transition-colors">
                        {String(tag)}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{String(project.title)}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed flex-1">
                    {String(project.description)}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 border-t border-white/5 reveal">
          <div className="glass rounded-[3rem] p-8 md:p-16 grid lg:grid-cols-2 gap-16 overflow-hidden relative shadow-2xl shadow-black/40">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/20 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
            
            <div className="space-y-8 relative z-10">
              <h2 className="text-4xl md:text-6xl font-bold leading-tight">
                Let's Build <br /> 
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-blue-500">Something Great.</span>
              </h2>
              <p className="text-lg text-slate-400 max-w-md">
                I am currently open to senior-level full-stack positions or high-impact freelance projects.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-5 group">
                  <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-indigo-400 shadow-xl group-hover:bg-indigo-600 group-hover:text-white transition-all">
                    <Mail size={28} />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest">Email Me</p>
                    <a href="mailto:iyanuolalegan@gmail.com" className="text-xl font-bold text-white hover:text-indigo-400 transition-colors">iyanuolalegan@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-center gap-5 group">
                  <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-indigo-400 shadow-xl group-hover:bg-indigo-600 group-hover:text-white transition-all">
                    <Linkedin size={28} />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest">Connect</p>
                    <a href="https://linkedin.com/in/iyanu-olalegan" target="_blank" rel="noopener noreferrer" className="text-xl font-bold text-white hover:text-indigo-400 transition-colors">linkedin.com/in/iyanu-olalegan</a>
                  </div>
                </div>
              </div>
            </div>

            <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">Your Name</label>
                  <input type="text" className="w-full glass bg-white/5 rounded-2xl p-5 focus:ring-2 focus:ring-indigo-500 outline-none transition-all border-transparent focus:border-indigo-500/20" placeholder="Jane Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">Email</label>
                  <input type="email" className="w-full glass bg-white/5 rounded-2xl p-5 focus:ring-2 focus:ring-indigo-500 outline-none transition-all border-transparent focus:border-indigo-500/20" placeholder="iyanuolalegan@gmail.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">Message</label>
                <textarea className="w-full glass bg-white/5 rounded-2xl p-5 focus:ring-2 focus:ring-indigo-500 outline-none transition-all min-h-[160px] border-transparent focus:border-indigo-500/20" placeholder="Tell me about your project..."></textarea>
              </div>
              <button className="w-full py-5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-black uppercase tracking-widest transition-all transform hover:scale-[1.02] shadow-2xl shadow-indigo-600/30 flex items-center justify-center gap-3">
                Send <Send size={20} />
              </button>
            </form>
          </div>
        </section>

      </main>

      <footer className="py-16 border-t border-white/5 mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center font-bold text-white">B</div>
              <span className="text-2xl font-bold tracking-tighter">br41n7.</span>
            </div>
            <p className="text-slate-500 text-sm max-w-xs text-center md:text-left">
              Iyanu Olalegan (br41n7) - Crafting premium digital experiences through 4 years of dedicated code mastery.
            </p>
          </div>
          
          <div className="flex gap-12">
             <div className="space-y-4">
               <h4 className="text-xs font-black text-white uppercase tracking-widest">Navigation</h4>
               <ul className="space-y-2 text-sm text-slate-400">
                 {navItems.map(item => <li key={`foot-nav-${item.id}`}><a href={`#${item.id}`} className="hover:text-indigo-400 transition-colors">{item.label}</a></li>)}
               </ul>
             </div>
             <div className="space-y-4">
               <h4 className="text-xs font-black text-white uppercase tracking-widest">Social</h4>
               <ul className="space-y-2 text-sm text-slate-400">
                 <li><a href="#" className="hover:text-indigo-400 transition-colors">GitHub</a></li>
                 <li><a href="#" className="hover:text-indigo-400 transition-colors">LinkedIn</a></li>
                 <li><a href="#" className="hover:text-indigo-400 transition-colors">Resume</a></li>
               </ul>
             </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-white/5 text-center">
           <p className="text-slate-600 text-xs tracking-widest uppercase">
            © {new Date().getFullYear()} br41n7. Powered by Django & React.
          </p>
        </div>
      </footer>

    </div>
  );
};

export default App;