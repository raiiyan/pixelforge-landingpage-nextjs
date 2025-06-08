export interface TeamMember {
  name: string;
  role: string;
  image: string;
  linkedin?: string;
  github?: string;
  dribbble?: string;
}

export const team: TeamMember[] = [
  {
    name: "Emma Lee",
    role: "UI Designer",
    image: "/team/emma.png",
    linkedin: "https://linkedin.com/in/emma-lee",
    dribbble: "https://dribbble.com/emma",
  },
  {
    name: "Liam Chen",
    role: "Frontend Developer",
    image: "/team/liam.png",
    linkedin: "https://linkedin.com/in/liam-chen",
    github: "https://github.com/liamchen",
  },
  {
    name: "Sofia Patel",
    role: "UX Strategist",
    image: "/team/sofia.png",
    linkedin: "https://linkedin.com/in/sofia-patel",
  },
  {
    name: "Jake Tran",
    role: "Interaction Developer",
    image: "/team/jake.png",
    github: "https://github.com/jaket",
    dribbble: "https://dribbble.com/jaketran",
  },
];
