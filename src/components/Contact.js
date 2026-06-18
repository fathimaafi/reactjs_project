import React, { useState } from 'react';

const styles = {
  section: { padding: '90px 60px', background: '#fff' },
  inner: { maxWidth: '560px', margin: '0 auto', textAlign: 'center' },
  tag: { fontSize: '0.8rem', letterSpacing: '3px', color: '#8b6f47', textTransform: 'uppercase' },
  h2: { fontSize: '2.4rem', margin: '10px 0 12px' },
  sub: { color: '#6b6b6b', marginBottom: '40px', lineHeight: 1.7 },
  form: { display: 'flex', flexDirection: 'column', gap: '16px', textAlign: 'left' },
  input: { padding: '14px 16px', border: '1px solid #ddd', borderRadius: '2px', fontSize: '0.95rem', outline: 'none', fontFamily: 'inherit' },
  btn: { padding: '15px', background: '#8b6f47', color: '#fff', border: 'none', borderRadius: '2px', fontSize: '0.95rem', cursor: 'pointer', letterSpacing: '1px', textTransform: 'uppercase' },
  success: { padding: '16px', background: '#f0ede8', borderRadius: '4px', color: '#5a4232', fontWeight: 600 },
};

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', service: '', message: '' });
  };

  return (
    <section id="contact" style={styles.section}>
      <div style={styles.inner}>
        <p style={styles.tag}>Get In Touch</p>
        <h2 style={styles.h2}>Book a Fitting</h2>
        <p style={styles.sub}>Fill out the form and we'll get back to you within 24 hours to confirm your appointment.</p>
        {submitted ? (
          <div style={styles.success}>✅ Thank you! We'll be in touch soon.</div>
        ) : (
          <form style={styles.form} onSubmit={handleSubmit}>
            <input style={styles.input} name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
            <input style={styles.input} name="email" type="email" placeholder="Email Address" value={form.email} onChange={handleChange} required />
            <select style={styles.input} name="service" value={form.service} onChange={handleChange} required>
              <option value="">Select a Service</option>
              <option>Custom Suits</option>
              <option>Dress Making</option>
              <option>Alterations</option>
              <option>Casual Wear</option>
            </select>
            <textarea style={{ ...styles.input, resize: 'vertical', minHeight: '100px' }} name="message" placeholder="Additional notes..." value={form.message} onChange={handleChange} />
            <button style={styles.btn} type="submit">Send Request</button>
          </form>
        )}
      </div>
    </section>
  );
}
