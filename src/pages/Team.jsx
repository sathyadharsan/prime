import React from 'react';
import { User, Briefcase, Award } from 'lucide-react';

const Team = () => {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Our Team</h1>
          <p>The leadership and dedicated professionals behind Prime Power Solutions</p>
        </div>
      </div>

      <section className="section-padding" style={{ backgroundColor: 'var(--light-gray)' }}>
        <div className="container">
          <h2 className="section-title">Key Persons</h2>
          <p className="section-subtitle">Our company strongly believes in professional management and possesses experienced leadership steering every project towards success.</p>
          
          <div className="grid-2" style={{ marginTop: '50px' }}>
            <div style={{
              background: 'white',
              borderRadius: '12px',
              padding: '40px',
              textAlign: 'center',
              boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '5px',
                background: 'var(--blue)'
              }}></div>
              
              <div style={{
                width: '100px',
                height: '100px',
                background: 'rgba(10,61,115,0.1)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                color: 'var(--blue)'
              }}>
                <User size={50} />
              </div>
              
              <h3 style={{ fontSize: '1.5rem', marginBottom: '5px' }}>Mr. Elias Al Abri</h3>
              <p style={{ color: 'var(--orange)', fontWeight: '600', marginBottom: '20px' }}>Managing Director</p>
              
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                textAlign: 'left',
                display: 'inline-block'
              }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', color: 'var(--text-muted)' }}>
                  <Award size={18} color="var(--blue)" /> Engineering Graduate
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-muted)' }}>
                  <Briefcase size={18} color="var(--blue)" /> 18+ years experience in engineering & project management
                </li>
              </ul>
            </div>

            <div style={{
              background: 'white',
              borderRadius: '12px',
              padding: '40px',
              textAlign: 'center',
              boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '5px',
                background: 'var(--orange)'
              }}></div>
              
              <div style={{
                width: '100px',
                height: '100px',
                background: 'rgba(243,112,33,0.1)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                color: 'var(--orange)'
              }}>
                <User size={50} />
              </div>
              
              <h3 style={{ fontSize: '1.5rem', marginBottom: '5px' }}>Mr. Suresh K. Palanisamy</h3>
              <p style={{ color: 'var(--blue)', fontWeight: '600', marginBottom: '20px' }}>Operation Manager</p>
              
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                textAlign: 'left',
                display: 'inline-block'
              }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', color: 'var(--text-muted)' }}>
                  <Award size={18} color="var(--orange)" /> Expertise in project & site management
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-muted)' }}>
                  <Briefcase size={18} color="var(--orange)" /> Extensive execution experience in Oman and India
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding cta-section" style={{ textAlign: 'center' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ marginBottom: '20px' }}>A Unified Team for Uncommon Challenges</h2>
            <p style={{ marginBottom: '0', opacity: 0.9 }}>
              Beyond our leadership, Prime Power Solutions LLC boasts an energetic cadre of engineers, highly qualified supervisors, mechanics, heavy equipment operators, drivers, technicians, steel fixers, and mason workers. Together, we commit to surpassing client expectations on every job.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
