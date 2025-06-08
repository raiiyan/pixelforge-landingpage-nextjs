export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  avatar: string;
  companyLogo?: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Mike W.",
    role: "CEO @ BeaconCRM",
    quote: "PixelForge absolutely nailed our app redesign. Our users love it.",
    avatar: "/testimonials/mike.jpg",
    companyLogo: "/logos/logo.png",
  },
  {
    name: "Lana G.",
    role: "Marketing Lead @ Aura",
    quote: "The landing page they built boosted our conversions by 45% in just one week.",
    avatar: "/testimonials/lana.jpg",
    companyLogo: "/logos/logo.png",
  },
  {
    name: "Carlos M.",
    role: "Founder @ Nomad",
    quote: "Their attention to UI details and mobile optimization was top-notch.",
    avatar: "/testimonials/carlos.jpg",
    companyLogo: "/logos/logo.png",
  },
];
