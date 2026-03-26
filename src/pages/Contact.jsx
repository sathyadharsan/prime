import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your inquiry. A representative from Prime Power Solutions will contact you shortly.");
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Get in touch for specialized engineering and construction solutions</p>
        </div>
      </div>

      <section className="section-padding">
        <div className="container grid-2" style={{ gap: '60px' }}>
          
          <div>
            <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: 'var(--blue)' }}>Reach Out to Us</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '40px', fontSize: '1.1rem' }}>
              Whether you have a query about our services, a project proposal, or are looking to partner on complex infrastructural challenges, our team is ready to assist you.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
              <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(243,112,33,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--orange)', flexShrink: 0 }}>
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 style={{ margin: '0 0 5px 0', fontSize: '1.1rem' }}>Location</h4>
                  <p style={{ margin: 0, color: 'var(--text-muted)' }}>Sultanate of Oman</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(10,61,115,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--blue)', flexShrink: 0 }}>
                  <Phone size={24} />
                </div>
                <div>
                  <h4 style={{ margin: '0 0 5px 0', fontSize: '1.1rem' }}>Call Us</h4>
                  <p style={{ margin: 0, color: 'var(--text-muted)' }}>
                    <a href="tel:+96893560900" style={{ display: 'block', color: 'inherit', marginBottom: '5px' }}>+968 93560900</a>
                    <a href="tel:+96895700142" style={{ display: 'block', color: 'inherit' }}>+968 95700142</a>
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(243,112,33,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--orange)', flexShrink: 0 }}>
                  <Mail size={24} />
                </div>
                <div>
                  <h4 style={{ margin: '0 0 5px 0', fontSize: '1.1rem' }}>Email Us</h4>
                  <p style={{ margin: 0, color: 'var(--text-muted)' }}>
                    <a href="mailto:primepowersolutionsllc@gmail.com">primepowersolutionsllc@gmail.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div style={{ background: 'white', padding: '40px', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.08)' }}>
            <h3 style={{ margin: '0 0 25px 0', color: 'var(--blue)', fontSize: '1.5rem' }}>Send a Message</h3>
            
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label htmlFor="name" style={{ fontWeight: '500', color: 'var(--dark-text)' }}>Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                  style={{ padding: '12px 15px', borderRadius: '6px', border: '1px solid #ced4da', fontSize: '1rem', fontFamily: 'inherit' }} 
                  placeholder="Your Name"
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label htmlFor="email" style={{ fontWeight: '500', color: 'var(--dark-text)' }}>Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange} 
                  required 
                  style={{ padding: '12px 15px', borderRadius: '6px', border: '1px solid #ced4da', fontSize: '1rem', fontFamily: 'inherit' }} 
                  placeholder="Your Email"
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label htmlFor="subject" style={{ fontWeight: '500', color: 'var(--dark-text)' }}>Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange} 
                  required 
                  style={{ padding: '12px 15px', borderRadius: '6px', border: '1px solid #ced4da', fontSize: '1rem', fontFamily: 'inherit' }} 
                  placeholder="Subject of Query"
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label htmlFor="message" style={{ fontWeight: '500', color: 'var(--dark-text)' }}>Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange} 
                  required 
                  rows="5" 
                  style={{ padding: '12px 15px', borderRadius: '6px', border: '1px solid #ced4da', fontSize: '1rem', fontFamily: 'inherit', resize: 'vertical' }} 
                  placeholder="Write your message here..."
                ></textarea>
              </div>

              <button type="submit" className="btn-primary" style={{ width: '100%', padding: '15px', fontSize: '1.1rem', marginTop: '10px' }}>
                Submit Message <Send size={18} style={{ marginLeft: '10px' }} />
              </button>
            </form>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="container" style={{ marginTop: '80px' }}>
          <div style={{
            width: '100%',
            height: '400px',
            background: 'var(--gray)',
            borderRadius: '12px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--text-muted)',
            border: '2px dashed #ced4da',
             overflow: 'hidden',
             position: 'relative'
          }}>
             <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: 'url("/images/map-placeholder.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.6
             }}></div>
             <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', background: 'white', padding: '20px 40px', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
                <MapPin size={40} color="var(--orange)" style={{ marginBottom: '10px' }} />
                <h3 style={{ margin: '0 0 10px 0', color: 'var(--blue)' }}>Oman Headquarters</h3>
                <p style={{ margin: 0 }}>Map Integration Placeholder</p>
             </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
