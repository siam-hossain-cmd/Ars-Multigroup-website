import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiX, FiZoomIn } from 'react-icons/fi';
import ScrollReveal from '../components/shared/ScrollReveal';
import SectionHeader from '../components/shared/SectionHeader';
import CtaBanner from '../components/home/CtaBanner';
import './Gallery.css';

const galleryItems = [
  { id: 1, category: 'cleaning', title: 'Office Cleaning', icon: '🏢' },
  { id: 2, category: 'facade', title: 'High-Rise Façade', icon: '🏙️' },
  { id: 3, category: 'landscape', title: 'Landscape Maintenance', icon: '🌿' },
  { id: 4, category: 'manpower', title: 'Manpower Briefing', icon: '👷' },
  { id: 5, category: 'industrial', title: 'Cleanroom Sanitation', icon: '🏭' },
  { id: 6, category: 'cleaning', title: 'Carpet Cleaning', icon: '🪣' },
  { id: 7, category: 'facade', title: 'Gondola Operations', icon: '🗼' },
  { id: 8, category: 'cleaning', title: 'Mall Maintenance', icon: '🏬' },
  { id: 9, category: 'manpower', title: 'Staff Deployment', icon: '👥' },
];

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'cleaning', label: 'Commercial Cleaning' },
  { id: 'facade', label: 'Façade Cleaning' },
  { id: 'manpower', label: 'Manpower Supply' },
  { id: 'landscape', label: 'Landscaping' },
  { id: 'industrial', label: 'Industrial' },
];

export default function Gallery() {
  const [filter, setFilter] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  useEffect(() => {
    document.title = 'Gallery & Projects – ARS Multigroup Malaysia';
  }, []);

  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [lightboxIndex]);

  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  return (
    <>
      <div className="page-hero">
        <div className="container page-hero-content">
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <span>Gallery</span>
          </div>
          <h1>Our Projects & Expertise</h1>
          <p>A visual showcase of our professional services in action across various industries.</p>
        </div>
      </div>

      <section className="section gallery-page">
        <div className="container">
          <ScrollReveal>
            <SectionHeader
              badge="Our Work"
              title="Gallery of"
              highlight="Excellence"
              subtitle="Browse through our recent projects, site operations, and professional deployments."
            />
          </ScrollReveal>

          {/* Filters */}
          <ScrollReveal delay={100}>
            <div className="gallery-filters">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  className={`filter-btn ${filter === cat.id ? 'active' : ''}`}
                  onClick={() => setFilter(cat.id)}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Masonry Grid */}
          <div className="gallery-grid">
            {filteredItems.map((item, index) => (
              <ScrollReveal key={item.id} delay={(index % 4) * 50}>
                <div 
                  className="gallery-item"
                  onClick={() => openLightbox(index)}
                >
                  <div className="gallery-img-placeholder">
                    <span>{item.icon}</span>
                  </div>
                  <div className="gallery-overlay">
                    <FiZoomIn className="zoom-icon" />
                    <h4>{item.title}</h4>
                    <span className="gallery-cat">{categories.find(c => c.id === item.category)?.label}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>
            <FiX size={24} />
          </button>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <div className="lightbox-img-placeholder">
              <span>{filteredItems[lightboxIndex].icon}</span>
            </div>
            <div className="lightbox-caption">
              <h4>{filteredItems[lightboxIndex].title}</h4>
              <p>{categories.find(c => c.id === filteredItems[lightboxIndex].category)?.label}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
