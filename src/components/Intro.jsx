import { config } from '../config';
import './Intro.css';

const Intro = () => {
  return (
    <section className="intro section">
      <div className="container">
        <div className="intro-content">
          <h2 className="intro-title">
            Engineering Excellence,<br />
            <span className="highlight">Delivered with Precision</span>
          </h2>
          <p className="intro-text">
            At {config.company.name}, we combine decades of engineering expertise with 
            cutting-edge technology to deliver construction and engineering solutions 
            that exceed expectations. Every project is a testament to our commitment 
            to quality, safety, and innovation.
          </p>
          <div className="intro-stats">
            {config.about.stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
