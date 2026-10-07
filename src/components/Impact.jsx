import React from 'react';
import { Sprout, Globe, Award, TrendingUp } from 'lucide-react';

const Impact = () => {
  const stats = [
    {
      icon: <Sprout size={40} />,
      value: "152+",
      label: "Farmer Groups Managed",
      suffix: ""
    },
    {
      icon: <Globe size={40} />,
      value: "10",
      label: "Regions in Ghana Covered",
      suffix: ""
    },
    {
      icon: <Award size={40} />,
      value: "100",
      label: "Sustainable Projects",
      suffix: "%"
    },
    {
      icon: <TrendingUp size={40} />,
      value: "25",
      label: "Growth in Yield",
      suffix: "%"
    }
  ];

  return (
    <section id="impact" className="section-padding relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-primary z-0" />
      <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/10 transform skew-x-12 translate-x-20 z-0" />

      <div className="container relative z-10 text-white">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">Our Impact</span>
          <h2 className="text-4xl md:text-5xl mb-6 text-white">Measuring Our Success through Growth</h2>
          <p className="text-slate-300 text-lg">
            We don't just consult; we create tangible impact for rural communities and the national economy.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full glass border-white/20 mb-8 text-accent group-hover:scale-110 transition-transform duration-500">
                {stat.icon}
              </div>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-6xl font-extrabold mb-2 text-white">{stat.value}</span>
                <span className="text-3xl font-bold text-accent">{stat.suffix}</span>
              </div>
              <p className="text-slate-300 font-medium tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-24 p-12 glass rounded-[40px] border-white/10 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="max-w-xl">
            <h3 className="text-3xl mb-4 text-white">Committed to Sustainable Development</h3>
            <p className="text-slate-300">
              Our operations are strictly aligned with United Nations Sustainable Development Goals (SDGs), focusing on Poverty Eradication, Zero Hunger, and Climate Action.
            </p>
          </div>
          <div className="flex gap-4">
            <div className="w-16 h-16 bg-white/10 backdrop-blur rounded-xl flex items-center justify-center text-accent text-2xl font-bold">1</div>
            <div className="w-16 h-16 bg-white/10 backdrop-blur rounded-xl flex items-center justify-center text-accent text-2xl font-bold">2</div>
            <div className="w-16 h-16 bg-white/10 backdrop-blur rounded-xl flex items-center justify-center text-accent text-2xl font-bold">5</div>
            <div className="w-16 h-16 bg-white/10 backdrop-blur rounded-xl flex items-center justify-center text-accent text-2xl font-bold">13</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .grid { display: grid; }
        @media (min-width: 640px) {
          .sm\:grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 1024px) {
          .lg\:grid-cols-4 { grid-template-columns: repeat(4, 1fr); }
        }
      `}</style>
    </section>
  );
};

export default Impact;
