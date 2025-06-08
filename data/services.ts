import React, { ReactNode } from "react";
import { Code, Smartphone, PenTool, MousePointerClick, Layers, Brush } from "lucide-react";

export interface Service {
  title: string;
  description: string;
  icon: ReactNode;
}

export const services: Service[] = [
  {
    title: "UI/UX Design",
    description: "Wireframing, prototyping, user flow optimization.",
    icon: React.createElement(PenTool, { className: "w-6 h-6 text-indigo-600" }),
  },
  {
    title: "Frontend Development",
    description: "React, Next.js, Tailwind CSS, animations & performance.",
    icon: React.createElement(Code, { className: "w-6 h-6 text-indigo-600" }),
  },
  {
    title: "Mobile Optimization",
    description: "Pixel-perfect designs for all screen sizes.",
    icon: React.createElement(Smartphone, { className: "w-6 h-6 text-indigo-600" }),
  },
  {
    title: "Brand Identity",
    description: "Logos, color schemes, visual language.",
    icon: React.createElement(Brush, { className: "w-6 h-6 text-indigo-600" }),
  },
  {
    title: "Landing Pages",
    description: "Conversion-driven layouts for products and campaigns.",
    icon: React.createElement(MousePointerClick, { className: "w-6 h-6 text-indigo-600" }),
  },
  {
    title: "Web Animations",
    description: "Microinteractions, scroll-based effects, Framer Motion.",
    icon: React.createElement(Layers, { className: "w-6 h-6 text-indigo-600" }),
  },
];
