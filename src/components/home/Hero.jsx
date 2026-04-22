import { Link } from 'react-router-dom';
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi';
import './Hero.css';

const highlights = [
  'Licensed & registered company',
  '100% Bumiputra status',
  'Professional trained workforce',
];

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg">
        <div className="hero-overlay" />
        <div className="hero-particles">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="particle" style={{ '--i': i }} />
          ))}
        </div>
      </div>

      <div className="container hero-content">
        <div className="hero-badge animate-fade-in-up">
          🇲🇾 Trusted Cleaning & Manpower Services in Malaysia
        </div>

        <h1 className="hero-title animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          Professional Cleaning &<br />
          <span className="hero-title-accent">Manpower Services</span>
          <br />Across Malaysia
        </h1>

        <p className="hero-subtitle animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          ARS Multigroup delivers reliable, high-quality cleaning, facility management,
          landscape, and manpower solutions to offices, hospitals, malls, and industrial
          facilities throughout Malaysia.
        </p>

        <ul className="hero-highlights animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          {highlights.map(h => (
            <li key={h}>
              <FiCheckCircle className="check-icon" />
              <span>{h}</span>
            </li>
          ))}
        </ul>

        <div className="hero-cta animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <Link to="/contact" className="btn btn-primary hero-btn-primary">
            Get Free Quotation
            <FiArrowRight />
          </Link>
          <Link to="/services" className="btn btn-outline-white">
            Our Services
          </Link>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="hero-stats">
        <div className="container hero-stats-inner">
          {[
            { num: '**', label: 'Years Experience' },
            { num: '**', label: 'Happy Clients' },
            { num: '**', label: 'Staff Deployed' },
          ].map(stat => (
            <div key={stat.label} className="hero-stat">
              <div className="stat-number">{stat.num}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="scroll-dot" />
      </div>
    </section>
  );
}
