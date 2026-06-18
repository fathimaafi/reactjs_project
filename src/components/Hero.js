import React from 'react';

const styles = {
  hero: {
    height: '100vh',
    background: 'linear-gradient(135deg, #f5f0e8 0%, #ede0cc 50%, #d4b896 100%)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    textAlign: 'center', padding: '0 20px',
  },
  tag: { fontSize: '0.85rem', letterSpacing: '3px', color: '#8b6f47', textTransform: 'uppercase', marginBottom: '16px' },
  h1: { fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: '#2c2c2c', lineHeight: 1.2, marginBottom: '20px' },
  p: { fontSize: '1.1rem', color: '#5a5a5a', maxWidth: '500px', margin: '0 auto 36px', lineHeight: 1.8 },
  btn: {
    padding: '14px 40px', background: '#8b6f47', color: '#fff',
    border: 'none', borderRadius: '2px', fontSize: '0.9rem',
    letterSpacing: '1px', cursor: 'pointer', textTransform: 'uppercase',
  },
};

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section style={styles.hero}>
      <div>
        <p style={styles.tag}>Premium Bespoke Tailoring</p>
        <h1 style={styles.h1}>Crafted to Fit.<br />Made for You.</h1>
        <p style={styles.p}>Experience the art of custom tailoring — where every stitch tells your story.</p>
        <button style={styles.btn} onClick={() => scrollTo('contact')}>Book a Fitting</button>
      </div>
    </section>
  );
}
