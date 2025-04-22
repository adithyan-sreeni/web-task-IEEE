import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section about-footer">
            <h3>IEEE SB CEC</h3>
            <p>College of Engineering Chengannur<br />Chengannur, Kerala, India</p>
          </div>
          
          <div className="footer-section contact">
            <h3>Contact Us</h3>
            <p><i className="icon">✉</i> ieee@ceconline.edu</p>
            <p><i className="icon">☎</i> +91 98765 43210</p>
          </div>
          
          <div className="footer-section social">
            <h3>Follow Us</h3>
            <div className="social-links">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="icon">in</i></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="icon">ig</i></a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="icon">fb</i></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="icon">tw</i></a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} IEEE Student Branch, College of Engineering Chengannur. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 