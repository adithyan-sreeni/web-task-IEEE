import { useEffect } from 'react';
import '../styles/hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container hero-container">
        <h1 data-aos="fade-down" data-aos-delay="100">IEEE Student Branch</h1>
        <h2 data-aos="fade-down" data-aos-delay="300">College of Engineering Chengannur</h2>
        <p className="hero-tagline" data-aos="fade-up" data-aos-delay="500">Empowering Students Through Technology and Innovation</p>
        <a href="https://www.ieee.org/membership/join/index.html" className="btn cta-btn" data-aos="fade-up" data-aos-delay="700">Join Us</a>
      </div>
    </section>
  );
};

export default Hero; 