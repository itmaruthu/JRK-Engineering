import { config } from '../config';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title" style={{ textAlign: 'left' }}>
              {config.about.title}
            </h2>
            <p className="about-description">{config.about.description}</p>
            <p className="about-mission">{config.about.mission}</p>
            
            <div className="values-section">
              <h3 className="values-title">Our Core Values</h3>
              <div className="values-grid">
                {config.values.map(value => (
                  <div key={value.id} className="value-card">
                    <h4>{value.title}</h4>
                    <p>{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="about-image">
            <img 
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80" 
              alt="JRK Engineering Team"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
