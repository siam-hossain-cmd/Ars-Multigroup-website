import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiCheck } from 'react-icons/fi';
import ScrollReveal from '../components/shared/ScrollReveal';
import SectionHeader from '../components/shared/SectionHeader';
import CtaBanner from '../components/home/CtaBanner';
import { allServices } from '../components/home/ServicesOverview';
import './Services.css';

export default function Services() {
  const [active, setActive] = useState(null);

  useEffect(() => {
    document.title = 'Our Services – ARS Multigroup Malaysia';
  }, []);

  return (
    <>
      <div className="page-hero">
        <div className="container page-hero-content">
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <span>Our Services</span>
          </div>
          <h1>Our Professional Services</h1>
          <p>Comprehensive cleaning, manpower, and facility management solutions tailored to your needs.</p>
        </div>
      </div>

      <section className="section services-page">
        <div className="container">
          <ScrollReveal>
            <SectionHeader
              badge="Full Service List"
              title="Everything We"
              highlight="Offer"
              subtitle="From routine cleaning to specialized industrial services — we have the right solution for every need."
            />
          </ScrollReveal>

          <div className="services-page-grid">
            {allServices.map((service, i) => (
              <ScrollReveal key={service.id} delay={i * 50}>
                <div
                  className={`service-detail-card ${active === service.id ? 'expanded' : ''}`}
                  onClick={() => setActive(active === service.id ? null : service.id)}
                  id={service.id}
                >
                  <div className="sdc-header">
                    <div className="sdc-icon">{service.icon}</div>
                    <div className="sdc-info">
                      <h3 className="sdc-title">{service.title}</h3>
                      <p className="sdc-short">{service.shortDesc}</p>
                    </div>
                    <div className="sdc-arrow">
                      <FiArrowRight className={active === service.id ? 'rotated' : ''} />
                    </div>
                  </div>
                  <div className="sdc-body">
                    <p className="sdc-desc">{service.desc}</p>
                    <div className="sdc-features">
                      {['Professional Equipment', 'Trained Staff', 'Flexible Scheduling', 'Quality Guaranteed'].map(f => (
                        <span key={f} className="sdc-feature">
                          <FiCheck size={12} /> {f}
                        </span>
                      ))}
                    </div>
                    <Link to="/contact" className="btn btn-primary sdc-cta" onClick={e => e.stopPropagation()}>
                      Request Quote <FiArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section section-light service-process">
        <div className="container">
          <ScrollReveal>
            <SectionHeader
              badge="How We Work"
              title="Our Simple"
              highlight="Process"
              subtitle="Getting started with ARS Multigroup is quick and easy."
            />
          </ScrollReveal>
          <div className="process-steps">
            {[
              { num: '01', title: 'Contact Us', desc: 'Reach out via WhatsApp, phone, or our online form.' },
              { num: '02', title: 'Site Assessment', desc: 'We visit your premises to understand requirements.' },
              { num: '03', title: 'Custom Quote', desc: 'Receive a detailed, transparent quotation within 24 hours.' },
              { num: '04', title: 'Service Begins', desc: 'Our professional team gets to work, supervised and monitored.' },
            ].map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 100}>
                <div className="process-step">
                  <div className="process-num">{step.num}</div>
                  <h3 className="process-title">{step.title}</h3>
                  <p className="process-desc">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
