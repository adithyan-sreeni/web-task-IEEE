import '../styles/about.css';

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">About IEEE SB CEC</h2>
        
        <div className="about-description" data-aos="fade-up" data-aos-delay="100">
          <p>
            The IEEE Student Branch at College of Engineering Chengannur (CEC) is a vibrant community 
            of passionate technology enthusiasts. Our branch has been at the 
            forefront of fostering innovation, technical knowledge, and professional development among 
            engineering students. We organize workshops, technical talks, competitions, and social activities 
            that help students develop both technical and soft skills needed for their future careers.
          </p>
        </div>
        
        <div className="about-cards">
          <div className="about-card" data-aos="fade-up" data-aos-delay="200">
            <h3>Vision</h3>
            <p>
            IEEE’s core purpose is to foster technological innovation and excellence for the benefit of humanity.
            </p>
          </div>
          
          <div className="about-card" data-aos="fade-up" data-aos-delay="300">
            <h3>Mission</h3>
            <p>
            IEEE will be essential to the global technical community and to technical professionals everywhere, and be universally recognized for the contributions of technology and of technical professionals in improving global conditions
            </p>
          </div>
          
          <div className="about-card" data-aos="fade-up" data-aos-delay="400">
            <h3>Core Values</h3>
            <ul>
              <li>Innovation and Excellence</li>
              <li>Inclusivity and Diversity</li>
              <li>Knowledge Sharing</li>
              <li>Ethical Practice</li>
              <li>Continuous Learning</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 