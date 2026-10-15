import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import SocialLinks from './components/SocialLinks'

function App() {
  return (
    <div className="min-h-screen antialiased" style={{ color: '#eef1ff' }}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Skills />
        <Portfolio />
        <Contact />
      </main>
      <footer className="py-10" style={{ borderTop: '1px solid rgba(196,167,231,.14)' }}>
        <div className="mx-auto px-5 sm:px-8 text-center" style={{ maxWidth: 1100 }}>
          <p className="font-display font-bold text-lg mb-1">{'Farah El-sayed'}</p>
          <p className="mono text-xs mb-4" style={{ color: 'var(--muted)' }}>Front-End Developer · React & Tailwind Specialist</p>
          <SocialLinks variant="footer" />
          <p className="mono text-xs mt-5" style={{ color: '#5b6595' }}>© 2026 Farah El-sayed. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App
