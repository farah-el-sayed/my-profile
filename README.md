# Farah Al Sayed — Portfolio & Blog

Personal portfolio and blog for **Farah Al Sayed**, a front-end developer from Palestine. The site highlights my work, skills, and writing, with project detail pages generated from project data.

## About me

I build responsive, accessible web experiences with React, Next.js, and TypeScript. My work includes e-learning platforms, restaurant websites, e-commerce interfaces, and other web applications.

- **Location:** Palestine
- **Role:** Front-End Developer
- **GitHub:** [farah-el-sayed](https://github.com/farah-el-sayed)
- **LinkedIn:** [Farah El Sayed](https://www.linkedin.com/in/farah-el-sayed-494bb2336)

## Website features

- Portfolio sections for my introduction, projects, skills, tools, and contact information
- Individual project pages at `/projects/[slug]`
- Markdown blog posts at `/blog/posts/[slug]`, with category and tag pages
- Responsive layout, accessible controls, and light/dark themes
- Scroll-triggered animations and optimized project images
- Static generation for project and blog pages

## Tools and technologies

### Used to build this website

- **Next.js 13**, **React 18**, and **TypeScript** for the application and pages
- **Tailwind CSS** for responsive styling and dark mode
- **GSAP** and **Motion** for animations
- **Swiper** for the blog carousel
- **React Rough Notation** for section-heading accents
- **Markdown**, **gray-matter**, and **remark** for blog content
- **next-themes** for light and dark themes
- **ESLint**, **Prettier**, and **npm** for code quality and development

### Other tools in my toolkit

- **Figma**, **VS Code**, and **Postman**
- **Git** and **GitHub**
- **Vercel** and **Netlify**
- **Firebase** and **REST APIs**

## Run locally

Requirements: Node.js and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

To create a production build:

```bash
npm run build
npm start
```

## Configuration

Create a `.env.local` file in the project root if you want to configure the optional site settings:

```env
NEXT_PUBLIC_URL=http://localhost:3000
NEXT_PUBLIC_EMAIL=elsayedfarah746@gmail.com
NEXT_PUBLIC_GOOGLE_ANALYTICS=
```

## Project structure

- `pages/` — Next.js routes, including dynamic project and blog routes
- `sections/` — portfolio page sections
- `components/` — reusable UI components
- `contents/` — Markdown blog posts
- `public/` — images and other static assets
- `utils/projects.ts` — project details used by the cards and dynamic project pages
