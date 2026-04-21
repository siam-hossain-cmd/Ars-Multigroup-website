import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi';
import ScrollReveal from '../components/shared/ScrollReveal';
import SectionHeader from '../components/shared/SectionHeader';
import CtaBanner from '../components/home/CtaBanner';
import './About.css';

const timeline = [
  { year: '2010', title: 'Company Founded', desc: 'ARS Multigroup established in Selangor with a focus on general cleaning services.' },
  { year: '2013', title: 'Manpower Division', desc: 'Expanded to offer comprehensive manpower supply and outsourcing solutions.' },
  { year: '2016', title: 'Industrial Services', desc: 'Launched industrial cleaning and cleanroom services for manufacturing clients.' },
  { year: '2019', title: 'Façade & Landscape', desc: 'Added high-rise façade cleaning and landscape maintenance to our portfolio.' },
  { year: '2023', title: 'Growing Strong', desc: 'Serving 500+ clients across Malaysia with a workforce of 1,200+ staff.' },
];

const team = [
  { name: 'Dato\' Abd. Rahman', role: 'Chief Executive Officer', initial: 'AR' },
  { name: 'Sharifah Norzila', role: 'Operations Director', initial: 'SN' },
  { name: 'Mohd Fadzli', role: 'Head of Manpower', initial: 'MF' },
  { name: 'Norhayati Khalid', role: 'Client Relations Manager', initial: 'NK' },
];

const registrations = [
  { label: 'Company Registration', value: 'ARS Multigroup Sdn. Bhd.' },
  { label: 'SSM Registration No.', value: '123456-X' },
  { label: 'Bumiputra Status', value: '100% Bumiputra Company' },
  { label: 'CIDB Registered', value: 'Grade G1 – G7' },
  { label: 'MOF Registered', value: 'Ministry of Finance Malaysia' },
  { label: 'Office Address', value: 'No. 12, Jalan Industri, Subang Jaya, 47500 Selangor' },
];

export default function About() {
  useEffect(() => {
    document.title = 'About Us – ARS Multigroup Malaysia';
  }, []);

  return (
    <>
      {/* Page Hero */}
      <div className="page-hero">
        <div className="container page-hero-content">
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <span>About Us</span>
          </div>
          <h1>About ARS Multigroup</h1>
          <p>A trusted 100% Bumiputra company delivering professional facility services across Malaysia for over a decade.</p>
        </div>
      </div>

      {/* Intro */}
      <section className="section about-intro">
        <div className="container">
          <div className="about-intro-grid">
            <ScrollReveal>
              <div className="about-intro-visual">
                <div className="about-placeholder-main">
                  <span>🏢</span>
                  <p>ARS Multigroup Headquarters</p>
                  <small>Subang Jaya, Selangor</small>
                </div>
                <div className="about-stats-float">
                  {[
                    { num: '10+', label: 'Years' },
                    { num: '500+', label: 'Clients' },
                    { num: '1,200+', label: 'Staff' },
                  ].map(s => (
                    <div key={s.label} className="about-stat-item">
                      <div className="stat-number">{s.num}</div>
                      <div className="stat-label">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <div>
              <ScrollReveal>
                <SectionHeader
                  badge="Our Story"
                  title="Who We"
                  highlight="Are"
                  centered={false}
                />
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <p className="about-para">
                  ARS Multigroup Sdn. Bhd. is a reputable Malaysian company specializing in professional cleaning,
                  manpower supply, landscape maintenance, high-rise façade cleaning, and diverse facility
                  management services.
                </p>
                <p className="about-para">
                  Established over a decade ago, we have grown from a small cleaning company to a comprehensive
                  facility services provider serving over 500 clients across private and public sectors in Malaysia.
                </p>
                <p className="about-para">
                  As a proud 100% Bumiputra-owned enterprise, we are committed to delivering world-class services
                  while supporting local talent development and the Malaysian economy.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <div className="about-mission">
                  <div className="mission-card">
                    <h4>🎯 Our Mission</h4>
                    <p>To provide reliable, high-quality, and affordable cleaning and manpower services that exceed client expectations while building lasting partnerships.</p>
                  </div>
                  <div className="mission-card">
                    <h4>🔭 Our Vision</h4>
                    <p>To be Malaysia's most trusted and preferred facility services company, recognized for excellence, innovation, and workforce development.</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Registration & Credentials */}
      <section className="section section-light about-credentials">
        <div className="container">
          <ScrollReveal>
            <SectionHeader
              badge="Company Information"
              title="Registration &"
              highlight="Credentials"
              subtitle="ARS Multigroup is a fully registered and compliant company in Malaysia."
            />
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="credentials-grid">
              {registrations.map(reg => (
                <div key={reg.label} className="credential-item">
                  <FiCheckCircle className="cred-icon" />
                  <div>
                    <div className="cred-label">{reg.label}</div>
                    <div className="cred-value">{reg.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="section about-timeline">
        <div className="container">
          <ScrollReveal>
            <SectionHeader
              badge="Our Journey"
              title="Company"
              highlight="History"
              subtitle="A decade of growth, excellence, and expanding capabilities."
            />
          </ScrollReveal>
          <div className="timeline">
            {timeline.map((item, i) => (
              <ScrollReveal key={item.year} delay={i * 80}>
                <div className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`}>
                  <div className="timeline-dot" />
                  <div className="timeline-card">
                    <div className="timeline-year">{item.year}</div>
                    <h3 className="timeline-title">{item.title}</h3>
                    <p className="timeline-desc">{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section section-light about-team">
        <div className="container">
          <ScrollReveal>
            <SectionHeader
              badge="Our Leadership"
              title="Meet the"
              highlight="Team"
              subtitle="Experienced professionals leading ARS Multigroup to new heights."
            />
          </ScrollReveal>
          <div className="team-grid">
            {team.map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 80}>
                <div className="team-card">
                  <div className="team-avatar">{member.initial}</div>
                  <h3 className="team-name">{member.name}</h3>
                  <p className="team-role">{member.role}</p>
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
