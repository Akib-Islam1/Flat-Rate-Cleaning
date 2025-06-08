import React from 'react';

export default function HomePage() {
  return (
    <main style={{ fontFamily: 'Arial', padding: '2rem' }}>
      <h1>Flat-Rate Apartment Cleaning in Brooklyn</h1>
      <p>Book in 60 seconds. No surprises. First clean only <strong>$69</strong>.</p>
      <button style={{ padding: '10px 20px', backgroundColor: '#2563eb', color: 'white', borderRadius: '8px', border: 'none' }}>
        Book Now
      </button>
    </main>
  );
}