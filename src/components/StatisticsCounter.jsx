import React, { useState, useEffect } from 'react';
import { Users2, Briefcase, Network, Award } from 'lucide-react';
import { statisticsData } from '../data/websiteContent';

const icons = [
  <Users2 size={32} key="0" />,
  <Briefcase size={32} key="1" />,
  <Network size={32} key="2" />,
  <Award size={32} key="3" />
];

const StatisticsCounter = () => {
  return (
    <section style={{ 
      backgroundColor: 'var(--primary)', 
      color: 'var(--white)',
      padding: '4.5rem 0',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background visual flair */}
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '400px',
        height: '100%',
        background: 'radial-gradient(circle, rgba(251, 193, 115, 0.15) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span style={{ 
            color: 'var(--accent)', 
            fontWeight: 700, 
            letterSpacing: '0.12em', 
            textTransform: 'uppercase', 
            fontSize: '0.85rem' 
          }}>
            Proven Impact Across Ghana
          </span>
          <h3 style={{ color: 'var(--white)', fontSize: '2.2rem', marginTop: '0.5rem' }}>
            Empowering Agriculture At Scale
          </h3>
        </div>

        <div className="stats-grid">
          {statisticsData.map((stat, idx) => (
            <div 
              key={idx} 
              className="stat-card"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                borderColor: 'rgba(255, 255, 255, 0.12)',
                color: 'var(--white)'
              }}
            >
              <div style={{
                color: 'var(--accent)',
                marginBottom: '1rem',
                display: 'flex',
                justifyContent: 'center'
              }}>
                {icons[idx]}
              </div>
              <div 
                className="stat-value"
                style={{ color: 'var(--accent)' }}
              >
                {stat.value}
              </div>
              <div 
                className="stat-label"
                style={{ color: 'var(--white)' }}
              >
                {stat.label}
              </div>
              <div 
                className="stat-detail"
                style={{ color: 'rgba(255, 255, 255, 0.7)' }}
              >
                {stat.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsCounter;
