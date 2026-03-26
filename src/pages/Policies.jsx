import React from 'react';
import { ShieldCheck, Ban, Wine } from 'lucide-react';

const Policies = () => {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Company Policies</h1>
          <p>Ensuring safety, wellbeing, and professional environment</p>
        </div>
      </div>

      <section className="section-padding">
        <div className="container">
          <h2 className="section-title">Health, Safety & Environment</h2>
          <p className="section-subtitle">A robust framework guiding all our operational commitments globally.</p>
          
          <div style={{
            background: 'white',
            borderRadius: '12px',
            borderLeft: '5px solid var(--blue)',
            padding: '40px',
            boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
            marginBottom: '40px',
            display: 'flex',
            gap: '30px',
            alignItems: 'center'
          }}>
            <ShieldCheck size={60} color="var(--blue)" style={{ flexShrink: 0 }} />
            <div>
              <h3 style={{ marginBottom: '15px', color: 'var(--blue)' }}>HSE Policy</h3>
              <ul style={{ paddingLeft: '20px', color: 'var(--text-muted)', lineHeight: '1.8' }}>
                <li><strong>Ensure Safe Working Environment:</strong> The health and safety of our employees, clients, and subcontractors is our primary concern.</li>
                <li><strong>Follow Regulations:</strong> We rigorously ensure that all company actions align seamlessly with the best safety standards and statutory regulations.</li>
                <li><strong>Zero Incident Policy:</strong> Our objective on site and everywhere else is maintaining an unwavering zero incident record across all divisions.</li>
              </ul>
            </div>
          </div>

          <div className="grid-2">
            <div style={{
              background: 'white',
              borderRadius: '12px',
              borderLeft: '5px solid var(--orange)',
              padding: '40px',
              boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                <Ban size={32} color="var(--orange)" />
                <h3 style={{ margin: 0, color: 'var(--dark-text)' }}>No Smoking Policy</h3>
              </div>
              <ul style={{ paddingLeft: '20px', color: 'var(--text-muted)', lineHeight: '1.8', margin: 0 }}>
                <li>Smoking is strictly prohibited in the workplace and restricted across all our operational sites.</li>
                <li>Consistent awareness programs are conducted to maintain health consciousness and emphasize the importance of air quality amongst employees.</li>
              </ul>
            </div>

            <div style={{
              background: 'white',
              borderRadius: '12px',
              borderLeft: '5px solid #ef4444',
              padding: '40px',
              boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                <Wine size={32} color="#ef4444" />
                <h3 style={{ margin: 0, color: 'var(--dark-text)' }}>Alcohol & Drug Policy</h3>
              </div>
              <ul style={{ paddingLeft: '20px', color: 'var(--text-muted)', lineHeight: '1.8', margin: 0 }}>
                <li>We uphold a strict prohibition against using, possessing, or distributing drugs or alcohol at any workplace or site.</li>
                <li>Violations are immediately pursued with unwavering disciplinary actions to ensure team competency and uncompromising site performance.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Policies;
