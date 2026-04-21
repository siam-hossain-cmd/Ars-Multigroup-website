import { Link } from 'react-router-dom';
import { FiArrowRight, FiPhone } from 'react-icons/fi';
import './CtaBanner.css';

export default function CtaBanner() {
  return (
    <section className="cta-banner">
      <div className="cta-banner-bg" />
      <div className="container cta-banner-inner">
        <div className="cta-content">
          <div className="section-badge">🚀 Get Started Today</div>
          <h2 className="cta-title">
            Ready to Experience Professional<br />
            <span className="cta-title-accent">Cleaning & Facility Services?</span>
          </h2>
          <p className="cta-subtitle">
            Contact us today for a free, no-obligation quotation. Our team will assess your needs
            and provide a tailored solution that fits your budget.
          </p>
        </div>
        <div className="cta-actions">
          <Link to="/contact" className="btn btn-primary cta-btn-main">
            Get Free Quotation
            <FiArrowRight />
          </Link>
          <a href="tel:+60123456789" className="btn btn-outline-white cta-btn-call">
            <FiPhone />
            Call Us Now
          </a>
        </div>
      </div>
    </section>
  );
}
