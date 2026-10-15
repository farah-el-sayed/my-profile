import { motion } from 'framer-motion';
import { services } from '../data/profile';
import { SectionHead } from './About';

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-7xl">
        <div className="text-center mx-auto" style={{ maxWidth: 640 }}>
          <SectionHead sub="what i do" title="My Services" center />
        </div>
        <div className="grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.t}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.55 }}
              className="glass p-7 text-center"
            >
              <div
                className="w-14 h-14 mx-auto rounded-2xl grid place-items-center text-2xl mb-5"
                style={{ background: 'rgba(196,167,231,.12)', border: '1px solid rgba(196,167,231,.3)', color: 'var(--lav)' }}
              >
                {s.icon}
              </div>
              <h3 className="font-display font-bold text-lg mb-2">{s.t}</h3>
              <p className="text-sm leading-7 mb-5" style={{ color: 'var(--muted)' }}>{s.d}</p>
              <a href="#contact" className="mono text-[.8rem] font-semibold" style={{ color: 'var(--lav)' }}>
                Learn more →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
