import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ZoomIn, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Filter, 
  Sparkles,
  MapPin,
  Camera
} from 'lucide-react';
import { galleryItems } from '../data/websiteContent';

const categories = [
  'All',
  'Field Operations',
  'Training & Workshops',
  'Women & Youth',
  'Climate & Tech',
  'Market Linkages',
  'Agribusiness Investment'
];

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeImageIndex, setActiveImageIndex] = useState(null);

  const filteredItems = selectedCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const openLightbox = (index) => {
    setActiveImageIndex(index);
  };

  const closeLightbox = () => {
    setActiveImageIndex(null);
  };

  const nextImage = () => {
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex + 1) % filteredItems.length);
    }
  };

  const prevImage = () => {
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <div>
      {/* Header */}
      <section style={{
        padding: '8.5rem 0 4rem 0',
        backgroundColor: 'var(--primary)',
        color: 'var(--white)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '500px',
          height: '100%',
          background: 'radial-gradient(circle, rgba(251, 193, 115, 0.2) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="breadcrumb-nav" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
            <Link to="/" style={{ color: 'var(--accent)' }}>Home</Link>
            <span>/</span>
            <span>Gallery</span>
          </div>

          <span className="section-subtitle" style={{ color: 'var(--accent)' }}>Visual Portfolio</span>
          <h1 style={{ color: 'var(--white)', fontSize: '3rem', marginBottom: '1rem' }}>
            Image Gallery
          </h1>
          <p style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '1.2rem', maxWidth: '750px', lineHeight: 1.7 }}>
            A visual journey showcasing EPBCL's field operations, farmer group trainings, climate-smart innovations, agro-processing facilities, and bumper harvest milestones across Ghana.
          </p>
        </div>
      </section>

      {/* Main Gallery Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--white)' }}>
        <div className="container">
          {/* Category Filter Pills */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.6rem',
            justifyContent: 'center',
            marginBottom: '3rem'
          }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '0.6rem 1.25rem',
                  borderRadius: '50px',
                  border: selectedCategory === cat ? '2px solid var(--primary)' : '1px solid #CBD5E1',
                  background: selectedCategory === cat ? 'var(--primary)' : 'var(--white)',
                  color: selectedCategory === cat ? 'var(--white)' : 'var(--text-dark)',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'var(--transition)'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery Items Grid (21 Slots from PDF Page 11) */}
          <div className="gallery-grid">
            {filteredItems.map((item, index) => (
              <div 
                key={item.id} 
                className="gallery-card"
                onClick={() => openLightbox(index)}
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="gallery-image"
                  loading="lazy"
                />
                <div className="gallery-overlay">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <span style={{
                      background: 'var(--accent)',
                      color: '#122824',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      padding: '0.2rem 0.6rem',
                      borderRadius: '4px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em'
                    }}>
                      {item.category}
                    </span>
                    <div style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: 'rgba(255, 255, 255, 0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--white)'
                    }}>
                      <ZoomIn size={16} />
                    </div>
                  </div>
                  <h4 style={{ fontSize: '1.1rem', color: 'var(--white)', marginBottom: '0.25rem', fontWeight: 700 }}>
                    {item.title}
                  </h4>
                  <p style={{
                    fontSize: '0.82rem',
                    color: 'rgba(255, 255, 255, 0.85)',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                  }}>
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3.5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            Showing {filteredItems.length} of 21 documented project slots across Ghana.
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeImageIndex !== null && filteredItems[activeImageIndex] && (
        <div className="modal-backdrop" onClick={closeLightbox}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closeLightbox} aria-label="Close Preview">
              <X size={20} />
            </button>

            <div style={{ position: 'relative', maxHeight: '520px', overflow: 'hidden', background: '#0F172A' }}>
              <img 
                src={filteredItems[activeImageIndex].image} 
                alt={filteredItems[activeImageIndex].title} 
                style={{ width: '100%', maxHeight: '520px', objectFit: 'contain' }}
              />

              {/* Prev / Next controls */}
              <button 
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                style={{
                  position: 'absolute',
                  left: '1rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'rgba(0, 0, 0, 0.5)',
                  color: 'white',
                  border: 'none',
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
                aria-label="Previous image"
              >
                <ChevronLeft size={24} />
              </button>

              <button 
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                style={{
                  position: 'absolute',
                  right: '1rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'rgba(0, 0, 0, 0.5)',
                  color: 'white',
                  border: 'none',
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
                aria-label="Next image"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            <div style={{ padding: '1.75rem 2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <span style={{
                  background: 'rgba(251, 193, 115, 0.2)',
                  color: '#A3520F',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  padding: '0.25rem 0.75rem',
                  borderRadius: '50px'
                }}>
                  {filteredItems[activeImageIndex].category}
                </span>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  Slot {activeImageIndex + 1} of {filteredItems.length}
                </span>
              </div>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>
                {filteredItems[activeImageIndex].title}
              </h3>
              <p style={{ color: 'var(--text-body)', fontSize: '1rem', lineHeight: 1.6 }}>
                {filteredItems[activeImageIndex].caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
