import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import ScrollReveal from '../shared/ScrollReveal';
import SectionHeader from '../shared/SectionHeader';
import './ServicesOverview.css';

export const allServices = [
  {
    id: 'general-cleaning',
    icon: '🧹',
    title: 'General Cleaning',
    shortDesc: 'Comprehensive daily, weekly, and one-off cleaning for all commercial premises.',
    desc: 'Our general cleaning service covers routine office cleaning, floor mopping, vacuuming, sanitization, rubbish removal, and restroom maintenance. Ideal for offices, shops, and commercial spaces.',
    color: '#0B2C5F',
  },
  {
    id: 'housekeeping',
    icon: '🏨',
    title: 'Housekeeping & Comprehensive Cleaning',
    shortDesc: 'Full housekeeping services with trained staff for hospitality and commercial needs.',
    desc: 'End-to-end housekeeping including linen management, surface cleaning, and deep sanitation for hotels, hospitals, and condominiums.',
    color: '#1A4A9A',
  },
  {
    id: 'post-construction',
    icon: '🏗️',
    title: 'Post-Construction Cleaning',
    shortDesc: 'Thorough deep clean after renovation or construction works, ready for handover.',
    desc: 'Removal of construction debris, cement residue, paint splashes, and dust from all surfaces. We prepare your space for immediate use.',
    color: '#C8973A',
  },
  {
    id: 'carpet-floor',
    icon: '🪣',
    title: 'Carpet & Floor Cleaning',
    shortDesc: 'Professional carpet shampooing, floor polishing, and hard surface restoration.',
    desc: 'Using industrial-grade equipment, we deep clean carpets, polish marble and tiles, and restore hard floors to their original shine.',
    color: '#0B2C5F',
  },
  {
    id: 'fabric-upholstery',
    icon: '🛋️',
    title: 'Fabric & Upholstery Cleaning',
    shortDesc: 'Specialized cleaning for fabric furniture, sofas, curtains, and upholstery.',
    desc: 'We use eco-friendly solutions to remove stains, odours, and allergens from fabric seats, sofas, chairs, and curtains.',
    color: '#1A4A9A',
  },
  {
    id: 'shopping-mall',
    icon: '🏬',
    title: 'Shopping Mall Cleaning',
    shortDesc: 'High-traffic area cleaning services for retail malls and commercial complexes.',
    desc: 'Round-the-clock cleaning for common areas, toilets, concourses, F&B zones, and parking areas in shopping malls.',
    color: '#C8973A',
  },
  {
    id: 'industrial-cleanroom',
    icon: '🏭',
    title: 'Industrial & Cleanroom Cleaning',
    shortDesc: 'Specialized cleaning for factories, warehouses, and controlled environments.',
    desc: 'ISO-compliant cleanroom cleaning services and heavy-duty industrial facility maintenance using certified procedures and equipment.',
    color: '#0B2C5F',
  },
  {
    id: 'facade-cleaning',
    icon: '🏙️',
    title: 'High-Rise Façade Cleaning',
    shortDesc: 'Safe and professional exterior glass and wall cleaning for high-rise buildings.',
    desc: 'Using rope access and gondola systems, our certified team cleans exterior facades, glass curtain walls, and building exteriors safely.',
    color: '#1A4A9A',
  },
  {
    id: 'landscape',
    icon: '🌿',
    title: 'Landscape & Ground Maintenance',
    shortDesc: 'Complete landscaping, lawn care, and outdoor maintenance services.',
    desc: 'From lawn mowing and hedge trimming to garden design and irrigation maintenance, we keep outdoor areas pristine and beautiful.',
    color: '#10B981',
  },
  {
    id: 'waste-management',
    icon: '♻️',
    title: 'Waste / Linen / Pottering Service',
    shortDesc: 'Waste collection, linen management, and logistics support services.',
    desc: 'Scheduled waste collection, linen laundry and delivery, and general pottering services for hotels and healthcare facilities.',
    color: '#C8973A',
  },
  {
    id: 'car-wash',
    icon: '🚗',
    title: 'Car Wash Services',
    shortDesc: 'Professional auto-detailing and car wash for corporate fleets and individuals.',
    desc: 'On-site or at our facility, we provide full exterior wash, interior vacuuming, polishing, and fleet maintenance cleaning.',
    color: '#0B2C5F',
  },
];

export default function ServicesOverview() {
  const featured = allServices.slice(0, 8);

  return (
    <section className="section section-light services-overview">
      <div className="container">
        <ScrollReveal>
          <SectionHeader
            badge="What We Offer"
            title="Our Professional"
            highlight="Services"
            subtitle="From routine cleaning to specialized industrial services, we have the expertise and equipment to handle any job."
          />
        </ScrollReveal>

        <div className="services-grid">
          {featured.map((service, i) => (
            <ScrollReveal key={service.id} delay={i * 60}>
              <div className="service-card">
                <div className="service-card-icon" style={{ '--service-color': service.color }}>
                  {service.icon}
                </div>
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-desc">{service.shortDesc}</p>
                <Link to="/services" className="service-card-link">
                  Learn More <FiArrowRight size={14} />
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={300}>
          <div className="services-cta">
            <Link to="/services" className="btn btn-primary">
              View All Services
              <FiArrowRight />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
