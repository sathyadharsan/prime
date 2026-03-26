import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Zap } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    closeMenu();
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Team', path: '/team' },
    { name: 'Resources', path: '/resources' },
    { name: 'Policies', path: '/policies' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <div className="logo-icon-wrap">
            <Zap className="logo-icon" size={24} />
          </div>
          <span className="logo-text">
            <span className="logo-prime">PRIME</span>
            <span className="logo-power">POWER</span>
          </span>
        </Link>
        
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          {navLinks.map((link, index) => (
            <li key={index} className="nav-item">
              <Link 
                to={link.path} 
                className={`nav-links ${location.pathname === link.path ? 'active-link' : ''}`}
                onClick={closeMenu}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li className="nav-item display-mobile">
            <Link to="/contact" className="btn-primary btn-sm" onClick={closeMenu}>
              Get a Quote
            </Link>
          </li>
        </ul>
        
        <div className="nav-btn">
          <Link to="/contact" className="btn-primary">Get a Quote</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
