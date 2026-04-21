import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import ScrollReveal from '../shared/ScrollReveal';
import SectionHeader from '../shared/SectionHeader';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Ahmad Faizal',
    role: 'Facilities Manager',
    company: 'Tech Park KL',
    quote: 'ARS Multigroup has been our cleaning partner for 3 years. Their team is consistently professional, punctual, and thorough. Highly recommend for any corporate facility.',
    rating: 5,
    initial: 'AF',
  },
  {
    name: 'Siti Norazlina',
    role: 'Property Manager',
    company: 'Tropicana Residences',
    quote: 'Exceptional landscape and cleaning services for our condominium. The residents are very satisfied with the cleanliness and upkeep of our common areas.',
    rating: 5,
    initial: 'SN',
  },
  {
    name: 'Rajesh Kumar',
    role: 'Operations Director',
    company: 'Medilink Hospital',
    quote: 'For healthcare, hygiene is non-negotiable. ARS Multigroup understands this perfectly and delivers consistently high standards. We are very pleased with their service.',
    rating: 5,
    initial: 'RK',
  },
];

export default function Testimonials() {
  return (
    <section className="section testimonials-section">
      <div className="container">
        <ScrollReveal>
          <SectionHeader
            badge="Client Testimonials"
            title="What Our"
            highlight="Clients Say"
            subtitle="Trusted by hundreds of businesses across Malaysia. Here's what some of them have to say."
          />
        </ScrollReveal>

        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 100}>
              <div className="testimonial-card">
                <div className="testimonial-stars">
                  {'★'.repeat(t.rating)}
                </div>
                <blockquote className="testimonial-quote">
                  "{t.quote}"
                </blockquote>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">{t.initial}</div>
                  <div>
                    <div className="testimonial-name">{t.name}</div>
                    <div className="testimonial-role">{t.role}, {t.company}</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={300}>
          <div className="testimonials-cta">
            <p>Ready to join our satisfied clients?</p>
            <Link to="/contact" className="btn btn-primary">
              Request a Quotation
              <FiArrowRight />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
