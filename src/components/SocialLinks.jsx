import { motion } from 'framer-motion';
import { profile } from '../data/profile';

const iconProps = {
  width: 18,
  height: 18,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};



const LinkedinIcon = () => (
  <svg {...iconProps}>
    <rect x="2.5" y="2.5" width="19" height="19" rx="4" />
    <path d="M7.5 10v6.5" />
    <circle cx="7.5" cy="7.4" r="1.1" fill="currentColor" stroke="none" />
    <path d="M11.5 16.5v-3.8c0-1.4 1-2.5 2.4-2.5s2.4 1.1 2.4 2.5v3.8" />
    <path d="M11.5 10v1.2" />
  </svg>
);

const VercelIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.5 23 20.5H1L12 2.5Z" />
  </svg>
);

const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .8C5.7.8.8 5.7.8 12c0 4.9 3.2 9.1 7.6 10.6.6.1.8-.2.8-.5v-2c-3.1.7-3.8-1.3-3.8-1.3-.5-1.3-1.2-1.7-1.2-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 1.7 2.6 1.2 3.3.9.1-.7.4-1.2.7-1.5-2.5-.3-5.1-1.2-5.1-5.5 0-1.2.4-2.2 1.1-3-.1-.3-.5-1.4.1-2.9 0 0 .9-.3 3 1.1a10.3 10.3 0 0 1 5.4 0c2.1-1.4 3-1.1 3-1.1.6 1.5.2 2.6.1 2.9.7.8 1.1 1.8 1.1 3 0 4.3-2.6 5.2-5.1 5.5.4.4.8 1.1.8 2.2v3.2c0 .3.2.6.8.5A11.2 11.2 0 0 0 23.2 12C23.2 5.7 18.3.8 12 .8Z" />
  </svg>
);

export const socialItems = (socials = profile.socials) => [
 
  { key: 'linkedin', label: 'LinkedIn', href: socials?.linkedin, Icon: LinkedinIcon },
  { key: 'vercel', label: 'Vercel', href: socials?.vercel, Icon: VercelIcon },
  { key: 'github', label: 'GitHub', href: socials?.github, Icon: GithubIcon },
];

/**
 * SocialLinks — أزرار تواصل دائرية بنفس هوية الموقع (زجاجية + توهج لافندر)
 * @param {string} variant - 'hero' | 'contact' | 'footer'
 */
export default function SocialLinks({ variant = 'hero' }) {
  const items = socialItems();

  if (variant === 'footer') {
    return (
      <div className="flex items-center justify-center gap-3 mt-5">
        {items.map(({ key, label, href, Icon }) => (
          <motion.a
            key={key}
            href={href}
            target="_blank"
            rel="noreferrer"
            title={label}
            aria-label={label}
            whileHover={{ y: -3, scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            className="w-10 h-10 grid place-items-center rounded-full transition-all"
            style={{
              color: 'var(--lav)',
              background: 'rgba(196,167,231,.08)',
              border: '1px solid rgba(196,167,231,.35)',
              boxShadow: '0 0 16px rgba(196,167,231,.18)',
            }}
          >
            <Icon />
          </motion.a>
        ))}
      </div>
    );
  }

  if (variant === 'contact') {
    return (
      <div className="mt-7 pt-6" style={{ borderTop: '1px solid var(--line)' }}>
        <p className="mono text-xs mb-4" style={{ color: 'var(--lav)' }}>— follow me</p>
        <div className="grid grid-cols-1 xs:grid-cols-2 gap-3">
          {items.map(({ key, label, href, Icon }, i) => (
            <motion.a
              key={key}
              href={href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              whileHover={{ y: -3 }}
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all"
              style={{
                color: '#eef1ff',
                background: 'rgba(196,167,231,.07)',
                border: '1px solid rgba(196,167,231,.28)',
              }}
            >
              <span style={{ color: 'var(--lav)' }}>
                <Icon />
              </span>
              {label}
              <span aria-hidden className="ml-auto" style={{ color: 'var(--lav)' }}>↗</span>
            </motion.a>
          ))}
        </div>
      </div>
    );
  }

  // hero variant — صف أيقونات صغير تحت الأزرار
  return (
    <div className="flex items-center gap-3 mt-7">
      <span className="mono text-xs" style={{ color: 'var(--muted)' }}>follow —</span>
      {items.map(({ key, label, href, Icon }) => (
        <motion.a
          key={key}
          href={href}
          target="_blank"
          rel="noreferrer"
          title={label}
          aria-label={label}
          whileHover={{ y: -3, scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          className="w-10 h-10 grid place-items-center rounded-xl transition-all"
          style={{
            color: 'var(--lav)',
            background: 'rgba(196,167,231,.07)',
            border: '1px solid rgba(196,167,231,.3)',
          }}
        >
          <Icon />
        </motion.a>
      ))}
    </div>
  );
}
