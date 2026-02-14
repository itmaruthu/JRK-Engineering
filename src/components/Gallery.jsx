import { useState, useEffect } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    // Load images dynamically from the images folder
    loadImages();
  }, []);

  const loadImages = () => {
    // This function will load images from the public/images folder
    // Images should be named with timestamps or dates for sorting (latest first)
    // Example: project-2024-02-14-1.jpg, project-2024-02-13-1.jpg, etc.
    
    // For demo purposes, using placeholder images
    // In production, replace with actual image paths from your images folder
    const projectImages = [
      {
        id: 1,
        src: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80',
        title: 'Commercial Building Project',
        date: '2024-02-14'
      },
      {
        id: 2,
        src: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80',
        title: 'Industrial Complex',
        date: '2024-02-13'
      },
      {
        id: 3,
        src: 'https://images.unsplash.com/photo-1581094794329-c8112d4e5190?w=800&q=80',
        title: 'Office Renovation',
        date: '2024-02-12'
      },
      {
        id: 4,
        src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
        title: 'Warehouse Construction',
        date: '2024-02-11'
      },
      {
        id: 5,
        src: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800&q=80',
        title: 'Structural Engineering',
        date: '2024-02-10'
      },
      {
        id: 6,
        src: 'https://images.unsplash.com/photo-1590496793907-51d40c34b78c?w=800&q=80',
        title: 'MEP Installation',
        date: '2024-02-09'
      }
    ];

    // Sort by date (latest first)
    const sortedImages = projectImages.sort((a, b) => 
      new Date(b.date) - new Date(a.date)
    );

    setImages(sortedImages);
  };

  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="projects" className="gallery section">
      <div className="container">
        <h2 className="section-title">Our Projects</h2>
        <p className="section-subtitle">
          Explore our portfolio of successfully completed engineering and construction projects
        </p>
        
        <div className="gallery-grid">
          {images.map(image => (
            <div 
              key={image.id} 
              className="gallery-item"
              onClick={() => openLightbox(image)}
            >
              <img src={image.src} alt={image.title} loading="lazy" />
              <div className="gallery-overlay">
                <h4>{image.title}</h4>
                <p>View Project</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div className="lightbox" onClick={closeLightbox}>
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
              <button className="lightbox-close" onClick={closeLightbox}>×</button>
              <img src={selectedImage.src} alt={selectedImage.title} />
              <div className="lightbox-info">
                <h3>{selectedImage.title}</h3>
                <p>Date: {new Date(selectedImage.date).toLocaleDateString()}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
