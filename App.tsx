
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
  ChevronDown
} from 'lucide-react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { CONFIG } from './config';

// --- Animations primitives ---
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.05 } },
  viewport: { once: true }
};

// --- Sub-components ---

const InfiniteMarquee = () => {
  const items = [
    "Aéroport CDG", "Gare de Lyon", "Port du Havre", "Paris Centre", 
    "Deauville", "Rouen", "Orly", "Bordeaux", "Lille", "Transferts VIP"
  ];
  return (
    <div className="w-full bg-[#12121A] border-y border-white/5 py-3 md:py-4 overflow-hidden select-none">
      <div className="animate-marquee whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center mx-4 md:mx-8">
            <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-[#B7B7C2] flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const RotatingText = () => {
  const words = ["L'EXCELLENCE", "LA SÉRÉNITÉ", "LE CONFORT", "LA PONCTUALITÉ"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex((prev) => (prev + 1) % words.length), 3000);
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
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

const Navbar = () => {
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
          maxWidth: "1120px"
        }}
        className={`glass-dark rounded-2xl flex items-center justify-between px-4 md:px-8 shadow-2xl transition-all border ${isScrolled ? 'border-[#D4AF37]/30' : 'border-white/5'}`}
      >
        <div className="flex flex-col">
          <span className="font-black text-lg md:text-xl tracking-tighter text-white leading-none">CHAUFFEUR <span className="text-[#D4AF37]">PRIVÉ</span></span>
          <span className="text-[8px] md:text-[9px] uppercase tracking-widest text-[#B7B7C2] font-bold opacity-60 mt-1">Normandie • Paris</span>
        </div>
        
        <div className="hidden lg:flex items-center gap-6">
          {['Accueil', 'Services', 'Tarifs', 'Réserver', 'Entreprises'].map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="text-[9px] font-bold text-[#B7B7C2] hover:text-[#D4AF37] transition-all uppercase tracking-widest relative group">
              {link}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#D4AF37] transition-all group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a href={`tel:${CONFIG.phone}`} className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl border border-[#242433] text-[9px] font-black text-white hover:border-[#D4AF37] transition-all uppercase tracking-widest group">
            <Phone size={10} className="group-hover:rotate-12 transition-transform" /> Appeler
          </a>
          <a href={`https://wa.me/${CONFIG.whatsapp}`} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#D4AF37] text-black text-[9px] font-black shadow-lg hover:bg-[#E1C45A] transition-all uppercase tracking-widest">
            <MessageCircle size={10} /> WhatsApp
          </a>
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-white ml-1 p-2 rounded-lg bg-white/5">
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </motion.div>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="absolute top-24 left-4 right-4 glass-dark rounded-3xl p-8 flex flex-col gap-5 lg:hidden border border-white/10 shadow-3xl"
          >
            {['Accueil', 'Services', 'Tarifs', 'Réserver', 'Entreprises'].map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setIsOpen(false)} className="text-2xl font-black text-white hover:text-[#D4AF37] tracking-tighter">{link}</a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const SectionHeader = ({ title, subtitle, highlight }: { title: string; subtitle?: string; highlight?: string }) => (
  <div className="text-center mb-12 md:mb-20 max-w-4xl mx-auto px-4">
    <motion.div
      {...fadeInUp}
      className="inline-block px-3 py-1 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] text-[8px] md:text-[9px] font-black uppercase tracking-[0.4em] mb-4 border border-[#D4AF37]/20"
    >
      {highlight || 'Signature Luxury'}
    </motion.div>
    <motion.h2 
      {...fadeInUp}
      transition={{ delay: 0.1, duration: 0.6 }}
      className="text-3xl md:text-5xl lg:text-7xl font-black tracking-tighter mb-4 md:mb-6 leading-tight text-white"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        {...fadeInUp}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-[#B7B7C2] text-sm md:text-lg font-medium leading-relaxed max-w-2xl mx-auto opacity-70 px-2"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const [formData, setFormData] = useState({
    tripType: 'local', pickup: '', dropoff: '', date: '', time: '', 
    passengers: 1, clientName: '', clientPhone: '', clientEmail: ''
  });

  const [estimate, setEstimate] = useState<{ price: number; rule: string } | null>(null);

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

  const ServiceIcon = ({ iconId, size = 32 }: { iconId: string; size?: number }) => {
    switch (iconId) {
      case 'car': return <Car size={size} />;
      case 'plane': return <Plane size={size} />;
      case 'ship': return <Ship size={size} />;
      case 'map': return <MapIcon size={size} />;
      case 'clock': return <Clock size={size} />;
      default: return <Compass size={size} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0B0F] selection:bg-[#D4AF37] selection:text-black overflow-x-hidden">
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-[#D4AF37] z-[60] origin-left" style={{ scaleX }} />
      <Navbar />

      {/* 1. HERO SECTION */}
      <section id="accueil" className="relative min-h-[90vh] md:min-h-screen flex items-center pt-24 md:pt-32 pb-12 px-4 md:px-6 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[90%] h-[400px] md:h-[600px] bg-[#D4AF37]/5 rounded-full blur-[100px] md:blur-[160px] -z-10" />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="text-center lg:text-left">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/5 text-[#D4AF37] text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] mb-6 md:mb-10"
            >
              <Award size={12} className="animate-pulse" />
              Service Privé Normandie & Paris
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-[88px] font-black tracking-tighter leading-[1] mb-6 md:mb-10 text-white"
            >
              VOTRE VOYAGE, <br className="hidden sm:block" />
              <RotatingText />
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-[#B7B7C2] text-base md:text-xl lg:text-2xl font-medium max-w-xl lg:mx-0 mx-auto mb-10 md:mb-16 leading-relaxed opacity-70 px-2"
            >
              De la Normandie aux aéroports de Paris, découvrez un service de chauffeur où chaque détail compte.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 px-4 sm:px-0"
            >
              <a href="#réserver" className="w-full sm:w-auto px-8 md:px-12 py-5 md:py-6 bg-[#D4AF37] text-black rounded-2xl font-black text-sm md:text-lg shadow-2xl shadow-[#D4AF37]/30 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 group">
                RÉSERVER UN TRAJET <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#services" className="w-full sm:w-auto px-8 md:px-12 py-5 md:py-6 glass-dark border border-[#242433] text-white rounded-2xl font-black text-sm md:text-lg hover:border-[#D4AF37]/50 transition-all text-center">
                NOS SERVICES
              </a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-12 md:mt-16 flex items-center justify-center lg:justify-start gap-8 md:gap-12"
            >
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl font-black text-white">24/7</div>
                <div className="text-[8px] md:text-[9px] font-black uppercase tracking-widest text-[#B7B7C2]">Disponibilité</div>
              </div>
              <div className="w-[1px] h-8 md:h-10 bg-white/10" />
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl font-black text-white">4.9/5</div>
                <div className="text-[8px] md:text-[9px] font-black uppercase tracking-widest text-[#B7B7C2]">Avis Clients</div>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="hidden lg:block relative"
          >
             <div className="relative z-10 p-4 rounded-[4rem] glass-dark border border-white/10 shadow-3xl transform hover:rotate-1 transition-transform duration-700">
                <img 
                  src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=1000" 
                  alt="Luxury Fleet" 
                  className="rounded-[3.8rem] w-full object-cover aspect-[4/5] grayscale"
                />
             </div>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30"
        >
          <span className="text-[7px] font-black uppercase tracking-[0.5em] text-white">Scroll</span>
          <ChevronDown size={12} />
        </motion.div>
      </section>

      <InfiniteMarquee />

      {/* 3. PROMESSE CLAIRE */}
      <section className="py-16 md:py-24 px-4 md:px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {[
            { icon: <ShieldCheck size={24} className="text-[#D4AF37]" />, text: "Protection Totale", sub: "Discrétion absolue" },
            { icon: <Zap size={24} className="text-[#D4AF37]" />, text: "Ultra Ponctuel", sub: "Aucune attente" },
            { icon: <Star size={24} className="text-[#D4AF37]" />, text: "Prestige Garanti", sub: "Flotte premium" },
            { icon: <Clock size={24} className="text-[#D4AF37]" />, text: "Support 24h/24", sub: "À votre écoute" }
          ].map((item, i) => (
            <motion.div 
              key={i} 
              {...fadeInUp}
              transition={{ delay: i * 0.05 }}
              className="flex flex-col gap-4 md:gap-6 p-6 md:p-10 glass-dark rounded-[2rem] md:rounded-[2.5rem] border border-[#242433] group hover:border-[#D4AF37]/30 transition-all relative overflow-hidden"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-[#D4AF37]/5 flex items-center justify-center border border-[#D4AF37]/10 group-hover:bg-[#D4AF37] group-hover:text-black transition-all">
                {item.icon}
              </div>
              <div>
                <h4 className="font-black text-white text-lg md:text-xl tracking-tight mb-1">{item.text}</h4>
                <p className="text-[#B7B7C2] text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] opacity-40">{item.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. SERVICES */}
      <section id="services" className="py-16 md:py-32 px-4 md:px-6 bg-[#07070D] relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeader 
            title="L'Art du Transport" 
            subtitle="Chaque trajet est une expérience unique, calibrée selon vos exigences de confort et de temps." 
            highlight="Prestations"
          />
          
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6"
          >
            {CONFIG.services.map((service) => (
              <motion.div 
                key={service.id}
                variants={fadeInUp}
                className="p-8 md:p-10 rounded-[2rem] md:rounded-[3rem] bg-[#12121A] border border-[#242433] flex flex-col items-center text-center group hover:bg-white/[0.03] transition-all"
              >
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-[1.5rem] md:rounded-[2rem] bg-[#0B0B0F] border border-[#242433] flex items-center justify-center mb-6 md:mb-10 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-all duration-500">
                  <ServiceIcon iconId={service.iconId} size={30} />
                </div>
                <h3 className="text-lg md:text-xl font-black text-white mb-3 md:mb-4 tracking-tighter">{service.title}</h3>
                <p className="text-xs md:text-sm text-[#B7B7C2] font-medium leading-relaxed opacity-60">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. TARIFS */}
      <section id="tarifs" className="py-16 md:py-32 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeader title="Tarifs Clairs" subtitle="Pas de frais cachés. Le prix annoncé est le prix payé." highlight="Transparence" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">
            <motion.div {...fadeInUp} className="p-8 md:p-12 rounded-[2.5rem] md:rounded-[4rem] glass-dark border border-white/5 relative group">
              <h3 className="text-2xl md:text-3xl font-black mb-6 md:mb-10 text-white tracking-tighter">Zone Locale</h3>
              <div className="space-y-4 md:space-y-8">
                {[
                  { label: "Minimum de course", value: "10 €" },
                  { label: "Base kilométrique", value: "2.00 €/km" },
                  { label: "Attente (min)", value: "0.50 €" }
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center py-3 md:py-4 border-b border-white/5">
                    <span className="text-[#B7B7C2] text-sm md:text-base font-bold">{item.label}</span>
                    <span className="text-lg md:text-2xl font-black text-white">{item.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="p-8 md:p-12 rounded-[2.5rem] md:rounded-[4rem] bg-white/[0.03] border border-white/10 relative group">
              <h3 className="text-2xl md:text-3xl font-black mb-6 md:mb-10 text-white tracking-tighter">Forfaits Aéroports</h3>
              <div className="space-y-4 md:space-y-8">
                {CONFIG.pricing.forfaits.slice(0, 3).map((f) => (
                  <div key={f.match} className="flex justify-between items-center py-3 md:py-4 border-b border-white/5">
                    <span className="text-[#B7B7C2] text-sm md:text-base font-bold">Liaison {f.name}</span>
                    <span className="text-lg md:text-2xl font-black text-[#D4AF37]">{f.price} €</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. RÉSERVATION */}
      <section id="réserver" className="py-16 md:py-32 px-4 md:px-6 bg-[#07070D]">
        <div className="max-w-6xl mx-auto">
          <SectionHeader title="Préparez Votre Départ" subtitle="Sécurisez votre chauffeur en quelques clics. Confirmation instantanée." highlight="Réservation" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16">
            <motion.div {...fadeInUp} className="lg:col-span-7 glass-dark p-6 md:p-12 lg:p-16 rounded-[2.5rem] md:rounded-[4rem] border border-white/10">
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10 mb-8 md:mb-12">
                  <div className="col-span-1 sm:col-span-2">
                    <label className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.3em] text-[#B7B7C2] mb-3 md:mb-5 block">Catégorie de voyage</label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {['local', 'airport', 'long', 'enterprise'].map(t => (
                        <button key={t} onClick={() => setFormData({...formData, tripType: t})} className={`py-3 md:py-4 rounded-xl md:rounded-2xl font-black text-[8px] md:text-[9px] uppercase tracking-widest border transition-all ${formData.tripType === t ? 'bg-[#D4AF37] text-black border-[#D4AF37]' : 'bg-[#0B0B0F] text-[#B7B7C2] border-[#242433]'}`}>
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.3em] text-[#B7B7C2] block">Lieu de prise en charge</label>
                    <div className="relative">
                      <MapPin size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D4AF37]" />
                      <input type="text" placeholder="Adresse" className="w-full bg-[#0B0B0F] border border-[#242433] rounded-xl md:rounded-2xl pl-10 pr-4 py-4 md:py-5 text-white outline-none focus:border-[#D4AF37] text-xs md:text-sm font-bold" onChange={e => setFormData({...formData, pickup: e.target.value})} />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.3em] text-[#B7B7C2] block">Destination finale</label>
                    <div className="relative">
                      <Compass size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D4AF37]" />
                      <input type="text" placeholder="Ville" className="w-full bg-[#0B0B0F] border border-[#242433] rounded-xl md:rounded-2xl pl-10 pr-4 py-4 md:py-5 text-white outline-none focus:border-[#D4AF37] text-xs md:text-sm font-bold" onChange={e => setFormData({...formData, dropoff: e.target.value})} />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.3em] text-[#B7B7C2] block">Date prévue</label>
                    <input type="date" className="w-full bg-[#0B0B0F] border border-[#242433] rounded-xl md:rounded-2xl px-5 py-4 md:py-5 text-white outline-none font-bold text-xs md:text-sm" onChange={e => setFormData({...formData, date: e.target.value})} />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.3em] text-[#B7B7C2] block">Heure</label>
                    <input type="time" className="w-full bg-[#0B0B0F] border border-[#242433] rounded-xl md:rounded-2xl px-5 py-4 md:py-5 text-white outline-none font-bold text-xs md:text-sm" onChange={e => setFormData({...formData, time: e.target.value})} />
                  </div>
               </div>

               <button onClick={calculateEstimate} className="w-full py-5 md:py-6 bg-white text-black rounded-2xl md:rounded-3xl font-black text-base md:text-xl hover:bg-[#D4AF37] transition-all flex items-center justify-center gap-3">
                 CALCULER <ArrowRight size={20} />
               </button>
            </motion.div>

            <div className="lg:col-span-5 flex flex-col gap-6 md:gap-8">
              <AnimatePresence mode="wait">
                {estimate ? (
                  <motion.div key="est" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-[#12121A] p-8 md:p-12 rounded-[2.5rem] md:rounded-[4rem] border border-[#D4AF37]/30 flex-1">
                     <div className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.3em] text-[#D4AF37] mb-4">Prix Estimé</div>
                     <div className="text-5xl md:text-7xl font-black text-white mb-3 md:mb-4 tracking-tighter">{estimate.price}<span className="text-xl md:text-2xl ml-1 text-[#D4AF37]">€</span></div>
                     <p className="text-xs md:text-sm font-medium text-[#B7B7C2] opacity-60 mb-8 md:mb-12 leading-relaxed">{estimate.rule}</p>
                     
                     <div className="space-y-3">
                        <button className="w-full py-4 md:py-5 bg-[#D4AF37] text-black rounded-xl md:rounded-2xl font-black text-sm md:text-lg flex items-center justify-center gap-2">
                          <CreditCard size={18} /> Payer par Carte
                        </button>
                        <button onClick={() => window.open(`https://wa.me/${CONFIG.whatsapp}`, '_blank')} className="w-full py-4 md:py-5 border border-[#242433] text-white rounded-xl md:rounded-2xl font-black text-sm md:text-lg flex items-center justify-center gap-2">
                          <MessageCircle size={18} className="text-[#25D366]" /> WhatsApp
                        </button>
                     </div>
                  </motion.div>
                ) : (
                  <div className="h-full bg-white/[0.02] border border-white/5 rounded-[2.5rem] md:rounded-[4rem] border-dashed flex flex-col items-center justify-center text-center p-8 md:p-12 min-h-[250px]">
                     <Zap size={32} className="opacity-10 mb-6" />
                     <p className="text-xs md:text-sm text-[#B7B7C2] font-medium leading-relaxed opacity-50">Saisissez vos informations pour débloquer votre tarif instantané.</p>
                  </div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* 7. ENTREPRISES */}
      <section id="entreprises" className="py-16 md:py-32 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#12121A] p-10 md:p-24 rounded-[3rem] md:rounded-[5rem] border border-white/5 relative overflow-hidden group">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center relative z-10">
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white mb-6 md:mb-10 tracking-tighter leading-tight">Partenariat <br /><span className="text-[#D4AF37]">Exécutif</span></h2>
                <p className="text-base md:text-xl text-[#B7B7C2] font-medium leading-relaxed mb-8 md:mb-16 opacity-70">Libérez vos collaborateurs des contraintes logistiques. Une facturation unique, une priorité absolue.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
                  {["Facturation Mensuelle", "Ligne Dédiée 24/7", "Berlines Exclusives", "Suivi Pro"].map(t => (
                    <div key={t} className="flex items-center gap-3 text-white font-black tracking-tight text-sm">
                       <CheckCircle2 className="text-[#D4AF37]" size={16} /> {t}
                    </div>
                  ))}
                </div>
              </div>
              <div className="glass-dark p-8 md:p-16 rounded-[2.5rem] md:rounded-[4rem] border border-white/10 text-center">
                 <Briefcase size={40} className="text-[#D4AF37] mx-auto mb-6 md:mb-10" />
                 <h4 className="text-xl md:text-3xl font-black text-white mb-4 md:mb-6 tracking-tighter">Compte Pro</h4>
                 <a href={`mailto:${CONFIG.email}`} className="block w-full py-4 md:py-6 bg-white text-black rounded-xl md:rounded-2xl font-black text-sm md:text-lg">DEMANDER UN DEVIS</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FOOTER */}
      <footer className="py-16 md:py-32 px-4 md:px-6 bg-[#0B0B0F] border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 md:gap-20">
          <div className="text-center md:text-left">
             <span className="font-black text-2xl md:text-4xl tracking-tighter text-white mb-4 block">CHAUFFEUR <span className="text-[#D4AF37]">PRIVÉ</span></span>
             <p className="text-[#B7B7C2] text-[10px] md:text-sm font-medium max-w-sm mx-auto md:mx-0 leading-relaxed opacity-40">Partenaire de prestige en Normandie et à destination de l'Île-de-France.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] text-[#B7B7C2]">
             {['Services', 'Tarifs', 'Réserver', 'Entreprises', 'Contact'].map(l => (
               <a key={l} href={`#${l.toLowerCase()}`} className="hover:text-white transition-colors">{l}</a>
             ))}
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-16 md:mt-32 pt-8 md:pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 opacity-30">
           <p className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-center">© 2025 Chauffeur Privé Normandie.</p>
           <div className="flex gap-6 md:gap-12 text-[8px] font-bold uppercase tracking-widest">
              <a href="#" className="hover:text-white">Mentions</a>
              <a href="#" className="hover:text-white">CGV</a>
              <a href="#" className="hover:text-white">Cookies</a>
           </div>
        </div>
      </footer>
    </div>
  );
}
