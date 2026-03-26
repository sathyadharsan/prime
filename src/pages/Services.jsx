import React from 'react';
import { ShieldAlert, Zap, Tractor, Truck, Check, PenTool, LayoutTemplate, Cable } from 'lucide-react';

const Services = () => {
  const servicesData = [
    {
      title: "Civil Construction",
      icon: <LayoutTemplate size={40} />,
      points: [
        "Residential & non-residential buildings",
        "Ministry buildings",
        "Warehouses",
        "Commercial structures"
      ],
      color: "var(--blue)"
    },
    {
      title: "Road Construction",
      icon: <Truck size={40} />,
      points: [
        "Graded roads (all terrain)",
        "Asphalt roads",
        "Access roads"
      ],
      color: "var(--orange)"
    },
    {
      title: "Earth Moving Works",
      icon: <Tractor size={40} />,
      points: [
        "Platform works",
        "Hill cutting & leveling",
        "Filling and leveling"
      ],
      color: "#4b5563"
    },
    {
      title: "Equipment Rental",
      icon: <PenTool size={40} />,
      points: [
        "Earth moving equipment",
        "Transport & logistics services"
      ],
      color: "#059669"
    },
    {
      title: "Overhead Transmission Lines",
      icon: <Zap size={40} />,
      points: [
        "400kV, 220kV, 132kV lines",
        "Foundation, erection, stringing",
        "OPGW and conductor works"
      ],
      color: "#ef4444"
    },
    {
      title: "Maintenance Works",
      icon: <ShieldAlert size={40} />,
      points: [
        "OPGW replacement",
        "Insulator replacement",
        "Tower maintenance"
      ],
      color: "#8b5cf6"
    },
    {
      title: "Grid Station Works",
      icon: <Zap size={40} />,
      points: [
        "Civil structures",
        "Transformer works",
        "Cable trench works",
        "Cable laying projects"
      ],
      color: "#1d4ed8"
    },
    {
      title: "Fencing & Retainment",
      icon: <Check size={40} />,
      points: [
        "Boundary fencing",
        "Gabion works",
        "Structural protection works"
      ],
      color: "#b45309"
    }
  ];

  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Our Services</h1>
          <p>Comprehensive engineering, construction, and maintenance solutions.</p>
        </div>
      </div>

      <section className="section-padding" style={{ backgroundColor: 'var(--light-gray)' }}>
        <div className="container">
          <h2 className="section-title">What We Do</h2>
          <p className="section-subtitle">We are equipped with modern machinery and a highly skilled workforce, enabling us to deliver diverse services effectively and safely.</p>
          
          <div className="grid-3" style={{ gap: '30px', marginTop: '50px' }}>
            {servicesData.map((service, index) => (
              <div key={index} className="service-feature-card" style={{ 
                background: 'white', 
                borderRadius: '10px', 
                overflow: 'hidden',
                boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'default'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.05)';
              }}
              >
                <div style={{ padding: '30px', borderBottom: `3px solid ${service.color}` }}>
                  <div style={{ color: service.color, marginBottom: '20px' }}>
                    {service.icon}
                  </div>
                  <h3 style={{ fontSize: '1.4rem', marginBottom: '20px', color: 'var(--dark-text)' }}>{service.title}</h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {service.points.map((point, idx) => (
                      <li key={idx} style={{ 
                        display: 'flex', 
                        alignItems: 'flex-start', 
                        gap: '10px',
                        marginBottom: '12px',
                        color: 'var(--text-muted)'
                      }}>
                        <Check size={18} color="var(--orange)" style={{ flexShrink: 0, marginTop: '3px' }} />
                        <span style={{ fontSize: '0.95rem', lineHeight: 1.5 }}>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
