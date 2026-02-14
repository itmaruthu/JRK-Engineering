import { config } from '../config';
import './Hero.css';

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const navbarHeight = 80;
      const elementPosition = contactSection.offsetTop - navbarHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="hero-title fade-in-up">
          {config.hero.title}<br />
          {config.hero.subtitle}
        </h1>
        <p className="hero-tagline fade-in-up">{config.hero.tagline}</p>
        <p className="hero-description fade-in-up">{config.hero.description}</p>
        <div className="hero-buttons fade-in-up">
          <button onClick={scrollToContact} className="btn btn-primary">
            Get Started
          </button>
          <button onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })} className="btn btn-secondary">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
