import { motion } from "motion/react";

import SkillCard from "@/components/skills/SkillCard";
import type { Skill, SkillGroupData } from "utils/skills";

const CHILD_STAGGER = 0.08;
const CHILD_DELAY = 0.1;
const VIEWPORT_AMOUNT = 0.15;

type Props = {
  group: SkillGroupData;
  skills: Skill[];
  reduceMotion: boolean;
};

const SkillGroup: React.FC<Props> = ({ group, skills, reduceMotion }) => {
  const columnStyles =
    group.columns === "three" ? "lg:grid-cols-3" : "lg:grid-cols-2";

  return (
    <section
      aria-labelledby={`skill-group-${group.name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")}`}
    >
      <h3
        id={`skill-group-${group.name
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")}`}
        className={`mb-4 text-xl font-semibold ${
          group.featured
            ? "text-marrsgreen dark:text-carrigreen"
            : "text-marrsdark dark:text-textlight"
        }`}
      >
        {group.name}
      </h3>
      <motion.ul
        className={`grid auto-rows-fr grid-cols-1 gap-4 sm:grid-cols-2 ${columnStyles}`}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: reduceMotion ? 0 : CHILD_STAGGER,
              delayChildren: reduceMotion ? 0 : CHILD_DELAY,
            },
          },
        }}
        initial={reduceMotion ? "show" : "hidden"}
        whileInView="show"
        viewport={{ once: true, amount: VIEWPORT_AMOUNT }}
      >
        {skills.map((skill) => (
          <SkillCard
            key={skill.name}
            skill={skill}
            featured={group.featured}
            reduceMotion={reduceMotion}
          />
        ))}
      </motion.ul>
    </section>
  );
};

export default SkillGroup;
