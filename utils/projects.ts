export type Project = {
  slug: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
  desc: string;
  tags: string[];
  grad: string;
  liveUrl: string;
  codeUrl?: string;
  githubApi?: string;
};

export const projects: Project[] = [
  {
    slug: "learn-theta-e-learning",
    title: "LearnTheta E-Learning",
    imageSrc: "/imag/learns.jfif",
    imageAlt: "LearnTheta E-Learning",
    desc: "Interactive e-learning platform with course catalog, progress tracking, and structured learning paths — designed with modern UI and responsive layout.",
    tags: ["React", "Tailwind", "JavaScript"],
    grad: "linear-gradient(135deg,#38bdf8,#C4A7E7)",
    liveUrl: "https://learn-theta-green.vercel.app/",
  },
  {
    slug: "my-restaurant-app",
    title: "My Restaurant App",
    imageSrc: "/imag/resturant.jfif",
    imageAlt: "My Restaurant App",
    desc: "Elegant oriental restaurant landing page showcasing authentic menu items, chef specials, and online table reservation flow.",
    tags: ["React", "API", "JavaScript", "SEO"],
    grad: "linear-gradient(135deg,#38bdf8,#C4A7E7)",
    liveUrl: "https://my-resturant-sigma.vercel.app/",
  },
  {
    slug: "organic-chi-store",
    title: "Organic Chi Store",
    imageSrc: "/imag/orangics.jfif",
    imageAlt: "Organic Chi Store",
    desc: "E-commerce interface for organic and healthy products featuring product categories, fresh produce display, and eco-friendly design aesthetic.",
    tags: ["React", "Tailwind", "SEO"],
    grad: "linear-gradient(135deg,#38bdf8,#C4A7E7)",
    liveUrl: "https://orangic-chi.vercel.app/",
  },
  {
    slug: "bookmarker-app",
    title: "Bookmarker App",
    imageSrc: "/imag/bookmarker.jfif",
    imageAlt: "Bookmarker App",
    desc: "Simple and efficient web bookmark manager allowing users to save, categorize, and quickly access their favorite website links.",
    tags: ["JavaScript", "LocalStorage"],
    grad: "linear-gradient(135deg,#38bdf8,#C4A7E7)",
    liveUrl: "https://bookmaker-puce-alpha.vercel.app/",
  },
  {
    slug: "elitehomes-real-estate",
    title: "EliteHomes Real Estate",
    imageSrc: "/imag/eliteHome.jfif",
    imageAlt: "EliteHomes Real Estate",
    desc: "Luxury real estate listing web application with property search, interactive filters, high-resolution photo galleries, and agent contact forms.",
    tags: ["JavaScript", "Bootstrap"],
    grad: "linear-gradient(135deg,#38bdf8,#C4A7E7)",
    liveUrl: "https://elitehomes-black.vercel.app/",
  },
  {
    slug: "mealify-restaurant-landing",
    title: "Mealify Restaurant Landing",
    imageSrc: "/imag/mealify.jfif",
    imageAlt: "Mealify Restaurant Landing",
    desc: "Modern restaurant landing page featuring chef profiles, customer testimonials, food gallery, and dark/light mode toggle.",
    tags: ["CSS3", "HTML5"],
    grad: "linear-gradient(135deg,#38bdf8,#C4A7E7)",
    liveUrl: "https://meal-six-theta.vercel.app/",
  },
  {
    slug: "tailnext-template",
    title: "TailNext Template",
    imageSrc: "/imag/tailnext.webp",
    imageAlt: "TailNext Template",
    desc: "Production-ready web development template optimized for SEO, high page speed, and dark mode integration for SaaS and startup sites.",
    tags: ["Next.js", "TypeScript", "Tailwind", "SEO"],
    grad: "linear-gradient(135deg,#38bdf8,#C4A7E7)",
    liveUrl: "https://tailnext-gamma.vercel.app/",
  },
  {
    slug: "alex-anderson-portfolio",
    title: "Alex Anderson Portfolio",
    imageSrc: "/imag/alex.jfif",
    imageAlt: "Alex Anderson Portfolio",
    desc: "Professional developer portfolio showcasing mobile apps built with Flutter, Oracle SaaS consulting services, and interactive project details.",
    tags: ["Tailwind"],
    grad: "linear-gradient(135deg,#38bdf8,#C4A7E7)",
    liveUrl: "https://alex-anderson.vercel.app/",
  },
  {
    slug: "weather-app",
    title: "Weather app",
    imageSrc: "/imag/weatherapps.jfif",
    imageAlt: "Weather app",
    desc: "Clean and minimalist weather forecasting application providing real-time weather updates, humidity metrics, and a 5-day temperature forecast.",
    tags: ["JavaScript", "API", "SEO", "CSS"],
    grad: "linear-gradient(135deg,#38bdf8,#C4A7E7)",
    liveUrl: "https://weather-script-wine.vercel.app/",
  },
];
