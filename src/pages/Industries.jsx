import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/shared/ScrollReveal';
import SectionHeader from '../components/shared/SectionHeader';
import CtaBanner from '../components/home/CtaBanner';
import { industries } from '../components/home/IndustriesSection';
import './IndustriesPage.css';

export default function Industries() {
  useEffect(() => {
    document.title = 'Industries We Serve – ARS Multigroup Malaysia';
  }, []);

  return (
    <>
      <div className="page-hero">
        <div className="container page-hero-content">
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <span>Industries We Serve</span>
          </div>
          <h1>Industries We Serve</h1>
          <p>Tailored cleaning and facility management solutions for diverse business sectors across Malaysia.</p>
        </div>
      </div>

      <section className="section industries-page">
        <div className="container">
          <ScrollReveal>
            <SectionHeader
              badge="Sector Expertise"
              title="Specialized Solutions for"
              highlight="Every Industry"
              subtitle="Different industries have different compliance and operational requirements. Our specialized teams are trained to deliver compliant, high-standard services for your specific sector."
            />
          </ScrollReveal>

          <div className="industries-page-list">
            {industries.map((ind, i) => (
              <ScrollReveal key={ind.title} delay={i * 50}>
                <div className="industry-row-card">
                  <div className="ind-row-icon">{ind.icon}</div>
                  <div className="ind-row-content">
                    <h3 className="ind-row-title">{ind.title}</h3>
                    <p className="ind-row-desc">{ind.desc}</p>
                    <div className="ind-row-features">
                      <span className="ind-feature-tag">Customized Schedule</span>
                      <span className="ind-feature-tag">Trained Operators</span>
                      <span className="ind-feature-tag">Safety Compliant</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Sector Matters */}
      <section className="section section-light sector-why">
        <div className="container">
          <div className="sector-grid">
            <div className="sector-content">
              <ScrollReveal>
                <SectionHeader
                  badge="Our Approach"
                  title="Why Industry Expertise"
                  highlight="Matters"
                  centered={false}
                />
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <p className="sector-text">
                  A hospital requires different cleaning standards than a shopping mall or an industrial warehouse. That's why we don't believe in a one-size-fits-all approach.
                </p>
                <p className="sector-text">
                  Our teams undergo specialized training based on the deployment sector. For instance, our healthcare cleaners are trained in infection control and cross-contamination prevention, while our industrial teams are OSH compliant and trained to work safely around heavy machinery.
                </p>
                <ul className="sector-list">
                  <li>✔ Sector-specific SOPs and checklists</li>
                  <li>✔ Appropriate industrial-grade chemicals and equipment</li>
                  <li>✔ Specialized safety and compliance training</li>
                  <li>✔ Flexible scheduling to minimize operational disruption</li>
                </ul>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={200}>
              <div className="sector-image">
                <div className="sector-placeholder">
                  <span>🏢</span>
                  <p>Flexible Solutions for Your Business</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
