import React from 'react';
import { Target, Flag, TrendingUp, CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>About Us</h1>
          <p>Building a legacy of excellence in civil & electrical engineering</p>
        </div>
      </div>

      <section className="section-padding">
        <div className="container">
          <div className="grid-2 align-center">
            <div>
              <h2 className="section-title" style={{ left: 0, transform: 'none', textAlign: 'left' }}>Company Introduction</h2>
              <p>
                <strong>Prime Power Solutions LLC</strong> is a registered company established under the Ministry of Commerce and Industry to undertake techno-commercial activities. We operate extensively in Oman and specialize in civil and electrical engineering works.
              </p>
              <p>
                Our company is proudly associated with Elias Al Abri Trading LLC (SME/RIYADAH). Together, we bring a wealth of expertise and resources to every project we undertake.
              </p>
              <p>
                We are fully equipped with state-of-the-art machinery and a skilled workforce, enabling us to handle a diverse range of projects including earthwork construction, road construction across all terrains, overhead transmission line works, electrification, cable laying projects, and substation construction.
              </p>
            </div>
            
            <div className="vision-mission-box" style={{ background: 'var(--blue)', color: 'white', padding: '40px', borderRadius: '12px', boxShadow: '0 10px 30px rgba(10,61,115,0.2)' }}>
              <div style={{ marginBottom: '30px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', paddingBottom: '15px', borderBottom: '1px solid rgba(255,255,255,0.2)' }}>
                  <Target size={32} color="var(--orange)" />
                  <h3 style={{ color: 'white', margin: 0, fontSize: '1.5rem' }}>Our Vision</h3>
                </div>
                <p style={{ marginTop: '15px', opacity: 0.9 }}>
                  To build a legacy of excellence in the field of civil and electrical engineering and the energy sector with the best quality and safety standards.
                </p>
              </div>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', paddingBottom: '15px', borderBottom: '1px solid rgba(255,255,255,0.2)' }}>
                  <Flag size={32} color="var(--orange)" />
                  <h3 style={{ color: 'white', margin: 0, fontSize: '1.5rem' }}>Our Mission</h3>
                </div>
                <p style={{ marginTop: '15px', opacity: 0.9 }}>
                  To provide high-quality services, complete projects safely, on time, and maintain professional standards with our experienced teams.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: 'var(--gray)' }}>
        <div className="container">
          <h2 className="section-title">Our Strengths</h2>
          <p className="section-subtitle">What sets us apart in the engineering and construction sector.</p>
          
          <div className="grid-2">
            <div style={{ background: 'white', padding: '30px', borderRadius: '8px', display: 'flex', alignItems: 'flex-start', gap: '20px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}>
              <CheckCircle size={40} color="var(--orange)" style={{ flexShrink: 0 }} />
              <div>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Experienced & Committed Team</h4>
                <p style={{ color: 'var(--text-muted)', margin: 0 }}>Our seasoned professionals bring years of field experience and absolute commitment to every project.</p>
              </div>
            </div>
            
            <div style={{ background: 'white', padding: '30px', borderRadius: '8px', display: 'flex', alignItems: 'flex-start', gap: '20px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}>
              <CheckCircle size={40} color="var(--orange)" style={{ flexShrink: 0 }} />
              <div>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Focus on Safety & Quality</h4>
                <p style={{ color: 'var(--text-muted)', margin: 0 }}>We adhere strictly to health and safety regulations, ensuring zero incidents and uncompromised quality.</p>
              </div>
            </div>

            <div style={{ background: 'white', padding: '30px', borderRadius: '8px', display: 'flex', alignItems: 'flex-start', gap: '20px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}>
              <CheckCircle size={40} color="var(--orange)" style={{ flexShrink: 0 }} />
              <div>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Timely Project Delivery</h4>
                <p style={{ color: 'var(--text-muted)', margin: 0 }}>Our robust project management guarantees that your projects are completed safely and strictly on schedule.</p>
              </div>
            </div>

            <div style={{ background: 'white', padding: '30px', borderRadius: '8px', display: 'flex', alignItems: 'flex-start', gap: '20px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}>
              <CheckCircle size={40} color="var(--orange)" style={{ flexShrink: 0 }} />
              <div>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Skilled Professionals & Workforce</h4>
                <p style={{ color: 'var(--text-muted)', margin: 0 }}>Equipped with top tradesmen and skilled workers to execute complex civil and electrical tasks efficiently.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
