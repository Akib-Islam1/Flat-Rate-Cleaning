import React, { useEffect, useState } from 'react';

const loopedPhrases = [
  "Trusted cleaners.",
  "Flat-rate pricing.",
  "First clean only $100."
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
          Flat-Rate Cleaning
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
      title: 'Standard Clean',
      price: '$150',
      features: [
        'Kitchen & bathroom cleaning',
        'Floors vacuumed/mopped',
        'Surfaces wiped & dusted',
        'Trash removed',
      ]
    }, {
      title: 'Premium Clean',
      price: '$200',
      features: [
        'Everything in Flat-Rate Clean',
        'Inside oven, fridge & cabinets',
        'Walls spot-cleaned',
        'Baseboards & door frames wiped',
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

      {/* Gallery Section */}
<section style={{ marginBottom: '3rem' }}>
  <h2 style={{ textAlign: 'center', fontSize: '1.8rem', marginBottom: '2rem' }}>Before & After</h2>
  <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '1.5rem'
  }}>
    {[
      { room: 'Kitchen', file: 'Kitchen Before & After.png' },
      { room: 'Bathroom', file: 'Bathroom Before & After.png' }
    ].map(({ room, file }) => (
      <div key={room} style={{ borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
        <div style={{ fontWeight: 'bold', padding: '0.5rem', background: '#f0f0f0' }}>{room}</div>
        <img
          src={`/src/assets/gallery/${file}`}
          alt={`${room} before and after`}
          style={{ width: '100%', display: 'block' }}
        />
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
