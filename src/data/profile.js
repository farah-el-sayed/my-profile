import alexImage from '../imag/alex.jfif';
import bookmarkerImage from '../imag/bookmarker.jfif';
import eliteHomesImage from '../imag/eliteHome.jfif';
import learnThetaImage from '../imag/learns.jfif';
import mealifyImage from '../imag/meal.jfif';
import organicChiImage from '../imag/orangics.jfif';
import restaurantImage from '../imag/resturant.jfif';
import tailNextImage from '../imag/tailnext.jfif';
import weatherImage from '../imag/weatherapps.jfif';

export const profile = {
  name: 'Farah El-sayed',
  firstName: 'Farah',
  role: 'Front-End Developer',
  heroLine1: 'Front-End Development',
  heroLine2: 'with React & Modern Tech',
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
    "Hi, I'm Farah El-sayed from Palestine. I'm a Front-End Developer with expertise in building fast, responsive web applications and scalable user interfaces. I enjoy transforming ideas into innovative digital experiences through clean code and modern technologies.",
    'I am currently working as a Front-End Developer at NexaTech Company, specializing in building scalable and high-performance web applications with React and Tailwind CSS. Experienced in component architecture, state management with Redux / Zustand, REST API integration, performance optimization, and pixel-perfect responsive design.',
    'Previously, I worked as a Freelance Web Developer, building landing pages, dashboards and e-commerce interfaces with React, Firebase and modern tooling — collaborating with teams to deliver high-quality user experiences.',
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
    { t: 'React Development', d: 'Complete SPAs with professional state management via Redux / Zustand.' },
    { t: 'Tailwind Design', d: 'Pixel-perfect responsive interfaces with dark mode and animation.' },
    { t: 'Performance', d: 'Lazy loading, code splitting and technical SEO for 95+ Lighthouse.' },
  ],
  info: [
    { k: 'الاسم', v: 'فرح السيد' },
    { k: 'العمر', v: '22 سنة' },
    { k: 'الدراسة', v: 'هندسة معلوماتية — اختصاص برمجيات' },
    { k: 'الموقع', v: 'فلسطين / عمل عن بعد' },
    { k: 'اللغات', v: 'العربية (أم) • الإنجليزية (جيد جداً)' },
    { k: 'الحالة', v: 'متاح لمشاريع جديدة' },
  ],
  services: [
    { t: 'تطوير React', d: 'بناء SPA متكاملة مع إدارة حالة احترافية بـ Redux / Zustand.' },
    { t: 'تصميم Tailwind', d: 'واجهات متجاوبة pixel-perfect مع Dark Mode وأنيميشن.' },
    { t: 'تحسين الأداء', d: 'Lazy loading و Code splitting و SEO تقني للوصول لـ 95+ Lighthouse.' },
  ],
};

export const services = [
  {
    t: 'Web Development',
    d: 'Building fast, responsive websites and web apps using React, Tailwind CSS and modern JavaScript.',
    icon: '◍',
  },
  {
    t: 'React Applications',
    d: 'Skilled in component architecture, hooks, routing and state management with Redux / Zustand.',
    icon: '⬡',
  },
  {
    t: 'Web Optimization',
    d: 'Optimizing web applications for maximum speed, scalability, and seamless user experience across devices.',
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
    image: tailNextImage,
    d: 'Production-ready web development template optimized for SEO, high page speed, and dark mode integration for SaaS and startup sites.',
    tags: ['js', 'Tailwind'],
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
    
    d: 'Building scalable React applications with Tailwind CSS, focusing on performance, accessibility and design systems.',
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
  { name: 'JavaScript (ES6+)', tag: 'Async · Modules · DOM', level: 90 },
  { name: 'Tailwind CSS', tag: 'Responsive · Dark mode', level: 95 },
  { name: 'HTML5 & CSS3', tag: 'Semantic · Grid · Flex', level: 94 },
  { name: 'Framer Motion', tag: 'Gestures · Scroll reveals', level: 85 },
  { name: 'TypeScript', tag: 'Types · Interfaces', level: 78 },
  { name: 'Redux / Zustand', tag: 'Stores · Middleware', level: 82 },
  { name: 'Git & GitHub', tag: 'Branching · PRs · CI', level: 88 },
  { name: 'Vite & Tooling', tag: 'Build · Deploy · Lint', level: 86 },
];

export const tools = ['Vite', 'Figma', 'VS Code', 'Postman', 'Vercel', 'Netlify', 'Firebase', 'REST API'];