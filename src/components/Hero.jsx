import React from 'react';
import { ChevronRight } from 'lucide-react';
import heroImage from '../assets/photos/hero-women-forum.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-1000 transform scale-105"
        style={{ 
          backgroundImage: `url(${heroImage})`,
          filter: 'brightness(0.7)'
        }}
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-primary/80 to-transparent" />

      <div className="container relative z-20">
        <div className="max-w-2xl text-white">
          <span className="inline-block px-4 py-1 mb-6 rounded-full glass text-sm font-semibold tracking-wider uppercase animate-fadeIn">
            Sustainable Growth & Consulting
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            Cultivating the <span className="text-accent">Future</span> of Agriculture.
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-slate-200 leading-relaxed animate-fadeIn" style={{ animationDelay: '0.4s' }}>
            Empowering agribusinesses and smallholder farmers in Ghana through innovative consulting, business development, and climate-smart solutions.
          </p>
          <div className="flex flex-wrap gap-4 animate-fadeIn" style={{ animationDelay: '0.6s' }}>
            <a href="#services" className="btn btn-primary flex items-center gap-2">
              Our Services <ChevronRight size={20} />
            </a>
            <a href="#about" className="btn btn-outline border-white text-white hover:bg-white hover:text-primary">
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-bg-light to-transparent z-20" />

      <style jsx>{`
        section {
          background-color: #000;
        }
        h1 { color: #fff; }
        .bg-primary\/80 { background-color: rgba(26, 58, 52, 0.4); }
        .text-slate-200 { color: #e2e8f0; }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
          opacity: 0;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
