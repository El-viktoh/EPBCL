import React from 'react';
import aboutImage from '../assets/photos/facilitator-women-forum.jpg';
import { Target, Eye, ShieldCheck } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Target className="text-accent" />,
      title: "Our Mission",
      desc: "To empower agriculture value chain actors through business development and provision of innovative services to foster sustainable growth."
    },
    {
      icon: <Eye className="text-accent" />,
      title: "Our Vision",
      desc: "To be the leading and preferred agricultural consulting firm in the sub-region, driving transformation through excellence."
    },
    {
      icon: <ShieldCheck className="text-accent" />,
      title: "Our Core Values",
      desc: "Professionalism, Integrity, and Mutual respect for all actors in the agricultural ecosystem."
    }
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">About EPBCL</span>
            <h2 className="text-4xl md:text-5xl mb-6">Eastern Prime Business Consult Ltd.</h2>
            <p className="text-lg text-text-muted mb-8 italic border-l-4 border-accent pl-6">
              "We provide world-class consulting services focused on agriculture and business development in Ghana and beyond."
            </p>
            <p className="text-text-muted leading-relaxed mb-6">
              Founded on the pillars of innovation and sustainability, EPBCL bridge the gap between traditional farming practices and modern business excellence. We work with a network of experts to deliver impactful results for our clients.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-square bg-slate-100 rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={aboutImage} 
                alt="EPBCL facilitator leading a women's community forum" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Achievement Badge */}
            <div className="absolute -bottom-8 -left-8 glass p-8 rounded-2xl shadow-xl max-w-[240px]">
              <span className="text-4xl font-bold text-primary block mb-2">10+</span>
              <span className="text-sm font-medium text-text-dark">Years of transforming lives and livelihoods in Ghana.</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((item, index) => (
            <div key={index} className="p-10 rounded-3xl bg-bg-light hover:shadow-xl transition-all duration-500 border border-transparent hover:border-accent/10">
              <div className="mb-6 bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm">
                {item.icon}
              </div>
              <h3 className="text-2xl mb-4">{item.title}</h3>
              <p className="text-text-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .grid { display: grid; }
        @media (min-width: 768px) {
          .md\:grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
          .md\:grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
        }
        .aspect-square { aspect-ratio: 1 / 1; }
      `}</style>
    </section>
  );
};

export default About;
