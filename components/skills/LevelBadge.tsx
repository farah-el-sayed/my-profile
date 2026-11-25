import type { SkillLevel } from "utils/skills";

const levelStyles: Record<SkillLevel, string> = {
  "Daily use":
    "bg-marrsgreen/10 text-marrsdark dark:bg-carrigreen/15 dark:text-carrilight",
  Comfortable:
    "bg-slate-200 text-slate-800 dark:bg-slate-700 dark:text-slate-100",
  Learning:
    "bg-amber-100 text-amber-900 dark:bg-amber-900/50 dark:text-amber-200",
};

const LevelBadge: React.FC<{ level: SkillLevel }> = ({ level }) => (
  <span
    className={`inline-flex shrink-0 items-center rounded-full px-2.5 py-1 text-xs font-semibold ${levelStyles[level]}`}
  >
    {level}
  </span>
);

export default LevelBadge;
