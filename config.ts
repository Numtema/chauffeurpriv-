
/**
 * CONFIGURATION GLOBALE DU SITE
 * Modifiez ces valeurs pour mettre à jour le contenu, le design ou les tarifs.
 */

export const CONFIG = {
  // --- Infos Contact ---
  contact: {
    whatsapp: "33600000000",
    phone: "+33 6 00 00 00 00",
    email: "contact@chauffeur-prive.fr",
    socials: {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    }
  },

  // --- Design & Thème ---
  theme: {
    modes: {
      dark: {
        bg: "#0B0B0F",
        surface: "#12121A",
        surface2: "#07070D",
        border: "rgba(255, 255, 255, 0.05)",
        text: "#F5F5F7",
        muted: "#B7B7C2",
        gridOpacity: 0.1,
      },
      light: {
        bg: "#FFFFFF",
        surface: "#F8FAFC", // Light gray/blue
        surface2: "#0F172A", // Bleu Nuit for contrast sections
        border: "rgba(15, 23, 42, 0.1)", // Navy based border
        text: "#0F172A", // Bleu Nuit text
        muted: "#475569", // Gray slate
        gridOpacity: 0.08,
      }
    },
    colors: {
      gold: "#D4AF37",
      goldHover: "#E1C45A",
      success: "#22C55E",
      danger: "#EF4444",
    },
    spacing: {
      sectionPadding: "py-24 md:py-40",
      containerMax: "1120px",
      borderRadius: "3rem",
    },
    animations: {
      duration: 0.6,
      stagger: 0.1,
    }
  },

  // --- Contenus Textuels ---
  content: {
    navbar: ['Accueil', 'Services', 'Tarifs', 'Réserver', 'Entreprises', 'Contact'],
    hero: {
      badge: "Service Privé Normandie & Paris",
      titleMain: "VOTRE VOYAGE,",
      rotatingWords: ["L'EXCELLENCE", "LA SÉRÉNITÉ", "LE CONFORT", "LA PONCTUALITÉ"],
      description: "De la Normandie aux capitales européennes, bénéficiez d'un chauffeur privé d'exception disponible 24h/24 et 7j/7.",
      ctaPrimary: "RÉSERVER VOTRE TRAJET",
      ctaSecondary: "VOIR NOS SERVICES",
    },
    marquee: ["Aéroport CDG", "Gare de Lyon", "Port du Havre", "Paris Centre", "Deauville", "Rouen", "Orly", "Beauvais", "Lille", "Transferts VIP"],
    actionSection: {
      highlight: "Disponibilité Immédiate 24/7",
      title: "UNE COURSE SANS ATTENTE",
      description: "Ne laissez plus le hasard décider de vos trajets. Profitez d'un chauffeur professionnel prêt à vous accueillir à chaque instant.",
    },
    support: {
      headerTitle: "Support Client",
      headerSub: "Nous sommes là pour vous aider",
      mainQuestion: "Comment préférez-vous nous contacter ?",
      availability: "Disponible 7 jours sur 7 — Temps de réponse moyen : 5 minutes"
    }
  },

  // --- Tarification ---
  pricing: {
    minPrice: 10,
    baseRate: 2.0,
    nightWeekendPremium: 1.15,
    forfaits: [
      { match: "cdg", name: "CDG Roissy", price: 220 },
      { match: "ory", name: "Orly", price: 210 },
      { match: "beauvais", name: "Beauvais", price: 250 },
      { match: "paris", name: "Paris Centre", price: 200 },
      { match: "le havre", name: "Port du Havre", price: 50 }
    ]
  },

  // --- Services ---
  services: [
    { 
      id: 'local', 
      title: 'Déplacements locaux', 
      desc: 'Normandie, trajets quotidiens, rendez-vous personnels et professionnels.', 
      image: 'https://images.unsplash.com/photo-1506970845246-18f21d533b20?auto=format&fit=crop&q=80&w=1200'
    },
    { 
      id: 'airport', 
      title: 'Gares & Aéroports', 
      desc: 'Transferts vers CDG, Orly, Beauvais et toutes les gares SNCF.', 
      image: 'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?auto=format&fit=crop&q=80&w=1200'
    },
    { 
      id: 'port', 
      title: 'Port & Croisières', 
      desc: 'Prise en charge personnalisée aux ports du Havre ou de Rouen.', 
      image: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&q=80&w=1200'
    },
    { 
      id: 'long', 
      title: 'Longue distance', 
      desc: 'Trajets directs vers Paris et toutes les grandes villes de France.', 
      image: 'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?auto=format&fit=crop&q=80&w=1200'
    },
    { 
      id: 'pro', 
      title: 'Mise à disposition', 
      desc: 'Chauffeur privé à l’heure ou à la journée pour vos événements.', 
      image: 'https://images.unsplash.com/photo-1511527844068-006b95d162c2?auto=format&fit=crop&q=80&w=1200'
    }
  ]
};
