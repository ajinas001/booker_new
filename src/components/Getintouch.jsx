'use client'
import React, { useState } from 'react'
import { Menu, X, ChevronDown, ArrowRight, Phone, Mail, MapPin, CheckCircle, TrendingUp, Shield, Users, Briefcase, FileText, Calculator, BarChart3, Building2, ShoppingCart, Laptop, Truck, Heart, GraduationCap, Factory } from 'lucide-react';


function Getintouch() {
      const [contactMessage, setContactMessage] = useState('');
const COMPANY_INFO = {
  name: 'Booker Accounting',
  contact: {
    address: 'R364 Al Wasl Building, Unique World Business Center, Office 12 (3rd floor), Opp. Civil Defence, Al Karama, Dubai',
    phone: '+971 56 767 8156',
    email: 'info@bookeraccounting.com',
  },
  // ADDED: Video URL for Hero Background
  heroVideoUrl: './videos/video.mp4', // Placeholder Burj Khalifa video
};

 const handleContactSubmit = (e) => {
    e.preventDefault();
    setContactMessage('Thank you for your message! We will contact you soon.');
    // In a real application, you would send the form data here.
    setTimeout(() => setContactMessage(''), 5000); // Clear message after 5 seconds
    e.target.reset();
  };
    
  return (
    <div>
      <section id="contact" className="py-20 bg-dark-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-extrabold mb-6">Get In Touch</h2>
              <p className="text-xl text-gray-300 mb-8">
                Ready to transform your business finances? Contact us today for a consultation.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Address</div>
                    <div className="text-gray-300">{COMPANY_INFO.contact.address}</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-cyan-400" />
                  <div>
                    <div className="font-semibold mb-1">Phone</div>
                    <a href={`tel:${COMPANY_INFO.contact.phone}`} className="text-gray-300 hover:text-cyan-400 transition">{COMPANY_INFO.contact.phone}</a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-cyan-400" />
                  <div>
                    <div className="font-semibold mb-1">Email</div>
                    <a href={`mailto:${COMPANY_INFO.contact.email}`} className="text-gray-300 hover:text-cyan-400 transition">{COMPANY_INFO.contact.email}</a>
                  </div>
                </div>
              </div>
            </div>

            <form onSubmit={handleContactSubmit} className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 shadow-2xl">
              <div className="space-y-6">
                {contactMessage && (
                    <div className="p-4 bg-teal-500 text-white rounded-lg font-semibold text-center transition-opacity duration-300">
                        {contactMessage}
                    </div>
                )}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                  <input type="text" id="name" required className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition" placeholder="Your name" />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <input type="email" id="email" required className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition" placeholder="your@email.com" />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium mb-2">Service</label>
                  <select id="service" className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-cyan-400 transition">
                    <option value="" className="bg-slate-800">Select a service</option>
                    <option value="audit" className="bg-slate-800">Audit & Assurance</option>
                    <option value="tax" className="bg-slate-800">Taxation</option>
                    <option value="accounting" className="bg-slate-800">Accounting & Bookkeeping</option>
                    <option value="advisory" className="bg-slate-800">Business Advisory</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea rows="4" id="message" required className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition" placeholder="Tell us about your needs..."></textarea>
                </div>

                <button type="submit" className="w-full bg-gradient-to-r from-cyan-500 to-teal-600 text-white px-8 py-4 rounded-lg font-bold hover:shadow-xl hover:shadow-teal-500/30 transition transform hover:scale-[1.01]">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Getintouch
