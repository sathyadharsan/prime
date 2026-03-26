import React from 'react';
import { Target, Building, Power, Layers } from 'lucide-react';

const Projects = () => {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Projects & Clients</h1>
          <p>Delivering high-performance infrastructure across Oman and India</p>
        </div>
      </div>

      <section className="section-padding">
        <div className="container">
          <h2 className="section-title">Key Projects Overview</h2>
          <p className="section-subtitle">A glimpse into our successfully completed and ongoing specialized construction and electrification projects.</p>

          <div className="grid-2">
            <div style={{ background: 'white', borderRadius: '8px', padding: '30px', border: '1px solid var(--gray)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(10,61,115,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--blue)' }}>
                  <Power size={24} />
                </div>
                <h3 style={{ margin: 0 }}>Transmission Lines</h3>
              </div>
              <p style={{ color: 'var(--text-muted)' }}>Extensive experience in high-voltage 400kV, 220kV, and 132kV transmission line projects. This includes everything from rigorous foundation laying and erection to stringing, OPGW installations, and conductor works.</p>
            </div>

            <div style={{ background: 'white', borderRadius: '8px', padding: '30px', border: '1px solid var(--gray)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(243,112,33,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--orange)' }}>
                  <Building size={24} />
                </div>
                <h3 style={{ margin: 0 }}>Infrastructure & Roads</h3>
              </div>
              <p style={{ color: 'var(--text-muted)' }}>Completion of numerous critical infrastructure works involving earthwork, graded terrain preparation, asphalt roads, access roads, filling, and precision site-leveling on difficult terrains.</p>
            </div>

            <div style={{ background: 'white', borderRadius: '8px', padding: '30px', border: '1px solid var(--gray)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(10,61,115,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--blue)' }}>
                  <Layers size={24} />
                </div>
                <h3 style={{ margin: 0 }}>Grid Station Projects</h3>
              </div>
              <p style={{ color: 'var(--text-muted)' }}>Advanced construction of grid station civil structures, transformer installations, specialized cable trenching works, and robust electrification implementations to power expanding networks.</p>
            </div>

            <div style={{ background: 'white', borderRadius: '8px', padding: '30px', border: '1px solid var(--gray)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(243,112,33,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--orange)' }}>
                  <Target size={24} />
                </div>
                <h3 style={{ margin: 0 }}>International Reach</h3>
              </div>
              <p style={{ color: 'var(--text-muted)' }}>With a steadfast reputation for executing complex civil and electrical tasks, Prime Power Solutions LLC has successfully scaled out operations to manage multiple completed works spanning across both Oman and India.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: 'var(--blue)', color: 'white' }}>
        <div className="container">
          <h2 className="section-title" style={{ color: 'white' }}>Our Esteemed Clients</h2>
          <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.8)' }}>We take immense pride in working with renowned organizations and delivering superior quality on every milestone.</p>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px', marginTop: '40px' }}>
            {["Oman Electricity Transmission Company", "Petroleum Development Oman (PDO)", "Ministry of Tourism", "Power Grid Corporation of India"].map((client, idx) => (
              <div key={idx} style={{
                background: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '8px',
                padding: '30px',
                minWidth: '250px',
                textAlign: 'center',
                flex: '1',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: '600',
                fontSize: '1.2rem',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(243,112,33,0.8)';
                e.currentTarget.style.transform = 'translateY(-5px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
