import React from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  Target, 
  Eye, 
  ShieldCheck, 
  Mail, 
  Phone, 
  Briefcase, 
  Award, 
  ArrowRight,
  Sparkles,
  BookOpen
} from 'lucide-react';
import { teamData, focusAreas } from '../data/websiteContent';
import workshopImage from '../assets/photos/training-hall-session.jpg';

const AboutPage = () => {
  return (
    <div>
      {/* Page Header */}
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
            <span>About Us</span>
          </div>

          <span className="section-subtitle" style={{ color: 'var(--accent)' }}>About EPBCL</span>
          <h1 style={{ color: 'var(--white)', fontSize: '3rem', marginBottom: '1rem' }}>
            Who We Are & What Drives Us
          </h1>
          <p style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '1.2rem', maxWidth: '750px', lineHeight: 1.7 }}>
            Eastern Prime Business Consult Limited bridges the gap between grassroots agricultural potential and institutional business excellence across Ghana and sub-Saharan Africa.
          </p>
        </div>
      </section>

      {/* 1. Who We Are & Why Choose Us Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--white)' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1.1fr 1fr',
            gap: '4rem',
            alignItems: 'center'
          }} className="about-intro-grid">
            <div>
              <span className="section-subtitle">Our Identity</span>
              <h2 className="section-title">Who We Are</h2>
              <div style={{
                background: 'var(--bg-light)',
                borderLeft: '4px solid var(--primary)',
                padding: '1.5rem',
                borderRadius: '0 var(--radius-md) var(--radius-md) 0',
                marginBottom: '1.75rem',
                fontSize: '1.08rem',
                color: 'var(--primary-dark)',
                fontWeight: 500,
                lineHeight: 1.75
              }}>
                "EPBCL is a consulting firm focused on growth, efficiency and sustainability in agriculture. It offers tailored consulting and innovative solutions, giving strategic support to farmers, agribusinesses and SMEs so they can compete and succeed."
              </div>

              <h3 style={{ fontSize: '1.5rem', color: 'var(--primary)', marginBottom: '0.75rem', marginTop: '2rem' }}>
                Why Choose Us
              </h3>
              <p style={{ color: 'var(--text-body)', fontSize: '1rem', lineHeight: 1.75, marginBottom: '1.5rem' }}>
                The company highlights its expertise, client-centred approach and deep knowledge of agriculture, positioning itself as a trusted partner for building resilient, profitable agribusinesses and turning challenges into opportunities for sustainable growth.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <CheckCircle2 size={20} color="var(--primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-body)' }}>
                    <strong>Deep Contextual Knowledge:</strong> Active experience across maize, rice, cocoa, pineapple, palm oil, horticulture, poultry, and aquaculture.
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <CheckCircle2 size={20} color="var(--primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-body)' }}>
                    <strong>Multilateral Partnership Network:</strong> Working with development partners, donors, financial institutions, government ministries, investors, NGOs, and community groups.
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <CheckCircle2 size={20} color="var(--primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-body)' }}>
                    <strong>Sustainable Impact Focus:</strong> Aligning agricultural commercialization with climate resilience, women empowerment, and youth participation.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div style={{
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.08)',
                border: '1px solid #E2E8F0',
                position: 'relative'
              }}>
                <img 
                  src={workshopImage} 
                  alt="EPBCL farmer training session in Ghana" 
                  style={{ width: '100%', height: '440px', objectFit: 'cover' }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(18, 40, 36, 0.8) 0%, transparent 60%)',
                  display: 'flex',
                  alignItems: 'flex-end',
                  padding: '2rem'
                }}>
                  <div style={{ color: 'var(--white)' }}>
                    <p style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.25rem' }}>Eastern Region Base</p>
                    <p style={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.8)' }}>Headquartered at Old estate ssnit traffic light, Koforidua and Kibi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .about-intro-grid {
              grid-template-columns: 1fr !important;
              gap: 2.5rem !important;
            }
          }
        `}</style>
      </section>

      {/* 2. Core Values & Mission/Vision */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-subtle)' }}>
        <div className="container">
          <div className="section-title-wrap">
            <span className="section-subtitle">Our Foundations</span>
            <h2 className="section-title">Mission, Vision & Core Values</h2>
            <p className="section-description">
              The institutional principles guiding our advisory and field implementation.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }} className="values-grid">
            <div className="card" style={{ textAlign: 'left' }}>
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: 'var(--radius-md)',
                background: 'rgba(26, 58, 52, 0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--primary)',
                marginBottom: '1.5rem'
              }}>
                <Target size={28} />
              </div>
              <h3 style={{ fontSize: '1.35rem', marginBottom: '0.75rem' }}>Our Mission</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '0.95rem' }}>
                To empower agriculture value chain actors through business development and provision of innovative services to foster sustainable growth and rural prosperity.
              </p>
            </div>

            <div className="card" style={{ textAlign: 'left' }}>
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: 'var(--radius-md)',
                background: 'rgba(251, 193, 115, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-dark)',
                marginBottom: '1.5rem'
              }}>
                <Eye size={28} />
              </div>
              <h3 style={{ fontSize: '1.35rem', marginBottom: '0.75rem' }}>Our Vision</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '0.95rem' }}>
                To be the leading and preferred agricultural consulting firm in the sub-region, driving transformation through excellence, innovation, and client success.
              </p>
            </div>

            <div className="card" style={{ textAlign: 'left' }}>
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: 'var(--radius-md)',
                background: 'rgba(26, 58, 52, 0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--primary)',
                marginBottom: '1.5rem'
              }}>
                <ShieldCheck size={28} />
              </div>
              <h3 style={{ fontSize: '1.35rem', marginBottom: '0.75rem' }}>Our Core Values</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '0.95rem' }}>
                Professionalism, Integrity, and Mutual Respect for all actors in the agricultural ecosystem—from smallholder outgrowers to institutional investors.
              </p>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .values-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </section>

      {/* 3. Focus Areas Listed (PDF Page 5) */}
      <section className="section-padding" style={{ backgroundColor: 'var(--white)' }}>
        <div className="container">
          <div className="section-title-wrap">
            <span className="section-subtitle">Core Strategic Domains</span>
            <h2 className="section-title">Our Focus Areas</h2>
            <p className="section-description">
              As articulated in our operational framework, we focus strategically on key drivers of agricultural efficiency and growth.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.5rem'
          }} className="focus-areas-grid">
            {focusAreas.map((area, idx) => (
              <div 
                key={idx} 
                style={{
                  padding: '2rem',
                  borderRadius: 'var(--radius-md)',
                  background: 'var(--bg-light)',
                  border: '1px solid #E2E8F0',
                  transition: 'var(--transition)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: 'var(--primary)',
                    color: 'var(--white)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.85rem',
                    fontWeight: 700
                  }}>
                    {idx + 1}
                  </div>
                  <h4 style={{ fontSize: '1.15rem', color: 'var(--primary)' }}>
                    {area.title}
                  </h4>
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  {area.description}
                </p>
                <Link 
                  to={`/services/${area.slug}`} 
                  style={{ 
                    fontSize: '0.85rem', 
                    fontWeight: 600, 
                    color: 'var(--accent-dark)', 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    gap: '0.3rem' 
                  }}
                >
                  Explore Details <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .focus-areas-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </section>

      {/* 4. Meet Our Team (PDF Pages 5 & 6) */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-subtle)' }} id="team">
        <div className="container">
          <div className="section-title-wrap">
            <span className="section-subtitle">Leadership & Experts</span>
            <h2 className="section-title">Meet Our Team</h2>
            <p className="section-description">
              Seasoned agribusiness consultants and certified financial specialists dedicated to client transformation.
            </p>
          </div>

          <div className="team-grid">
            {teamData.map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-header">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="team-avatar"
                  />
                  <div>
                    <h3 style={{ fontSize: '1.45rem', color: 'var(--primary)', marginBottom: '0.2rem' }}>
                      {member.name}
                    </h3>
                    <p style={{ color: 'var(--accent-dark)', fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.5rem' }}>
                      {member.role}
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                      <a href={`mailto:${member.email}`} style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: 'var(--primary)', fontWeight: 500 }}>
                        <Mail size={14} color="var(--accent)" /> {member.email}
                      </a>
                      <a href={`tel:${member.phone}`} style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: 'var(--primary)', fontWeight: 500 }}>
                        <Phone size={14} color="var(--accent)" /> {member.phone}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="team-body">
                  <p style={{ color: 'var(--text-body)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                    {member.bio}
                  </p>

                  <h4 style={{ fontSize: '1rem', color: 'var(--primary)', fontWeight: 700, marginBottom: '0.5rem' }}>
                    Key Areas of Expertise:
                  </h4>
                  <div className="expertise-pills">
                    {member.expertise.map((exp, i) => (
                      <span key={i} className="expertise-pill">
                        {exp}
                      </span>
                    ))}
                  </div>

                  <h4 style={{ fontSize: '1rem', color: 'var(--primary)', fontWeight: 700, marginTop: '1.5rem', marginBottom: '0.75rem' }}>
                    Track Record Highlights:
                  </h4>
                  <ul style={{ listStyle: 'none', paddingLeft: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    {member.trackRecord.map((tr, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.9rem', color: 'var(--text-body)' }}>
                        <CheckCircle2 size={16} color="var(--primary)" style={{ flexShrink: 0, marginTop: '3px' }} />
                        <span>{tr}</span>
                      </li>
                    ))}
                  </ul>

                  <div style={{
                    marginTop: '1.5rem',
                    padding: '1rem',
                    background: 'var(--bg-light)',
                    borderRadius: 'var(--radius-sm)',
                    borderLeft: '3px solid var(--accent)',
                    fontSize: '0.85rem',
                    color: 'var(--text-muted)'
                  }}>
                    <strong>Works with:</strong> {member.worksWith}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ padding: '4.5rem 0', backgroundColor: 'var(--white)', borderTop: '1px solid #E2E8F0', textAlign: 'center' }}>
        <div className="container">
          <h3 style={{ fontSize: '2.2rem', color: 'var(--primary)', marginBottom: '1rem' }}>
            Work With Our Multidisciplinary Team
          </h3>
          <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
            Whether you need grant proposal packaging, contract farming design, or financial auditing, our consultants are ready to assist.
          </p>
          <Link to="/contact" className="btn btn-primary">
            Contact the Team <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
