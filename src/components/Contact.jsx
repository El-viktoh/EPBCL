import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-20 items-stretch">
          <div>
            <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">Get In Touch</span>
            <h2 className="text-4xl md:text-5xl mb-8">Ready to grow your agribusiness?</h2>
            <p className="text-text-muted text-lg mb-12">
              Whether you are a smallholder farmer looking for training or a large-scale enterprise seeking management expertise, we are here to help.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-bg-light flex items-center justify-center text-primary shadow-sm">
                  <Mail size={28} />
                </div>
                <div>
                  <h4 className="text-lg font-bold">Email Us</h4>
                  <p className="text-text-muted">info@epbcl.com / kwasigadago@epbcl.com</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-bg-light flex items-center justify-center text-primary shadow-sm">
                  <Phone size={28} />
                </div>
                <div>
                  <h4 className="text-lg font-bold">Call Us</h4>
                  <p className="text-text-muted">+233 243 048 090 / +233 244 832 795</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-bg-light flex items-center justify-center text-primary shadow-sm">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="text-lg font-bold">Location</h4>
                  <p className="text-text-muted">No. 2 Nii Amaa Ollenu St, Accra - Ghana</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass p-12 rounded-[2rem] border-slate-100 shadow-2xl">
            <h3 className="text-2xl mb-8">Send us a message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold mb-2">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full px-6 py-4 rounded-xl bg-bg-light border-transparent focus:border-accent focus:bg-white transition-all outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">Email Address</label>
                  <input type="email" placeholder="john@example.com" className="w-full px-6 py-4 rounded-xl bg-bg-light border-transparent focus:border-accent focus:bg-white transition-all outline-none" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">Subject</label>
                <select className="w-full px-6 py-4 rounded-xl bg-bg-light border-transparent focus:border-accent focus:bg-white transition-all outline-none cursor-pointer">
                  <option>Agribusiness Consulting</option>
                  <option>Farm Management</option>
                  <option>Training & Advisory</option>
                  <option>Other Inquiry</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">Message</label>
                <textarea rows="4" placeholder="How can we help you?" className="w-full px-6 py-4 rounded-xl bg-bg-light border-transparent focus:border-accent focus:bg-white transition-all outline-none resize-none"></textarea>
              </div>
              <button disabled type="submit" className="w-full btn btn-primary py-5 flex items-center justify-center gap-2 text-lg">
                Send Message <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
