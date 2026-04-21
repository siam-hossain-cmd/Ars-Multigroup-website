import ScrollReveal from '../shared/ScrollReveal';
import SectionHeader from '../shared/SectionHeader';
import './IndustriesSection.css';

export const industries = [
  { icon: '🏢', title: 'Office Buildings', desc: 'Corporate offices, coworking spaces, and business parks.' },
  { icon: '🏥', title: 'Hospitals & Clinics', desc: 'Healthcare facilities requiring sterile, hygienic environments.' },
  { icon: '🏦', title: 'Banks & Finance', desc: 'High-security premises maintained to banking standards.' },
  { icon: '🎓', title: 'Education', desc: 'Universities, colleges, schools, and learning centres.' },
  { icon: '🏠', title: 'Condominiums', desc: 'Residential towers, apartments, and gated communities.' },
  { icon: '✈️', title: 'Airports', desc: 'Terminals, lounges, and airside facility management.' },
  { icon: '🛍️', title: 'Shopping Malls', desc: 'Retail malls, hypermarkets, and commercial complexes.' },
  { icon: '🏭', title: 'Industrial Facilities', desc: 'Factories, warehouses, and manufacturing plants.' },
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
