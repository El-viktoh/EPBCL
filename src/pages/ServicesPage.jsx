import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2, 
  Leaf, 
  HandCoins,
  Sprout,
  Users,
  Handshake,
  TrendingUp,
  GraduationCap,
  CloudRain,
  ShieldCheck,
  LineChart,
  Calendar,
  Layers
} from 'lucide-react';
import { servicesData, investmentProgramData } from '../data/websiteContent';

const serviceIcons = {
  'access-to-finance': <HandCoins size={30} />,
  'agricultural-management-solutions': <Sprout size={30} />,
  'empowering-women-and-youth': <Users size={30} />,
  'inclusive-contract-farming-facilitation-and-coaching': <Handshake size={30} />,
  'market-linkages': <TrendingUp size={30} />,
  'business-development-and-training': <GraduationCap size={30} />,
  'climate-friendly-initiatives': <CloudRain size={30} />
};

const ServicesPage = () => {
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
            <span>Services</span>
          </div>

          <span className="section-subtitle" style={{ color: 'var(--accent)' }}>Our Comprehensive Services</span>
          <h1 style={{ color: 'var(--white)', fontSize: '3rem', marginBottom: '1rem' }}>
            Transformative Solutions for Agribusiness
          </h1>
          <p style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '1.2rem', maxWidth: '750px', lineHeight: 1.7 }}>
            End-to-end consulting, technical advisory, market linkage, and agribusiness investment services designed for sustainable commercial growth in Ghana.
          </p>
        </div>
      </section>

      {/* 1. All 7 Services Cards */}
      <section className="section-padding" style={{ backgroundColor: 'var(--white)' }}>
        <div className="container">
          <div className="section-title-wrap">
            <span className="section-subtitle">Core Service Offerings</span>
            <h2 className="section-title">Seven Strategic Pillars of Excellence</h2>
            <p className="section-description">
              Explore our seven distinct areas of intervention. Click on any service to view full operational details, deliverables, and coverage.
            </p>
          </div>

          <div className="services-grid">
            {servicesData.map((service, index) => (
              <div key={service.id} className="service-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
                    <div className="service-icon-box">
                      {serviceIcons[service.id] || <Leaf size={28} />}
                    </div>
                    <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent-dark)', background: 'var(--bg-subtle)', padding: '0.25rem 0.6rem', borderRadius: '4px' }}>
                      Pillar 0{index + 1}
                    </span>
                  </div>

                  <h3 className="service-title" style={{ fontSize: '1.4rem' }}>{service.title}</h3>
                  <p style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '0.88rem', marginBottom: '0.75rem', fontStyle: 'italic' }}>
                    "{service.tagline}"
                  </p>
                  <p className="service-desc">{service.description}</p>

                  <div style={{ marginBottom: '1.5rem', paddingTop: '1rem', borderTop: '1px solid #F1F5F9' }}>
                    <p style={{ fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                      Includes:
                    </p>
                    <ul style={{ listStyle: 'none', paddingLeft: 0, display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                      {service.covers.slice(0, 3).map((item, i) => (
                        <li key={i} style={{ fontSize: '0.85rem', color: 'var(--text-body)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                          <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--accent)' }} />
                          <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.title}</span>
                        </li>
                      ))}
                      {service.covers.length > 3 && (
                        <li style={{ fontSize: '0.8rem', color: 'var(--accent-dark)', fontWeight: 600, paddingTop: '0.2rem' }}>
                          + {service.covers.length - 3} more service areas
                        </li>
                      )}
                    </ul>
                  </div>
                </div>

                <div style={{ borderTop: '1px solid #E2E8F0', paddingTop: '1.25rem' }}>
                  <Link 
                    to={`/services/${service.slug}`} 
                    className="btn btn-outline btn-sm"
                    style={{ width: '100%', justifyContent: 'space-between' }}
                  >
                    <span>Read Full Service Details</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Agribusiness Investment Made Simple Section (PDF Page 7) */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-subtle)' }} id="investment">
        <div className="container">
          <div className="investment-banner" style={{ background: 'linear-gradient(145deg, #122824 0%, #1A3A34 50%, #2D5A50 100%)' }}>
            <div style={{ maxWidth: '880px', margin: '0 auto', textAlign: 'center' }}>
              <span className="badge badge-accent" style={{ marginBottom: '1rem', background: 'rgba(251, 193, 115, 0.25)', color: 'var(--accent-light)' }}>
                Farming & Agribusiness Investment Program
              </span>
              
              <h2 style={{ fontSize: '2.8rem', color: 'var(--white)', marginBottom: '0.5rem' }}>
                {investmentProgramData.title}
              </h2>
              
              <div style={{
                fontSize: '2rem',
                fontWeight: 800,
                color: 'var(--accent)',
                letterSpacing: '0.04em',
                marginBottom: '1.5rem',
                fontFamily: 'Outfit, sans-serif'
              }}>
                "{investmentProgramData.slogan}"
              </div>

              <p style={{
                fontSize: '1.15rem',
                color: 'rgba(255, 255, 255, 0.9)',
                lineHeight: 1.8,
                marginBottom: '1.75rem',
                maxWidth: '780px',
                margin: '0 auto 1.75rem auto'
              }}>
                {investmentProgramData.description}
              </p>

              <div style={{
                background: 'rgba(255, 255, 255, 0.08)',
                padding: '1rem 1.5rem',
                borderRadius: 'var(--radius-md)',
                display: 'inline-block',
                marginBottom: '3rem',
                border: '1px solid rgba(255, 255, 255, 0.15)'
              }}>
                <p style={{ fontSize: '1rem', color: 'var(--accent-light)', fontWeight: 600 }}>
                  {investmentProgramData.pitch}
                </p>
              </div>

              {/* 4 Key Reasons to Invest */}
              <div style={{ textAlign: 'left', marginBottom: '3.5rem' }}>
                <h3 style={{ color: 'var(--white)', fontSize: '1.6rem', textAlign: 'center', marginBottom: '2rem' }}>
                  Why Invest in EPBCL Farms?
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }} className="investment-benefits-grid">
                  {investmentProgramData.benefits.map((benefit, i) => (
                    <div 
                      key={i} 
                      style={{
                        background: 'rgba(255, 255, 255, 0.06)',
                        backdropFilter: 'blur(10px)',
                        padding: '1.75rem',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid rgba(255, 255, 255, 0.1)'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                        <div style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '50%',
                          background: 'var(--accent)',
                          color: '#122824',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: 700,
                          fontSize: '0.85rem'
                        }}>
                          {i + 1}
                        </div>
                        <h4 style={{ fontSize: '1.25rem', color: 'var(--accent)' }}>
                          {benefit.title}
                        </h4>
                      </div>
                      <p style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                        {benefit.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action buttons */}
              <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                <Link to="/contact" className="btn btn-accent" style={{ padding: '1rem 2.5rem', fontSize: '1.05rem' }}>
                  Enquire About Farm Investment <ArrowRight size={18} />
                </Link>
                <a href="tel:+233201975774" className="btn btn-outline-white" style={{ padding: '1rem 2rem' }}>
                  Call Investor Desk (+233 20 197 5774)
                </a>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .investment-benefits-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </section>

      {/* CTA Box */}
      <section style={{ padding: '5rem 0', backgroundColor: 'var(--white)', textAlign: 'center' }}>
        <div className="container">
          <h3 style={{ fontSize: '2.2rem', color: 'var(--primary)', marginBottom: '1rem' }}>
            Need a Customized Advisory Solution?
          </h3>
          <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto 2rem auto', fontSize: '1.05rem' }}>
            We work directly with commercial outgrowers, NGOs, donors, and financial institutions to tailor consulting engagements.
          </p>
          <Link to="/contact" className="btn btn-primary">
            Speak With Our Consultants <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
