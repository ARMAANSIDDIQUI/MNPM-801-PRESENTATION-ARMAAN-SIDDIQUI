import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, 
  Users, 
  Settings, 
  Layers, 
  Database, 
  Zap, 
  LayoutDashboard, 
  Workflow, 
  ArrowRight, 
  ArrowLeft,
  CheckCircle2,
  Server,
  Code2,
  GitBranch,
  Network,
  Rocket,
  Search,
  MousePointer2,
  CreditCard,
  Target,
  Globe,
  X,
  Maximize2,
  Cpu,
  Clock
} from 'lucide-react';
import confetti from 'canvas-confetti';

// SYNCED IMAGE ASSETS (The 7 correct snapshots)
const ASSETS = [
  { img: 'media__1775390200343.png', title: 'HOME LANDING', desc: 'India\'s Trusted Care & Staffing Hero' },
  { img: 'media__1775390257719.png', title: 'SERVICE SELECTION', desc: 'Browse Vetted Domestic Professionals' },
  { img: 'media__1775390279126.png', title: 'PACKAGE BUILDER', desc: 'Dynamic Monthly Subscription Logic' },
  { img: 'media__1775390286187.png', title: 'PRICING ENGINE', desc: 'Interactive Tiered Requirement Quiz' },
  { img: 'booking_form.png', title: 'BOOKING FORM', desc: 'Multi-Step Secure Service Checkout' },
  { img: 'user_dashboard.png', title: 'USER DASHBOARD', desc: 'Personalized Service Monitoring Hub' },
  { img: 'media__1775390217106.png', title: 'ADMIN DASHBOARD', desc: 'Real-time Operations Control Center' }
];

const BRAND_COLORS = ['bg-brand-purple', 'bg-brand-yellow', 'bg-brand-pink', 'bg-white'];
const WORKFLOW_STEP_COLORS = ['border-brand-purple', 'border-brand-yellow', 'border-brand-pink', 'border-brand-purple', 'border-brand-yellow', 'border-brand-pink'];

const SLIDES = [
  {
    type: 'title',
    title: 'SAFELYHANDS',
    subtitle: 'India\'s Trusted Care and Staffing Services Platform',
    presenter: 'Armaan Siddiqui',
    details: '4th Year CSE | CS-MNPM-801',
    bgColor: 'bg-white'
  },
  {
    type: 'list',
    title: 'AGENDA',
    items: [
      '01 // GENESIS: THE CARE DEFICIT',
      '02 // THE PROBLEM: TRUST & OPAQUE PRICING',
      '03 // PROPOSED SYSTEM: ARCHITECTURE',
      '04 // KEY FEATURES: ATTENDANCE & TRACKING',
      '05 // SCHEMA: RELATIONAL LOGIC IN NOSQL',
      '06 // INNOVATION: THE TIERED PRICING ENGINE',
      '07 // ADMIN CONTROL: THE COMMAND CENTER',
      '08 // WORKFLOW: DISCOVERY TO DISPATCH',
      '09 // VISUALS: LIVE PLATFORM SNAPSHOTS',
      '10 // ROADMAP: AI MATCHING & SCALE'
    ],
    icon: <Globe className="w-12 h-12 text-black" />
  },
  {
    type: 'content',
    title: 'PROBLEM STATEMENT',
    content: [
      { head: 'Trust Deficit', text: 'The unorganized sector lacks background verification and accountability for domestic workers.' },
      { head: 'Opaque Pricing', text: 'No dynamic or standard rate card exists for service tiers (Japa, Peon, Cleaning).' },
      { head: 'Operational Friction', text: 'Manual matching of workers to clients is slow, error-prone, and lacks lifecycle tracking.' }
    ],
    highlight: 'Safelyhands digitizes trust by providing 100% verified professionals with a dynamic matching engine.'
  },
   {
    type: 'feature-grid',
    title: 'KEY FEATURES',
    subtitle: 'Digitizing the entire service lifecycle from dispatch to attendance.',
    features: [
      { icon: <Clock />, title: 'Attendance Tracking', desc: 'Real-time worker check-in/out via OTP.', color: 'bg-brand-purple', text: 'text-white' },
      { icon: <ShieldCheck />, title: 'Background Vetting', desc: 'Managed Aadhar and Police verification logs.', color: 'bg-brand-yellow', text: 'text-black' },
      { icon: <LayoutDashboard />, title: 'Operations Hub', desc: 'Admin control over bookings and payroll.', color: 'bg-white', text: 'text-black' },
      { icon: <Zap />, title: 'Dynamic Pricing', desc: 'Requirement-based instant quote engine.', color: 'bg-brand-pink', text: 'text-black' },
      { icon: <Users />, title: 'Worker Profile', desc: 'Skills, city, and verification status management.', color: 'bg-brand-purple', text: 'text-white' },
      { icon: <Network />, title: 'Service Mapping', desc: 'Categorized worker dispatching system.', color: 'bg-brand-yellow', text: 'text-black' }
    ]
  },
  {
    type: 'split',
    title: 'PROPOSED SYSTEM',
    tagline: 'Moving from unorganized manual labor to a structured, data-driven staffing platform.',
    pillars: [
      { icon: <ShieldCheck />, title: 'Trust Verification', desc: '100% background vetting.', color: 'bg-brand-purple', text: 'text-white' },
      { icon: <CheckCircle2 />, title: 'Quality Assurance', desc: 'SLA-backed staffing.', color: 'bg-brand-yellow', text: 'text-black' },
      { icon: <Settings />, title: 'Dynamic CMS', desc: 'Context-aware services.', color: 'bg-brand-pink', text: 'text-black' },
      { icon: <Users />, title: 'Smart Dispatch', desc: 'Verified worker matching.', color: 'bg-white', text: 'text-black' }
    ],
    techStack: [
      { label: 'Next.js 14', icon: <Rocket className="w-5 h-5" />, color: 'text-brand-purple' },
      { label: 'Express.js', icon: <Server className="w-5 h-5" />, color: 'text-black' },
      { label: 'MongoDB', icon: <Database className="w-5 h-5" />, color: 'text-brand-purple' },
      { label: 'Cloudinary', icon: <Globe className="w-5 h-5" />, color: 'text-black' }
    ]
  },
  {
    type: 'code-slide',
    title: 'SERVER ARCHITECTURE',
    label: 'SERVER.JS_ENTRY',
    code: `// server.js Route Delegation
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/bookings', require('./routes/bookingRoutes'));
app.use('/api/services', require('./routes/serviceRoutes'));
app.use('/api/workers', require('./routes/workerRoutes'));
app.use('/api/cms', require('./routes/cmsRoutes'));`,
    details: [
      'Modular route delegation for clean architecture.',
      'RESTful API design following CRUD patterns.',
      'Stateless JWT-based secure sessions.'
    ]
  },
  {
    type: 'code-slide',
    title: 'WORKER SCHEMA',
    label: 'DB_MODELS/WORKER.JS',
    code: `const workerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, unique: true },
  skills: [{ type: String }],
  isVerified: { type: Boolean, default: false },
  documents: {
    aadhar: String,
    license: String
  },
  city: { type: String, required: true }
});`,
    details: [
      'Strongly typed fields with validation.',
      'Document sub-schema for tracking.',
      'Indexed phoneNumber for faster lookup.'
    ]
  },
  {
    type: 'tech-stack-plus',
    title: 'DATABASE & RELATIONS',
    subtitle: 'NoSQL Structure for Flexible Scaling',
    items: [
      { icon: <Database />, title: 'MongoDB Atlas', desc: 'Cloud-native document storage.' },
      { icon: <GitBranch />, title: 'Relational Logic', desc: 'Referencing IDs across collections.' },
      { icon: <Network />, title: 'Dynamic Fields', desc: 'JSON arrays for form questions.' }
    ],
    label: 'DB_RELATIONS.JS',
    code: `// Relation Example
const bookingSchema = {
  user: { type: ObjectId, ref: 'User' },
  service: { type: ObjectId, ref: 'SubCategory' },
  worker: { type: ObjectId, ref: 'Worker' }
};`
  },
  {
    type: 'tech-deep',
    title: 'TIERED PRICING ENGINE',
    concept: 'Pricing that co-relates complex user requirements dynamically.',
    label: 'PRICING_LOGIC.JSON',
    code: `{
  "reference": "BHK_SIZE",
  "tiers": {
    "1BHK": 499,
    "2BHK": 799,
    "3BHK": 1099,
    "4BHK": 1499
  }
}`,
    logic: [
      'Reference Point: One field (BHK, People) acts as the anchor.',
      'Tier Mapping: JSON rules link anchor values to price points.',
      'Dynamic Rules: Update logic via Admin panel without code release.'
    ]
  },
  {
    type: 'workflow-rich',
    title: 'SYSTEM WORKFLOW',
    steps: [
      { icon: <Search />, title: 'Discovery', desc: 'User filters services globally vs city-basis.' },
      { icon: <Layers />, title: 'Profiling', desc: 'Dynamic questionnaire logic triggers specific data capture.' },
      { icon: <Cpu />, title: 'Compute', desc: 'Tiered Pricing Engine aggregates totals in real-time.' },
      { icon: <Zap />, title: 'Dispatch', desc: 'Booking triggers auto-notification to matched workers.' },
      { icon: <Target />, title: 'Verification', desc: 'Proof-of-service through OTP and photo-logs.' },
      { icon: <Rocket />, title: 'Optimization', desc: 'Feedback loop updates worker performance metrics.' }
    ]
  },
  {
    type: 'snapshots',
    title: 'LIVE PLATFORM SNAPSHOTS',
    items: ASSETS
  },
  {
    type: 'conclusion',
    title: 'THE END',
    points: [
      'End-to-end digitisation of caregiving sector.',
      'Validated Tiered Pricing implementation.',
      'Fully Dynamic CMS architecture.',
      'Built for Scalability and Trust.'
    ]
  }
];

// SHARED COMPONENTS
const DesignCodeCard = ({ code, label, bgColor = "bg-brand-yellow" }) => (
    <div className={`relative w-full ${bgColor} border-2 border-black p-6 md:p-10 shadow-[10px_10px_0px_0px_#7C3AED] hover:shadow-[15px_15px_0px_0px_#7C3AED] transition-all group overflow-hidden`}>
        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
            <Code2 size={40} className="text-black" />
        </div>
        <pre className="text-black text-sm md:text-xl font-mono font-bold leading-relaxed overflow-x-auto custom-scrollbar italic mb-12">
            {code}
        </pre>
        <div className="absolute bottom-6 left-0 right-0 px-8">
            <div className="bg-black text-white font-black text-xs md:text-base py-3 px-8 italic uppercase tracking-tighter flex items-center justify-center border-l-8 border-brand-pink shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]">
                {label}
            </div>
        </div>
    </div>
);

const SlideWrapper = ({ children, bgColor = "bg-white" }) => (
  <motion.div 
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -50 }}
    className={`w-full h-full p-6 md:p-10 overflow-y-auto overflow-x-hidden custom-scrollbar card-bg-pattern ${bgColor}`}
  >
    <div className="w-full max-w-7xl mx-auto flex flex-col items-center py-6 min-h-full">
      {children}
    </div>
  </motion.div>
);

export default function Presentation() {
  const [current, setCurrent] = useState(0);
  const [selectedImg, setSelectedImg] = useState(null);

  const next = () => {
    if (current < SLIDES.length - 1) setCurrent(current + 1);
    else {
      confetti({
        particleCount: 150,
        spread: 120,
        colors: ['#7C3AED', '#FACC15', '#000000', '#FBCFE8', '#10B981'],
        origin: { y: 0.6 }
      });
    }
  };

  const prev = () => {
    if (current > 0) setCurrent(current - 1);
  };

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') next();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'Escape') setSelectedImg(null);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [current]);

  const slide = SLIDES[current];

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center p-2 md:p-4 overflow-hidden relative">
      
      {/* Image Modal */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
            onClick={() => setSelectedImg(null)}
          >
            <motion.div 
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              className="relative max-w-full max-h-full border-4 border-white shadow-[20px_20px_0px_0px_#7C3AED]"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedImg(null)}
                className="absolute -top-12 -right-12 w-12 h-12 bg-white text-black flex items-center justify-center border-4 border-black font-black hover:bg-brand-pink transition-colors"
              >
                <X size={32} />
              </button>
               <img 
                src={`/${selectedImg.img}`} 
                alt={selectedImg.title}
                className="max-w-[90vw] max-h-[80vh] object-contain cursor-default"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-white p-6 border-t-4 border-black">
                  <h4 className="text-3xl font-black uppercase text-black italic tracking-tighter">{selectedImg.title}</h4>
                  <p className="text-black font-bold opacity-60 uppercase italic tracking-widest">{selectedImg.desc}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Page Display */}
      <div className="flex items-center gap-4 mb-4 z-10">
        <div className="px-6 py-2 bg-black text-brand-yellow font-black text-xl italic border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)]">
          PAGE {current + 1} // {SLIDES.length}
        </div>
        <div className="px-6 py-2 bg-brand-purple text-white font-black text-xl uppercase tracking-tighter border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)]">
          {slide.title}
        </div>
      </div>

      <div className="w-[98vw] h-[88vh] md:w-[94vw] md:h-[84vh] window-mimic bg-white relative flex flex-col">
        
        {/* Navbar */}
        <div className="h-16 border-b-4 border-black flex items-center justify-between px-6 bg-brand-yellow shrink-0">
            <div className="flex gap-2">
                <div className="w-4 h-4 rounded-full border-2 border-black bg-rose-500 shadow-[1px_1px_0px_0px_#000]" />
                <div className="w-4 h-4 rounded-full border-2 border-black bg-emerald-500 shadow-[1px_1px_0px_0px_#000]" />
                <div className="w-4 h-4 rounded-full border-2 border-black bg-blue-500 shadow-[1px_1px_0px_0px_#000]" />
            </div>
            
            <div className="flex gap-3">
                <button 
                  onClick={prev} 
                  className="w-10 h-10 border-2 border-black bg-white flex items-center justify-center hover:bg-slate-100 shadow-[2px_2px_0px_0px_#000] transition-all cursor-pointer"
                >
                    <ArrowLeft size={18} />
                </button>
                <button 
                  onClick={next} 
                  className="w-10 h-10 border-2 border-black bg-brand-purple text-white flex items-center justify-center hover:opacity-90 shadow-[2px_2px_0px_0px_#000] transition-all cursor-pointer"
                >
                    <ArrowRight size={18} />
                </button>
            </div>
        </div>

        <div className="flex-grow overflow-hidden relative">
          <AnimatePresence mode="wait">
            <SlideWrapper key={current} bgColor={slide.bgColor}>
              
              {/* SLIDE CONTENT TYPES */}
              {slide.type === 'title' && (
                <div className="text-center">
                  <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }}>
                      <h1 className="text-7xl md:text-9xl font-black tracking-tighter text-black leading-none bg-brand-purple text-white px-8 py-4 border-4 md:border-8 border-black shadow-[10px_10px_0px_0px_#FACC15]">
                          {slide.title}
                      </h1>
                  </motion.div>
                  <h2 className="text-2xl md:text-4xl font-black mt-12 max-w-4xl text-black bg-white border-4 border-black px-6 py-4 shadow-[6px_6px_0px_0px_#000]">
                      {slide.subtitle}
                  </h2>
                  <div className="flex flex-wrap justify-center gap-6 mt-12">
                      <div className="px-8 py-4 bg-brand-yellow border-4 border-black shadow-[6px_6px_0px_0px_#000]">
                          <p className="text-[10px] font-black uppercase mb-1">Presented By</p>
                          <p className="text-2xl font-black italic">{slide.presenter}</p>
                      </div>
                      <div className="px-8 py-4 bg-brand-pink border-4 border-black shadow-[6px_6px_0px_0px_#000]">
                          <p className="text-[10px] font-black uppercase mb-1">Project Details</p>
                          <p className="text-2xl font-black italic">{slide.details}</p>
                      </div>
                  </div>
                </div>
              )}

               {slide.type === 'list' && (
                <div className="w-full max-w-7xl">
                   <h2 className="text-6xl md:text-8xl font-black text-black mb-12 border-b-8 border-black inline-block uppercase italic tracking-tighter">{slide.title}</h2>
                   <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-5 md:grid-flow-col gap-4 md:gap-6">
                      {slide.items.map((item, i) => {
                          const colors = ['bg-brand-purple', 'bg-brand-yellow', 'bg-brand-pink', 'bg-white'];
                          const currentBg = colors[i % colors.length];
                          const textColor = currentBg === 'bg-brand-purple' ? 'text-white' : 'text-black';
                          return (
                              <div key={i} className={`flex items-center gap-4 p-4 ${currentBg} border-4 border-black shadow-[6px_6px_0px_0px_#000] hover:-translate-y-1 hover:translate-x-1 transition-all cursor-default`}>
                                  <div className="w-12 h-12 bg-black text-white flex items-center justify-center font-black text-2xl italic border-r-4 border-black shrink-0">
                                      {(i+1).toString().padStart(2, '0')}
                                  </div>
                                  <span className={`text-xl md:text-2xl lg:text-3xl font-black ${textColor} uppercase tracking-tighter italic leading-tight`}>{item}</span>
                              </div>
                          );
                      })}
                   </div>
                </div>
              )}

              {slide.type === 'code-slide' && (
                  <div className="w-full max-w-6xl">
                       <h2 className="text-5xl md:text-7xl font-black mb-12 text-black uppercase tracking-tighter bg-brand-pink inline-block px-4 py-2 border-4 border-black shadow-[6px_6px_0px_0px_#000]">{slide.title}</h2>
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                          <DesignCodeCard code={slide.code} label={slide.label} />
                          <div className="flex flex-col justify-center gap-4">
                              {slide.details.map((d, i) => (
                                  <div key={i} className="flex gap-6 items-center bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_#000]">
                                      <Zap className="w-8 h-8 text-brand-purple shrink-0" />
                                      <p className="text-xl font-black text-black leading-tight italic uppercase tracking-tighter">{d}</p>
                                  </div>
                              ))}
                          </div>
                       </div>
                  </div>
              )}

               {slide.type === 'split' && (
                  <div className="w-full max-w-6xl">
                       <h2 className="text-7xl font-black mb-4 text-black uppercase tracking-tighter">THE <span className="text-brand-purple">PROPOSED</span> SYSTEM</h2>
                       <p className="text-2xl font-black italic mb-10 text-slate-600 bg-brand-yellow inline-block px-4 py-1 border-2 border-black">{slide.tagline}</p>
                       
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                          <div className="grid grid-cols-2 gap-4">
                              {slide.pillars.map((p, i) => (
                                  <div key={i} className={`p-6 ${p.color} border-4 border-black shadow-[6px_6px_0px_0px_#000] hover:-rotate-1 transition-all`}>
                                      <div className="w-12 h-12 bg-white text-black flex items-center justify-center border-2 border-black mb-4">
                                          {React.cloneElement(p.icon, { className: "w-6 h-6" })}
                                      </div>
                                      <h3 className={`text-xl font-black uppercase ${p.text} leading-none mb-1`}>{p.title}</h3>
                                      <p className={`font-black text-xs uppercase opacity-80 ${p.text}`}>{p.desc}</p>
                                  </div>
                              ))}
                          </div>

                          {/* Tech Stack Column */}
                          <div className="flex flex-col justify-center">
                              <h4 className="text-4xl font-black mb-8 uppercase tracking-tighter italic underline decoration-brand-purple decoration-4">TECH STACK ARCHITECTURE</h4>
                              <div className="space-y-4">
                                  {slide.techStack.map((tech, i) => (
                                      <div key={i} className="flex items-center gap-6 p-4 bg-white border-2 border-black shadow-[4px_4px_0px_0px_#000] hover:translate-x-2 transition-all">
                                          <div className={`w-10 h-10 flex items-center justify-center bg-slate-100 border-2 border-black ${tech.color}`}>
                                              {tech.icon}
                                          </div>
                                          <span className="text-2xl font-black uppercase tracking-tighter text-black">{tech.label}</span>
                                      </div>
                                  ))}
                              </div>
                              <div className="mt-8 p-4 bg-brand-pink border-4 border-black text-center font-black italic text-lg shadow-[6px_6px_0px_0px_#000]">
                                  MODULAR // SCALABLE // SECURE
                              </div>
                          </div>
                       </div>
                  </div>
              )}

              {slide.type === 'tech-stack-plus' && (
                  <div className="w-full max-w-6xl">
                       <h2 className="text-6xl font-black mb-4 uppercase tracking-tighter text-black">{slide.title}</h2>
                       <p className="text-3xl font-black italic mb-10 text-brand-purple">{slide.subtitle}</p>
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                          <div className="space-y-6">
                            {slide.items.map((item, i) => (
                                <div key={i} className="p-6 bg-white border-4 border-black shadow-[6px_6px_0px_0px_#000] flex gap-6 items-center">
                                    <div className="w-12 h-12 flex items-center justify-center bg-brand-pink text-black border-2 border-black">{item.icon}</div>
                                    <div>
                                        <h3 className="text-xl font-black uppercase text-black">{item.title}</h3>
                                        <p className="font-bold text-slate-700">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                          </div>
                          <DesignCodeCard code={slide.code} label={slide.label} bgColor="bg-brand-yellow" />
                       </div>
                  </div>
              )}

               {slide.type === 'feature-grid' && (
                  <div className="w-full max-w-6xl">
                      <h2 className="text-7xl font-black mb-4 text-black uppercase tracking-tighter text-center">CORE <span className="text-brand-purple">FEATURES</span></h2>
                      <p className="text-3xl font-black italic mb-12 text-center text-slate-500">{slide.subtitle}</p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                          {slide.features.map((f, i) => (
                              <div key={i} className={`p-8 ${f.color} border-4 border-black shadow-[10px_10px_0px_0px_#000] group hover:scale-105 transition-all cursor-default`}>
                                  <div className="w-16 h-16 bg-black text-white flex items-center justify-center border-4 border-white mb-6 group-hover:bg-brand-pink transition-colors">
                                      {React.cloneElement(f.icon, { size: 32 })}
                                  </div>
                                  <h3 className={`text-2xl font-black mb-3 uppercase italic tracking-tighter ${f.text}`}>{f.title}</h3>
                                  <p className={`font-black text-sm uppercase leading-tight ${f.text} opacity-80 font-mono`}>{f.desc}</p>
                              </div>
                          ))}
                      </div>
                  </div>
              )}

               {slide.type === 'workflow-rich' && (
                  <div className="w-full max-w-6xl">
                      <h2 className="text-7xl font-black mb-12 text-black uppercase tracking-tighter text-center">SYSTEM <span className="text-brand-purple">WORKFLOW</span></h2>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          {slide.steps.map((step, i) => {
                              const colors = ['bg-brand-purple', 'bg-brand-yellow', 'bg-brand-pink', 'bg-white', 'bg-brand-yellow', 'bg-brand-purple'];
                              const currentBg = colors[i % colors.length];
                              const textColor = currentBg === 'bg-brand-purple' ? 'text-white' : 'text-black';
                              return (
                                  <div key={i} className={`p-8 ${currentBg} border-4 border-black shadow-[10px_10px_0px_0px_#000] relative group hover:rotate-1 hover:scale-105 transition-all`}>
                                      <div className={`mb-6 w-16 h-16 bg-white text-black flex items-center justify-center border-4 border-black shadow-[4px_4px_0px_0px_#000]`}>
                                          {step.icon}
                                      </div>
                                      <h3 className={`text-3xl font-black mb-2 uppercase italic tracking-tighter ${textColor}`}>
                                          {i + 1}. {step.title}
                                      </h3>
                                      <p className={`font-black text-lg ${currentBg === 'bg-brand-purple' ? 'text-white/90' : 'text-slate-800'} leading-tight font-mono`}>
                                          {step.desc}
                                      </p>
                                  </div>
                              );
                          })}
                      </div>
                  </div>
              )}

              {slide.type === 'snapshots' && (
                   <div className="w-full max-w-[90vw]">
                      <h2 className="text-7xl font-black mb-8 text-black uppercase tracking-tighter underline decoration-brand-purple decoration-8">{slide.title}</h2>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                          {slide.items.map((item, idx) => (
                            <div key={idx} className="flex flex-col gap-3">
                                <div 
                                  onClick={() => setSelectedImg(item)}
                                  className="aspect-video bg-white border-4 border-black shadow-[8px_8px_0px_0px_#000] overflow-hidden relative group cursor-pointer"
                                >
                                     <img 
                                        src={`/${item.img}`} 
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-all duration-500 scale-100 group-hover:scale-110"
                                        onError={(e) => { e.target.src = 'https://via.placeholder.com/800x600?text=Snapshot+Pending'; }}
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-brand-purple/20 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                                       <Maximize2 size={48} className="text-white drop-shadow-xl" />
                                    </div>
                                </div>
                                <div className="p-3 bg-brand-yellow border-2 border-black italic shadow-[4px_4px_0px_0px_#000]">
                                    <h4 className="text-lg font-black uppercase tracking-tighter text-black">{item.title}</h4>
                                    <p className="text-[10px] font-black uppercase text-black/40">{item.desc}</p>
                                </div>
                            </div>
                          ))}
                      </div>
                   </div>
              )}

              {/* DEFAULT TYPES */}
              {slide.type === 'tech-deep' && (
                   <div className="w-full">
                      <h2 className="text-6xl md:text-8xl font-black mb-12 text-black uppercase tracking-tighter border-b-8 border-black inline-block">{slide.title}</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                          <div className="space-y-4">
                              {slide.logic.map((l, i) => (
                                  <div key={i} className="p-6 bg-white border-4 border-black shadow-[6px_6px_0px_0px_#000] flex gap-6 items-center hover:bg-brand-yellow transition">
                                      <div className="w-12 h-12 bg-black text-white flex items-center justify-center font-black text-2xl italic">{i+1}</div>
                                      <p className="text-xl font-black text-black italic tracking-tighter">{l}</p>
                                  </div>
                              ))}
                          </div>
                          <DesignCodeCard code={slide.code} label={slide.label} />
                      </div>
                   </div>
              )}

              {slide.type === 'content' && (
                  <div className="w-full">
                      <h2 className="text-6xl md:text-7xl font-black mb-12 text-black text-center uppercase tracking-tighter underline decoration-brand-purple decoration-8">{slide.title}</h2>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                          {slide.content.map((c, i) => (
                              <div key={i} className="p-8 bg-white border-4 border-black shadow-[8px_8px_0px_0px_#000] group">
                                  <h3 className="text-2xl font-black mb-4 text-brand-purple uppercase">{c.head}</h3>
                                  <p className="text-black font-bold text-lg leading-tight">{c.text}</p>
                              </div>
                          ))}
                      </div>
                      <div className="mt-12 p-8 bg-brand-yellow border-4 border-black shadow-[10px_10px_0px_0px_#000] text-center">
                          <p className="text-3xl md:text-4xl font-black italic tracking-tighter text-black">"{slide.highlight}"</p>
                      </div>
                  </div>
              )}

              {slide.type === 'conclusion' && (
                  <div className="text-center w-full">
                      <h2 className="text-[8rem] md:text-[12rem] font-black leading-none bg-brand-yellow border-8 border-black shadow-[15px_15px_0px_0px_#7C3AED] italic uppercase px-10 mb-12">FINISH</h2>
                      <div className="flex flex-col gap-4 text-left max-w-4xl mx-auto">
                           {slide.points.map((p, i) => (
                               <div key={i} className="p-6 bg-white border-4 border-black shadow-[8px_8px_0px_0px_#000] flex items-center gap-8 hover:bg-brand-pink transition">
                                  <Zap size={32} className="text-brand-purple fill-brand-purple" />
                                  <p className="text-3xl font-black text-black uppercase italic tracking-tighter">{p}</p>
                               </div>
                           ))}
                      </div>
                  </div>
              )}

            </SlideWrapper>
          </AnimatePresence>
        </div>

        {/* Progress Tracker */}
        <div className="h-10 border-t-4 border-black bg-white flex items-center px-4 gap-2 shrink-0 overflow-x-auto no-scrollbar">
            {SLIDES.map((_, i) => (
              <button 
                key={i}
                onClick={() => setCurrent(i)}
                className={`flex-grow h-4 border-2 border-black shadow-[2px_2px_0px_0px_#000] transition-all hover:-translate-y-0.5 ${i === current ? 'bg-brand-yellow' : 'bg-slate-200 hover:bg-brand-pink'}`}
              />
            ))}
        </div>
      </div>
      
    </div>
  );
}
