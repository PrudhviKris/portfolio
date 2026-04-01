import React, { useState, useEffect } from 'react';

// --- PREMIUM CUSTOM SVG ICON COMPONENTS ---
const IconWrapper = ({ children, size = 24, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    {children}
  </svg>
);

const Mail = (props) => (
  <IconWrapper {...props}><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/><rect width="20" height="16" x="2" y="4" rx="2"/></IconWrapper>
);

const ExternalLink = (props) => (
  <IconWrapper {...props}><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></IconWrapper>
);

const Download = (props) => (
  <IconWrapper {...props}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></IconWrapper>
);

const Cpu = (props) => (
  <IconWrapper {...props}><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/></IconWrapper>
);

const Globe = (props) => (
  <IconWrapper {...props}><circle cx="12" cy="12" r="10"/><line x1="2" x2="22" y1="12" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></IconWrapper>
);

const ShieldCheck = (props) => (
  <IconWrapper {...props}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></IconWrapper>
);

const BrainCircuit = (props) => (
  <IconWrapper {...props}><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .52 6.588A3 3 0 1 0 12 18Z"/><path d="M9 13a4.5 4.5 0 0 0 3-4"/><path d="M6.003 5.125A3 3 0 1 0 12 5"/><path d="M12 18a3 3 0 1 0 5.997-.125 4 4 0 0 0 2.526-5.77 4 4 0 0 0-.52-6.588A3 3 0 1 0 12 6Z"/><path d="M15 11a4.5 4.5 0 0 0-3 4"/></IconWrapper>
);

const FileText = (props) => (
  <IconWrapper {...props}><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><line x1="10" x2="8" y1="9" y2="9"/></IconWrapper>
);

const Award = (props) => (
  <IconWrapper {...props}><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></IconWrapper>
);

const BookOpen = (props) => (
  <IconWrapper {...props}><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></IconWrapper>
);

const Code2 = (props) => (
  <IconWrapper {...props}><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></IconWrapper>
);

const ChevronRight = (props) => (
  <IconWrapper {...props}><path d="m9 18 6-6-6-6"/></IconWrapper>
);

const BarChart3 = (props) => (
  <IconWrapper {...props}><path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></IconWrapper>
);

const GitHubIcon = ({ size = 24, className = "" }) => (
  <IconWrapper size={size} className={className}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </IconWrapper>
);

const LinkedInIcon = ({ size = 24, className = "" }) => (
  <IconWrapper size={size} className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </IconWrapper>
);

// --- MAIN APPLICATION COMPONENT ---
const App = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const resumeData = {
    name: "Miriyala Prudhvi Krishna Sarath",
    title: "AI/ML Engineer & Full-Stack Developer",
    email: "prudhvikrishnamiriyala@gmail.com",
    linkedin: "linkedin.com/in/miriyala-prudhvi-krishna",
    github: "github.com/PrudhviKris",
    phone: "+91 7569744104",
    summary: "Aspiring AI/ML Engineer and Full-Stack Developer with experience in building AI-driven applications, optimizing deep learning models, and leveraging cloud technologies for scalable solutions. Skilled in Python, TensorFlow, React.js, and SQL, with a strong interest in NLP, computer vision, and AI automation."
  };

  const skills = {
    "AI/ML": ["TensorFlow", "PyTorch", "OpenCV", "NLTK", "CNN", "RNN", "GAN", "LLM", "Transformers"],
    "Languages": ["Python", "C", "C++", "Java", "JavaScript"],
    "Web/Cloud": ["React.js", "Node.js", "HTML5/CSS3", "Tailwind CSS", "Cloud Computing"],
    "Databases": ["MySQL", "MongoDB", "NoSQL", "ANSI SQL"]
  };

  const projects = [
    {
      id: 1,
      title: "Neural Machine Translation",
      category: "nlp",
      tech: ["Python", "NLTK", "TensorFlow"],
      description: "Implemented a Transformer model for neural machine translation, training it on a dataset of 1M+ sentence pairs.",
      metrics: {
        accuracy: "92% BLEU Score",
        dataset: "WMT14 En-De Dataset",
        github: "https://github.com/PrudhviKris/machine-translation"
      },
      visual: "Attention Heatmaps & BLEU curves"
    },
    {
      id: 2,
      title: "Cyber Bullying Detection",
      category: "ml",
      tech: ["Keras", "Word2Vec", "CNN"],
      description: "Built a machine learning model to classify social media comments as bullying or non-bullying with high accuracy.",
      metrics: {
        accuracy: "94.8% F1-Score",
        dataset: "Twitter Sentiment Data",
        github: "https://github.com/PrudhviKris/cyber-bullying-detection"
      },
      visual: "Confusion Matrix & ROC Curves"
    },
    {
      id: 3,
      title: "Financial Fraud Analytics",
      category: "analytics",
      tech: ["Python", "Power BI", "Scikit-learn"],
      description: "A comprehensive data analytics project identifying anomalous transaction patterns in banking systems.",
      metrics: {
        accuracy: "98.2% Precision",
        dataset: "Credit Card Fraud (Kaggle)",
        github: "https://github.com/PrudhviKris/fraud-analytics"
      },
      visual: "PowerBI Dashboard & Feature Plots"
    },
    {
      id: 4,
      title: "Deep Intrusion Detection",
      category: "security",
      tech: ["PyTorch", "LSTM", "Security"],
      description: "A Cyber Security project using Deep Learning to detect malicious network traffic and DDoS attacks in real-time.",
      metrics: {
        accuracy: "96.5% Detection Rate",
        dataset: "NSL-KDD Dataset",
        github: "https://github.com/PrudhviKris/intrusion-detection"
      },
      visual: "Packet Logs & Threat Heatmap"
    }
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-blue-500/30">
      {/* Dynamic Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-600/10 rounded-full blur-[120px]"></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#020617]/80 backdrop-blur-xl py-4 shadow-2xl border-b border-slate-800/50' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
          <div className="text-2xl font-black tracking-tighter bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            PK.
          </div>
          <div className="hidden md:flex gap-10 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">
            {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-blue-400 transition-all duration-300 relative group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
          <button className="px-6 py-2.5 rounded-full bg-blue-600/10 border border-blue-500/30 text-blue-400 text-xs font-bold hover:bg-blue-600 hover:text-white transition-all duration-500 hover:shadow-[0_0_20px_rgba(37,99,235,0.3)]">
            Connect
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-44 pb-32 px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="flex-1 space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-slate-800/50 border border-slate-700/50 text-blue-400 text-[10px] font-black uppercase tracking-widest shadow-xl">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                Available for Roles
              </div>
              
              <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.9] lg:leading-[0.9]">
                Miriyala Prudhvi<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-emerald-400">
                  Krishna Sarath
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed font-medium mx-auto lg:mx-0">
                {resumeData.summary}
              </p>
              
              <div className="flex flex-wrap gap-5 justify-center lg:justify-start pt-4">
                <a href="#projects" className="px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-bold shadow-2xl shadow-blue-600/30 transition-all duration-300 flex items-center gap-3 group">
                  Explore Projects <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <button className="px-10 py-5 bg-slate-900/50 hover:bg-slate-800 text-white rounded-2xl font-bold transition-all duration-300 flex items-center gap-3 border border-slate-700/50 backdrop-blur-md">
                  <Download size={20} /> Resume
                </button>
              </div>
              
              <div className="flex gap-8 justify-center lg:justify-start pt-8">
                <a href={`https://${resumeData.github}`} target="_blank" className="text-slate-500 hover:text-white transition-all transform hover:-translate-y-1"><GitHubIcon size={28} /></a>
                <a href={`https://${resumeData.linkedin}`} target="_blank" className="text-slate-500 hover:text-white transition-all transform hover:-translate-y-1"><LinkedInIcon size={28} /></a>
                <a href={`mailto:${resumeData.email}`} className="text-slate-500 hover:text-white transition-all transform hover:-translate-y-1"><Mail size={28} /></a>
              </div>
            </div>
            
            <div className="hidden lg:block relative w-[450px] h-[450px]">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-[3rem] rotate-6 opacity-20 blur-3xl"></div>
              <div className="relative w-full h-full bg-slate-900 rounded-[3rem] border border-slate-800 flex items-center justify-center overflow-hidden shadow-2xl">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:16px_16px]"></div>
                <Cpu size={180} className="text-slate-800 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid Section: Experience & Education */}
      <section id="experience" className="py-32 px-8 bg-slate-950/30">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-8">
          {/* Education Card */}
          <div className="md:col-span-5 p-10 rounded-[2.5rem] bg-slate-900/40 border border-slate-800/50 backdrop-blur-xl group hover:border-blue-500/30 transition-all duration-500">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                <BookOpen size={24} />
              </div>
              <h2 className="text-2xl font-bold text-white tracking-tight">Academic Profile</h2>
            </div>
            <div className="space-y-8">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-white leading-tight">B.Tech in CSE (AI)</h3>
                  <span className="text-[10px] font-black bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full uppercase tracking-wider">2021-25</span>
                </div>
                <p className="text-blue-400 font-bold mb-4">Sri Venkateswara University</p>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">Specailized curriculum focused on Neural Networks, Transformers, and Big Data Analytics.</p>
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-950/50 border border-slate-800/50">
                  <div className="flex-1 bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-500 h-full rounded-full" style={{width: '78.5%'}}></div>
                  </div>
                  <span className="text-white font-black text-sm">7.85 CGPA</span>
                </div>
              </div>
            </div>
          </div>

          {/* Internship Card */}
          <div className="md:col-span-7 p-10 rounded-[2.5rem] bg-slate-900/40 border border-slate-800/50 backdrop-blur-xl group hover:border-emerald-500/30 transition-all duration-500">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                <FileText size={24} />
              </div>
              <h2 className="text-2xl font-bold text-white tracking-tight">Recent Experience</h2>
            </div>
            <div className="space-y-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-white">AI Research Intern</h3>
                  <p className="text-emerald-400 font-bold">Internzlearn • Virtual</p>
                </div>
                <span className="text-[10px] font-black bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-full uppercase tracking-wider">Summer 2024</span>
              </div>
              <ul className="grid gap-4">
                {[
                  "Improved AI model accuracy from 75% to 90% via advanced feature evaluation.",
                  "Optimized training pipeline, reducing compute time by 30%.",
                  "Implemented GAN architectures for super-resolution and image enhancement."
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-4 text-slate-400 text-sm leading-relaxed">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter">Selected Works</h2>
              <p className="text-slate-400 text-lg">Solving complex problems with intelligent algorithms.</p>
            </div>
            <div className="flex gap-1 p-1.5 bg-slate-900/50 border border-slate-800 rounded-2xl backdrop-blur-md">
              {['all', 'nlp', 'ml', 'security'].map(cat => (
                <button 
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all duration-300 ${activeTab === cat ? 'bg-blue-600 text-white shadow-xl shadow-blue-600/30' : 'text-slate-500 hover:text-slate-300'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.filter(p => activeTab === 'all' || p.category === activeTab).map(project => (
              <div key={project.id} className="group relative p-1 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-[2.5rem] border border-slate-800/50 hover:border-blue-500/30 transition-all duration-500">
                <div className="p-8 h-full flex flex-col">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex gap-2">
                      {project.tech.map(t => (
                        <span key={t} className="px-3 py-1 bg-slate-950/80 rounded-lg text-[9px] font-black text-slate-400 uppercase tracking-wider border border-slate-800">{t}</span>
                      ))}
                    </div>
                    <a href={project.metrics.github} target="_blank" className="text-slate-500 hover:text-blue-400 transition-colors transform hover:scale-110"><GitHubIcon size={22} /></a>
                  </div>
                  
                  <h3 className="text-2xl font-black text-white mb-4 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">{project.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="p-4 bg-slate-950/50 rounded-2xl border border-slate-800/50">
                      <span className="block text-[9px] text-slate-500 uppercase font-black tracking-widest mb-1">Performance</span>
                      <span className="text-emerald-400 font-black text-sm">{project.metrics.accuracy}</span>
                    </div>
                    <div className="p-4 bg-slate-950/50 rounded-2xl border border-slate-800/50">
                      <span className="block text-[9px] text-slate-500 uppercase font-black tracking-widest mb-1">Dataset</span>
                      <span className="text-blue-400 font-black text-sm truncate block">{project.metrics.dataset}</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest flex items-center gap-2">
                      <BarChart3 size={14} className="text-blue-500" /> Metrics Visualization
                    </p>
                    <div className="py-4 px-4 bg-slate-950/30 border border-dashed border-slate-800 rounded-2xl text-[11px] text-slate-500 italic text-center">
                      {project.visual}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Accolades */}
      <section id="skills" className="py-32 px-8 bg-slate-950/30">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <h2 className="text-4xl font-black text-white tracking-tighter">Stack & Expertise</h2>
            <div className="grid gap-8">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category}>
                  <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-4 flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> {category}
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {items.map(skill => (
                      <span key={skill} className="px-5 py-2.5 bg-slate-900 rounded-xl text-xs font-bold border border-slate-800 hover:border-blue-500/40 hover:bg-slate-800/50 transition-all duration-300">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-12">
            <h2 className="text-4xl font-black text-white tracking-tighter">Recognitions</h2>
            <div className="grid gap-6">
              {/* GATE Highlight */}
              <div className="group p-8 bg-gradient-to-br from-blue-600/10 to-indigo-600/10 border border-blue-500/20 rounded-[2.5rem] flex items-center gap-6 hover:border-blue-500/40 transition-all duration-500">
                 <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-blue-950 font-black text-xl shadow-2xl">
                    IIT
                 </div>
                 <div>
                    <h4 className="text-xl font-black text-white">GATE 2026 - DS & AI</h4>
                    <p className="text-sm text-slate-400">Qualified • IIT Guwahati</p>
                 </div>
                 <Award className="ml-auto text-blue-400 group-hover:scale-110 transition-transform" size={32} />
              </div>

              {[
                "IoT - NPTEL Certification",
                "Cloud Computing - NPTEL Certification",
                "Blockchain - NPTEL Certification"
              ].map((cert, idx) => (
                <div key={idx} className="p-6 bg-slate-900/40 border border-slate-800/50 rounded-3xl flex items-center gap-5 hover:bg-slate-900 transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                    <ShieldCheck size={20} />
                  </div>
                  <span className="text-sm font-bold text-slate-200">{cert}</span>
                  <ExternalLink size={16} className="ml-auto text-slate-600 hover:text-white transition-colors cursor-pointer" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Professional Contact Footer */}
      <footer id="contact" className="relative pt-32 pb-16 px-8 border-t border-slate-900">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">Let's Interface.</h2>
          <p className="text-slate-400 text-xl mb-16 max-w-2xl mx-auto font-medium">
            Currently scouting for Junior AI/ML Engineer or Full-Stack roles where I can contribute to neural architectures and scalable systems.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-10 mb-24">
            <a href={`mailto:${resumeData.email}`} className="group flex items-center gap-5 p-4 pr-10 rounded-full bg-slate-900/50 border border-slate-800 hover:border-blue-500/30 transition-all">
              <div className="w-14 h-14 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <Mail size={24} />
              </div>
              <div className="text-left">
                <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Email Me</p>
                <p className="text-lg font-bold text-white">{resumeData.email}</p>
              </div>
            </a>
            
            <div className="flex items-center gap-5 p-4 pr-10 rounded-full bg-slate-900/50 border border-slate-800">
              <div className="w-14 h-14 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                <Globe size={24} />
              </div>
              <div className="text-left">
                <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Location</p>
                <p className="text-lg font-bold text-white">Tirupati, India</p>
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-slate-600 text-sm font-medium">
              © 2025 {resumeData.name}
            </p>
            <div className="flex gap-10">
               <a href={`https://${resumeData.github}`} className="text-slate-500 hover:text-white transition-all flex items-center gap-2 text-sm font-bold"><GitHubIcon size={18} /> GitHub</a>
               <a href={`https://${resumeData.linkedin}`} className="text-slate-500 hover:text-white transition-all flex items-center gap-2 text-sm font-bold"><LinkedInIcon size={18} /> LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;