import '../styles/societies.css';
// Import all the images from assets
import img1 from '../assets/1.png';
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';
import img4 from '../assets/4.png';
import img5 from '../assets/5.png';
import img6 from '../assets/6.png';
import img7 from '../assets/7.png';

const Societies = () => {
  const societies = [
    { id: 1, image: img1, title: 'Computer Society' },
    { id: 2, image: img2, title: 'Robotics & Automation Society' },
    { id: 3, image: img3, title: 'Power & Energy Society' },
    { id: 4, image: img4, title: 'Signal Processing Society' },
    { id: 5, image: img5, title: 'Aerospace & Electronic Systems Society' },
    { id: 6, image: img6, title: 'Women in Engineering' },
    { id: 7, image: img7, title: 'Communication Society' }
  ];
  
  return (
    <section id="societies" className="section societies-section">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">Our Societies</h2>
        
        <div className="marquee-container" data-aos="fade-left">
          <div className="marquee-content">
            <div className="marquee-item">
              {societies.map((society) => (
                <div key={society.id} className="society-item">
                  <img src={society.image} alt={society.title} />
                  <h3>{society.title}</h3>
                </div>
              ))}
            </div>
            
            <div className="marquee-item">
              {societies.map((society) => (
                <div key={`duplicate-${society.id}`} className="society-item">
                  <img src={society.image} alt={society.title} />
                  <h3>{society.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Societies; 