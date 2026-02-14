import { config } from '../config';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  return (
    <section className="why-choose section">
      <div className="container">
        <h2 className="section-title">Why Choose Us</h2>
        <p className="section-subtitle">
          We deliver exceptional results through expertise, dedication, and innovation
        </p>
        <div className="why-grid">
          {config.whyChooseUs.map(item => (
            <div key={item.id} className="why-item">
              <div className="why-icon">{item.icon}</div>
              <h3 className="why-title">{item.title}</h3>
              <p className="why-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
