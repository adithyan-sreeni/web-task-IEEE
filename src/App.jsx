import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import Societies from './components/Societies';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Preloader from './components/Preloader';
import './styles/global.css';
// import AnimatedTestimonialsDemo from './components/ui/animated-testimonials-demo';
// import InfiniteMovingCardsDemo from './components/ui/infinite-moving-cards-demo';
function App() {
  useEffect(() => {
    // Initialize AOS globally
    AOS.init({
      duration: 800,
      offset: 100,
      once: true,
      easing: 'ease-out'
    });
    

  }, []);

  return (
    <div className="app">
      <Preloader />
      <Navbar />
      <Hero />
      <About />
      <Events />
      <Societies />
      <Testimonials />
      {/* <AnimatedTestimonialsDemo />
      <InfiniteMovingCardsDemo /> */}
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
