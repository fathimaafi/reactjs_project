import React, { useState, useEffect } from 'react';

const styles = {
  nav: (scrolled) => ({
    position: 'fixed', top: 0, width: '100%', zIndex: 1000,
    padding: '18px 60px',
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    background: scrolled ? '#fff' : 'transparent',
    boxShadow: scrolled ? '0 2px 12px rgba(0,0,0,0.08)' : 'none',
    transition: 'all 0.3s ease',
  }),
  logo: { fontSize: '1.5rem', fontFamily: "'Playfair Display', serif", color: '#8b6f47', fontWeight: 700 },
  links: { display: 'flex', gap: '32px', listStyle: 'none' },
  link: { textDecoration: 'none', color: '#2c2c2c', fontWeight: 600, fontSize: '0.9rem', letterSpacing: '0.5px', cursor: 'pointer' },
};

const navItems = ['Services', 'Gallery', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });

  return (
    <nav style={styles.nav(scrolled)}>
      <div style={styles.logo}>✂ Elegant Stitch</div>
      <ul style={styles.links}>
        {navItems.map(item => (
          <li key={item}>
            <span style={styles.link} onClick={() => scrollTo(item)}>{item}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
}
