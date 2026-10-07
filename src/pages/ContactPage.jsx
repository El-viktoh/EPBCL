import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Send, 
  CheckCircle2, 
  Clock, 
  Building2, 
  User, 
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { siteInfo, teamData } from '../data/websiteContent';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    serviceInterest: 'Agribusiness Consulting',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate network submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
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
            <span>Contact</span>
          </div>

          <span className="section-subtitle" style={{ color: 'var(--accent)' }}>Reach Our Consultants</span>
          <h1 style={{ color: 'var(--white)', fontSize: '3rem', marginBottom: '1rem' }}>
            Contact Us
          </h1>
          <p style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '1.2rem', maxWidth: '750px', lineHeight: 1.7 }}>
            Connect with Eastern Prime Business Consult Limited for project design, agribusiness advisory, farm investment, and value-chain development.
          </p>
        </div>
      </section>

      {/* Main Contact Section (PDF Page 12) */}
      <section className="section-padding" style={{ backgroundColor: 'var(--white)' }}>
        <div className="container">
          <div className="contact-grid">
            {/* Left Column: Contact Cards */}
            <div>
              <span className="section-subtitle">Get In Touch</span>
              <h2 className="section-title" style={{ fontSize: '2.2rem', marginBottom: '1.25rem' }}>
                We're Here to Partner with You
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '2.5rem' }}>
                Whether you represent a smallholder farmer group, an SME looking to formalize, or an institutional investor exploring contract farming in Ghana, our desk is ready.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
                {/* Location Card */}
                <div className="contact-info-card">
                  <div className="contact-icon">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', color: 'var(--primary)', marginBottom: '0.25rem' }}>Headquarters Location</h4>
                    <p style={{ color: 'var(--text-body)', fontWeight: 600 }}>
                      {siteInfo.location}
                    </p>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                      Eastern Region, Ghana
                    </p>
                  </div>
                </div>

                {/* Phone Card */}
                <div className="contact-info-card">
                  <div className="contact-icon">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', color: 'var(--primary)', marginBottom: '0.25rem' }}>Telephone</h4>
                    <a href={`tel:${siteInfo.phoneLink}`} style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '1.05rem', display: 'block' }}>
                      {siteInfo.phone}
                    </a>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                      Monday – Friday: 8:00 AM – 5:30 PM GMT
                    </p>
                  </div>
                </div>

                {/* Email Card */}
                <div className="contact-info-card">
                  <div className="contact-icon">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', color: 'var(--primary)', marginBottom: '0.25rem' }}>General Inquiries</h4>
                    <a href={`mailto:${siteInfo.email}`} style={{ color: 'var(--primary)', fontWeight: 600 }}>
                      {siteInfo.email}
                    </a>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                      Prompt email response within 24 business hours
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct Leadership Desk Box (from PDF page 5 & 6) */}
              <div style={{
                background: 'var(--bg-subtle)',
                padding: '1.75rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid #E2E8F0'
              }}>
                <h4 style={{ fontSize: '1rem', color: 'var(--primary)', fontWeight: 700, marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <User size={16} color="var(--accent)" /> Executive & Consulting Desk
                </h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-body)', marginBottom: '0.75rem' }}>
                  <strong>Naydia Oduro-Awuku</strong> – CEO & Lead Agribusiness Consultant
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', fontSize: '0.85rem' }}>
                  <a href="mailto:naydiaawuku@gmail.com" style={{ color: 'var(--primary)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <Mail size={14} color="var(--accent)" /> naydiaawuku@gmail.com
                  </a>
                  <a href="tel:0546449099" style={{ color: 'var(--primary)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <Phone size={14} color="var(--accent)" /> 0546449099
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: "Send Message" Form (PDF Page 12) */}
            <div>
              <div style={{
                background: 'var(--white)',
                padding: '3rem',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid #E2E8F0',
                boxShadow: '0 20px 40px -15px rgba(26, 58, 52, 0.1)'
              }}>
                <h3 style={{ fontSize: '1.75rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>
                  Send Message
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '2rem' }}>
                  Fill out the consultation request below and our team will get back to you promptly.
                </p>

                {submitted ? (
                  <div style={{
                    padding: '2.5rem',
                    textAlign: 'center',
                    background: 'rgba(26, 58, 52, 0.04)',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid rgba(26, 58, 52, 0.15)'
                  }}>
                    <div style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      background: 'var(--primary)',
                      color: 'var(--white)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 1.5rem auto'
                    }}>
                      <CheckCircle2 size={32} />
                    </div>
                    <h4 style={{ fontSize: '1.4rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>
                      Message Received!
                    </h4>
                    <p style={{ color: 'var(--text-body)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                      Thank you for contacting Eastern Prime Business Consult Limited. Our consulting team in Koforidua will review your inquiry and follow up within 24 hours.
                    </p>
                    <button 
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          fullName: '',
                          email: '',
                          phone: '',
                          serviceInterest: 'Agribusiness Consulting',
                          subject: '',
                          message: ''
                        });
                      }}
                      className="btn btn-outline btn-sm"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }} className="contact-form-row">
                      <div className="form-group">
                        <label className="form-label">Full Name *</label>
                        <input 
                          type="text" 
                          name="fullName"
                          required
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="e.g. Bender Owusu"
                          className="form-control"
                        />
                      </div>

                      <div className="form-group">
                        <label className="form-label">Email Address *</label>
                        <input 
                          type="email" 
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="e.g. info@example.com"
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }} className="contact-form-row">
                      <div className="form-group">
                        <label className="form-label">Phone Number</label>
                        <input 
                          type="tel" 
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+233 XX XXX XXXX"
                          className="form-control"
                        />
                      </div>

                      <div className="form-group">
                        <label className="form-label">Area of Interest</label>
                        <select 
                          name="serviceInterest"
                          value={formData.serviceInterest}
                          onChange={handleChange}
                          className="form-control"
                          style={{ cursor: 'pointer' }}
                        >
                          <option value="Access to Finance">Access to Finance & Grants</option>
                          <option value="Agricultural Management Solutions">Agricultural Management Solutions</option>
                          <option value="Empowering Women and Youth">Empowering Women and Youth</option>
                          <option value="Inclusive Contract Farming">Inclusive Contract Farming Facilitation</option>
                          <option value="Market Linkages">Market Linkages & Export Access</option>
                          <option value="Business Development and Training">Business Development and Training</option>
                          <option value="Climate-Friendly Initiatives">Climate-Friendly Initiatives (ACCF)</option>
                          <option value="Agribusiness Investment Program">EPBCL Farming & Investment Program</option>
                          <option value="General Inquiry">General Agribusiness Inquiry</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Subject</label>
                      <input 
                        type="text" 
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="e.g. Outgrower Contract Scheme in Eastern Region"
                        className="form-control"
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Message *</label>
                      <textarea 
                        name="message"
                        required
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Please share details regarding your enterprise, location, or goals..."
                        className="form-control"
                        style={{ resize: 'vertical' }}
                      />
                    </div>

                    <button 
                      type="submit" 
                      className="btn btn-primary"
                      disabled={loading}
                      style={{ width: '100%', padding: '1rem' }}
                    >
                      {loading ? 'Sending Message...' : (
                        <>
                          Send Message <Send size={18} />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 600px) {
            .contact-form-row {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </section>

      {/* Embedded Google Map Section (PDF Page 12) */}
      <section style={{ backgroundColor: 'var(--bg-light)', paddingBottom: '5rem' }}>
        <div className="container">
          <div style={{
            background: 'var(--white)',
            borderRadius: 'var(--radius-xl)',
            overflow: 'hidden',
            boxShadow: 'var(--card-shadow)',
            border: '1px solid #E2E8F0'
          }}>
            <div style={{ padding: '2rem 2.5rem', borderBottom: '1px solid #E2E8F0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <h3 style={{ fontSize: '1.35rem', color: 'var(--primary)', marginBottom: '0.25rem' }}>
                  Our Location on Map
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                  Pinned to <strong>Eastern Prime Business Consult Limited</strong>, Old estate ssnit traffic light, Koforidua and Kibi, Ghana.
                </p>
              </div>

              <a 
                href="https://maps.google.com/?q=Koforidua,+Eastern+Region,+Ghana" 
                target="_blank" 
                rel="noreferrer"
                className="btn btn-outline btn-sm"
              >
                Open in Google Maps
              </a>
            </div>

            <div style={{ width: '100%', height: '420px', background: '#E2E8F0' }}>
              <iframe
                title="Eastern Prime Business Consult Limited Map"
                src="https://maps.google.com/maps?q=Koforidua%20SSNIT%20traffic%20light,%20Eastern%20Region,%20Ghana&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
