import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiMapPin, FiPhone, FiMail, FiClock, FiSend } from 'react-icons/fi';
import ScrollReveal from '../components/shared/ScrollReveal';
import SectionHeader from '../components/shared/SectionHeader';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', service: '', message: ''
  });
  const [status, setStatus] = useState('');

  useEffect(() => {
    document.title = 'Contact Us – ARS Multigroup Malaysia';
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      setTimeout(() => setStatus(''), 3000);
    }, 1500);
  };

  return (
    <>
      <div className="page-hero">
        <div className="container page-hero-content">
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <span>Contact Us</span>
          </div>
          <h1>Get in Touch</h1>
          <p>Reach out to us for enquiries, quotations, or to discuss your facility management needs.</p>
        </div>
      </div>

      <section className="section contact-page">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Info */}
            <div className="contact-info-panel">
              <ScrollReveal>
                <SectionHeader
                  badge="Contact Information"
                  title="We'd Love to"
                  highlight="Hear From You"
                  centered={false}
                />
              </ScrollReveal>
              
              <ScrollReveal delay={100}>
                <div className="contact-details">
                  <div className="contact-detail-item">
                    <div className="cd-icon"><FiMapPin /></div>
                    <div className="cd-content">
                      <h4>Head Office</h4>
                      <p>No 5-02 (5th Floor), Plaza Prima Batu 4 ½,<br />Jalan Klang Lama, 58200 Kuala Lumpur.</p>
                    </div>
                  </div>
                  
                  <div className="contact-detail-item">
                    <div className="cd-icon"><FiPhone /></div>
                    <div className="cd-content">
                      <h4>Phone Requirements</h4>
                      <p>
                        <a href="tel:0379726456">03-7972 6456</a> (Office)
                      </p>
                    </div>
                  </div>
                  
                  <div className="contact-detail-item">
                    <div className="cd-icon"><FiMail /></div>
                    <div className="cd-content">
                      <h4>Email Us</h4>
                      <p>
                        <a href="mailto:info@arsmultigroup.com.my">info@arsmultigroup.com.my</a><br />
                        <a href="mailto:sales@arsmultigroup.com.my">sales@arsmultigroup.com.my</a>
                      </p>
                    </div>
                  </div>

                  <div className="contact-detail-item">
                    <div className="cd-icon"><FiClock /></div>
                    <div className="cd-content">
                      <h4>Business Hours</h4>
                      <p>Monday – Friday: 8:00 AM – 6:00 PM<br />Saturday: 9:00 AM – 1:00 PM<br />Sunday & Public Holidays: Closed</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Form */}
            <div className="contact-form-panel">
              <ScrollReveal delay={200}>
                <div className="form-card">
                  <h3>Request a Free Quotation</h3>
                  <p className="form-intro">Fill out the form below and our team will get back to you within 24 hours.</p>
                  
                  <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="name">Full Name *</label>
                        <input type="text" id="name" name="name" className="form-control" value={formData.name} onChange={handleChange} required placeholder="John Doe" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="phone">Phone Number *</label>
                        <input type="tel" id="phone" name="phone" className="form-control" value={formData.phone} onChange={handleChange} required placeholder="+60 1x-xxx xxxx" />
                      </div>
                    </div>
                    
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="email">Email Address *</label>
                        <input type="email" id="email" name="email" className="form-control" value={formData.email} onChange={handleChange} required placeholder="john@company.com" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="service">Interested Service *</label>
                        <select id="service" name="service" className="form-control" value={formData.service} onChange={handleChange} required>
                          <option value="" disabled>Select a service</option>
                          <option value="General Cleaning">General Cleaning</option>
                          <option value="Post-Construction">Post-Construction Cleaning</option>
                          <option value="Industrial Cleaning">Industrial Cleaning</option>
                          <option value="Manpower Supply">Manpower Supply</option>
                          <option value="Landscape">Landscape Maintenance</option>
                          <option value="Other">Other Services</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="form-group w-full">
                      <label htmlFor="message">Message / Requirements</label>
                      <textarea id="message" name="message" className="form-control" value={formData.message} onChange={handleChange} placeholder="Please provide details about your property size, frequency of service needed, etc." />
                    </div>
                    
                    <button type="submit" className={`btn btn-primary submit-btn ${status}`} disabled={status === 'sending'}>
                      {status === 'sending' ? 'Sending...' : status === 'success' ? 'Message Sent!' : (
                        <>Send Request <FiSend /></>
                      )}
                    </button>
                    
                    {status === 'success' && <div className="form-success">Thank you! We will contact you shortly.</div>}
                  </form>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section map-section">
        <ScrollReveal>
          <div className="map-container">
            <iframe
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Plaza%20Prima,%20Batu%204%201/2,%20Jalan%20Klang%20Lama,%2058200%20Kuala%20Lumpur+(ARS%20Multigroup)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="ARS Multigroup Location"
            ></iframe>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
