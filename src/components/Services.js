import React from 'react';

const services = [
  { icon: '👔', title: 'Custom Suits', desc: 'Handcrafted suits tailored to your exact measurements and style.' },
  { icon: '👗', title: 'Dress Making', desc: 'Elegant dresses stitched with precision for every occasion.' },
  { icon: '✂️', title: 'Alterations', desc: 'Professional alterations to give your existing clothes a perfect fit.' },
  { icon: '🎽', title: 'Casual Wear', desc: 'Comfortable everyday wear made just the way you like it.' },
];

const styles = {
  section: { padding: '90px 60px', background: '#fff' },
  header: { textAlign: 'center', marginBottom: '60px' },
  tag: { fontSize: '0.8rem', letterSpacing: '3px', color: '#8b6f47', textTransform: 'uppercase' },
  h2: { fontSize: '2.4rem', marginTop: '10px', color: '#2c2c2c' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '32px', maxWidth: '1000px', margin: '0 auto' },
  card: { padding: '36px 28px', border: '1px solid #ede8e0', borderRadius: '4px', textAlign: 'center', transition: 'box-shadow 0.3s' },
  icon: { fontSize: '2.5rem', marginBottom: '16px' },
  title: { fontSize: '1.2rem', marginBottom: '12px', color: '#2c2c2c' },
  desc: { fontSize: '0.95rem', color: '#6b6b6b', lineHeight: 1.7 },
};

export default function Services() {
  return (
    <section id="services" style={styles.section}>
      <div style={styles.header}>
        <p style={styles.tag}>What We Offer</p>
        <h2 style={styles.h2}>Our Services</h2>
      </div>
      <div style={styles.grid}>
        {services.map(s => (
          <div key={s.title} style={styles.card}>
            <div style={styles.icon}>{s.icon}</div>
            <h3 style={styles.title}>{s.title}</h3>
            <p style={styles.desc}>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
