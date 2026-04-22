import { Link } from 'react-router-dom';
import {
  FiMapPin, FiPhone, FiMail, FiClock,
  FiFacebook, FiInstagram, FiLinkedin, FiAward
} from 'react-icons/fi';
import logo from '../../assets/logo ars.png';
import './Footer.css';

const services = [
  'General Cleaning',
  'Post-Construction Cleaning',
  'Industrial Cleaning',
  'High-Rise Façade Cleaning',
  'Landscape Maintenance',
  'Car Wash Services',
  'Manpower Supply',
  'Waste Management',
];

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Our Services' },
  { to: '/industries', label: 'Industries We Serve' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact Us' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-wave" />

      <div className="footer-top">
        <div className="container footer-grid">
          {/* Brand Column */}
          <div className="footer-col footer-brand">
            <div className="footer-logo">
              <div className="footer-logo-wrapper">
                <img src={logo} alt="ARS Logo" className="footer-logo-img" />
              </div>
              <div>
                <div className="footer-logo-name">ARS MULTIGROUP<br/>SDN BHD</div>
                <div className="footer-logo-tagline">201801024075 (1286095-V)</div>
              </div>
            </div>
            <p className="footer-desc">
              A trusted 100% Bumiputra company delivering professional cleaning, premium car wash services, and fashion retail across Malaysia since establishment.
            </p>
            <div className="footer-socials">
              <a href="#" aria-label="Facebook" className="social-link"><FiFacebook /></a>
              <a href="#" aria-label="Instagram" className="social-link"><FiInstagram /></a>
              <a href="#" aria-label="LinkedIn" className="social-link"><FiLinkedin /></a>
            </div>
            <div className="footer-badge">
              <span style={{display:'flex', alignItems:'center', gap:'8px', justifyContent:'center'}}><FiAward size={18} /> 100% Bumiputra Company</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map(link => (
                <li key={link.to}>
                  <Link to={link.to} className="footer-link">
                    <span className="footer-link-arrow">›</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h4 className="footer-col-title">Our Services</h4>
            <ul className="footer-links">
              {services.map(s => (
                <li key={s}>
                  <Link to="/services" className="footer-link">
                    <span className="footer-link-arrow">›</span>
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-col">
            <h4 className="footer-col-title">Contact Us</h4>
            <ul className="footer-contact-list">
              <li>
                <FiMapPin className="contact-icon" />
                <span>No 5-02 (5th Floor), Plaza Prima Batu 4 ½ , Jalan Klang Lama, 58200 Kuala Lumpur.</span>
              </li>
              <li>
                <FiPhone className="contact-icon" />
                <a href="tel:0379726456">03-7972 6456</a>
              </li>
              <li>
                <FiMail className="contact-icon" />
                <a href="mailto:info@arsmultigroup.com.my">info@arsmultigroup.com.my</a>
              </li>
              <li>
                <FiClock className="contact-icon" />
                <span>Mon–Fri: 8:00 AM – 6:00 PM<br />Sat: 9:00 AM – 1:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© {new Date().getFullYear()} ARS Multigroup Sdn. Bhd. All rights reserved.</p>
          <p>ARS MULTIGROUP SDN BHD | 201801024075 (1286095-V)</p>
        </div>
      </div>
    </footer>
  );
}
