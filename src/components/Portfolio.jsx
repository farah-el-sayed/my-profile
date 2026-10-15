import { motion } from 'framer-motion';
import { works } from '../data/profile';
import { SectionHead } from './About';

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid" />
      <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-7xl">
        <div className="text-center mx-auto" style={{ maxWidth: 640 }}>
          <SectionHead sub="selected work" title="My Works" center />
        </div>
        <div className="projects-grid grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {works.map((w, i) => (
            <motion.article
              key={w.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.55 }}
              className="glass overflow-hidden p-0"
            >
              <div className="h-40 sm:h-44 relative overflow-hidden" style={{ background: w.grad }}>
                <img
                  src={w.image}
                  alt={`${w.title} preview`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="font-display font-bold text-lg mb-2">{w.title}</h3>
                <p className="text-sm leading-7 mb-4" style={{ color: 'var(--muted)' }}>{w.d}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {w.tags.map((t) => <span key={t} className="chip">{t}</span>)}
                </div>
                {w.link ? (
                  <a href={w.link} target="_blank" rel="noreferrer" className="btn-ghost btn w-full text-sm">
                    View Live Site ↗
                  </a>
                ) : (
                  <span className="btn-ghost btn w-full text-sm opacity-60 cursor-not-allowed" title="Link coming soon — send me the URL">
                    Link coming soon
                  </span>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
