import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

import AppHead from "@/components/AppHead";
import Footer from "@/components/Footer";
import SkipToMain from "@/components/SkipToMain";
import { projects, type Project } from "utils/projects";

type Props = {
  project: Project;
};

const ProjectPage: NextPage<Props> = ({ project }) => {
  const projectUrl = `${process.env.NEXT_PUBLIC_URL ?? ""}/projects/${
    project.slug
  }`;

  return (
    <>
      <AppHead
        title={`${project.title} - Farah Al Sayed`}
        url={projectUrl}
        meta={{
          author: "Farah Al Sayed",
          description: project.desc,
          siteName: "Farah Al Sayed Portfolio",
          type: "website",
          coverImage: project.imageSrc,
          coverImageAlt: project.imageAlt,
        }}
      />
      <div className="min-h-screen bg-bglight dark:bg-bgdark">
        <SkipToMain />
        <header className="flex h-16 items-center justify-between border-b border-gray-200 px-4 dark:border-slate-700 sm:px-8">
          <Link
            href="/"
            className="text-xl font-medium focus-visible:outline-marrsgreen dark:focus-visible:outline-carrigreen"
          >
            FARAH
            <span className="text-marrsgreen dark:text-carrigreen">.dev</span>
          </Link>
          <Link
            href="/#projects"
            className="text-sm font-medium text-marrsgreen hover:underline dark:text-carrigreen"
          >
            Back to projects
          </Link>
        </header>
        <main
          id="main"
          className="mx-auto max-w-5xl px-4 py-12 sm:px-8 md:py-16"
        >
          <article>
            <h1 className="mb-4 text-3xl font-semibold md:text-4xl">
              {project.title}
            </h1>
            <p className="mb-8 max-w-3xl text-gray-700 dark:text-gray-300">
              {project.desc}
            </p>
            <div
              className="relative mb-8 aspect-[16/9] overflow-hidden rounded-xl"
              style={{ background: project.grad }}
            >
              <Image
                src={project.imageSrc}
                alt={project.imageAlt}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 896px"
                className="object-cover"
              />
            </div>
            <h2 className="mb-3 text-xl font-semibold">Technologies</h2>
            <ul className="mb-8 flex flex-wrap gap-3">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-marrsgreen/30 bg-white px-4 py-2 text-sm dark:border-carrigreen/30 dark:bg-carddark"
                >
                  {tag}
                </li>
              ))}
            </ul>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-md bg-marrsgreen px-5 py-3 font-medium text-white hover:bg-marrsdark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-marrsgreen dark:bg-carrigreen dark:text-bgdark dark:hover:bg-carrilight"
            >
              Visit live project
            </a>
          </article>
        </main>
        <Footer />
      </div>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = () => ({
  paths: projects.map(({ slug }) => ({ params: { slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<Props, { slug: string }> = async ({
  params,
}) => {
  const project = projects.find(({ slug }) => slug === params?.slug);

  if (!project) {
    return { notFound: true };
  }

  return { props: { project } };
};

export default ProjectPage;
