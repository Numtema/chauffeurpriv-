
import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Calendar, 
  Clock, 
  Users, 
  CheckCircle2, 
  CreditCard, 
  Car, 
  Briefcase,
  ArrowRight,
  Menu,
  X,
  ShieldCheck,
  Zap,
  Star,
  Plane,
  Ship,
  Map as MapIcon,
  Globe,
  Award,
  Lock,
  Compass,
  ChevronDown,
  Building2,
  Receipt,
  FileText,
  Mail,
  Bell,
  Send,
  UserRound,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Moon,
  Sun
} from 'lucide-react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { CONFIG } from './config';

// --- Animations Helper ---
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: CONFIG.theme.animations.duration, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }
};

// --- Composants Support ---

const SupportButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-8 left-8 w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center text-black shadow-xl shadow-[#D4AF37]/30 hover:scale-110 transition-all active:scale-95 z-[60] group border-4 border-[#0B0B0F]"
      aria-label="Ouvrir le support"
    >
      <Bell size={32} className="group-hover:animate-bounce" />
      <span className="absolute left-20 bg-white text-gray-900 px-4 py-2 rounded-xl text-sm font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-gray-100">
        Besoin d'aide ?
      </span>
    </button>
  );
};

const SupportMenu = ({ isOpen, onClose, theme }: { isOpen: boolean; onClose: () => void; theme: any }) => {
  if (!isOpen) return null;

  const content = CONFIG.content.support;

  const options = [
    {
      name: 'Agent assistant',
      icon: <UserRound className="w-7 h-7 text-[#D4AF37] fill-[#D4AF37]/10" />,
      link: `tel:${CONFIG.contact.phone}`
    },
    {
      name: 'WhatsApp',
      icon: <MessageCircle className="w-7 h-7 text-[#25D366] fill-[#25D366]/10" />,
      link: `https://wa.me/${CONFIG.contact.whatsapp}`
    },
    {
      name: 'Telegram',
      icon: <Send className="w-7 h-7 text-[#0088CC] fill-[#0088CC]/10" />,
      link: `https://t.me/${CONFIG.contact.whatsapp}`
    },
    {
      name: 'Email Support',
      icon: <Mail className="w-7 h-7 text-[#555555] fill-[#555555]/10" />,
      link: `mailto:${CONFIG.contact.email}`
    }
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center p-0 md:p-4">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
        onClick={onClose} 
      />
      
      <motion.div 
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "100%", opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="relative w-full max-w-lg bg-[#F9F9F9] rounded-t-[2.5rem] md:rounded-[2.5rem] shadow-2xl overflow-hidden"
      >
        <div className="p-7 text-white relative bg-[#0B0B0F]">
          <button onClick={onClose} className="absolute top-7 right-7 hover:bg-white/20 p-1.5 rounded-full transition-all active:scale-90">
            <X size={26} strokeWidth={2.5} />
          </button>
          <h2 className="text-2xl font-black tracking-tight">{content.headerTitle}</h2>
          <p className="text-[15px] opacity-70 mt-0.5">{content.headerSub}</p>
        </div>

        <div className="p-8 md:p-10 pb-12">
          <h3 className="text-[1.85rem] leading-[1.1] font-black text-[#111111] mb-10 max-w-[90%] tracking-tight">
            {content.mainQuestion}
          </h3>

          <div className="space-y-4 flex flex-col">
            {options.map((option) => (
              <a
                key={option.name}
                href={option.link}
                target="_blank"
                rel="noreferrer"
                className="w-full bg-white hover:bg-gray-50 active:scale-[0.98] transition-all flex items-center gap-5 p-5 rounded-[2rem] shadow-sm border border-black/5 text-left group"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white shadow-md shrink-0">
                  {option.icon}
                </div>
                <span className="text-2xl font-black text-black">
                  {option.name}
                </span>
              </a>
            ))}
          </div>

          <footer className="mt-12 text-center px-4">
            <p className="text-[13px] italic text-gray-400 font-bold leading-relaxed">
              {content.availability}
            </p>
          </footer>
        </div>
      </motion.div>
    </div>
  );
};

// --- Composants UI ---

const InfiniteMarquee = ({ theme }: { theme: any }) => {
  return (
    <div className="w-full border-y py-4 overflow-hidden select-none" style={{ backgroundColor: theme.surface, borderColor: theme.border }}>
      <div className="animate-marquee whitespace-nowrap">
        {[...CONFIG.content.marquee, ...CONFIG.content.marquee].map((item, i) => (
          <div key={i} className="flex items-center mx-6 md:mx-10">
            <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] flex items-center gap-4" style={{ color: theme.muted }}>
              <div className="w-2 h-2 rounded-full bg-[#D4AF37] shadow-[0_0_8px_#D4AF37]" />
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const RotatingText = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex((prev) => (prev + 1) % CONFIG.content.hero.rotatingWords.length), 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-[1.2em] overflow-hidden inline-flex items-center">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#E1C45A] italic block"
        >
          {CONFIG.content.hero.rotatingWords[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

const Navbar = ({ theme, isDarkMode, toggleTheme }: { theme: any; isDarkMode: boolean; toggleTheme: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => setIsScrolled(latest > 50));
    return () => unsubscribe();
  }, [scrollY]);
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-4 flex justify-center transition-all duration-500">
      <motion.div 
        animate={{ 
          height: isScrolled ? "64px" : "80px",
          width: isScrolled ? "98%" : "100%",
          maxWidth: CONFIG.theme.spacing.containerMax
        }}
        className={`glass-dark rounded-2xl flex items-center justify-between px-4 md:px-8 shadow-2xl transition-all border ${isScrolled ? 'border-[#D4AF37]/30' : 'border-white/5'}`}
        style={{ color: theme.text }}
      >
        <div className="flex flex-col">
          <span className="font-black text-lg md:text-xl tracking-tighter leading-none">CHAUFFEUR <span className="text-[#D4AF37]">PRIVÉ</span></span>
          <span className="text-[8px] md:text-[9px] uppercase tracking-widest font-bold opacity-60 mt-1" style={{ color: theme.muted }}>Normandie • Paris</span>
        </div>
        
        <div className="hidden lg:flex items-center gap-8">
          {CONFIG.content.navbar.map((link) => (
            <a key={link} href={`#${link.toLowerCase().replace(/é/g, 'e')}`} className="text-[10px] font-bold transition-all uppercase tracking-[0.2em] relative group" style={{ color: theme.muted }}>
              {link}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#D4AF37] transition-all group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          {/* Theme Toggle Button - moon/sun icon */}
          <button 
            onClick={toggleTheme} 
            className="p-2.5 rounded-xl border border-white/10 hover:border-[#D4AF37]/40 transition-all mr-2 flex items-center justify-center shadow-lg"
            style={{ color: theme.text, backgroundColor: theme.surface }}
            title={isDarkMode ? "Passer en mode Jour" : "Passer en mode Nuit"}
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a href={`https://wa.me/${CONFIG.contact.whatsapp}`} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#D4AF37] text-black text-[10px] font-black shadow-lg hover:bg-[#E1C45A] transition-all uppercase tracking-widest">
            <MessageCircle size={12} /> WhatsApp
          </a>
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden ml-2 p-2 rounded-lg bg-white/5 border border-white/10" style={{ backgroundColor: theme.surface, color: theme.text }}>
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.div>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="absolute top-24 left-4 right-4 glass-dark rounded-3xl p-10 flex flex-col gap-6 lg:hidden border border-white/10 shadow-3xl"
            style={{ backgroundColor: theme.surface }}
          >
            {CONFIG.content.navbar.map((link) => (
              <a key={link} href={`#${link.toLowerCase().replace(/é/g, 'e')}`} onClick={() => setIsOpen(false)} className="text-3xl font-black hover:text-[#D4AF37] tracking-tighter transition-colors" style={{ color: theme.text }}>{link}</a>
            ))}
            <div className="h-[1px] w-full my-2" style={{ backgroundColor: theme.border }} />
            <a href={`tel:${CONFIG.contact.phone}`} className="flex items-center gap-3 font-bold text-lg" style={{ color: theme.text }}><Phone size={20} className="text-[#D4AF37]" /> {CONFIG.contact.phone}</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const SectionHeader = ({ title, subtitle, highlight, theme }: { title: string; subtitle?: string; highlight?: string; theme: any }) => (
  <div className="text-center mb-16 md:mb-24 max-w-4xl mx-auto px-4">
    <motion.div
      {...fadeInUp}
      className="inline-block px-4 py-1.5 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] mb-6 border border-[#D4AF37]/20"
    >
      {highlight || 'Signature Luxury'}
    </motion.div>
    <motion.h2 
      {...fadeInUp}
      transition={{ delay: 0.1, duration: 0.6 }}
      className="text-4xl md:text-6xl lg:text-[80px] font-black tracking-tighter mb-6 md:mb-8 leading-[0.9]"
      style={{ color: theme.text }}
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        {...fadeInUp}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-base md:text-xl font-medium leading-relaxed max-w-2xl mx-auto opacity-70"
        style={{ color: theme.muted }}
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const [isDarkMode, setIsDarkMode] = useState(true);
  const theme = isDarkMode ? CONFIG.theme.modes.dark : CONFIG.theme.modes.light;

  const [isSupportOpen, setIsSupportOpen] = useState(false);
  const [formData, setFormData] = useState({
    tripType: 'local', pickup: '', dropoff: '', date: '', time: '', 
    passengers: 1, clientName: '', clientPhone: '', clientEmail: ''
  });

  const [estimate, setEstimate] = useState<{ price: number; rule: string } | null>(null);

  useEffect(() => {
    if (!isDarkMode) document.body.classList.add('light-mode');
    else document.body.classList.remove('light-mode');
  }, [isDarkMode]);

  const calculateEstimate = () => {
    const { tripType, dropoff, date, time } = formData;
    let price = CONFIG.pricing.minPrice;
    let rule = "Tarif local estimé par zone";

    const destination = dropoff.toLowerCase();
    const forfait = CONFIG.pricing.forfaits.find(f => destination.includes(f.match));

    if (tripType === 'long' || tripType === 'airport') {
      if (forfait) { price = forfait.price; rule = `Forfait fixe garanti vers ${forfait.name}`; }
      else { price = 150; rule = "Estimation longue distance personnalisée"; }
    } else {
      price = 18 * CONFIG.pricing.baseRate;
      rule = "Tarif Normandie (Estimation base km)";
    }

    if (date && time) {
      const d = new Date(`${date}T${time}`);
      const hour = d.getHours();
      const day = d.getDay();
      if (hour >= 22 || hour < 6 || day === 0 || day === 6) {
        price *= CONFIG.pricing.nightWeekendPremium;
        rule += " • Majoration Nuit/WE (+15%)";
      }
    }
    setEstimate({ price: Math.round(price), rule });
  };

  return (
    <div className="min-h-screen selection:bg-[#D4AF37] selection:text-black overflow-x-hidden" style={{ backgroundColor: theme.bg, color: theme.text }}>
      <motion.div className="fixed top-0 left-0 right-0 h-1.5 bg-[#D4AF37] z-[60] origin-left" style={{ scaleX }} />
      <Navbar theme={theme} isDarkMode={isDarkMode} toggleTheme={() => setIsDarkMode(!isDarkMode)} />

      {/* 1. ACCUEIL (HERO) */}
      <section id="accueil" className="relative min-h-screen flex items-center pt-32 pb-16 px-4 md:px-6 overflow-hidden">
        {/* Stylized Grid Overlay with Radial Fade Mask */}
        <div 
          className="absolute inset-0 hero-grid pointer-events-none -z-10 transition-opacity duration-500" 
          style={{ color: theme.text, opacity: theme.gridOpacity }}
        />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[100%] h-[500px] md:h-[800px] bg-[#D4AF37]/10 rounded-full blur-[150px] md:blur-[200px] -z-10" />
        
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/5 text-[#D4AF37] text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] mb-10 md:mb-14 shadow-lg shadow-[#D4AF37]/10"
          >
            <Award size={14} className="animate-pulse" />
            {CONFIG.content.hero.badge}
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-[110px] font-black tracking-tighter leading-[0.85] mb-10 md:mb-16 text-white max-w-5xl"
            style={{ color: theme.text }}
          >
            {CONFIG.content.hero.titleMain} <br />
            <RotatingText />
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-2xl font-medium max-w-2xl mb-12 md:mb-20 leading-relaxed opacity-80"
            style={{ color: theme.muted }}
          >
            {CONFIG.content.hero.description}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto"
          >
            <a href="#reserver" className="w-full sm:w-auto px-12 md:px-16 py-6 md:py-7 bg-[#D4AF37] text-black rounded-2xl font-black text-sm md:text-xl shadow-2xl shadow-[#D4AF37]/40 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-4 group">
              {CONFIG.content.hero.ctaPrimary} <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform" />
            </a>
            <a href="#services" className="w-full sm:w-auto px-12 md:px-16 py-6 md:py-7 glass-dark border border-white/10 rounded-2xl font-black text-sm md:text-xl hover:border-[#D4AF37]/50 transition-all text-center" style={{ color: theme.text }}>
              {CONFIG.content.hero.ctaSecondary}
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-20 md:mt-32 w-full max-w-5xl opacity-40 hover:opacity-100 transition-opacity duration-700"
          >
             <div className="relative p-2 rounded-[3rem] glass-dark border border-white/5">
                <img 
                  src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=1200" 
                  alt="Luxury Fleet" 
                  className="rounded-[2.8rem] w-full object-cover aspect-[21/9] grayscale hover:grayscale-0 transition-all duration-1000"
                />
             </div>
          </motion.div>
        </div>
      </section>

      <InfiniteMarquee theme={theme} />

      {/* 2. SERVICES SECTION */}
      <section id="services" className={`${CONFIG.theme.spacing.sectionPadding} px-4 md:px-6`} style={{ backgroundColor: theme.surface2 }}>
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            theme={theme}
            title="L'Excellence en Mouvement" 
            subtitle="Nos prestations sont conçues pour répondre à toutes vos exigences de mobilité avec un standing irréprochable." 
            highlight="Nos Services"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {CONFIG.services.map((service, i) => (
              <motion.div 
                key={service.id}
                {...fadeInUp}
                transition={{ delay: i * CONFIG.theme.animations.stagger }}
                className="group relative h-[500px] md:h-[600px] rounded-[3.5rem] overflow-hidden border shadow-2xl"
                style={{ backgroundColor: theme.surface, borderColor: theme.border }}
              >
                <div className="absolute inset-0 z-0">
                   <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-40 group-hover:opacity-80"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                </div>
                
                <div className="relative z-10 h-full p-12 flex flex-col justify-end items-start text-left">
                   <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-14 h-14 rounded-[1.2rem] bg-[#D4AF37]/10 flex items-center justify-center border border-[#D4AF37]/30 mb-8 group-hover:bg-[#D4AF37] group-hover:text-black transition-all shadow-xl"
                   >
                      {service.id === 'local' && <Car size={28} />}
                      {service.id === 'airport' && <Plane size={28} />}
                      {service.id === 'port' && <Ship size={28} />}
                      {service.id === 'long' && <MapIcon size={28} />}
                      {service.id === 'pro' && <Clock size={28} />}
                   </motion.div>
                   <h3 className="text-3xl md:text-4xl font-black text-white mb-5 tracking-tighter leading-none">{service.title}</h3>
                   <p className="text-base md:text-lg font-medium leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity" style={{ color: "white" }}>
                      {service.desc}
                   </p>
                </div>
                <div className="absolute inset-0 border-[3px] border-transparent group-hover:border-[#D4AF37]/20 rounded-[3.5rem] transition-all duration-700 pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SECTION ACTION (URGENT) */}
      <section className={`${CONFIG.theme.spacing.sectionPadding} px-4 md:px-6 relative overflow-hidden flex justify-center`}>
         <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=2000" 
              className="w-full h-full object-cover opacity-25 grayscale scale-105"
              alt="Night Paris Atmosphere"
            />
            <div className="absolute inset-0 transition-colors duration-500" style={{ backgroundColor: theme.bg, opacity: 0.9 }} />
         </div>
         
         <div className="max-w-5xl mx-auto relative z-10 text-center">
            <motion.div {...fadeInUp} className="text-[#D4AF37] text-[11px] font-black uppercase tracking-[0.5em] mb-10 drop-shadow-lg">{CONFIG.content.actionSection.highlight}</motion.div>
            <motion.h2 {...fadeInUp} transition={{delay:0.1}} className="text-6xl md:text-8xl lg:text-9xl font-black mb-12 tracking-tighter leading-[0.85]">
              {CONFIG.content.actionSection.title.split(' ')[0]} <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-white">{CONFIG.content.actionSection.title.split(' ').slice(1).join(' ')}</span>
            </motion.h2>
            <motion.p {...fadeInUp} transition={{delay:0.2}} className="text-xl md:text-3xl font-medium mb-16 max-w-3xl mx-auto opacity-80 leading-relaxed" style={{ color: theme.muted }}>
              {CONFIG.content.actionSection.description}
            </motion.p>
            
            <motion.div {...fadeInUp} transition={{delay:0.3}} className="flex flex-col sm:flex-row gap-6 justify-center items-center">
               <a href={`https://wa.me/${CONFIG.contact.whatsapp}`} className="w-full sm:w-auto px-14 py-7 bg-[#D4AF37] text-black rounded-[2rem] font-black text-xl flex items-center justify-center gap-4 hover:scale-105 active:scale-95 transition-all shadow-3xl shadow-[#D4AF37]/40">
                  <MessageCircle size={24} /> RÉSERVER SUR WHATSAPP
               </a>
               <a href={`tel:${CONFIG.contact.phone}`} className="w-full sm:w-auto px-14 py-7 border-2 rounded-[2rem] font-black text-xl flex items-center justify-center gap-4 hover:border-[#D4AF37] hover:bg-white/5 transition-all" style={{ color: theme.text, borderColor: theme.border }}>
                  <Phone size={24} /> NOUS APPELER
               </a>
            </motion.div>
         </div>
      </section>

      {/* 4. TARIFS */}
      <section id="tarifs" className={`${CONFIG.theme.spacing.sectionPadding} px-4 md:px-6`}>
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            theme={theme}
            title="Tarification Transparente" 
            subtitle="Nos tarifs sont fixes et annoncés avant chaque départ. Pas de compteur, pas de mauvaises surprises." 
            highlight="Prix Fixes" 
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-14 max-w-6xl mx-auto">
            <motion.div {...fadeInUp} className="p-10 md:p-16 rounded-[4rem] glass-dark border relative group overflow-hidden" style={{ borderColor: theme.border }}>
              <h3 className="text-3xl md:text-5xl font-black mb-10 md:mb-16 tracking-tighter" style={{ color: theme.text }}>Trajets Normandie</h3>
              <div className="space-y-6 md:space-y-10">
                {[
                  { label: "Prise en charge minimale", value: `${CONFIG.pricing.minPrice} €` },
                  { label: "Base kilométrique (local)", value: `${CONFIG.pricing.baseRate.toFixed(2)} €/km` },
                  { label: "Majoration Nuit/WE", value: "+15%" }
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center py-5 md:py-7 border-b" style={{ borderColor: theme.border }}>
                    <span className="text-lg md:text-xl font-bold" style={{ color: theme.muted }}>{item.label}</span>
                    <span className="text-2xl md:text-3xl font-black" style={{ color: theme.text }}>{item.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="p-10 md:p-16 rounded-[4rem] border relative group overflow-hidden shadow-2xl" style={{ backgroundColor: theme.surface, borderColor: theme.border }}>
              <h3 className="text-3xl md:text-5xl font-black mb-10 md:mb-16 text-[#D4AF37] tracking-tighter">Forfaits Aéroports</h3>
              <div className="space-y-6 md:space-y-10">
                {CONFIG.pricing.forfaits.slice(0, 4).map((f) => (
                  <div key={f.match} className="flex justify-between items-center py-5 md:py-7 border-b" style={{ borderColor: theme.border }}>
                    <span className="text-lg md:text-xl font-bold" style={{ color: theme.muted }}>Vers {f.name}</span>
                    <span className="text-2xl md:text-4xl font-black" style={{ color: theme.text }}>{f.price} €</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. RÉSERVER */}
      <section id="reserver" className={`${CONFIG.theme.spacing.sectionPadding} px-4 md:px-6`} style={{ backgroundColor: theme.surface2 }}>
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            theme={theme}
            title="Réserver Votre Chauffeur" 
            subtitle="Remplissez le formulaire ci-dessous pour obtenir une estimation immédiate de votre trajet." 
            highlight="Réservation" 
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-start">
            <motion.div {...fadeInUp} className="lg:col-span-7 glass-dark p-8 md:p-16 rounded-[4rem] border shadow-3xl" style={{ borderColor: theme.border }}>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10 mb-12 md:mb-16">
                  <div className="col-span-1 sm:col-span-2">
                    <label className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] mb-5 block" style={{ color: theme.muted }}>Type de Destination</label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      {['local', 'airport', 'long', 'pro'].map(t => (
                        <button key={t} onClick={() => setFormData({...formData, tripType: t})} className={`py-4 md:py-5 rounded-2xl font-black text-[10px] md:text-[11px] uppercase tracking-widest border-2 transition-all ${formData.tripType === t ? 'bg-[#D4AF37] text-black border-[#D4AF37] shadow-xl shadow-[#D4AF37]/20' : 'bg-transparent border-black/10 hover:border-[#D4AF37]'}`} style={{ color: formData.tripType === t ? '#000' : theme.text }}>
                          {t === 'pro' ? 'Mise à dispo' : t}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] block" style={{ color: theme.muted }}>Lieu de départ</label>
                    <div className="relative">
                      <MapPin size={16} className="absolute left-5 top-1/2 -translate-y-1/2 text-[#D4AF37]" />
                      <input type="text" placeholder="Adresse complète" className="w-full border-2 rounded-2xl pl-12 pr-5 py-5 outline-none focus:border-[#D4AF37] text-sm md:text-base font-bold transition-all" style={{ backgroundColor: theme.bg, borderColor: theme.border, color: theme.text }} onChange={e => setFormData({...formData, pickup: e.target.value})} />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] block" style={{ color: theme.muted }}>Lieu d'arrivée</label>
                    <div className="relative">
                      <Compass size={16} className="absolute left-5 top-1/2 -translate-y-1/2 text-[#D4AF37]" />
                      <input type="text" placeholder="Aéroport, Gare, Ville..." className="w-full border-2 rounded-2xl pl-12 pr-5 py-5 outline-none focus:border-[#D4AF37] text-sm md:text-base font-bold transition-all" style={{ backgroundColor: theme.bg, borderColor: theme.border, color: theme.text }} onChange={e => setFormData({...formData, dropoff: e.target.value})} />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] block" style={{ color: theme.muted }}>Date du trajet</label>
                    <input type="date" className="w-full border-2 rounded-2xl px-6 py-5 outline-none font-bold text-sm md:text-base focus:border-[#D4AF37]" style={{ backgroundColor: theme.bg, borderColor: theme.border, color: theme.text }} onChange={e => setFormData({...formData, date: e.target.value})} />
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] block" style={{ color: theme.muted }}>Heure de prise en charge</label>
                    <input type="time" className="w-full border-2 rounded-2xl px-6 py-5 outline-none font-bold text-sm md:text-base focus:border-[#D4AF37]" style={{ backgroundColor: theme.bg, borderColor: theme.border, color: theme.text }} onChange={e => setFormData({...formData, time: e.target.value})} />
                  </div>
               </div>

               <button onClick={calculateEstimate} className="w-full py-6 md:py-8 bg-black text-white rounded-3xl font-black text-lg md:text-2xl hover:bg-[#D4AF37] hover:text-black transition-all flex items-center justify-center gap-4 group active:scale-[0.98]" style={{ backgroundColor: isDarkMode ? '#FFF' : '#0F172A', color: isDarkMode ? '#000' : '#FFF' }}>
                 CALCULER LE TARIF <ArrowRight size={26} className="group-hover:translate-x-3 transition-transform duration-500" />
               </button>
            </motion.div>

            <div className="lg:col-span-5 flex flex-col gap-8 h-full">
              <AnimatePresence mode="wait">
                {estimate ? (
                  <motion.div key="est" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="p-10 md:p-16 rounded-[4rem] border-2 border-[#D4AF37]/40 flex-1 relative overflow-hidden shadow-3xl" style={{ backgroundColor: theme.surface }}>
                     <div className="text-6xl md:text-8xl font-black mb-6 tracking-tighter" style={{ color: theme.text }}>{estimate.price}<span className="text-2xl md:text-3xl ml-2 text-[#D4AF37]">€</span></div>
                     <p className="text-base md:text-lg font-medium opacity-80 mb-12 md:mb-16 leading-relaxed italic" style={{ color: theme.muted }}>
                        "{estimate.rule}"
                     </p>
                     
                     <div className="space-y-5">
                        <button className="w-full py-6 bg-[#D4AF37] text-black rounded-2xl font-black text-lg md:text-xl flex items-center justify-center gap-3 shadow-2xl shadow-[#D4AF37]/30 hover:bg-[#E1C45A] transition-all">
                          <CreditCard size={22} /> RÉSERVER & PAYER (CB)
                        </button>
                        <button onClick={() => window.open(`https://wa.me/${CONFIG.contact.whatsapp}`, '_blank')} className="w-full py-6 border-2 rounded-2xl font-black text-lg md:text-xl flex items-center justify-center gap-3 hover:bg-white/5 transition-all" style={{ borderColor: theme.border, color: theme.text }}>
                          <MessageCircle size={22} className="text-[#25D366]" /> PAYER EN ESPÈCES
                        </button>
                     </div>
                  </motion.div>
                ) : (
                  <div className="h-full border-2 border-dashed rounded-[4rem] flex flex-col items-center justify-center text-center p-12 min-h-[400px]" style={{ borderColor: theme.border }}>
                     <Zap size={40} className="opacity-20 mb-10" style={{ color: theme.text }} />
                     <p className="text-lg md:text-xl font-medium leading-relaxed opacity-40 max-w-xs" style={{ color: theme.muted }}>Complétez les informations pour débloquer votre tarif sur-mesure.</p>
                  </div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* 6. ENTREPRISES */}
      <section id="entreprises" className={`${CONFIG.theme.spacing.sectionPadding} px-4 md:px-6`}>
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            theme={theme}
            title="Solutions Entreprises" 
            subtitle="Nous accompagnons les professionnels pour leurs déplacements réguliers avec une gestion simplifiée et une facturation dédiée." 
            highlight="Espace Pro" 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 text-center">
             {[
               { icon: <Building2 size={40} />, title: "Facturation Dédiée", text: "Recevez une facture détaillée pour chaque trajet ou un récapitulatif mensuel." },
               { icon: <Receipt size={40} />, title: "Paiement par Virement", text: "Possibilité de paiement différé par virement bancaire pour les comptes réguliers." },
               { icon: <FileText size={40} />, title: "Suivi & RIB", text: "RIB communiqué après validation. Gestion complète de vos bons de commande." }
             ].map((item, i) => (
               <motion.div key={i} {...fadeInUp} transition={{ delay: i * CONFIG.theme.animations.stagger }} className="p-12 rounded-[3.5rem] glass-dark border flex flex-col items-center" style={{ borderColor: theme.border }}>
                  <div className="w-20 h-20 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] mb-10 border border-[#D4AF37]/20 shadow-xl">{item.icon}</div>
                  <h3 className="text-2xl font-black mb-6 tracking-tight" style={{ color: theme.text }}>{item.title}</h3>
                  <p className="font-medium leading-relaxed opacity-60" style={{ color: theme.muted }}>{item.text}</p>
               </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* 7. CONTACT SECTION */}
      <section id="contact" className={`${CONFIG.theme.spacing.sectionPadding} px-4 md:px-6`} style={{ backgroundColor: theme.surface2 }}>
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            theme={theme}
            title="Contactez-nous" 
            subtitle="Une question ? Un trajet spécifique ? Notre équipe est à votre écoute 7j/7." 
            highlight="Support" 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
             {[
               { icon: <Phone size={32} />, title: "Appeler", value: CONFIG.contact.phone, link: `tel:${CONFIG.contact.phone.replace(/\s/g, '')}` },
               { icon: <MessageCircle size={32} />, title: "WhatsApp", value: "Message instantané", link: `https://wa.me/${CONFIG.contact.whatsapp}` },
               { icon: <Mail size={32} />, title: "Email", value: CONFIG.contact.email, link: `mailto:${CONFIG.contact.email}` }
             ].map((contact, i) => (
               <motion.a 
                key={i} 
                href={contact.link}
                {...fadeInUp} 
                transition={{ delay: i * CONFIG.theme.animations.stagger }} 
                className="p-10 rounded-[3rem] glass-dark border flex flex-col items-center group hover:border-[#D4AF37]/40 transition-all shadow-xl"
                style={{ borderColor: theme.border }}
               >
                  <div className="w-16 h-16 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] mb-8 border border-[#D4AF37]/20 group-hover:scale-110 transition-transform">{contact.icon}</div>
                  <h3 className="text-xl font-black mb-3 tracking-tight" style={{ color: theme.text }}>{contact.title}</h3>
                  <p className="font-medium opacity-60 text-sm" style={{ color: theme.muted }}>{contact.value}</p>
               </motion.a>
             ))}
          </div>
        </div>
      </section>

      {/* 8. FOOTER */}
      <footer className={`${CONFIG.theme.spacing.sectionPadding} px-4 md:px-6 border-t relative`} style={{ backgroundColor: theme.bg, borderColor: theme.border }}>
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-16 md:gap-24">
          <div className="max-w-2xl">
             <span className="font-black text-4xl md:text-6xl tracking-tighter mb-8 block" style={{ color: theme.text }}>CHAUFFEUR <span className="text-[#D4AF37]">PRIVÉ</span></span>
             <p className="text-lg md:text-xl font-medium leading-relaxed opacity-50 mb-10" style={{ color: theme.muted }}>
                Votre partenaire de confiance pour tous vos déplacements d'exception en Normandie, vers Paris et les aéroports européens. Discrétion, ponctualité, confort.
             </p>
             <div className="flex justify-center gap-6 mb-12">
                {[
                  { icon: <Facebook size={20} />, link: CONFIG.contact.socials.facebook },
                  { icon: <Instagram size={20} />, link: CONFIG.contact.socials.instagram },
                  { icon: <Linkedin size={20} />, link: CONFIG.contact.socials.linkedin },
                  { icon: <Twitter size={20} />, link: CONFIG.contact.socials.twitter }
                ].map((social, i) => (
                  <a key={i} href={social.link} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full glass-dark border flex items-center justify-center transition-all" style={{ borderColor: theme.border, color: theme.muted }}>
                    {social.icon}
                  </a>
                ))}
             </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-10 md:gap-20 text-[10px] md:text-[12px] font-black uppercase tracking-[0.4em]" style={{ color: theme.muted }}>
             {CONFIG.content.navbar.map(l => (
               <a key={l} href={`#${l.toLowerCase().replace(/é/g, 'e')}`} className="hover:text-white transition-colors">{l}</a>
             ))}
          </div>
          
          <div className="w-full pt-16 border-t flex flex-col md:flex-row justify-between items-center gap-8 opacity-40 text-[10px] font-black uppercase tracking-[0.4em]" style={{ borderColor: theme.border, color: theme.muted }}>
             <p>© 2025 CHAUFFEUR PRIVÉ NORMANDIE — LUXURY MOBILITY.</p>
             <div className="flex gap-10">
                <a href="#" className="hover:text-white">Mentions</a>
                <a href="#" className="hover:text-white">CGV</a>
                <a href="#" className="hover:text-white">Privacy</a>
             </div>
          </div>
        </div>
      </footer>

      {/* Support UI Components */}
      <SupportButton onClick={() => setIsSupportOpen(true)} />
      <AnimatePresence>
        <SupportMenu isOpen={isSupportOpen} onClose={() => setIsSupportOpen(false)} theme={theme} />
      </AnimatePresence>
    </div>
  );
}
