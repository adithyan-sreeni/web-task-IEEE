import { useState, useEffect } from 'react';
import '../styles/preloader.css';

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Ensure the preloader shows initially
    document.body.style.overflow = 'hidden';
    
    // Shorter loading time to prevent extended white overlay
    const timer = setTimeout(() => {
      const preloader = document.querySelector('.preloader');
      if (preloader) {
        preloader.style.opacity = 0;
      }
      
      setTimeout(() => {
        setLoading(false);
        document.body.style.overflow = 'visible'; // Re-enable scrolling
      }, 500);
    }, 800); // Reduced to 800ms for better user experience

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'visible';
    };
  }, []);

  if (!loading) return null;

  return (
    <div className="preloader">
      <div className="preloader-content">
        <div className="logo fade-in">IEEE SB CEC</div>
        <p className="subtitle fade-in">College of Engineering Chengannur</p>
        <div className="loading-bar">
          <div className="loading-progress"></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader; 