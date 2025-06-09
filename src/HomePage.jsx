import React, { useEffect, useState } from 'react';

const loopedPhrases = [
  "Trusted cleaners.",
  "Flat-rate pricing.",
  "First clean only $69."
];

export default function HomePage() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const fadeOut = setTimeout(() => setFade(false), 1500);
    const switchText = setTimeout(() => {
      setIndex(prev => (prev + 1) % loopedPhrases.length);
      setFade(true);
    }, 2000);

    return () => {
      clearTimeout(fadeOut);
      clearTimeout(switchText);
    };
  }, [index]);

  return (
  <main style={{ fontFamily: 'Arial, sans-serif', padding: '2rem', background: '#ffffff' }}>
      {/* Hero Section */}
<section style={{ textAlign: 'center', padding: '3rem 1rem', background: 'linear-gradient(135deg, #f0f9ff, #e0f2fe)', borderRadius: '16px', marginBottom: '3rem' }}>
  <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#1e293b' }}>
    Flat-Rate Apartment Cleaning in Brooklyn
  </h1>
  <p style={{
    fontSize: '1.2rem',
    marginBottom: '1.5rem',
    height: '1.5em',
    opacity: fade ? 1 : 0,
    transition: 'opacity 0.5s ease-in-out',
    color: '#111827'
  }}>
    {loopedPhrases[index]}
  </p>
  <a href="#book" style={{ textDecoration: 'none' }}>
    <button style={{ padding: '12px 24px', fontSize: '1rem', backgroundColor: '#38bdf8', color: '#1e293b', borderRadius: '8px', border: 'none', cursor: 'pointer' }}>
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
      price: '$99',
      icon: '🧼',
      features: ['Kitchen wipe-down', 'Bathroom scrub', 'Dusting', 'Floors vacuumed/mopped', 'Trash removal']
    }, {
      title: 'Premium Clean',
      price: '$139',
      icon: '✨',
      features: ['Everything in Standard', 'Inside microwave & fridge', 'Baseboards', 'High-touch points', 'Extra time']
    }, {
      title: 'Move-In/Out',
      price: '$179',
      icon: '📦',
      features: ['Full deep clean', 'Inside appliances', 'Cabinets & drawers', 'Walls spot-cleaned', 'Ideal for new tenants']
    }].map(service => (
      <div key={service.title} style={{ background: '#fff', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', padding: '1.5rem', width: '300px' }}>
        <h3 style={{ fontSize: '1.3rem', marginBottom: '0.75rem' }}>
          <span style={{ fontSize: '1.5rem', marginRight: '0.5rem' }}>{service.icon}</span>
          {service.title} – {service.price}
        </h3>
        <ul style={{ paddingLeft: '1.2rem' }}>
          {service.features.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      </div>
    ))}
  </div>
</section>


      {/* Gallery Section */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ textAlign: 'center', fontSize: '1.8rem', marginBottom: '2rem' }}>Before & After</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
          {[1, 2, 3, 4].map(i => (
            <div key={i} style={{ backgroundColor: '#e0e0e0', height: '180px', borderRadius: '8px' }}>
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
          <button style={{ padding: '12px 24px', fontSize: '1rem', backgroundColor: '#38bdf8', color: '#1e293b', color: 'white', borderRadius: '8px', border: 'none', cursor: 'pointer' }}>
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
