import { motion } from "motion/react";

import LevelBadge from "@/components/skills/LevelBadge";
import type { Skill } from "utils/skills";

const FADE_UP_DISTANCE = 20;
const HOVER_LIFT = -4;
const HOVER_SCALE = 1.025;

export const skillCardVariants = {
  hidden: {
    opacity: 0,
    y: FADE_UP_DISTANCE,
    scale: 0.94,
    filter: "blur(6px)",
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      type: "spring" as const,
      stiffness: 140,
      damping: 18,
    },
  },
};

type Props = {
  skill: Skill;
  featured?: boolean;
  reduceMotion: boolean;
};

const SkillCard: React.FC<Props> = ({
  skill,
  featured = false,
  reduceMotion,
}) => (
  <motion.li
    variants={skillCardVariants}
    whileHover={
      reduceMotion
        ? undefined
        : {
            y: HOVER_LIFT,
            scale: HOVER_SCALE,
            transition: { type: "spring", stiffness: 300, damping: 20 },
          }
    }
    className={`group relative isolate h-full overflow-hidden rounded-xl border bg-bglight p-5 shadow-sm transition-[border-color,box-shadow] dark:bg-carddark ${
      featured
        ? "border-marrsgreen/40 dark:border-carrigreen/40"
        : "border-gray-200 dark:border-slate-700"
    } hover:border-marrsgreen hover:shadow-[0_12px_28px_rgba(0,122,122,0.12)] dark:hover:border-carrigreen dark:hover:shadow-[0_12px_28px_rgba(5,206,145,0.12)]`}
  >
    <span
      aria-hidden="true"
      className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-marrsgreen/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100 dark:bg-carrigreen/10"
    />
    <div className="flex h-full flex-col">
      <div className="mb-3 flex items-start justify-between gap-3">
        <h4 className="font-semibold">{skill.name}</h4>
        <LevelBadge level={skill.level} />
      </div>
      <p
        className="truncate text-sm text-gray-700 dark:text-gray-300"
        title={skill.description}
      >
        {skill.description}
      </p>
      {skill.projects.length > 0 && (
        <div className="mt-auto pt-5">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-300">
            Used in
          </p>
          <ul className="flex flex-wrap gap-2">
            {skill.projects.map((project) => (
              <li key={project.name}>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-full border border-marrsgreen/30 px-2.5 py-1 text-xs font-medium text-marrsdark outline-marrsgreen transition-colors hover:bg-marrsgreen/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 dark:border-carrigreen/30 dark:text-carrilight dark:outline-carrigreen dark:hover:bg-carrigreen/10"
                >
                  {project.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  </motion.li>
);

export default SkillCard;
