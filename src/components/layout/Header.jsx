import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiMenu, FiX, FiPhone } from 'react-icons/fi';
import './Header.css';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/industries', label: 'Industries' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-inner">
        {/* Logo */}
        <Link to="/" className="header-logo" onClick={() => setMenuOpen(false)}>
          <div className="logo-icon">
            <span>ARS</span>
          </div>
          <div className="logo-text">
            <span className="logo-name">ARS Multigroup</span>
            <span className="logo-tagline">Cleaning & Manpower Services</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="header-nav">
          {navLinks.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* CTA + Hamburger */}
        <div className="header-actions">
          <a href="tel:+60123456789" className="header-phone">
            <FiPhone size={14} />
            <span>+60 12-345 6789</span>
          </a>
          <Link to="/contact" className="btn btn-primary header-cta">
            Get Quote
          </Link>
          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav">
          {navLinks.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="btn btn-primary w-full text-center mobile-cta"
            onClick={() => setMenuOpen(false)}
          >
            Get Free Quotation
          </Link>
        </nav>
      </div>

      {/* Overlay */}
      {menuOpen && <div className="mobile-overlay" onClick={() => setMenuOpen(false)} />}
    </header>
  );
}
