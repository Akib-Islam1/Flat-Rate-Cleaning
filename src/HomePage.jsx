import React, { useEffect, useState } from 'react';

const loopedPhrases = [
  "Trusted cleaners.",
  "Flat-rate pricing.",
  "First clean only $69."
];

export default function HomePage() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true); // This controls the fade animation

  useEffect(() => {
    const fadeOut = setTimeout(() => setFade(false), 1500); // Start fading out
    const switchText = setTimeout(() => {
      setIndex(prev => (prev + 1) % loopedPhrases.length);
      setFade(true); // Fade back in with new phrase
    }, 2000);

    return () => {
      clearTimeout(fadeOut);
      clearTimeout(switchText);
    };
  }, [index]);

  return (
    <main style={{ fontFamily: 'Arial, sans-serif', padding: '2rem', background: '#f9f9f9' }}>
      {/* Hero Section */}
      <section style={{ textAlign: 'center', padding: '3rem 1rem', background: 'linear-gradient(135deg, #e0f7fa, #fce4ec)', borderRadius: '16px', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
          Flat-Rate Apartment Cleaning in Brooklyn
        </h1>
        <p style={{
  fontSize: '1.2rem',
  marginBottom: '1.5rem',
  height: '1.5em',
  opacity: fade ? 1 : 0,
  transition: 'opacity 0.5s ease-in-out',
  color: '#333'
}}>
  {loopedPhrases[index]}
</p>
        <a href="#book" style={{ textDecoration: 'none' }}>
          <button style={{ padding: '12px 24px', fontSize: '1rem', backgroundColor: '#2563eb', color: 'white', borderRadius: '8px', border: 'none', cursor: 'pointer' }}>
            Book Now
          </button>
        </a>
      </section>

      {/* Services Section */}
<section style={{ marginBottom: '3rem' }}>
  <h2 style={{ textAlign: 'center', fontSize: '1.8rem', marginBottom: '2rem' }}>Our Services</h2>
  <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
    {[{
      title: 'Flat-Rate Clean',
      price: '$150',
      features: [
        'Kitchen & bathroom cleaning',
        'Floors vacuumed/mopped',
        'Surfaces wiped & dusted',
        'Trash removed',
        'Ideal for studio or 1-bedroom apartments'
      ]
    }, {
      title: 'Move-In/Out Deep Clean',
      price: '$225',
      features: [
        'Everything in Flat-Rate Clean',
        'Inside oven, fridge & cabinets',
        'Walls spot-cleaned',
        'Baseboards & door frames wiped',
        'Perfect for empty or transitioning apartments'
      ]
    }].map(service => (
      <div style={{ background: '#fff', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', padding: '1.5rem', width: '300px' }}>
        <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{service.title} – {service.price}</h3>
        <ul style={{ paddingLeft: '1.2rem' }}>
          {service.features.map(item => <li>{item}</li>)}
        </ul>
      </div>
    ))}
  </div>
</section>


{/* Why Choose Us */}
<section style={{ marginBottom: '3rem' }}>
  <h2 style={{ textAlign: 'center', fontSize: '1.8rem', marginBottom: '2rem' }}>Why Choose Us?</h2>
  <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '1.5rem',
    textAlign: 'center'
  }}>
    {[
      { emoji: '✅', title: 'Flat-Rate Pricing', desc: 'No surprise fees. One price, upfront.' },
      { emoji: '🧹', title: 'Vetted Cleaners', desc: 'Professionally screened and trained.' },
      { emoji: '📍', title: 'Local Service', desc: 'Serving Brooklyn and surrounding boroughs.' },
      { emoji: '⭐', title: 'Satisfaction Guaranteed', desc: 'We’re not happy unless you are.' }
    ].map((item, i) => (
      <div key={i} style={{ background: '#fff', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
        <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{item.emoji}</div>
        <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{item.title}</h3>
        <p style={{ fontSize: '0.95rem', color: '#555' }}>{item.desc}</p>
      </div>
    ))}
  </div>
</section>

      {/* Gallery Section */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ textAlign: 'center', fontSize: '1.8rem', marginBottom: '2rem' }}>Before & After</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
          {[1, 2, 3, 4].map(i => (
            <div style={{ backgroundColor: '#e0e0e0', height: '180px', borderRadius: '8px' }}>
              <p style={{ textAlign: 'center', lineHeight: '180px', color: '#666' }}>Photo {i}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Booking CTA */}
      <section id="book" style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Book Your Cleaning</h2>
        <p style={{ fontSize: '1rem', marginBottom: '1rem' }}>Choose a package, pick a time, and we’ll handle the rest.</p>
        <a href="https://calendly.com/akibislam1201/30min" target="_blank" rel="noopener noreferrer">
          <button style={{ padding: '12px 24px', fontSize: '1rem', backgroundColor: '#2563eb', color: 'white', borderRadius: '8px', border: 'none', cursor: 'pointer' }}>
            Book on Calendly
          </button>
        </a>
      </section>

      <footer style={{ textAlign: 'center', fontSize: '0.8rem', color: '#999' }}>
        © {new Date().getFullYear()} Akib's Cleaning. All rights reserved.
      </footer>
    </main>
  );
}
