import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Phone, 
  Mail, 
  ChevronRight, 
  MapPin, 
  Layers, 
  Award,
  Sparkles,
  HelpCircle,
  TrendingUp,
  FileCheck
} from 'lucide-react';
import { servicesData, siteInfo } from '../data/websiteContent';

const ServiceDetailPage = () => {
  const { slug } = useParams();
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  // Other services for sidebar
  const otherServices = servicesData.filter((s) => s.slug !== slug);

  return (
    <div>
      {/* Hero Header */}
      <section style={{
        padding: '8.5rem 0 4.5rem 0',
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
          background: 'radial-gradient(circle, rgba(251, 193, 115, 0.22) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="breadcrumb-nav" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
            <Link to="/" style={{ color: 'var(--accent)' }}>Home</Link>
            <span>/</span>
            <Link to="/services" style={{ color: 'var(--accent)' }}>Services</Link>
            <span>/</span>
            <span>{service.title}</span>
          </div>

          <span className="section-subtitle" style={{ color: 'var(--accent)', letterSpacing: '0.12em' }}>
            Individual Service Focus
          </span>
          <h1 style={{ color: 'var(--white)', fontSize: '3rem', marginBottom: '1rem', maxWidth: '850px' }}>
            {service.title}
          </h1>
          <p style={{
            fontSize: '1.35rem',
            color: 'var(--accent-light)',
            fontWeight: 600,
            fontStyle: 'italic',
            marginBottom: '1.25rem',
            maxWidth: '800px'
          }}>
            "{service.tagline}"
          </p>
          <p style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '1.15rem', maxWidth: '780px', lineHeight: 1.7 }}>
            {service.description}
          </p>
        </div>
      </section>

      {/* Main Content Layout with Sidebar */}
      <section className="section-padding" style={{ backgroundColor: 'var(--white)' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr',
            gap: '3.5rem'
          }} className="service-detail-grid">
            {/* Left Content Area */}
            <div>
              {/* Overview Box */}
              <div style={{
                background: 'var(--bg-light)',
                padding: '2.25rem',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid #E2E8F0',
                marginBottom: '3rem'
              }}>
                <h2 style={{ fontSize: '1.6rem', color: 'var(--primary)', marginBottom: '1rem' }}>
                  Service Overview
                </h2>
                <p style={{ fontSize: '1.05rem', color: 'var(--text-body)', lineHeight: 1.8 }}>
                  {service.description}
                </p>
              </div>

              {/* What the Service Covers (PDF Specification) */}
              <div style={{ marginBottom: '3.5rem' }}>
                <span className="section-subtitle">Scope of Practice</span>
                <h2 style={{ fontSize: '2rem', color: 'var(--primary)', marginBottom: '1.75rem' }}>
                  What the Service Covers
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {service.covers.map((item, index) => (
                    <div 
                      key={index} 
                      style={{
                        padding: '1.75rem',
                        background: 'var(--white)',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid #E2E8F0',
                        boxShadow: 'var(--card-shadow)',
                        transition: 'var(--transition)'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                        <div style={{
                          width: '36px',
                          height: '36px',
                          borderRadius: '50%',
                          background: 'rgba(26, 58, 52, 0.08)',
                          color: 'var(--primary)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: 700,
                          fontSize: '0.9rem',
                          flexShrink: 0,
                          marginTop: '2px'
                        }}>
                          {index + 1}
                        </div>
                        <div>
                          <h3 style={{ fontSize: '1.25rem', color: 'var(--primary)', marginBottom: '0.4rem' }}>
                            {item.title}
                          </h3>
                          <p style={{ color: 'var(--text-muted)', fontSize: '0.96rem', lineHeight: 1.65 }}>
                            {item.detail}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Special Service Features from PDF */}
              {service.whyChoose && (
                <div style={{
                  background: 'linear-gradient(135deg, rgba(26, 58, 52, 0.04) 0%, rgba(251, 193, 115, 0.1) 100%)',
                  padding: '2.25rem',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid rgba(251, 193, 115, 0.3)',
                  marginBottom: '3rem'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
                    <ShieldCheck size={22} color="var(--primary)" />
                    <h3 style={{ fontSize: '1.35rem', color: 'var(--primary)', fontWeight: 700 }}>
                      Why Choose EPBCL for Contract Farming?
                    </h3>
                  </div>
                  <p style={{ color: 'var(--text-body)', lineHeight: 1.7, fontSize: '1rem', marginBottom: '1.5rem' }}>
                    {service.whyChoose}
                  </p>

                  {service.successStories && (
                    <div style={{
                      background: 'var(--white)',
                      padding: '1.5rem',
                      borderRadius: 'var(--radius-md)',
                      borderLeft: '4px solid var(--accent)'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                        <Award size={18} color="var(--accent-dark)" />
                        <h4 style={{ fontSize: '1.05rem', color: 'var(--primary)', fontWeight: 700 }}>
                          Documented Track Record:
                        </h4>
                      </div>
                      <p style={{ color: 'var(--text-body)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                        {service.successStories}
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* Sectors & Highlights */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '1.5rem',
                marginBottom: '3rem'
              }} className="service-pillars-subgrid">
                <div style={{
                  background: 'var(--bg-subtle)',
                  padding: '1.75rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid #E2E8F0'
                }}>
                  <h4 style={{ fontSize: '1.1rem', color: 'var(--primary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Layers size={18} color="var(--accent)" /> Target Sectors & Value Chains
                  </h4>
                  <ul style={{ listStyle: 'none', paddingLeft: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    {service.targetSectors.map((sector, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-body)' }}>
                        <CheckCircle2 size={15} color="var(--primary)" />
                        <span>{sector}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{
                  background: 'var(--bg-subtle)',
                  padding: '1.75rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid #E2E8F0'
                }}>
                  <h4 style={{ fontSize: '1.1rem', color: 'var(--primary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Sparkles size={18} color="var(--accent)" /> Key Impact Highlights
                  </h4>
                  <ul style={{ listStyle: 'none', paddingLeft: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    {service.highlights.map((highlight, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-body)' }}>
                        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent)', marginTop: '7px', flexShrink: 0 }} />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Banner */}
              <div style={{
                background: 'linear-gradient(135deg, var(--primary) 0%, #15312C 100%)',
                padding: '2.5rem',
                borderRadius: 'var(--radius-lg)',
                color: 'var(--white)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '1.5rem'
              }}>
                <div>
                  <h3 style={{ fontSize: '1.5rem', color: 'var(--white)', marginBottom: '0.5rem' }}>
                    Engage EPBCL for {service.title}
                  </h3>
                  <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.95rem' }}>
                    Contact our specialists to design a structured consulting intervention.
                  </p>
                </div>
                <Link to="/contact" className="btn btn-accent">
                  Book a Consultation <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Right Sidebar */}
            <div>
              {/* Quick Contact Desk Widget */}
              <div style={{
                background: 'var(--white)',
                borderRadius: 'var(--radius-lg)',
                padding: '2rem',
                border: '1px solid #E2E8F0',
                boxShadow: 'var(--card-shadow)',
                marginBottom: '2rem'
              }}>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--primary)', marginBottom: '1.25rem', paddingBottom: '0.75rem', borderBottom: '1px solid #F1F5F9' }}>
                  Consultation Helpline
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
                  Speak directly with an EPBCL advisory officer about {service.title.toLowerCase()}.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
                  <a href={`tel:${siteInfo.phoneLink}`} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-dark)', fontWeight: 600, fontSize: '0.95rem' }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(26, 58, 52, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
                      <Phone size={16} />
                    </div>
                    <span>{siteInfo.phone}</span>
                  </a>

                  <a href={`mailto:${siteInfo.email}`} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-dark)', fontWeight: 600, fontSize: '0.95rem' }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(26, 58, 52, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
                      <Mail size={16} />
                    </div>
                    <span>{siteInfo.email}</span>
                  </a>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: 'var(--text-body)', fontSize: '0.88rem' }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(26, 58, 52, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', flexShrink: 0 }}>
                      <MapPin size={16} />
                    </div>
                    <span>{siteInfo.location}</span>
                  </div>
                </div>

                <Link to="/contact" className="btn btn-primary btn-sm" style={{ width: '100%' }}>
                  Send an Inquiry
                </Link>
              </div>

              {/* Other Services Menu */}
              <div style={{
                background: 'var(--bg-light)',
                borderRadius: 'var(--radius-lg)',
                padding: '2rem',
                border: '1px solid #E2E8F0'
              }}>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--primary)', marginBottom: '1.25rem', paddingBottom: '0.5rem', borderBottom: '1px solid #E2E8F0' }}>
                  All Services
                </h3>
                <ul style={{ listStyle: 'none', paddingLeft: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {servicesData.map((s) => (
                    <li key={s.id}>
                      <Link 
                        to={`/services/${s.slug}`}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '0.65rem 0.85rem',
                          borderRadius: 'var(--radius-sm)',
                          fontSize: '0.88rem',
                          fontWeight: s.slug === slug ? 700 : 500,
                          color: s.slug === slug ? 'var(--white)' : 'var(--text-dark)',
                          background: s.slug === slug ? 'var(--primary)' : 'transparent',
                          transition: 'var(--transition)'
                        }}
                      >
                        <span>{s.title}</span>
                        <ChevronRight size={14} />
                      </Link>
                    </li>
                  ))}
                </ul>

                <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid #E2E8F0' }}>
                  <Link 
                    to="/services#investment" 
                    style={{ 
                      fontSize: '0.85rem', 
                      color: 'var(--accent-dark)', 
                      fontWeight: 700, 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '0.3rem' 
                    }}
                  >
                    EPBCL Investment Program <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .service-detail-grid {
              grid-template-columns: 1fr !important;
            }
            .service-pillars-subgrid {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </section>
    </div>
  );
};

export default ServiceDetailPage;
