import { motion } from 'framer-motion';
import { skills, tools } from '../data/profile';
import { SectionHead } from './About';

function Bar({ s, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: (i % 3) * 0.08, duration: 0.5 }}
      className="glass p-5"
    >
      <div className="flex items-center justify-between mb-1">
        <span className="font-display font-bold text-[.95rem]">{s.name}</span>
        <span className="mono text-[.8rem] font-bold" style={{ color: 'var(--lav)' }}>{s.level}%</span>
      </div>
      <p className="text-xs mb-3" style={{ color: 'var(--muted)' }}>{s.tag}</p>
      <div className="bar">
        <motion.span
          initial={{ width: 0 }}
          whileInView={{ width: `${s.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, delay: 0.15, ease: 'easeOut' }}
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid" />
      <div className="orb w-[420px] h-[420px] bottom-0 -right-40" style={{ background: 'rgba(139,92,246,.12)' }} />
      <div className="relative z-10 mx-auto px-5 sm:px-8" style={{ maxWidth: 1100 }}>
        <SectionHead num="02" sub="my stack" title="Skills & Expertise" />
        <p className="max-w-2xl -mt-6 mb-10 text-[.95rem] leading-7" style={{ color: 'var(--muted)' }}>
          Technologies I use daily to ship fast, accessible interfaces.
          Edit the levels in <span className="mono text-[.8rem]" style={{ color: 'var(--lav)' }}>src/data/profile.js</span> to match yours.
        </p>
        <div className="skills-grid grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {skills.map((s, i) => <Bar key={s.name} s={s} i={i} />)}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass p-5 sm:p-6"
        >
          <p className="mono text-xs mb-4" style={{ color: 'var(--lav)' }}>— tools &amp; workflow</p>
          <div className="flex flex-wrap gap-2.5">
            {tools.map((t) => (
              <span key={t} className="chip">{t}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
