import React from 'react';
import { Users, Truck, Wrench } from 'lucide-react';

const Resources = () => {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Resources</h1>
          <p>Equipped with state-of-the-art machinery and dedicated manpower</p>
        </div>
      </div>

      <section className="section-padding">
        <div className="container">
          <div className="grid-3">
            <div style={{
              background: 'white',
              borderRadius: '10px',
              padding: '40px 30px',
              textAlign: 'center',
              boxShadow: '0 5px 20px rgba(0,0,0,0.05)',
              borderBottom: '4px solid var(--blue)'
            }}>
              <Users size={48} color="var(--blue)" style={{ margin: '0 auto 20px' }} />
              <h3 style={{ fontSize: '1.4rem', marginBottom: '15px' }}>Skilled Workforce</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: 0 }}>
                A highly dedicated team comprising experienced engineers, specialized supervisors, competent tradespeople, dedicated steel fixers, top masons, and trained support technicians for smooth execution sequences.
              </p>
            </div>

            <div style={{
              background: 'white',
              borderRadius: '10px',
              padding: '40px 30px',
              textAlign: 'center',
              boxShadow: '0 5px 20px rgba(0,0,0,0.05)',
              borderBottom: '4px solid var(--orange)'
            }}>
              <Truck size={48} color="var(--orange)" style={{ margin: '0 auto 20px' }} />
              <h3 style={{ fontSize: '1.4rem', marginBottom: '15px' }}>Heavy Equipment</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: 0 }}>
                Completely resourced with robust earth-moving equipment, specialized logistical vehicles, heavy transports, and top-tier construction assets to easily mobilize for large-scale operations.
              </p>
            </div>

            <div style={{
              background: 'white',
              borderRadius: '10px',
              padding: '40px 30px',
              textAlign: 'center',
              boxShadow: '0 5px 20px rgba(0,0,0,0.05)',
              borderBottom: '4px solid #4b5563'
            }}>
              <Wrench size={48} color="#4b5563" style={{ margin: '0 auto 20px' }} />
              <h3 style={{ fontSize: '1.4rem', marginBottom: '15px' }}>Advanced Tools</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: 0 }}>
                We harness the latest technologies and specialized high-voltage tool mechanisms to support complex engineering requirements like 400kV transmissions effectively and safely.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Resources;
