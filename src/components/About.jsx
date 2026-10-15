import { motion } from 'framer-motion';
import { profile } from '../data/profile';

export function SectionHead({ title, sub, center }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${center ? 'text-center mx-auto' : 'max-w-2xl'}`}
    >
      <span className="eyebrow text-center" style={center ? { justifyContent: 'center' } : undefined}>{sub}</span>
      <h2 className="font-display text-[1.65rem] sm:text-4xl lg:text-[2.6rem] font-extrabold tracking-tight mt-3 text-balance">
        <span className="text-gradient">{title}</span>
      </h2>
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="orb w-[380px] h-[380px] top-10 -left-40" style={{ background: 'rgba(196,167,231,.09)' }} />
      <div className="mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full max-w-7xl">
        <SectionHead sub="who am i" title="About Me" />
        <div className="about-grid grid gap-5 sm:gap-6 lg:grid-cols-[.9fr_1.1fr] items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="glass p-5 sm:p-6 lg:p-8 h-full text-center">
              <div className="w-24 h-24 mx-auto rounded-2xl grid place-items-center font-display text-3xl font-extrabold"
                style={{ background: 'linear-gradient(135deg,#C4A7E7,#8b5cf6)', color: '#0a1230' }}>
                F.Dev
              </div>
              <h3 className="font-display mt-5 text-xl font-bold">{profile.name}</h3>
              <p className="mono text-[.8rem] mt-1" style={{ color: 'var(--lav)' }}>{profile.role}</p>
              <p className="mono text-[.7rem] mt-1" style={{ color: 'var(--muted)' }}>React • Tailwind CSS • Framer Motion</p>
              <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full mono text-xs"
                style={{ background: 'rgba(52,211,153,.1)', border: '1px solid rgba(52,211,153,.3)', color: '#34d399' }}>
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#34d399' }} />
                Open to work
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {profile.stats.map((s) => (
                  <div key={s.label} className="rounded-2xl py-3.5 px-2" style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--line)' }}>
                    <div className="font-display text-xl font-extrabold text-gradient">{s.value}</div>
                    <div className="mono mt-1" style={{ fontSize: '.65rem', color: 'var(--muted)' }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: .1 }}
            className="flex flex-col gap-5"
          >
            <div className="glass p-6 sm:p-8">
              <p className="mono text-xs mb-4" style={{ color: 'var(--lav)' }}>— my story</p>
              {profile.aboutEn.map((p, i) => (
                <p key={i} className="leading-8 mb-4 text-[.95rem]" style={{ color: '#c9d1f2' }}>{p}</p>
              ))}
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3 mt-6">
                {(profile.infoEn || profile.info || []).map((item) => (
                  <div key={item.k} className="flex gap-2 text-sm pb-2" style={{ borderBottom: '1px solid var(--line)' }}>
                    <span className="mono shrink-0" style={{ color: 'var(--lav)' }}>{item.k}:</span>
                    <span style={{ color: '#dbe1ff' }}>{item.v}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              {(profile.servicesEn || profile.services || []).map((s, i) => (
                <motion.div
                  key={s.t}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass p-5"
                >
                  <div className="text-xl mb-2">{['◍', '⬡', '⚡'][i]}</div>
                  <h4 className="font-display font-bold text-[.92rem] mb-1">{s.t}</h4>
                  <p className="text-xs leading-6" style={{ color: 'var(--muted)' }}>{s.d}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
