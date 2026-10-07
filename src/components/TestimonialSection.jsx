import React from 'react';
import { Quote, Star, Award, Building2 } from 'lucide-react';
import { testimonialData } from '../data/websiteContent';

const TestimonialSection = () => {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--bg-subtle)' }}>
      <div className="container">
        <div className="section-title-wrap">
          <span className="section-subtitle">Client Endorsements</span>
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-description">
            Real outcomes and trusted partnerships built across Ghana's agribusiness ecosystem.
          </p>
        </div>

        <div style={{
          maxWidth: '850px',
          margin: '0 auto',
          background: 'var(--white)',
          borderRadius: 'var(--radius-xl)',
          padding: '3.5rem 3rem',
          boxShadow: '0 20px 40px -15px rgba(26, 58, 52, 0.1)',
          position: 'relative',
          border: '1px solid #E2E8F0'
        }}>
          <div style={{
            position: 'absolute',
            top: '-24px',
            left: '3rem',
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            background: 'var(--accent)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#122824',
            boxShadow: '0 8px 16px rgba(251, 193, 115, 0.4)'
          }}>
            <Quote size={24} />
          </div>

          <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1.5rem', color: '#FBC173' }}>
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} fill="#FBC173" />
            ))}
          </div>

          <blockquote style={{
            fontSize: '1.25rem',
            lineHeight: '1.8',
            color: 'var(--text-dark)',
            fontStyle: 'italic',
            marginBottom: '2rem'
          }}>
            "{testimonialData.quote}"
          </blockquote>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: '1px solid #F1F5F9',
            paddingTop: '1.75rem',
            flexWrap: 'wrap',
            gap: '1rem'
          }}>
            <div>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '0.2rem' }}>
                {testimonialData.clientName}
              </h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Building2 size={16} color="var(--accent)" />
                <strong>{testimonialData.clientTitle}</strong>, {testimonialData.company}
              </p>
            </div>

            <div style={{
              background: 'rgba(251, 193, 115, 0.15)',
              padding: '0.5rem 1rem',
              borderRadius: '50px',
              color: '#A3520F',
              fontSize: '0.8rem',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem'
            }}>
              <Award size={16} />
              {testimonialData.tag}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
