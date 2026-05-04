import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiCheckCircle, FiHome, FiTarget, FiEye } from 'react-icons/fi';
import ScrollReveal from '../components/shared/ScrollReveal';
import SectionHeader from '../components/shared/SectionHeader';
import CtaBanner from '../components/home/CtaBanner';
import ssmImg from '../assets/galary/ssm .png';
import dbklImg from '../assets/galary/lesen dbkl.png';
import auniImg from '../assets/galary/auni.jpeg';
import ashikinImg from '../assets/galary/IMG_ashikin.jpg';
import './About.css';

const team = [
  { name: 'Nurul Ashikin Binti Sarif Husin', role: 'Executive Director', initial: 'NA', image: ashikinImg },
  { name: 'Nurul Auni Binti Sarif Husin', role: 'Human Resources', initial: 'NA', image: auniImg },
  { name: 'Nurul Islam Binti Hairudin', role: 'Admin Office', initial: 'NI', image: null },
];

const registrations = [
  { label: 'Company Registration', value: 'ARS Multigroup Sdn. Bhd.' },
  { label: 'SSM Registration No.', value: '201801024075 (1286095-V)' },
  { label: 'Bumiputra Status', value: '100% Bumiputra Company' },
  { label: 'Office Address', value: 'No 5-02 (5th Floor), Plaza Prima Batu 4 ½, Jalan Klang Lama, 58200 Kuala Lumpur.' },
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
                  <span style={{color:'var(--accent)'}}><FiHome size={40} /></span>
                  <p>ARS Multigroup Headquarters</p>
                  <small>Kuala Lumpur</small>
                </div>
                <div className="about-stats-float">
                  {[
                    { num: '**', label: 'Years' },
                    { num: '**', label: 'Clients' },
                    { num: '**', label: 'Staff' },
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
                  ARS Multigroup Sdn. Bhd. is a reputable Malaysian company specializing in professional cleaning services, premium car wash operations, fashion retail, and diverse facility management solutions.
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
                    <h4 style={{display:'flex', alignItems:'center', gap:'8px'}}><FiTarget className="mission-icon" color="var(--accent)" /> Our Mission</h4>
                    <p>To provide reliable, high-quality, and affordable cleaning and manpower services that exceed client expectations while building lasting partnerships.</p>
                  </div>
                  <div className="mission-card">
                    <h4 style={{display:'flex', alignItems:'center', gap:'8px'}}><FiEye className="mission-icon" color="var(--accent)" /> Our Vision</h4>
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

      {/* Certifications & Compliance */}
      <section className="section about-certifications">
        <div className="container">
          <ScrollReveal>
            <SectionHeader
              badge="Official Documents"
              title="Certifications &"
              highlight="Compliance"
              subtitle="Our official licenses and business registrations."
            />
          </ScrollReveal>
          <div className="cert-grid">
            <ScrollReveal delay={100}>
              <div className="cert-card">
                <img src={ssmImg} alt="SSM Certificate" />
                <h4>SSM Registration</h4>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="cert-card">
                <img src={dbklImg} alt="DBKL License" />
                <h4>Lesen DBKL</h4>
              </div>
            </ScrollReveal>
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
                  {member.image ? (
                    <img src={member.image} alt={member.name} className="team-avatar-img" />
                  ) : (
                    <div className="team-avatar">{member.initial}</div>
                  )}
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
