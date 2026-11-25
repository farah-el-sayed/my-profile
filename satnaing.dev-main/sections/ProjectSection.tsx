import Image from "next/image";
import { useEffect, useRef } from "react";
import { RoughNotation } from "react-rough-notation";
import { useTheme } from "next-themes";

import ProjectCard from "@/components/ProjectCard";
import { useSection } from "context/section";
import useOnScreen from "hooks/useOnScreen";
import useScrollActive from "hooks/useScrollActive";

const ProjectSection: React.FC = () => {
  const { theme } = useTheme();

  const sectionRef = useRef<HTMLDivElement>(null);

  const elementRef = useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen(elementRef);

  // Set active link for project section
  const projectSection = useScrollActive(sectionRef);
  const { onSectionChange } = useSection();
  useEffect(() => {
    projectSection && onSectionChange!("projects");
  }, [onSectionChange, projectSection]);

  return (
    <section ref={sectionRef} id="projects" className="section">
      <div className="project-title text-center">
        <RoughNotation
          type="underline"
          color={`${theme === "light" ? "rgb(0, 122, 122)" : "rgb(5 206 145)"}`}
          strokeWidth={2}
          order={1}
          show={isOnScreen}
        >
          <h2 className="section-heading">Featured Projects</h2>
        </RoughNotation>
      </div>
      <span className="project-desc text-center block mb-4" ref={elementRef}>
        “Talk is cheap. Show me the code”? I got you. <br />
        Here are some of my projects you shouldn't misss
      </span>
      <div className="flex flex-wrap">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} index={index} project={project} />
        ))}
      </div>
      <div className="others text-center mb-16">
        Other projects can be explored in{" "}
        <a
          href="https://github.com/farah-el-sayed"
          className="font-medium underline link-outline text-marrsgreen dark:text-carrigreen whitespace-nowrap"
        >
          my github profile
        </a>
      </div>
    </section>
  );
};

const projectImage = (src: string, alt: string) => (
  <Image
    src={src}
    sizes="(max-width: 768px) 100vw, 58vw"
    fill
    alt={alt}
    className="object-cover transition-transform duration-500 hover:scale-110"
  />
);

const projects = [
  {
    title: "LearnTheta E-Learning",
    image: projectImage("/imag/learns.jfif", "LearnTheta E-Learning"),
    desc: "Interactive e-learning platform with course catalog, progress tracking, and structured learning paths — designed with modern UI and responsive layout.",
    tags: ["React", "Tailwind", "JavaScript"],
    grad: "linear-gradient(135deg,#38bdf8,#C4A7E7)",
    liveUrl: "https://learn-theta-green.vercel.app/",
  },
  {
    title: "My Restaurant App",
    image: projectImage("/imag/resturant.jfif", "My Restaurant App"),
    desc: "Elegant oriental restaurant landing page showcasing authentic menu items, chef specials, and online table reservation flow..",
    tags: ["React", "API", "JavaScript", "SEO"],
    grad: "linear-gradient(135deg,#38bdf8,#C4A7E7)",
    liveUrl: "https://my-resturant-sigma.vercel.app/",
  },
  {
    title: "Organic Chi Store",
    image: projectImage("/imag/orangics.jfif", "Organic Chi Store"),
    desc: "E-commerce interface for organic and healthy products featuring product categories, fresh produce display, and eco-friendly design aesthetic.",
    tags: ["React", "Tailwind", "SEO"],
    grad: "linear-gradient(135deg,#38bdf8,#C4A7E7)",
    liveUrl: "https://orangic-chi.vercel.app/",
  },
  {
    title: "Bookmarker App",
    image: projectImage("/imag/bookmarker.jfif", "Bookmarker App"),
    desc: "Simple and efficient web bookmark manager allowing users to save, categorize, and quickly access their favorite website links.",
    tags: ["JavaScript", "LocalStorage"],
    grad: "linear-gradient(135deg,#38bdf8,#C4A7E7)",
    liveUrl: "https://bookmaker-puce-alpha.vercel.app/",
  },
  {
    title: "EliteHomes Real Estate",
    image: projectImage("/imag/eliteHome.jfif", "EliteHomes Real Estate"),
    desc: "Luxury real estate listing web application with property search, interactive filters, high-resolution photo galleries, and agent contact forms.",
    tags: ["JavaScript", "bootstrap"],
    grad: "linear-gradient(135deg,#38bdf8,#C4A7E7)",
    liveUrl: "https://elitehomes-black.vercel.app/",
  },
  {
    title: "Mealify Restaurant Landing",
    image: null,
    desc: "Modern restaurant landing page featuring chef profiles, customer testimonials, food gallery, and dark/light mode toggle.",
    tags: ["css3", "html5"],
    grad: "linear-gradient(135deg,#38bdf8,#C4A7E7)",
    liveUrl: "https://meal-six-theta.vercel.app/",
  },
  {
    title: "TailNext Template",
    image: projectImage("/imag/tailnext.webp", "TailNext Template"),
    desc: "Production-ready web development template optimized for SEO, high page speed, and dark mode integration for SaaS and startup sites.",
    tags: ["Next.js", "TypeScript", "Tailwind", "SEO"],
    grad: "linear-gradient(135deg,#38bdf8,#C4A7E7)",
    liveUrl: "https://tailnext-gamma.vercel.app/",
  },
  {
    title: "Alex Anderson Portfolio",
    image: projectImage("/imag/alex.jfif", "Alex Anderson Portfolio"),
    desc: "Professional developer portfolio showcasing mobile apps built with Flutter, Oracle SaaS consulting services, and interactive project details.",
    tags: ["Tailwind"],
    grad: "linear-gradient(135deg,#38bdf8,#C4A7E7)",
    liveUrl: "https://alex-anderson.vercel.app/",
  },
  {
    title: "Weather app",
    image: projectImage("/imag/weatherapps.jfif", "Weather app"),
    desc: "Clean and minimalist weather forecasting application providing real-time weather updates, humidity metrics, and a 5-day temperature forecast.",
    tags: ["JavaScript", "API", "SEO", "css5"],
    grad: "linear-gradient(135deg,#38bdf8,#C4A7E7)",
    liveUrl: "https://weather-script-wine.vercel.app/",
  },
];

export default ProjectSection;
