import '../styles/testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Ananya Sharma',
      role: 'Computer Science, Final Year',
      quote: 'Being part of the IEEE SB CEC has been transformative. The workshops and networking opportunities have helped me secure an internship at a leading tech company.',
      image: 'ananya.jpg'
    },
    {
      id: 2,
      name: 'Vikram Patel',
      role: 'Electronics Engineering, Third Year',
      quote: 'The hands-on projects and competitions organized by IEEE SB CEC have given me practical experience that classroom learning alone couldn\'t provide.',
      image: 'vikram.jpg'
    },
    {
      id: 3,
      name: 'Priya Nair',
      role: 'Electrical Engineering, Alumni',
      quote: 'Years after graduation, I still credit IEEE SB CEC for developing my leadership and technical skills that have been crucial throughout my professional career.',
      image: 'priya.jpg'
    }
  ];

  return (
    <section id="testimonials" className="section testimonials-section">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">Testimonials</h2>
        
        <div className="testimonials-container">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className="testimonial-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="testimonial-content">
                <div className="quote-icon">"</div>
                <p className="testimonial-quote">{testimonial.quote}</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <div className="avatar-placeholder">{testimonial.name.charAt(0)}</div>
                </div>
                <div className="author-details">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 