import { useState } from 'react';
import { config } from '../config';
import './Testimonials.css';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % config.testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => 
      prev === 0 ? config.testimonials.length - 1 : prev - 1
    );
  };

  const renderStars = (rating) => {
    return '⭐'.repeat(rating);
  };

  return (
    <section id="testimonials" className="testimonials section">
      <div className="container">
        <h2 className="section-title">Client Testimonials</h2>
        <p className="section-subtitle">
          What our clients say about working with us
        </p>

        <div className="testimonial-container">
          <button 
            className="testimonial-nav prev" 
            onClick={prevTestimonial}
            aria-label="Previous testimonial"
          >
            ‹
          </button>

          <div className="testimonial-card">
            <div className="testimonial-rating">
              {renderStars(config.testimonials[activeIndex].rating)}
            </div>
            <p className="testimonial-content">
              "{config.testimonials[activeIndex].content}"
            </p>
            <div className="testimonial-author">
              <h4>{config.testimonials[activeIndex].name}</h4>
              <p>{config.testimonials[activeIndex].position}</p>
            </div>
          </div>

          <button 
            className="testimonial-nav next" 
            onClick={nextTestimonial}
            aria-label="Next testimonial"
          >
            ›
          </button>
        </div>

        <div className="testimonial-dots">
          {config.testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === activeIndex ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
