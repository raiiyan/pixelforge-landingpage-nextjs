export interface Project {
  title: string;
  type: string;
  image: string;
  tags: string[];
  link: string;
}

export const portfolio: Project[] = [
  {
    title: "BeaconCRM Dashboard",
    type: "SaaS Web App",
    image: "/projects/beaconcrm.png",
    tags: ["#SaaS", "#Dashboard", "#React"],
    link: "#",
  },
  {
    title: "Aura eCommerce",
    type: "Online Store",
    image: "/projects/aura-store.png",
    tags: ["#E-commerce", "#Next.js", "#Animations"],
    link: "#",
  },
  {
    title: "Nomad Travel App",
    type: "Mobile Web App",
    image: "/projects/nomad-app.png",
    tags: ["#MobileApp", "#UXUI", "#Tailwind"],
    link: "#",
  },
  {
    title: "Launchy Landing Page",
    type: "Marketing Site",
    image: "/projects/launchy-landing.png",
    tags: ["#LandingPage", "#Conversion", "#A/B Testing"],
    link: "#",
  },
];
