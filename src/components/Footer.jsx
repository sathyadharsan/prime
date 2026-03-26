import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Zap } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="container footer-content grid-3">
        <div className="footer-info">
          <Link to="/" className="navbar-logo footer-logo">
            <div className="logo-icon-wrap">
              <Zap className="logo-icon" size={24} />
            </div>
            <span className="logo-text">
              <span className="logo-prime text-white">PRIME</span>
              <span className="logo-power text-orange">POWER</span>
            </span>
          </Link>
          <p className="footer-desc">
            Building a legacy of excellence in civil & electrical engineering with best quality and safety standards.
          </p>
        </div>
        
        <div className="footer-links">
          <h3 className="footer-title">Quick Links</h3>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Our Services</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/team">Team</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        
        <div className="footer-contact">
          <h3 className="footer-title">Contact Us</h3>
          <ul>
            <li><MapPin size={18} /> Sultanate of Oman</li>
            <li><Phone size={18} /> <a href="tel:+96893560900">+968 93560900</a>, <a href="tel:+96895700142">+968 95700142</a></li>
            <li><Mail size={18} /> <a href="mailto:primepowersolutionsllc@gmail.com">primepowersolutionsllc@gmail.com</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Prime Power Solutions LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
