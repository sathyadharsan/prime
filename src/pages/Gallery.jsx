import React from 'react';
import { Image as ImageIcon } from 'lucide-react';

const Gallery = () => {
  // Using placehold.co for image placeholders
  const galleryItems = [
    { id: 1, title: 'Transmission Line Construction', category: 'Electrical', src: '/images/site1.jpg' },
    { id: 2, title: 'Substation works', category: 'Electrical', src: '/images/site2.jpg' },
    { id: 3, title: 'Road Grading', category: 'Infrastructure', src: '/images/site3.jpg' },
    { id: 4, title: 'Earthworks', category: 'Civil', src: '/images/site4.jpg' },
    { id: 5, title: 'Heavy Equipment at Site', category: 'Resources', src: '/images/site5.jpg' },
    { id: 6, title: 'Team in Action', category: 'Team', src: '/images/site6.jpg' }
  ];

  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Project Gallery</h1>
          <p>A visual showcase of our excellence in construction and engineering</p>
        </div>
      </div>

      <section className="section-padding">
        <div className="container">
          <h2 className="section-title">Visuals from the Field</h2>
          <p className="section-subtitle">Browse through some moments capturing our diverse operational accomplishments across Oman and India.</p>
          
          <div className="grid-3" style={{ marginTop: '50px' }}>
            {galleryItems.map((item) => (
              <div key={item.id} style={{
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                position: 'relative',
                background: 'var(--light-gray)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.querySelector('.overlay').style.opacity = '1';
                e.currentTarget.querySelector('img').style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.querySelector('.overlay').style.opacity = '0';
                e.currentTarget.querySelector('img').style.transform = 'scale(1)';
              }}>
                <img 
                  src={item.src} 
                  alt={item.title} 
                  style={{ 
                    width: '100%', 
                    height: '250px', 
                    objectFit: 'cover', 
                    display: 'block',
                    transition: 'transform 0.4s ease'
                  }} 
                />
                
                <div className="overlay" style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'rgba(10,61,115,0.85)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                  padding: '20px',
                  textAlign: 'center'
                }}>
                  <ImageIcon size={32} color="var(--orange)" style={{ marginBottom: '15px' }} />
                  <h4 style={{ margin: '0 0 10px 0', fontSize: '1.2rem', color: 'white' }}>{item.title}</h4>
                  <span style={{ 
                    background: 'var(--orange)', 
                    padding: '4px 12px', 
                    borderRadius: '20px', 
                    fontSize: '0.8rem',
                    fontWeight: 'bold'
                  }}>{item.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
