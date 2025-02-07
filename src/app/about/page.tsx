// components/AboutUs.tsx
import React from 'react';
import '../../styles/about.css';

const AboutUs: React.FC = () => {
  return (
    <section className="about-us">
      <h2>About Us</h2>
      <p>Welcome to my portfolio! I am a passionate developer with a keen eye for design and functionality. My work spans various projects that showcase my skills and dedication to creating exceptional digital experiences.</p>
      <img src="/profile.png" alt="Profile" />
    </section>
  );
};

export default AboutUs;
