import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, ArrowRight } from 'lucide-react';
import logoWhite from '../assets/brand/logo-white.png';
import logoDark from '../assets/brand/logo-dark.png';
import { siteInfo, navLinks, servicesData } from '../data/websiteContent';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [location.pathname]);

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : (isHomePage ? 'transparent' : 'scrolled')}`}>
      <div className="container nav-container">
        {/* Brand Logo */}
        <Link to="/" className={`brand-logo ${isHomePage && !isScrolled ? 'on-hero' : ''}`} aria-label="Eastern Prime Business Consult Ltd. home">
          <img
            src={isHomePage && !isScrolled ? logoWhite : logoDark}
            alt="Eastern Prime Business Consult Ltd."
            style={{ height: '44px', width: 'auto', display: 'block' }}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden-mobile">
          <ul className="nav-links">
            <li>
              <NavLink 
                to="/" 
                end
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''} ${isHomePage && !isScrolled ? 'on-hero' : ''}`}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/about" 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''} ${isHomePage && !isScrolled ? 'on-hero' : ''}`}
              >
                About Us
              </NavLink>
            </li>
            
            {/* Services with Dropdown */}
            <li className="nav-item-dropdown">
              <div className="dropdown-trigger">
                <NavLink 
                  to="/services" 
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''} ${isHomePage && !isScrolled ? 'on-hero' : ''}`}
                  style={{ display: 'flex', alignItems: 'center', gap: '4px' }}
                >
                  Services
                  <ChevronDown size={14} />
                </NavLink>
              </div>
              <ul className="dropdown-menu">
                <li style={{ padding: '0.5rem 1rem 0.35rem 1rem', fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Our Specialized Services
                </li>
                {servicesData.map((service) => (
                  <li key={service.id} className="dropdown-item">
                    <Link to={`/services/${service.slug}`}>
                      {service.title}
                    </Link>
                  </li>
                ))}
                <li style={{ borderTop: '1px solid #F1F5F9', marginTop: '0.5rem', paddingTop: '0.5rem' }} className="dropdown-item">
                  <Link to="/services" style={{ color: 'var(--primary)', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    View All Services & Investment <ArrowRight size={14} />
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <NavLink 
                to="/gallery" 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''} ${isHomePage && !isScrolled ? 'on-hero' : ''}`}
              >
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/contact" 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''} ${isHomePage && !isScrolled ? 'on-hero' : ''}`}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Action Button & Phone on Desktop */}
        <div className="hidden-mobile" style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
          <a 
            href={`tel:${siteInfo.phoneLink}`} 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.4rem', 
              fontSize: '0.88rem', 
              fontWeight: 600,
              color: isHomePage && !isScrolled ? 'rgba(255,255,255,0.9)' : 'var(--text-dark)'
            }}
          >
            <Phone size={15} style={{ color: 'var(--accent)' }} />
            <span>{siteInfo.phone}</span>
          </a>
          <Link to="/contact" className="btn btn-accent btn-sm">
            Get In Touch
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button 
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
          style={{
            background: 'transparent',
            border: 'none',
            color: isHomePage && !isScrolled ? 'white' : 'var(--primary)',
            cursor: 'pointer',
            padding: '0.5rem',
            display: 'none'
          }}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div style={{
          position: 'fixed',
          top: '70px',
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(255, 255, 255, 0.98)',
          backdropFilter: 'blur(20px)',
          overflowY: 'auto',
          padding: '2rem 1.5rem',
          zIndex: 999,
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
        }}>
          <Link to="/" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>
            Home
          </Link>
          <Link to="/about" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>
            About Us
          </Link>

          <div>
            <div 
              onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0.75rem 0',
                fontSize: '1.15rem',
                fontWeight: 700,
                color: 'var(--primary)',
                borderBottom: '1px solid #E2E8F0',
                cursor: 'pointer'
              }}
            >
              <span>Services</span>
              <ChevronDown size={18} style={{ transform: servicesDropdownOpen ? 'rotate(180deg)' : 'none', transition: '0.2s' }} />
            </div>

            {servicesDropdownOpen && (
              <div style={{ paddingLeft: '1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '0.75rem' }}>
                <Link to="/services" style={{ fontWeight: 700, color: 'var(--accent-dark)', fontSize: '0.95rem' }}>
                  Overview & Investment Program
                </Link>
                {servicesData.map((s) => (
                  <Link 
                    key={s.id} 
                    to={`/services/${s.slug}`}
                    style={{ fontSize: '0.92rem', color: 'var(--text-dark)', padding: '0.35rem 0' }}
                  >
                    • {s.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/gallery" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>
            Gallery
          </Link>
          <Link to="/contact" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>
            Contact
          </Link>

          <div style={{ marginTop: 'auto', paddingTop: '2rem', borderTop: '1px solid #E2E8F0' }}>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Direct Helpline:</p>
            <a href={`tel:${siteInfo.phoneLink}`} style={{ fontWeight: 700, color: 'var(--primary)', fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
              <Phone size={18} color="var(--accent)" /> {siteInfo.phone}
            </a>
            <Link to="/contact" className="btn btn-primary" style={{ width: '100%' }}>
              Get In Touch
            </Link>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .hidden-mobile { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
        .mobile-link {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--primary);
          padding: 0.75rem 0;
          border-bottom: 1px solid #E2E8F0;
          display: block;
        }
      `}</style>
    </header>
  );
};

export default Navbar;
