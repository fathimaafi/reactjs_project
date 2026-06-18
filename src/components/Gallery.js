import React from 'react';

const items = [
  { bg: '#c9a87c', label: 'Classic Suit' },
  { bg: '#8b6f47', label: 'Evening Gown' },
  { bg: '#d4b896', label: 'Casual Shirt' },
  { bg: '#a0856a', label: 'Wedding Dress' },
  { bg: '#bfa07a', label: 'Formal Blazer' },
  { bg: '#7a5c3e', label: 'Summer Dress' },
];

const styles = {
  section: { padding: '90px 60px', background: '#faf7f3' },
  header: { textAlign: 'center', marginBottom: '50px' },
  tag: { fontSize: '0.8rem', letterSpacing: '3px', color: '#8b6f47', textTransform: 'uppercase' },
  h2: { fontSize: '2.4rem', marginTop: '10px' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', maxWidth: '1000px', margin: '0 auto' },
  card: (bg) => ({ background: bg, height: '220px', borderRadius: '4px', display: 'flex', alignItems: 'flex-end', padding: '16px', cursor: 'pointer' }),
  label: { color: '#fff', fontWeight: 600, fontSize: '0.95rem', textShadow: '0 1px 4px rgba(0,0,0,0.3)' },
};

export default function Gallery() {
  return (
    <section id="gallery" style={styles.section}>
      <div style={styles.header}>
        <p style={styles.tag}>Our Work</p>
        <h2 style={styles.h2}>Gallery</h2>
      </div>
      <div style={styles.grid}>
        {items.map(item => (
          <div key={item.label} style={styles.card(item.bg)}>
            <span style={styles.label}>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
