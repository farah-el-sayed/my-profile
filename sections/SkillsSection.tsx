import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "motion/react";

import SkillGroup from "@/components/skills/SkillGroup";
import ToolChip from "@/components/skills/ToolChip";
import { useSection } from "context/section";
import useScrollActive from "hooks/useScrollActive";
import { skillGroups, skills, tools } from "utils/skills";

const SkillsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const skillsSection = useScrollActive(sectionRef);
  const { onSectionChange } = useSection();
  const reduceMotion = Boolean(useReducedMotion());

  useEffect(() => {
    skillsSection && onSectionChange!("skills");
  }, [onSectionChange, skillsSection]);

  return (
    <section
      ref={sectionRef}
      id="skills"
      aria-labelledby="skills-heading"
      className="section bg-white dark:bg-[#1B2731]"
    >
      <motion.header
        className="mb-10 text-center"
        initial={reduceMotion ? "show" : "hidden"}
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 24 },
          show: {
            opacity: 1,
            y: 0,
            transition: {
              duration: reduceMotion ? 0 : 0.6,
              ease: "easeOut",
            },
          },
        }}
      >
        <p className="mb-2 font-medium uppercase tracking-[0.2em] text-marrsgreen dark:text-carrigreen">
          Skills &amp; Tools
        </p>
        <h2 id="skills-heading" className="section-heading">
          Skills &amp; Tools
        </h2>
        <p className="mx-auto max-w-2xl">
          The stack I use to build production-style React and Next.js projects.
        </p>
      </motion.header>

      <div className="space-y-10">
        {skillGroups.map((group) => (
          <SkillGroup
            key={group.name}
            group={group}
            skills={skills.filter((skill) =>
              group.skillNames.includes(skill.name)
            )}
            reduceMotion={reduceMotion}
          />
        ))}
      </div>

      <section
        aria-labelledby="tools-heading"
        className="mt-14 border-t border-gray-200 pt-8 dark:border-slate-700"
      >
        <h3 id="tools-heading" className="mb-5 text-xl font-semibold">
          Tools I use
        </h3>
        <motion.ul
          className="flex flex-wrap gap-3"
          initial={reduceMotion ? "show" : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: reduceMotion ? 0 : 0.06,
              },
            },
          }}
        >
          {tools.map((tool) => (
            <motion.li
              key={tool}
              variants={{
                hidden: { opacity: 0, y: 20, scale: 0.8, rotate: -4 },
                show: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  rotate: 0,
                  transition: {
                    type: "spring",
                    stiffness: 220,
                    damping: 16,
                  },
                },
              }}
              whileHover={
                reduceMotion
                  ? undefined
                  : {
                      y: -5,
                      scale: 1.08,
                      rotate: 1,
                      transition: {
                        type: "spring",
                        stiffness: 350,
                        damping: 18,
                      },
                    }
              }
            >
              <ToolChip name={tool} />
            </motion.li>
          ))}
        </motion.ul>
      </section>
    </section>
  );
};

export default SkillsSection;
