import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Zap, Wrench, Clock, ArrowRight } from 'lucide-react';
import './Home.css';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <div className="animate-on-scroll">
            <h1>Excellence in Civil & Electrical Engineering</h1>
            <p>Providing high-quality services, completing projects safely, on time, and maintaining professional standards.</p>
            <div className="hero-btns">
              <Link to="/services" className="btn-primary">Our Services</Link>
              <Link to="/contact" className="btn-secondary">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="intro section-padding">
        <div className="container">
          <div className="intro-grid">
            <div className="intro-text">
              <h2>Prime Power Solutions LLC</h2>
              <h3 className="subtitle-orange">Building The Future, Restoring The Past</h3>
              <p>
                Prime Power Solutions LLC is a registered company established under the Ministry of Commerce and Industry to undertake techno-commercial activities. We specialize in civil and electrical engineering works across Oman.
              </p>
              <p>
                Associated with Elias Al Abri Trading LLC (SME/RIYADAH), we are fully equipped with the necessary machinery and skilled workforce to handle earthwork construction, road construction, overhead transmission line works, electrification, and more.
              </p>
              <Link to="/about" className="link-arrow">
                Learn more about us <ArrowRight size={16} />
              </Link>
            </div>
            
            <div className="intro-features">
              <div className="feature-card">
                <div className="feature-icon"><Shield size={32} /></div>
                <h4>Safety First</h4>
                <p>Ensuring a safe working environment with a zero incident policy.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon"><Clock size={32} /></div>
                <h4>Timely Delivery</h4>
                <p>Committed to completing projects on Schedule.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon"><Wrench size={32} /></div>
                <h4>Skilled Team</h4>
                <p>Experienced professionals and dedicated workforce.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon"><Zap size={32} /></div>
                <h4>High Quality</h4>
                <p>Maintaining the highest standards in every project.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Highlight */}
      <section className="services-highlight section-padding bg-light">
        <div className="container">
          <h2 className="section-title">Our Expertise</h2>
          <p className="section-subtitle">We offer comprehensive solutions in civil construction, electrical infrastructure, and maintenance across various sectors.</p>
          
          <div className="grid-3">
            <div className="service-card">
              <div className="service-card-img" style={{background: 'linear-gradient(135deg, #0A3D73 0%, #1a5c9a 100%)'}}></div>
              <div className="service-card-content">
                <h3>Civil Construction</h3>
                <p>Residential & non-residential buildings, Ministry buildings, Warehouses, and Commercial structures.</p>
              </div>
            </div>
            
            <div className="service-card">
              <div className="service-card-img" style={{background: 'linear-gradient(135deg, #F37021 0%, #f79658 100%)'}}></div>
              <div className="service-card-content">
                <h3>Electrical Works</h3>
                <p>400kV, 220kV, 132kV transmission lines, Grid station civil structures, and Transformer works.</p>
              </div>
            </div>
            
            <div className="service-card">
              <div className="service-card-img" style={{background: 'linear-gradient(135deg, #4b5563 0%, #6b7280 100%)'}}></div>
              <div className="service-card-content">
                <h3>Infrastructure</h3>
                <p>Earth moving, Graded & Asphalt roads, Access roads, Fencing, and Retainment walls.</p>
              </div>
            </div>
          </div>
          
          <div className="text-center" style={{ marginTop: '40px', textAlign: 'center' }}>
            <Link to="/services" className="btn-primary">View All Services</Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="cta-section section-padding">
        <div className="container text-center">
          <h2>Ready to start your next project with us?</h2>
          <p>Contact our experienced team to discuss how we can help achieve your goals.</p>
          <Link to="/contact" className="btn-primary">Get in Touch</Link>
        </div>
      </section>
    </>
  );
};

export default Home;
