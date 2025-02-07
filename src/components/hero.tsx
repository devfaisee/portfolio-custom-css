// components/Hero.tsx
import React from 'react';
import '../styles/hero.css';
import Link from 'next/link';
const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">Welcome to My Portfolio</h1>
        <p className="hero-subtitle">Showcasing My Work and Projects</p>
        <button className="hero-button"><Link href="../projects">Explore More</Link></button>
      </div>
    </section>
  );
};

export default Hero;
