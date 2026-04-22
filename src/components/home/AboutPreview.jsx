import { Link } from 'react-router-dom';
import { FiArrowRight, FiAward, FiUsers, FiZap, FiSun } from 'react-icons/fi';
import officeImg from '../../assets/galary/office 2.jpg';
import ScrollReveal from '../shared/ScrollReveal';
import SectionHeader from '../shared/SectionHeader';
import './AboutPreview.css';

const values = [
  { icon: <FiAward />, title: 'Excellence', desc: 'We deliver outstanding quality in every service we provide.' },
  { icon: <FiUsers />, title: 'Integrity', desc: 'Honest, transparent relationships with every client.' },
  { icon: <FiZap />, title: 'Reliability', desc: 'Trusted workforce showing up on time, every time.' },
  { icon: <FiSun />, title: 'Sustainability', desc: 'Eco-conscious methods for a greener tomorrow.' },
];

export default function AboutPreview() {
  return (
    <section className="section about-preview">
      <div className="container">
        <div className="about-preview-grid">
          {/* Visual Side */}
          <ScrollReveal>
            <div className="about-visual">
              <div className="about-img-main">
                <img src={officeImg} alt="ARS Multigroup Office" className="about-img-real" />
              </div>
              <div className="about-img-badge">
                <div className="badge-inner">
                  <span className="badge-num">**</span>
                  <span className="badge-text">Years of<br />Excellence</span>
                </div>
              </div>
              <div className="about-img-cert">
                <FiAward color="var(--accent)" />
                <div>
                  <strong>100% Bumiputra</strong>
                  <span>Certified Company</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Content Side */}
          <div className="about-content">
            <ScrollReveal>
              <SectionHeader
                badge="About ARS Multigroup"
                title="A Trusted Name in"
                highlight="Professional Services"
                centered={false}
              />
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <p className="about-text">
                ARS Multigroup Sdn. Bhd. is a Malaysia-based company specializing in comprehensive
                cleaning, manpower, landscape, and facility management services. Founded with a mission
                to deliver reliable and professional services, we have grown to serve hundreds of clients
                across commercial, industrial, and institutional sectors.
              </p>
              <p className="about-text">
                As a proud 100% Bumiputra company registered with SSM, we bring local expertise and
                deep understanding of Malaysian business needs to every project we undertake.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="about-values">
                {values.map(v => (
                  <div key={v.title} className="about-value">
                    <div className="about-value-icon">{v.icon}</div>
                    <div>
                      <strong>{v.title}</strong>
                      <p>{v.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="about-cta">
                <Link to="/about" className="btn btn-primary">
                  Learn More About Us
                  <FiArrowRight />
                </Link>
                <Link to="/contact" className="btn btn-outline-primary">
                  Get In Touch
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
