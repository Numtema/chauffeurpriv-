
export const CONFIG = {
  whatsapp: "33600000000",
  phone: "+33 6 00 00 00 00",
  email: "contact@chauffeur-prive.fr",
  pricing: {
    minPrice: 10,
    baseRate: 2.0, // €/km for local
    nightWeekendPremium: 1.15, // +15%
    forfaits: [
      { match: "cdg", name: "CDG Roissy", price: 220 },
      { match: "ory", name: "Orly", price: 210 },
      { match: "paris", name: "Paris Centre", price: 200 },
      { match: "le havre", name: "Le Havre Port", price: 50 }
    ]
  },
  services: [
    { id: 'local', title: 'Déplacements locaux', desc: 'Normandie, trajets quotidiens, rendez-vous.', iconId: 'car' },
    { id: 'airport', title: 'Gares & Aéroports', desc: 'CDG, Orly, Beauvais, Gares SNCF.', iconId: 'plane' },
    { id: 'port', title: 'Port & Croisières', desc: 'Prise en charge au port du Havre ou Rouen.', iconId: 'ship' },
    { id: 'long', title: 'Longue distance', desc: 'Trajets directs Paris & grandes villes.', iconId: 'map' },
    { id: 'pro', title: 'Mise à disposition', desc: 'Chauffeur à l’heure ou à la journée.', iconId: 'clock' }
  ]
};

export const THEME = {
  colors: {
    bg: "#0B0B0F",
    surface: "#12121A",
    border: "#242433",
    gold: "#D4AF37",
    goldHover: "#E1C45A",
    text: "#F5F5F7",
    muted: "#B7B7C2",
    success: "#22C55E",
    danger: "#EF4444"
  }
};
