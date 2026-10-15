import { motion } from 'framer-motion';
import { profile } from '../data/profile';
import profileImage from '../imag/prof-img.jfif';
import SocialLinks from './SocialLinks';

export default function Hero() {
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-grid" />
      <div className="orb w-[480px] h-[480px] -top-40 -left-32" style={{ background: 'rgba(196,167,231,.13)' }} />
      <div className="orb w-[420px] h-[420px] top-1/3 -right-32" style={{ background: 'rgba(139,92,246,.15)' }} />

      <div className="hero-container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-[120px] pb-14 sm:pb-20 w-full max-w-7xl">
        <div className="hero-layout grid gap-10 sm:gap-12 lg:gap-14 lg:grid-cols-2 items-center">
          <div>
            <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} className="mono text-sm mb-4" style={{ color: 'var(--lav)' }}>
              {profile.role}
            </motion.p>
            <motion.h1 initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="hero-title font-display font-extrabold text-[2rem] leading-[1.1] sm:text-5xl lg:text-6xl sm:leading-[1.06] tracking-tight mb-4 sm:mb-5 text-balance">
              {profile.heroLine1}<br /><span className="text-gradient">{profile.heroLine2}</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mono text-sm sm:text-base mb-3" style={{ color: '#dbe1ff' }}>
              Hi, I&apos;m <span style={{ color: 'var(--lav)', fontWeight: 700 }}>{profile.name}</span> {profile.from}
            </motion.p>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.42 }} className="max-w-[32rem] text-[.98rem] leading-8 mb-9" style={{ color: 'var(--muted)' }}>
              I build fast, responsive web interfaces with React and Tailwind CSS — clean code, modern tooling and delightful motion.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }} className="hero-buttons flex flex-wrap items-center gap-4">
              <motion.button onClick={() => go('portfolio')} whileHover={{ y: -3 }} whileTap={{ scale: 0.97 }} className="btn-primary-glow">
                View My Work <span aria-hidden>→</span>
              </motion.button>
              <motion.button onClick={() => go('contact')} whileHover={{ y: -3 }} whileTap={{ scale: 0.97 }} className="btn-outline-glow">
                Contact Me
              </motion.button>
            </motion.div>
            <SocialLinks variant="hero" />
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hero-visual flex justify-center lg:justify-end"
          >
            <div className="relative mx-auto w-fit max-w-full">
              <div
                className="w-[230px] h-[290px] xs:w-[250px] xs:h-[320px] sm:w-[310px] sm:h-[390px] overflow-hidden grid place-items-center mx-auto"
                style={{
                  borderRadius: 'clamp(100px, 30vw, 160px) clamp(100px, 30vw, 160px) 24px 24px',
                  border: '2px solid rgba(196,167,231,.45)',
                  boxShadow: '0 30px 80px rgba(2,6,23,.6), 0 0 50px rgba(196,167,231,.25)',
                  background: 'linear-gradient(160deg,#1e2f6b,#0d1740)',
                }}
              >

                <img src={profileImage} alt={`${profile.name} portrait`} className="w-full h-full object-cover" />

              </div>
             
              <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 4.6, repeat: Infinity, ease: 'easeInOut' }} className="glass absolute -right-2 sm:-right-8 bottom-6 sm:bottom-10 px-3 sm:px-4 py-2 sm:py-3 text-center">
                <p className="font-display font-extrabold text-xl text-gradient">10+</p>
                <p className="mono" style={{ color: 'var(--muted)', fontSize: '.65rem' }}>Projects</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
