import { motion } from 'framer-motion';
import { useState } from 'react';
import { profile, experience } from '../data/profile';
import { SectionHead } from './About';
import SocialLinks from './SocialLinks';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === 'sending') return;
    setStatus('sending');
    setErrorMsg('');
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${profile.email}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
          _subject: `New portfolio message from ${name.trim()}`,
          _template: 'table',
          _captcha: 'false',
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data?.message || `Request failed (${res.status})`);
      setStatus('success');
      setName(''); setEmail(''); setMessage('');
    } catch (err) {
      setStatus('error');
      setErrorMsg('Could not send automatically. Please use the email button below.');
    }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="orb w-[420px] h-[420px] top-20 -left-40" style={{ background: 'rgba(196,167,231,.1)' }} />
      <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-7xl">
        <div className="text-center mx-auto" style={{ maxWidth: 640 }}>
          <SectionHead num="04" sub="get in touch" title="Contact Me" center />
        </div>
        <div className="contact-grid grid gap-5 sm:gap-6 lg:grid-cols-2 items-start">
          <motion.div initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass p-5 sm:p-6 lg:p-7">
            <p className="mono text-xs mb-5" style={{ color: 'var(--lav)' }}>— experience</p>
            <div className="tl space-y-7">
              {experience.map((e) => (
                <div key={e.role} className="relative">
                  <span className="tl-dot" />
                  <p className="mono text-[.7rem] mb-1" style={{ color: 'var(--lav)' }}>{e.period}</p>
                  <h4 className="font-display font-bold text-[.95rem] mb-1">{e.role}</h4>
                  <p className="text-sm leading-7" style={{ color: 'var(--muted)' }}>{e.d}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 space-y-2 text-sm" style={{ borderTop: '1px solid var(--line)' }}>
              <p className="mono break-all" style={{ color: 'var(--lav)' }}>{profile.email}</p>
              <p className="mono" style={{ color: 'var(--muted)' }}>{profile.phone}</p>
            </div>
            <SocialLinks variant="contact" />
          </motion.div>
          <motion.form
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass p-5 sm:p-6 lg:p-7 space-y-4"
            onSubmit={handleSubmit}
          >
            <div>
              <label htmlFor="contact-name" className="mono text-xs block mb-2" style={{ color: 'var(--muted)' }}>Your name</label>
              <input
                id="contact-name" name="name" required minLength={2} maxLength={80}
                placeholder="John Doe" autoComplete="name"
                value={name} onChange={(e) => setName(e.target.value)}
                disabled={status === 'sending'}
                className="w-full px-4 py-3 rounded-xl text-sm outline-none" style={{ background: 'rgba(255,255,255,.04)', border: '1px solid var(--line)', color: '#fff' }} />
            </div>
            <div>
              <label htmlFor="contact-email" className="mono text-xs block mb-2" style={{ color: 'var(--muted)' }}>Your email</label>
              <input
                id="contact-email" name="email" required type="email" maxLength={120}
                placeholder="john@email.com" autoComplete="email"
                value={email} onChange={(e) => setEmail(e.target.value)}
                disabled={status === 'sending'}
                className="w-full px-4 py-3 rounded-xl text-sm outline-none" style={{ background: 'rgba(255,255,255,.04)', border: '1px solid var(--line)', color: '#fff' }} />
            </div>
            <div>
              <label htmlFor="contact-message" className="mono text-xs block mb-2" style={{ color: 'var(--muted)' }}>Message</label>
              <textarea
                id="contact-message" name="message" required minLength={10} maxLength={2000} rows={5}
                placeholder="Tell me about your project..."
                value={message} onChange={(e) => setMessage(e.target.value)}
                disabled={status === 'sending'}
                className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none" style={{ background: 'rgba(255,255,255,.04)', border: '1px solid var(--line)', color: '#fff' }} />
            </div>
            {/* Honeypot ضد السبام — يبقى فارغاً دائماً */}
            <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
            <button
              type="submit"
              disabled={status === 'sending'}
              className="btn-primary-glow w-full disabled:opacity-60 disabled:cursor-wait"
            >
              {status === 'sending' ? 'Sending…' : status === 'success' ? '✓ Message Sent!' : 'Submit →'}
            </button>
            {status === 'success' && (
              <p className="mono text-xs text-center" style={{ color: '#34d399' }}>
                Thanks! Your message reached my inbox — I&apos;ll reply within 24 hours.
              </p>
            )}
            {status === 'error' && (
              <div className="rounded-xl p-4 text-center space-y-3" style={{ background: 'rgba(255,90,90,.07)', border: '1px solid rgba(255,90,90,.3)' }}>
                <p className="mono text-xs" style={{ color: '#ff9a9a' }}>{errorMsg}</p>
                <a
                  href={`mailto:${profile.email}?subject=${encodeURIComponent('Portfolio inquiry')}&body=${encodeURIComponent(`Hi Farah,\n\n${message}\n\n— ${name} (${email})`)}`}
                  className="btn-ghost btn w-full text-sm"
                >
                  Open email app instead →
                </a>
              </div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
