import React from 'react';

export default function HomePage() {
  return (
    <main style={{
      fontFamily: 'Arial, sans-serif',
      padding: '4rem 2rem',
      background: 'linear-gradient(to bottom, #f8fafc, #ffffff)',
      minHeight: '100vh',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '3rem', fontWeight: '600', marginBottom: '1rem' }}>
        Flat-Rate Apartment Cleaning
      </h1>

      <p style={{ fontSize: '1.25rem', marginBottom: '2rem', color: '#4b5563' }}>
        Trusted cleaners. Flat-rate pricing. First clean only $69.
      </p>

      <a href="https://calendly.com/akibislam1201/30min" target="_blank" rel="noopener noreferrer">
        <button style={{
          padding: '14px 28px',
          fontSize: '1rem',
          backgroundColor: '#2563eb',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease'
        }}
        onMouseOver={e => e.target.style.backgroundColor = '#1e40af'}
        onMouseOut={e => e.target.style.backgroundColor = '#2563eb'}>
          Book Now
        </button>
      </a>
    </main>
  );
}
