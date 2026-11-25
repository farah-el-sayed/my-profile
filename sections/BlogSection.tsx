import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { RoughNotation } from "react-rough-notation";

import { useSection } from "context/section";
import useOnScreen from "hooks/useOnScreen";
import useScrollActive from "hooks/useScrollActive";
import { MdxMeta } from "pages/blog/posts/[slug]";
import BlogImageCard from "@/components/BlogImageCard";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type Props = {
  posts: MdxMeta[];
};

const expertise = [
  {
    title: "Next.js Development",
    image: "/imag/tailnext.webp",
    imageAlt: "TailNext website template displayed across several devices",
    description:
      "Scalable applications with Next.js, TypeScript, App Router, and professional state management.",
  },
  {
    title: "Tailwind Design",
    image: "/projects/haru-fashion.webp",
    imageAlt: "Responsive Haru Fashion ecommerce website design",
    description:
      "Pixel-perfect responsive interfaces with dark mode and animation.",
  },
  {
    title: "Performance & SEO",
    image: "/lighthouse-result.svg",
    imageAlt:
      "Lighthouse performance, accessibility, best practices, and SEO scores",
    imageFit: "contain",
    description:
      "Technical SEO, lazy loading, code splitting, and SSG, SSR, or CSR for 95+ Lighthouse.",
  },
  {
    title: "Accessible Interfaces",
    image: "/projects/shadcn-admin.webp",
    imageAlt: "Responsive dashboard interface displayed on desktop and mobile",
    description:
      "Inclusive experiences built with semantic HTML, keyboard navigation, and accessibility best practices.",
  },
];

const BlogSection: React.FC<Props> = ({ posts }) => {
  const { theme } = useTheme();

  const sectionRef = useRef<HTMLDivElement>(null);

  const elementRef = useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen(elementRef);

  // Set active link for blog section
  const blogSection = useScrollActive(sectionRef);
  const { onSectionChange } = useSection();
  useEffect(() => {
    blogSection && onSectionChange!("blog");
  }, [blogSection]);

  return (
    <div className="bg-[#F5F5F5] dark:bg-[#1B2731]">
      <section ref={sectionRef} id="blog" className="section md:px-10">
        <div className="text-center">
          <RoughNotation
            type="underline"
            color={`${
              theme === "light" ? "rgb(0, 122, 122)" : "rgb(5 206 145)"
            }`}
            strokeWidth={2}
            order={1}
            show={isOnScreen}
          >
            <h2 className="section-heading">My expertise</h2>
          </RoughNotation>
        </div>
        <div className="text-center mb-8" ref={elementRef}>
          I write blog posts about what I've done and what I'm doing{" "}
          <br className="hidden sm:block" aria-hidden="true" />
          as a documenting practice. Here are some of my recent blog posts.
        </div>
        <div>
          <Swiper
            modules={[Navigation, Pagination]}
            pagination={{
              dynamicBullets: true,
            }}
            wrapperTag="ul"
            navigation
            className="swiper-padding-mobile xs:swiper-padding"
            breakpoints={{
              100: {
                slidesPerView: "auto",
                spaceBetween: 50,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
                centeredSlides: true,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
                centeredSlides: false,
              },
            }}
          >
            {posts.map((post, index) => (
              <SwiperSlide key={post.slug} tag="li">
                <BlogImageCard
                  post={post}
                  className={`${index > 3 ? "hidden lg:block" : ""}`}
                  key={post.slug}
                  fullWH
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="mt-4">
          <ul className="grid auto-rows-fr grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {expertise.map((item, index) => (
              <li
                key={item.title}
                className="overflow-hidden rounded bg-gray-100 shadow-md transition-shadow hover:shadow-xl dark:bg-carddark"
              >
                <div className="relative h-36">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className={
                      item.imageFit === "contain"
                        ? "bg-white object-contain p-2"
                        : "object-cover"
                    }
                  />
                  <span className="absolute left-4 top-4 rounded bg-black/60 px-2 py-1 text-xs font-semibold text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="p-4">
                  <h4 className="mb-2 font-medium text-marrsdark dark:text-carrilight">
                    {item.title}
                  </h4>
                  <p className="text-sm leading-6 text-gray-700 dark:text-gray-300">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default BlogSection;
