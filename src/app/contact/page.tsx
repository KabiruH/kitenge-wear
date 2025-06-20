// src/app/contact/page.tsx
'use client';

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle, Heart, Star } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally send the data to your backend
    console.log('Contact form submitted:', formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Message Sent!</h2>
          <p className="text-gray-600 mb-6">
            Thank you for reaching out! We've received your message and will get back to you within 24 hours.
          </p>
          <div className="bg-[#CC5500] bg-opacity-10 rounded-lg p-4 mb-6">
            <p className="text-[#CC5500] font-semibold flex items-center justify-center">
              <Heart className="w-4 h-4 mr-2" />
              We appreciate you connecting with us!
            </p>
          </div>
          <button
            onClick={() => window.location.href = '/'}
            className="w-full bg-[#CC5500] text-white py-3 rounded-lg font-semibold hover:bg-[#FF7A00] transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#CC5500] to-[#FF7A00] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <MessageCircle className="text-yellow-300 w-10 h-10 mr-4" />
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Get In Touch
            </h1>
            <MessageCircle className="text-yellow-300 w-10 h-10 ml-4" />
          </div>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto">
            Have questions about our beautiful kitenge wear? Want to discuss a custom order? 
            We'd love to hear from you!
          </p>
          <div className="flex items-center justify-center space-x-2 text-yellow-100">
            <Star className="w-5 h-5 fill-current" />
            <span>We typically respond within 24 hours</span>
            <Star className="w-5 h-5 fill-current" />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            
            {/* Quick Contact */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#CC5500] rounded-full p-3">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">Phone</h3>
                    <p className="text-gray-600">+254 xxx xxx xxx</p>
                    <p className="text-sm text-gray-500">Call or WhatsApp us anytime</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#CC5500] rounded-full p-3">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">Email</h3>
                    <p className="text-gray-600">info@bantubaby.com</p>
                    <p className="text-sm text-gray-500">Send us your questions</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#CC5500] rounded-full p-3">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">Location</h3>
                    <p className="text-gray-600">Nairobi, Kenya</p>
                    <p className="text-sm text-gray-500">Serving all of Kenya</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#CC5500] rounded-full p-3">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">Business Hours</h3>
                    <p className="text-gray-600">Mon - Sat: 8:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Sunday: 10:00 AM - 4:00 PM</p>
                    <p className="text-sm text-gray-500">EAT (East Africa Time)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h3>
              
              <div className="space-y-3">
                <a
                  href="tel:+254xxxxxxxxx"
                  className="flex items-center justify-center w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Us Now
                </a>
                
                <a
                  href="https://wa.me/254xxxxxxxxx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Us
                </a>
                
                <a
                  href="/order"
                  className="flex items-center justify-center w-full bg-[#CC5500] text-white py-3 rounded-lg font-semibold hover:bg-[#FF7A00] transition-colors"
                >
                  <Heart className="w-5 h-5 mr-2" />
                  Make an Order
                </a>
              </div>
            </div>

            {/* FAQ Quick Links */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Common Questions</h3>
              
              <div className="space-y-3 text-sm">
                <div className="border-l-4 border-[#CC5500] pl-3">
                  <p className="font-semibold text-gray-900">How long does delivery take?</p>
                  <p className="text-gray-600">Your beautiful kitenge is ready in just 3 days!</p>
                </div>
                
                <div className="border-l-4 border-[#CC5500] pl-3">
                  <p className="font-semibold text-gray-900">Do you offer custom sizes?</p>
                  <p className="text-gray-600">Yes! We offer both standard and custom measurements.</p>
                </div>
                
                <div className="border-l-4 border-[#CC5500] pl-3">
                  <p className="font-semibold text-gray-900">What's the payment structure?</p>
                  <p className="text-gray-600">Pay 70% upfront, 30% on delivery.</p>
                </div>
                
                <div className="border-l-4 border-[#CC5500] pl-3">
                  <p className="font-semibold text-gray-900">Do you deliver outside Nairobi?</p>
                  <p className="text-gray-600">Yes, we deliver countrywide across Kenya.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Inquiry Type */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    What can we help you with? *
                  </label>
                  <select
                    name="inquiryType"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#CC5500] focus:border-transparent"
                    value={formData.inquiryType}
                    onChange={handleInputChange}
                  >
                    <option value="general">General Inquiry</option>
                    <option value="custom-order">Custom Order Request</option>
                    <option value="existing-order">Question About Existing Order</option>
                    <option value="sizing">Sizing & Measurements Help</option>
                    <option value="delivery">Delivery & Pickup</option>
                    <option value="wholesale">Wholesale/Bulk Orders</option>
                    <option value="partnership">Partnership Opportunities</option>
                    <option value="complaint">Complaint or Issue</option>
                  </select>
                </div>

                {/* Personal Information */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#CC5500] focus:border-transparent"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#CC5500] focus:border-transparent"
                      placeholder="+254 xxx xxx xxx"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#CC5500] focus:border-transparent"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#CC5500] focus:border-transparent"
                    placeholder="Brief description of your inquiry"
                    value={formData.subject}
                    onChange={handleInputChange}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#CC5500] focus:border-transparent resize-vertical"
                    placeholder="Tell us more about your inquiry. If you're requesting a custom order, please include details about the design, colors, and any specific requirements."
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-sm text-blue-800">
                    <strong>💡 Tip:</strong> For faster assistance with orders, include your order number if you have one. 
                    For custom designs, feel free to describe your vision in detail!
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#CC5500] text-white py-4 rounded-lg font-semibold text-lg hover:bg-[#FF7A00] transition-colors flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gradient-to-r from-[#CC5500] to-[#FF7A00]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Families Love Bantu Baby
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Join hundreds of families who trust us to dress their children in beautiful, authentic African kitenge.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-black bg-opacity-20 rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-white mb-3">Quick Turnaround</h3>
              <p className="text-white opacity-90">
                Your beautiful kitenge is ready in just 3 days. No long waits, just beautiful results.
              </p>
            </div>

            <div className="bg-black bg-opacity-20 rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">👑</div>
              <h3 className="text-xl font-bold text-white mb-3">Perfect Fit</h3>
              <p className="text-white opacity-90">
                Standard and custom sizing options ensure every child gets a perfect fit.
              </p>
            </div>

            <div className="bg-black bg-opacity-20 rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="text-xl font-bold text-white mb-3">Made with Love</h3>
              <p className="text-white opacity-90">
                Every piece is crafted by skilled artisans who take pride in celebrating African heritage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Visit Us</h2>
            <p className="text-xl text-gray-600">Located in the heart of Nairobi, Kenya</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-gray-200 h-64 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-[#CC5500] mx-auto mb-4" />
                <p className="text-gray-600 font-semibold">Interactive Map Coming Soon</p>
                <p className="text-sm text-gray-500 mt-2">
                  For now, contact us for exact location and pickup arrangements
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}