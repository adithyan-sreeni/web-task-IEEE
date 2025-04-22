import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/events.css';
import revathonImg from '../assets/revathon.png';
import naviraImg from '../assets/navira.jpg';
import arcaneImg from '../assets/arcane.png';

const Events = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      once: true
    });
  }, []);


  //TODO: Add the latest events here arcane..etc
  const events = [
    {
      id: 1,
      title: 'Revathon',
      date: '1/2/2025',
      description: `The clock is ticking and the stage is set – REV-A-THON is on the horizon. We're beyond thrilled to announce QUADRATECH INNOVATIONS AND TECHNOLOGIES PRIVATE LIMITED as our Official Technology Partner, proudly supporting REV-A-THON, India's First Ever Reverse Engineering Hackathon hosted by IEEE RAS SBC CEC. Visit us: revathon.cecieee.org Ignite your imagination, push innovation's limits, and join a revolution like no other.`,
      image: revathonImg,
      link: 'https://revathon.cecieee.org'
    },
    {
      id: 2,
      title: 'Navira',
      date: '12/1/2025',
      description: `Navira: Journey Beyond Limits — an all-Kerala event by IEEE WIE AG CEC and IEEE IAS SBC CEC. A perfect fusion of knowledge, creativity, and innovation. The successor to Daksha and Emergence, Navira promises an inexplicable experience blending vision and elegance.`,
      image: naviraImg,
      link: '#'
    },
    {
      id: 3,
      title: 'Arcane',
      date: '2/11/2024',
      description: `Chase new dreams and explore uncharted paths as something extraordinary is coming your way! ARCANE — Kerala's First-Ever Tri-Venue Hackathon, hosted by IEEE SB CEC in partnership with IEEE CS SBC CEC. This software showdown might just be a spark in your wild innovation. Buckle up — ARCANE is going to be epic!`,
      image: arcaneImg,
      link: '#'
    },
  ];
  

  return (
    <section id="events" className="section events-section">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">Latest Events</h2>
        
        <div className="events-container">
          {events.map((event, index) => (
            <div 
              key={event.id} 
              className="event-card" 
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="event-image-container">
                <div className="event-image">
                  <img src={event.image} alt={event.title} />
                </div>
              </div>
              <div className="event-content">
                <h3>{event.title}</h3>
                <p className="event-date">{event.date}</p>
                <p className="event-description">{event.description}</p>
                <a href={event.link} className="btn event-btn" target="_blank" rel="noopener noreferrer">
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events; 