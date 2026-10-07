import React from 'react';
import { CloudRain, Briefcase, Users, BarChart3, GraduationCap, Coins } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <CloudRain size={32} />,
      title: "Climate Resilient Projects",
      desc: "Planning and management of sustainable, climate-smart agriculture initiatives."
    },
    {
      icon: <Briefcase size={32} />,
      title: "Farm Management",
      desc: "Professional management services for large-scale and medium-scale farms."
    },
    {
      icon: <Users size={32} />,
      title: "Women & Youth Support",
      desc: "Specialized consultancy for inclusive development and rural entrepreneurship."
    },
    {
      icon: <BarChart3 size={32} />,
      title: "Market Intermediation",
      desc: "Linking farmers directly to lucrative markets and fair-trade buyers."
    },
    {
      icon: <GraduationCap size={32} />,
      title: "Training & Advisory",
      desc: "Technical skills training and agronomic advisory for farmer groups."
    },
    {
      icon: <Coins size={32} />,
      title: "Agribusiness Finance",
      desc: "Facilitating access to credit and formal financial services for producers."
    }
  ];

  return (
    <section id="services" className="section-padding bg-bg-light">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">Our Expertise</span>
          <h2 className="text-4xl md:text-5xl mb-6">Innovative Solutions for Modern Agriculture</h2>
          <p className="text-text-muted text-lg">
            We provide a comprehensive suite of services designed to address the unique challenges of the agricultural value chain.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group p-10 bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-slate-100"
            >
              <div className="mb-8 text-primary group-hover:text-accent transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl mb-4 group-hover:text-primary-light transition-colors">{service.title}</h3>
              <p className="text-text-muted leading-relaxed">{service.desc}</p>
              
              <div className="mt-8 pt-8 border-t border-slate-50 flex items-center gap-2 text-sm font-bold text-primary group-hover:text-accent cursor-pointer">
                Learn More <div className="w-8 h-[2px] bg-accent transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .grid { display: grid; }
        @media (min-width: 768px) {
          .md\:grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 1024px) {
          .lg\:grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
        }
      `}</style>
    </section>
  );
};

export default Services;
