import React from 'react';

const styles = {
  footer: { background: '#2c2c2c', color: '#aaa', padding: '40px 60px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' },
  logo: { fontFamily: "'Playfair Display', serif", color: '#c9a87c', fontSize: '1.3rem' },
  info: { fontSize: '0.85rem', lineHeight: 1.8 },
  copy: { fontSize: '0.8rem' },
};

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.logo}>✂ Elegant Stitch</div>
      <div style={styles.info}>
        📍 123 Fashion Street, Design City<br />
        📞 +1 (555) 123-4567<br />
        📧 hello@elegantstitch.com
      </div>
      <div style={styles.copy}>© {new Date().getFullYear()} Elegant Stitch. All rights reserved.</div>
    </footer>
  );
}
