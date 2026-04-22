import ScrollReveal from '../shared/ScrollReveal';
import SectionHeader from '../shared/SectionHeader';
import { FiBriefcase, FiHeart, FiShield, FiBook, FiHome, FiSend, FiShoppingBag, FiSettings } from 'react-icons/fi';
import './IndustriesSection.css';

export const industries = [
  { icon: <FiBriefcase size={28} />, title: 'Office Buildings', desc: 'Corporate offices, coworking spaces, and business parks.' },
  { icon: <FiHeart size={28} />, title: 'Hospitals & Clinics', desc: 'Healthcare facilities requiring sterile, hygienic environments.' },
  { icon: <FiShield size={28} />, title: 'Banks & Finance', desc: 'High-security premises maintained to banking standards.' },
  { icon: <FiBook size={28} />, title: 'Education', desc: 'Universities, colleges, schools, and learning centres.' },
  { icon: <FiHome size={28} />, title: 'Condominiums', desc: 'Residential towers, apartments, and gated communities.' },
  { icon: <FiSend size={28} />, title: 'Airports', desc: 'Terminals, lounges, and airside facility management.' },
  { icon: <FiShoppingBag size={28} />, title: 'Shopping Malls', desc: 'Retail malls, hypermarkets, and commercial complexes.' },
  { icon: <FiSettings size={28} />, title: 'Industrial Facilities', desc: 'Factories, warehouses, and manufacturing plants.' },
];

export default function IndustriesSection() {
  return (
    <section className="section industries-section">
      <div className="container">
        <ScrollReveal>
          <SectionHeader
            badge="Industries We Serve"
            title="Serving Diverse"
            highlight="Sectors"
            subtitle="Our experienced teams are equipped to handle cleaning and manpower needs across a wide range of industries."
          />
        </ScrollReveal>

        <div className="industries-grid">
          {industries.map((ind, i) => (
            <ScrollReveal key={ind.title} delay={i * 60}>
              <div className="industry-card">
                <div className="industry-icon">{ind.icon}</div>
                <h3 className="industry-title">{ind.title}</h3>
                <p className="industry-desc">{ind.desc}</p>
                <div className="industry-tag">We Serve This Sector</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
