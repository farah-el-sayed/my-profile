import alexImage from '../imag/alex.jfif';
import bookmarkerImage from '../imag/bookmarker.jfif';
import eliteHomesImage from '../imag/eliteHome.jfif';
import learnThetaImage from '../imag/learns.jfif';
import mealifyImage from '../imag/meal.jfif';
import organicChiImage from '../imag/orangics.jfif';
import restaurantImage from '../imag/resturant.jfif';
import tailnext from '../imag/tailnext.webp'
import weatherImage from '../imag/weatherapps.jfif';

export const profile = {
  name: 'Farah El-sayed',
  firstName: 'Farah',
  role: 'Front-End Developer — Next.js & TypeScript',
  heroLine1: 'Front-End Development',
  heroLine2: 'with Next.js & TypeScript',
  from: 'From Gaza, Palestine',
  location: 'Gaza, Palestine — Available Remotely',
  email: 'elsayedfarah746@gmail.com',
  phone: '+972592249678',
  // ✏️ عدّلي روابطك هنا فقط — تنعكس تلقائياً في Hero و Contact و Footer
  socials: {
    linkedin: 'https://www.linkedin.com/in/farah-el-sayed-494bb2336',
    vercel: 'https://vercel.com/farahs-projects-effb0595',
    github: 'https://github.com/farah-el-sayed?tab=repositories',
  },
  aboutEn: [
    "Hi, I'm Farah El-sayed from Palestine. I'm a Front-End Developer with expertise in Next.js, React, TypeScript, responsive interfaces and modern web architecture. I build fast, accessible experiences using SEO, authorization, and the right rendering strategy.",
   
    'Previously, I worked as a Freelance Web Developer, building landing pages, dashboards and e-commerce interfaces with Next.js, React, TypeScript, Firebase and modern tooling — collaborating with teams to deliver high-quality user experiences.',
  ],
  stats: [
    { value: '10+', label: 'Projects' },
    { value: '100%', label: 'Satisfaction' },
  ],
  infoEn: [
    { k: 'Name', v: 'Farah El-sayed' },
    { k: 'Age', v: '22 years old' },
    { k: 'Degree', v: 'Computer Engineering — Software' },
    { k: 'Location', v: 'Palestine / Remote' },
    { k: 'Languages', v: 'Arabic (native) · English (very good)' },
    { k: 'Status', v: 'Open to new projects' },
  ],
  servicesEn: [
    { t: 'Next.js Development', d: 'Scalable applications with Next.js, TypeScript, App Router and professional state management.' },
    { t: 'Tailwind Design', d: 'Pixel-perfect responsive interfaces with dark mode and animation.' },
    { t: 'Performance & SEO', d: 'Technical SEO, lazy loading, code splitting and SSG, SSR or CSR for 95+ Lighthouse.' },
  ],
  
 
};

export const services = [
  {
    t: 'Web Development',
    d: 'Building fast, responsive websites and web apps using Next.js, React, TypeScript and Tailwind CSS.',
    icon: '◍',
  },
  {
    t: 'React Applications',
    d: 'Skilled in component architecture, hooks, routing, authorization and state management with Redux / Zustand.',
    icon: '⬡',
  },
  {
    t: 'Web Optimization',
    d: 'Optimizing web applications for maximum speed, SEO, scalability and seamless user experience across devices.',
    icon: '⬢',
  },
];

export const works = [
  {
    title: 'LearnTheta E-Learning',
    image: learnThetaImage,
    d: 'Interactive e-learning platform with course catalog, progress tracking, and structured learning paths — designed with modern UI and responsive layout.',
    tags: ['React', 'Tailwind', 'JavaScript'],
   grad: 'linear-gradient(135deg,#38bdf8,#C4A7E7)',
    link: 'https://learn-theta-green.vercel.app/',
  },
  {
    title: 'My Restaurant App',
    image: restaurantImage,
    d: 'Elegant oriental restaurant landing page showcasing authentic menu items, chef specials, and online table reservation flow..',
    tags: ['React', 'API', 'JavaScript' , 'SEO'],
   grad: 'linear-gradient(135deg,#38bdf8,#C4A7E7)',
    link: 'https://my-resturant-sigma.vercel.app/',
  },
  {
    title: 'Organic Chi Store',
    image: organicChiImage,
    d: 'E-commerce interface for organic and healthy products featuring product categories, fresh produce display, and eco-friendly design aesthetic.',
    tags: ['React', 'Tailwind', 'SEO'],
    grad: 'linear-gradient(135deg,#38bdf8,#C4A7E7)',
    link: 'https://orangic-chi.vercel.app/',
  },

  {
    title: 'Bookmarker App',
    image: bookmarkerImage,
    d: 'Simple and efficient web bookmark manager allowing users to save, categorize, and quickly access their favorite website links.',
    tags: ['JavaScript', 'LocalStorage' ],
    grad: 'linear-gradient(135deg,#38bdf8,#C4A7E7)',
    link: 'https://bookmaker-puce-alpha.vercel.app/',
  },


  {
    title: 'EliteHomes Real Estate',
    image: eliteHomesImage,
    d: 'Luxury real estate listing web application with property search, interactive filters, high-resolution photo galleries, and agent contact forms.',
    tags: ['JavaScript', 'bootstrap'],
    grad: 'linear-gradient(135deg,#38bdf8,#C4A7E7)',
    link: 'https://elitehomes-black.vercel.app/',
  },



  {
    title: 'Mealify Restaurant Landing',
    image: mealifyImage,
    d: 'Modern restaurant landing page featuring chef profiles, customer testimonials, food gallery, and dark/light mode toggle.',
    tags: ['css3', 'html5' ],
    grad: 'linear-gradient(135deg,#38bdf8,#C4A7E7)',
    link: 'https://meal-six-theta.vercel.app/',
  },



  {
    title: 'TailNext Template',
    image: tailnext,
    d: 'Production-ready web development template optimized for SEO, high page speed, and dark mode integration for SaaS and startup sites.',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'SEO'],
    grad: 'linear-gradient(135deg,#38bdf8,#C4A7E7)',
    link: 'https://tailnext-gamma.vercel.app/',
  },


  {
    title: 'Alex Anderson Portfolio',
    image: alexImage,
    d: 'Professional developer portfolio showcasing mobile apps built with Flutter, Oracle SaaS consulting services, and interactive project details.',
    tags: ['Tailwind'],
    grad: 'linear-gradient(135deg,#38bdf8,#C4A7E7)',
    link: 'https://alex-anderson.vercel.app/',
  },

  {
    title: 'Weather app',
    image: weatherImage,
    d: 'Clean and minimalist weather forecasting application providing real-time weather updates, humidity metrics, and a 5-day temperature forecast.',
    tags: ['JavaScript', 'API', 'SEO' , 'css5'],
    grad: 'linear-gradient(135deg,#38bdf8,#C4A7E7)',
    link: 'https://weather-script-wine.vercel.app/',
  },
];

export const experience = [
  {
    role: 'Front-End Developer ',
    
    d: 'Building scalable Next.js and React applications with TypeScript and Tailwind CSS, focusing on performance, accessibility and design systems.',
  },
  {
    role: 'Freelance Web Developer',
   
    d: 'Delivered 15+ landing pages and dashboards for regional clients using React, Firebase and modern tooling.',
  },
  {
    role: 'Web Optimization',
   
    d: 'Optimizing web applications for maximum speed, scalability, and seamless user experience across devices.',
  },
];

export const skills = [
  { name: 'React.js', tag: 'Hooks · Router · State', level: 92 },
  { name: 'Next.js', tag: 'App Router · Routing · Full Stack', level: 88 },
  { name: 'TypeScript', tag: 'Types · Interfaces', level: 90 },
  { name: 'SEO', tag: 'Metadata · Technical SEO · Performance', level: 88 },
  { name: 'Authorization', tag: 'Roles · Protected Routes · Access Control', level: 85 },
  { name: 'Rendering Strategies', tag: 'SSG · SSR · CSR', level: 87 },
  { name: 'JavaScript (ES6+)', tag: 'Async · Modules · DOM', level: 90 },
  { name: 'Tailwind CSS', tag: 'Responsive · Dark mode', level: 95 },
  { name: 'HTML5 & CSS3', tag: 'Semantic · Grid · Flex', level: 94 },
  { name: 'Framer Motion', tag: 'Gestures · Scroll reveals', level: 85 },
  { name: 'Redux / Zustand', tag: 'Stores · Middleware', level: 82 },
  { name: 'Git & GitHub', tag: 'Branching · PRs · CI', level: 88 },
  { name: 'Vite & Tooling', tag: 'Build · Deploy · Lint', level: 86 },
];

export const tools = ['Next.js', 'TypeScript', 'Vite', 'Figma', 'VS Code', 'Postman', 'Vercel', 'Netlify', 'Firebase', 'REST API', 'SEO'];