import ScrollReveal from '../shared/ScrollReveal';
import SectionHeader from '../shared/SectionHeader';
import { FiAward, FiBriefcase, FiDollarSign, FiShield, FiClipboard, FiPhone, FiStar, FiCheckCircle } from 'react-icons/fi';
import './WhyChooseUs.css';

const reasons = [
  {
    icon: <FiAward size={28} />,
    title: 'Experienced & Certified Team',
    desc: 'Over 10 years of industry experience with trained, certified, and background-checked staff.',
  },
  {
    icon: <FiBriefcase size={28} />,
    title: 'Reliable Manpower Supply',
    desc: 'Large pool of skilled and semi-skilled workers ready for immediate and ongoing deployment.',
  },
  {
    icon: <FiDollarSign size={28} />,
    title: 'Competitive Pricing',
    desc: 'Transparent, fair pricing with customized packages to match your budget and requirements.',
  },
  {
    icon: <FiShield size={28} />,
    title: 'Safety-First Approach',
    desc: 'All teams are trained on OSH compliance and equipped with proper PPE for safe operations.',
  },
  {
    icon: <FiClipboard size={28} />,
    title: 'Customized Service Plans',
    desc: 'No one-size-fits-all. We tailor cleaning schedules and manpower plans to suit your needs.',
  },
  {
    icon: <FiPhone size={28} />,
    title: 'Dedicated Customer Support',
    desc: '24/7 responsive support with dedicated account managers for every client.',
  },
  {
    icon: <FiStar size={28} />,
    title: '100% Bumiputra Company',
    desc: 'Proudly registered as a 100% Bumiputra company, supporting local enterprise and talent.',
  },
  {
    icon: <FiCheckCircle size={28} />,
    title: 'Quality Assurance',
    desc: 'Regular supervisory visits, quality checklists, and client satisfaction reviews.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section section-dark why-choose">
      <div className="why-bg-pattern" />
      <div className="container">
        <ScrollReveal>
          <SectionHeader
            badge="Why Choose Us"
            title="What Makes ARS Multigroup"
            highlight="Different"
            subtitle="We set ourselves apart with our commitment to quality, reliability, and client satisfaction."
            dark
          />
        </ScrollReveal>

        <div className="why-grid">
          {reasons.map((reason, i) => (
            <ScrollReveal key={reason.title} delay={i * 60}>
              <div className="why-card">
                <div className="why-icon">{reason.icon}</div>
                <h3 className="why-title">{reason.title}</h3>
                <p className="why-desc">{reason.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
