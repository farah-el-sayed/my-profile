export type SkillLevel = "Daily use" | "Comfortable" | "Learning";

export type SkillProject = {
  name: string;
  href: string;
};

export type Skill = {
  name: string;
  description: string;
  level: SkillLevel;
  projects: SkillProject[];
};

export type SkillGroupData = {
  name: string;
  skillNames: string[];
  columns: "two" | "three";
  featured?: boolean;
};

const projects = {
  learnTheta: {
    name: "LearnTheta",
    href: "https://learn-theta-green.vercel.app/",
  },
  organicChi: {
    name: "Organic Chi Store",
    href: "https://orangic-chi.vercel.app/",
  },
  restaurant: {
    name: "My Restaurant App",
    href: "https://my-resturant-sigma.vercel.app/",
  },
};

export const skills: Skill[] = [
  {
    name: "React.js",
    description: "Reusable components and interactive interfaces",
    level: "Daily use",
    projects: [projects.learnTheta, projects.organicChi, projects.restaurant],
  },
  {
    name: "Next.js",
    description: "Routing, full-stack features, and rendering",
    level: "Daily use",
    projects: [],
  },
  {
    name: "TypeScript",
    description: "Typed interfaces and safer application code",
    level: "Daily use",
    projects: [],
  },
  {
    name: "JavaScript (ES6+)",
    description: "Async flows, modules, and browser APIs",
    level: "Daily use",
    projects: [projects.learnTheta, projects.restaurant],
  },
  {
    name: "Tailwind CSS",
    description: "Responsive layouts and dark-mode styling",
    level: "Daily use",
    projects: [projects.learnTheta, projects.organicChi],
  },
  {
    name: "HTML5 & CSS3",
    description: "Semantic markup, Grid, and Flexbox",
    level: "Comfortable",
    projects: [],
  },
  {
    name: "Framer Motion",
    description: "Gestures and scroll-triggered animation",
    level: "Comfortable",
    projects: [],
  },
  {
    name: "Redux / Zustand",
    description: "Client-side state and lightweight stores",
    level: "Comfortable",
    projects: [],
  },
  {
    name: "Authorization",
    description: "Roles, protected routes, and access control",
    level: "Comfortable",
    projects: [],
  },
  {
    name: "SEO",
    description: "Metadata, technical SEO, and performance",
    level: "Comfortable",
    projects: [projects.organicChi, projects.restaurant],
  },
  {
    name: "Rendering Strategies",
    description: "Choosing between SSG, SSR, and CSR",
    level: "Comfortable",
    projects: [],
  },
  {
    name: "Git & GitHub",
    description: "Branching, pull requests, and CI",
    level: "Comfortable",
    projects: [],
  },
  {
    name: "Vite & Tooling",
    description: "Builds, deployment, and code quality",
    level: "Comfortable",
    projects: [],
  },
];

export const skillGroups: SkillGroupData[] = [
  {
    name: "Core",
    skillNames: ["React.js", "Next.js", "TypeScript", "JavaScript (ES6+)"],
    columns: "two",
    featured: true,
  },
  {
    name: "Styling & UI",
    skillNames: ["Tailwind CSS", "HTML5 & CSS3", "Framer Motion"],
    columns: "three",
  },
  {
    name: "State & Auth",
    skillNames: ["Redux / Zustand", "Authorization"],
    columns: "two",
  },
  {
    name: "Quality & Delivery",
    skillNames: [
      "SEO",
      "Rendering Strategies",
      "Git & GitHub",
      "Vite & Tooling",
    ],
    columns: "two",
  },
];

export const tools = [
  "Figma",
  "VS Code",
  "Postman",
  "Vercel",
  "Netlify",
  "Firebase",
  "REST API",
];
