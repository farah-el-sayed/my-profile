import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';

const links = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'services', label: 'Services', href: '#services' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'portfolio', label: 'Portfolio', href: '#portfolio' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // إغلاق القائمة بزر Escape + منع تمرير الخلفية وهي مفتوحة
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [open ]);

  // تتبع القسم النشط تلقائياً أثناء التمرير (scroll-spy)
  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter(Boolean);
    if (!sections.length) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) setActive(en.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  // تمرير سلس مع تعويض ارتفاع النافبار الثابت
  const goTo = (e, l) => {
    e.preventDefault();
    setActive(l.id);
    setOpen(false);
    // مهلة قصيرة حتى تُغلق القائمة قبل حساب الموضع
    setTimeout(() => {
      const el = document.getElementById(l.id);
      if (!el) return;
      const navH = 72;
      const top = el.getBoundingClientRect().top + window.scrollY - navH - 8;
      window.scrollTo({ top: Math.max(top, 0), behavior: 'smooth' });
      history.replaceState(null, '', l.href);
    }, open ? 60 : 0);
  };

  return (
    <>
      <motion.div
        style={{ scaleX: progress }}
        className="fixed top-0 left-0 right-0 h-[3px] origin-left z-[60] bg-gradient-to-r from-[#C4A7E7] via-[#8b5cf6] to-[#C4A7E7]"
      />
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'border-b backdrop-blur-xl'
            : 'bg-transparent border-b border-transparent'
        }`}
        style={scrolled ? {
          background: 'rgba(10,18,48,.82)',
          borderColor: 'rgba(196,167,231,.16)',
          boxShadow: '0 12px 40px rgba(2,6,23,.5)',
        } : undefined}
      >
        <nav className="mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16 sm:h-[72px] w-full max-w-7xl">
          <motion.a
            href="#home"
            onClick={(e) => goTo(e, { id: 'home', href: '#home' })}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            className="font-mono font-bold text-lg sm:text-xl lg:text-2xl tracking-tight select-none shrink-0"
          >
            <span className="logo-glow">&lt;F.Dev /&gt;</span>
          </motion.a>
          <ul className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <li key={l.id}>
                <a
                  href={l.href}
                  onClick={(e) => goTo(e, l)}
                  aria-current={active === l.id ? 'true' : undefined}
                  className={`nav-link font-mono text-sm transition-colors ${
                    active === l.id ? 'text-[#C4A7E7] active' : 'text-gray-300 hover:text-[#C4A7E7]'
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3">
            <motion.a
              href="#contact"
              onClick={(e) => goTo(e, { id: 'contact', href: '#contact' })}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary-glow hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-[#0b1530]"
            >
              <span className="w-2 h-2 rounded-full bg-[#0b1530] animate-pulse" />
              Hire Me
            </motion.a>
            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              aria-expanded={open}
              className="lg:hidden w-10 h-10 sm:w-11 sm:h-11 grid place-items-center rounded-xl border border-[#C4A7E7]/30 text-[#C4A7E7] shrink-0 touch-manipulation"
            >
              <div className="space-y-[5px]">
                <motion.span animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }} className="block w-5 h-[2px] bg-current" />
                <motion.span animate={open ? { opacity: 0 } : { opacity: 1 }} className="block w-5 h-[2px] bg-current" />
                <motion.span animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }} className="block w-5 h-[2px] bg-current" />
              </div>
            </button>
          </div>
        </nav>
        <AnimatePresence>
          {open && (
            <>
              <motion.button
                aria-label="Close menu"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setOpen(false)}
                className="lg:hidden fixed inset-0 top-[64px] sm:top-[72px] z-[-1] cursor-default"
                style={{ background: 'rgba(4,8,26,.6)', backdropFilter: 'blur(2px)' }}
                tabIndex={-1}
              />
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.28, ease: 'easeInOut' }}
                className="lg:hidden overflow-hidden backdrop-blur-xl border-b border-[#C4A7E7]/20"
                style={{ background: 'rgba(10,18,48,.97)', maxHeight: 'calc(100dvh - 64px)', overflowY: 'auto' }}
              >
              <ul className="px-4 sm:px-6 py-4 space-y-1">
                {links.map((l) => (
                  <motion.li key={l.id} initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: links.indexOf(l) * 0.07 }}>
                    <a
                      href={l.href}
                      onClick={(e) => goTo(e, l)}
                      aria-current={active === l.id ? 'true' : undefined}
                      className={`flex items-center gap-3 py-3.5 px-4 rounded-xl font-mono text-base min-h-[48px] touch-manipulation transition-colors ${active === l.id ? 'text-[#C4A7E7] bg-[#C4A7E7]/10 border border-[#C4A7E7]/25' : 'text-gray-200 border border-transparent active:bg-[#C4A7E7]/10'}`}
                    >
                      {l.label}
                      {active === l.id && <span aria-hidden className="ml-auto text-[#C4A7E7]">●</span>}
                    </a>
                  </motion.li>
                ))}
                <li className="pt-3 pb-1">
                  <a href="#contact" onClick={(e) => goTo(e, { id: 'contact', href: '#contact' })} className="btn-primary-glow flex justify-center px-5 py-3.5 rounded-xl font-semibold text-sm text-[#0b1530] min-h-[48px] items-center touch-manipulation">
                    Hire Me
                  </a>
                </li>
              </ul>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
