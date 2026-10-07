import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ArrowUpRight, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { siteInfo, servicesData } from '../data/websiteContent';
import logoWhite from '../assets/brand/logo-white.png';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Info & Mission */}
          <div>
            <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', marginBottom: '1.25rem' }} aria-label="Eastern Prime Business Consult Ltd. home">
              <img
                src={logoWhite}
                alt="Eastern Prime Business Consult Ltd."
                style={{ height: '48px', width: 'auto', display: 'block' }}
              />
            </Link>
            <p style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '0.9rem', lineHeight: '1.7', marginBottom: '1.5rem', maxWidth: '360px' }}>
              Eastern Prime Business Consult Limited is a premier agribusiness and enterprise consulting firm driving sustainable growth, efficiency, and market linkages across Ghana and sub-Saharan Africa.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <a 
                href={siteInfo.socialLinks.facebook} 
                target="_blank" 
                rel="noreferrer"
                aria-label="Facebook"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--white)',
                  transition: 'var(--transition)'
                }}
              >
                <Facebook size={16} />
              </a>
              <a 
                href={siteInfo.socialLinks.twitter} 
                target="_blank" 
                rel="noreferrer"
                aria-label="Twitter"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--white)',
                  transition: 'var(--transition)'
                }}
              >
                <Twitter size={16} />
              </a>
              <a 
                href={siteInfo.socialLinks.linkedin} 
                target="_blank" 
                rel="noreferrer"
                aria-label="LinkedIn"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--white)',
                  transition: 'var(--transition)'
                }}
              >
                <Linkedin size={16} />
              </a>
              <a 
                href={siteInfo.socialLinks.instagram} 
                target="_blank" 
                rel="noreferrer"
                aria-label="Instagram"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--white)',
                  transition: 'var(--transition)'
                }}
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services Overview</Link></li>
              <li><Link to="/gallery">Image Gallery</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="footer-heading">Our Services</h4>
            <ul className="footer-links">
              {servicesData.map((s) => (
                <li key={s.id}>
                  <Link to={`/services/${s.slug}`}>
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details from PDF Page 3 */}
          <div>
            <h4 className="footer-heading">Headquarters & Desk</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.9rem' }}>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <MapPin size={20} color="var(--accent)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>
                  <strong>Location:</strong><br />
                  {siteInfo.location}
                </span>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <Phone size={18} color="var(--accent)" style={{ flexShrink: 0 }} />
                <a href={`tel:${siteInfo.phoneLink}`} style={{ color: 'var(--white)', fontWeight: 600 }}>
                  {siteInfo.phone}
                </a>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <Mail size={18} color="var(--accent)" style={{ flexShrink: 0 }} />
                <a href={`mailto:${siteInfo.email}`} style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                  {siteInfo.email}
                </a>
              </div>
              <div style={{ marginTop: '0.5rem' }}>
                <Link to="/contact" className="btn btn-outline-white btn-sm" style={{ width: '100%' }}>
                  Send a Message <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom with PDF Copyright */}
        <div className="footer-bottom">
          <p>{siteInfo.copyright}</p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <span>Koforidua & Kibi, Ghana</span>
            <span>•</span>
            <Link to="/contact" style={{ color: 'var(--accent)' }}>Book Consultation</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
