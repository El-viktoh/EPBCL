import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  TrendingUp, 
  Leaf, 
  ChevronRight,
  HandCoins,
  Sprout,
  Users,
  Handshake,
  GraduationCap,
  CloudRain
} from 'lucide-react';
import { servicesData, investmentProgramData } from '../data/websiteContent';
import StatisticsCounter from '../components/StatisticsCounter';
import TestimonialSection from '../components/TestimonialSection';
import heroImage from '../assets/photos/hero-women-forum.jpg';
import aboutImage from '../assets/photos/facilitator-women-forum.jpg';

const serviceIcons = {
  'access-to-finance': <HandCoins size={28} />,
  'agricultural-management-solutions': <Sprout size={28} />,
  'empowering-women-and-youth': <Users size={28} />,
  'inclusive-contract-farming-facilitation-and-coaching': <Handshake size={28} />,
  'market-linkages': <TrendingUp size={28} />,
  'business-development-and-training': <GraduationCap size={28} />,
  'climate-friendly-initiatives': <CloudRain size={28} />
};

const HomePage = () => {
  return (
    <div>
      {/* 1. Hero Banner */}
      <section className="hero-section">
        <div 
          className="hero-bg-overlay"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="hero-gradient-overlay" />

        <div className="container hero-content">
          <div className="badge badge-accent" style={{ marginBottom: '1.5rem', background: 'rgba(251, 193, 115, 0.25)', color: 'var(--accent-light)' }}>
            <Sparkles size={14} /> Premier Agricultural & Business Advisory
          </div>
          
          <h1 className="hero-headline">
            Innovating Solutions for a <span style={{ color: 'var(--accent)' }}>Sustainable Future</span>.
          </h1>

          <p className="hero-subhead">
            Eastern Prime Business Consult Limited (EPBCL) is dedicated to growth, efficiency, and sustainability in agriculture. We deliver tailored consulting, market linkages, and innovative financing to empower farmers, agribusinesses, and SMEs across Ghana.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            <Link to="/contact" className="btn btn-accent">
              Get In Touch <ArrowRight size={18} />
            </Link>
            <Link to="/services" className="btn btn-outline-white">
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Who We Are & Why Choose Us Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--white)' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr',
            gap: '4rem',
            alignItems: 'center'
          }} className="who-we-are-grid">
            <div>
              <span className="section-subtitle">Who We Are</span>
              <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>
                Strategic Support for Agribusinesses, Farmers & SMEs
              </h2>
              
              <div style={{
                background: 'var(--bg-light)',
                borderLeft: '4px solid var(--accent)',
                padding: '1.5rem',
                borderRadius: '0 var(--radius-md) var(--radius-md) 0',
                marginBottom: '1.75rem',
                fontSize: '1.05rem',
                color: 'var(--primary-dark)',
                fontWeight: 500,
                lineHeight: 1.7
              }}>
                "EPBCL is a consulting firm focused on growth, efficiency and sustainability in agriculture. It offers tailored consulting and innovative solutions, giving strategic support to farmers, agribusinesses and SMEs so they can compete and succeed."
              </div>

              <div style={{ marginTop: '2rem' }}>
                <span className="section-subtitle" style={{ color: 'var(--primary)' }}>Why Choose Us</span>
                <p style={{ color: 'var(--text-body)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                  The company highlights its expertise, client-centred approach and deep knowledge of agriculture, positioning itself as a trusted partner for building resilient, profitable agribusinesses and turning challenges into opportunities for sustainable growth.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <CheckCircle2 size={18} color="var(--primary)" />
                    <span style={{ fontWeight: 600, fontSize: '0.92rem' }}>Deep Agricultural Expertise</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <CheckCircle2 size={18} color="var(--primary)" />
                    <span style={{ fontWeight: 600, fontSize: '0.92rem' }}>Client-Centred Approach</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <CheckCircle2 size={18} color="var(--primary)" />
                    <span style={{ fontWeight: 600, fontSize: '0.92rem' }}>Proven Market Linkages</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <CheckCircle2 size={18} color="var(--primary)" />
                    <span style={{ fontWeight: 600, fontSize: '0.92rem' }}>End-to-End Execution</span>
                  </div>
                </div>

                <div style={{ marginTop: '2.5rem' }}>
                  <Link to="/about" className="btn btn-outline">
                    Read More About Us <ChevronRight size={16} />
                  </Link>
                </div>
              </div>
            </div>

            <div style={{ position: 'relative' }}>
              <div style={{
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                boxShadow: '0 25px 50px -12px rgba(26, 58, 52, 0.15)',
                border: '1px solid #E2E8F0',
                aspectRatio: '4/4.5'
              }}>
                <img 
                  src={aboutImage} 
                  alt="EPBCL facilitator leading a women's community forum" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              {/* Floating Pill Card */}
              <div style={{
                position: 'absolute',
                bottom: '-25px',
                left: '-25px',
                background: 'var(--white)',
                padding: '1.5rem',
                borderRadius: 'var(--radius-md)',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.12)',
                border: '1px solid #E2E8F0',
                maxWidth: '280px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                  <div style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    background: 'rgba(251, 193, 115, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--primary)'
                  }}>
                    <ShieldCheck size={20} />
                  </div>
                  <span style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--primary)' }}>Trusted Partner</span>
                </div>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                  Empowering over 2,000 smallholders with sustainable supply chains and market integration.
                </p>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .who-we-are-grid {
              grid-template-columns: 1fr !important;
              gap: 3rem !important;
            }
          }
        `}</style>
      </section>

      {/* 3. Our Services Section (All 7 summary cards with Learn More) */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-light)' }}>
        <div className="container">
          <div className="section-title-wrap">
            <span className="section-subtitle">What We Do</span>
            <h2 className="section-title">Our Specialized Services</h2>
            <p className="section-description">
              Tailored consulting and innovative interventions delivering measurable results across the agribusiness value chain.
            </p>
          </div>

          <div className="services-grid">
            {servicesData.map((service) => (
              <div key={service.id} className="service-card">
                <div>
                  <div className="service-icon-box">
                    {serviceIcons[service.id] || <Leaf size={28} />}
                  </div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-desc">{service.shortDescription}</p>
                </div>
                
                <Link to={`/services/${service.slug}`} className="service-link">
                  <span>Learn More</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <Link to="/services" className="btn btn-primary">
              View Comprehensive Services Directory <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Statistics Counter (PDF Page 4) */}
      <StatisticsCounter />

      {/* 5. Agribusiness Investment Made Simple Section (Teaser on Home Page) */}
      <section className="section-padding" style={{ backgroundColor: 'var(--white)' }}>
        <div className="container">
          <div className="investment-banner">
            <div style={{ maxWidth: '780px' }}>
              <div className="badge badge-accent" style={{ marginBottom: '1.25rem' }}>
                Featured Investment Opportunity
              </div>
              <h2 style={{ fontSize: '2.5rem', color: 'var(--white)', marginBottom: '0.75rem' }}>
                {investmentProgramData.title}
              </h2>
              <div className="investment-slogan">
                "{investmentProgramData.slogan}"
              </div>
              <p style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '2rem' }}>
                {investmentProgramData.description}
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginBottom: '2.5rem' }} className="investment-features-grid">
                {investmentProgramData.benefits.map((b, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                    <CheckCircle2 size={18} color="var(--accent)" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span style={{ fontSize: '0.92rem', color: 'var(--white)' }}>
                      <strong>{b.title}:</strong> {b.description}
                    </span>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link to="/services" className="btn btn-accent">
                  Learn How to Invest <ArrowRight size={16} />
                </Link>
                <Link to="/contact" className="btn btn-outline-white">
                  Contact Investment Desk
                </Link>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .investment-features-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </section>

      {/* 6. Testimonial Section (PDF Page 4) */}
      <TestimonialSection />

      {/* 7. Call To Action Footer Banner */}
      <section style={{
        padding: '5rem 0',
        backgroundColor: 'var(--bg-light)',
        borderTop: '1px solid #E2E8F0'
      }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-subtitle">Take The Next Step</span>
          <h2 style={{ fontSize: '2.4rem', color: 'var(--primary)', marginBottom: '1rem' }}>
            Ready to Accelerate Your Agribusiness Growth?
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '640px', margin: '0 auto 2.5rem auto', fontSize: '1.05rem' }}>
            Speak with our experienced agribusiness and financial consultants in Koforidua and Kibi to discover tailored solutions for your enterprise.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary">
              Schedule a Consultation <ArrowRight size={16} />
            </Link>
            <Link to="/gallery" className="btn btn-outline">
              View Our Field Work Gallery
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
