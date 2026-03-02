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
            {config.about.details && (
              <ul className="about-details">
                {config.about.details.map((item, idx) => {
                  const isFounder = item.startsWith('Founder:');
                  const isGST = item.includes('GSTIN') || item.toLowerCase().includes('gst');
                  if (isFounder || isGST) {
                    const parts = item.split(':');
                    const label = parts[0] + ':';
                    const value = parts.slice(1).join(':').trim();
                    return (
                      <li key={idx}>
                        <span className="detail-label">{label} </span>
                        <strong className="highlight">{value}</strong>
                      </li>
                    );
                  }
                  return <li key={idx}>{item}</li>;
                })}
              </ul>
            )}

            <div className="mission-vision">
              <div className="about-mission">
                <h4>Mission</h4>
                <p>{config.about.mission}</p>
              </div>

              <div className="about-vision">
                <h4>Vision</h4>
                <p>{config.about.vision}</p>
              </div>
            </div>
            
            
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
