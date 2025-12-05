'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] sm:h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-uganda-black via-uganda-red to-uganda-yellow">
        <div className="absolute inset-0 opacity-20">
          <Image 
            src="/assets/images/group_photo_2.png"
            alt="Contact us"
            fill
            className="object-cover"
          />
        </div>
        
        <div className="relative z-10 text-center text-white max-container padding-container px-4">
          <h1 className="bold-88 mb-3 sm:mb-4 drop-shadow-2xl">Get In Touch</h1>
          <p className="regular-24">We'd love to hear from you</p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="max-container padding-container py-12 sm:py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 md:p-10">
            <h2 className="bold-40 mb-2">Send us a message</h2>
            <p className="regular-16 text-gray-50 mb-6 sm:mb-8">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>

            {submitStatus === 'success' && (
              <div className="bg-green-50/10 border border-green-50 text-green-50 rounded-xl p-4 mb-6">
                <p className="bold-16">✓ Message sent successfully!</p>
                <p className="regular-14 mt-1">We'll get back to you soon.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block bold-16 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-30 rounded-xl focus:outline-none focus:ring-2 focus:ring-uganda-yellow focus:border-transparent transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block bold-16 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-30 rounded-xl focus:outline-none focus:ring-2 focus:ring-uganda-yellow focus:border-transparent transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block bold-16 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-30 rounded-xl focus:outline-none focus:ring-2 focus:ring-uganda-yellow focus:border-transparent transition-all"
                  placeholder="+256 700 000000"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block bold-16 mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-30 rounded-xl focus:outline-none focus:ring-2 focus:ring-uganda-yellow focus:border-transparent transition-all"
                >
                  <option value="">Select a subject</option>
                  <option value="racing">Join Pro Racing</option>
                  <option value="partnership">Partnership Inquiry</option>
                  <option value="sponsorship">Sponsorship</option>
                  <option value="media">Media & Press</option>
                  <option value="general">General Inquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block bold-16 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-30 rounded-xl focus:outline-none focus:ring-2 focus:ring-uganda-yellow focus:border-transparent transition-all resize-none"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="border-2 border-uganda-yellow bg-uganda-yellow px-6 py-3 text-black transition-all hover:bg-yellow-400 rounded-full text-sm md:text-base md:px-8 md:py-3 font-semibold w-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            {/* Direct Contact */}
            <div className="bg-gradient-to-br from-uganda-red to-uganda-yellow rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white">
              <h3 className="bold-32 mb-4 sm:mb-6">Contact Information</h3>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📞</span>
                  </div>
                  <div>
                    <p className="bold-18 mb-1">Phone</p>
                    <p className="regular-16">+256 786 493685</p>
                    <p className="regular-16">+256 700 503508</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📧</span>
                  </div>
                  <div>
                    <p className="bold-18 mb-1">Email</p>
                    <p className="regular-16">safaridrifting@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📍</span>
                  </div>
                  <div>
                    <p className="bold-18 mb-1">Location</p>
                    <p className="regular-16">Kampala, Uganda</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8">
              <h3 className="bold-32 mb-4 sm:mb-6">Follow Us</h3>
              <p className="regular-16 text-gray-50 mb-6">
                Stay updated with our latest races, events, and adventures.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://www.instagram.com/safaridrift"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 border border-gray-30 rounded-xl hover:border-uganda-yellow hover:bg-uganda-yellow/5 transition-all"
                >
                  <Image src="/instagram.svg" alt="Instagram" width={24} height={24} />
                  <span className="bold-16">Instagram</span>
                </a>

                <a
                  href="https://www.tiktok.com/@safaridrifting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 border border-gray-30 rounded-xl hover:border-uganda-yellow hover:bg-uganda-yellow/5 transition-all"
                >
                  <Image src="/facebook.svg" alt="TikTok" width={24} height={24} />
                  <span className="bold-16">TikTok</span>
                </a>

                <a
                  href="https://x.com/safaridrift"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 border border-gray-30 rounded-xl hover:border-uganda-yellow hover:bg-uganda-yellow/5 transition-all"
                >
                  <Image src="/twitter.svg" alt="Twitter" width={24} height={24} />
                  <span className="bold-16">Twitter</span>
                </a>

                <a
                  href="https://www.tiktok.com/@safaridrifting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 border border-gray-30 rounded-xl hover:border-uganda-yellow hover:bg-uganda-yellow/5 transition-all"
                >
                  <Image src="/youtube.svg" alt="YouTube" width={24} height={24} />
                  <span className="bold-16">YouTube</span>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-uganda-black rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white">
              <h3 className="bold-24 mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <a href="/racing" className="regular-16 hover:text-uganda-yellow transition-colors">
                    → Join Pro Racing UG
                  </a>
                </li>
                <li>
                  <a href="/racers" className="regular-16 hover:text-uganda-yellow transition-colors">
                    → Meet Our Racers
                  </a>
                </li>
                <li>
                  <a href="/gallery" className="regular-16 hover:text-uganda-yellow transition-colors">
                    → View Gallery
                  </a>
                </li>
                <li>
                  <a href="/about" className="regular-16 hover:text-uganda-yellow transition-colors">
                    → About SafariDrift
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Optional - can be added later with real coordinates) */}
      <section className="bg-gray-10 py-12 sm:py-16 md:py-20">
        <div className="max-container padding-container">
          <h2 className="bold-52 text-center mb-8 sm:mb-12">Visit Our Track</h2>
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden">
            <div className="relative h-[300px] sm:h-[400px] md:h-[500px]">
              <Image 
                src="/assets/images/race_image_10.png"
                alt="Lubowa Racing Circuit"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 sm:p-8 text-white w-full">
                  <h3 className="bold-32 mb-2">Lubowa Racing Circuit</h3>
                  <p className="regular-18">Kampala, Uganda</p>
                  <p className="regular-16 mt-2 text-gray-20">
                    Home of SafariDrift Pro Racing UG
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}