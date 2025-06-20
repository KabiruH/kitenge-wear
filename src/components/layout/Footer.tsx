// src/components/layout/Footer.tsx
import React from 'react';
import Link from 'next/link';
import { Heart, Star, Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-black via-gray-900 to-black text-white">
      {/* Inspiring Heritage Section */}
      <div className="bg-[#CC5500] py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <Star className="text-yellow-300 w-8 h-8 mr-3" />
            <h3 className="text-3xl md:text-4xl font-bold text-white">
              Wear Your Heritage with Pride!
            </h3>
            <Star className="text-yellow-300 w-8 h-8 ml-3" />
          </div>
          
          <p className="text-xl md:text-2xl text-white mb-6 max-w-4xl mx-auto leading-relaxed">
            Every thread tells a story. Every pattern carries the wisdom of our ancestors. 
            When you wear authentic African kitenge, you carry forward a legacy of 
            <span className="font-bold text-yellow-300"> beauty, strength, and cultural pride</span>.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-black bg-opacity-30 rounded-lg p-6">
              <div className="text-yellow-300 text-4xl mb-3">🌍</div>
              <h4 className="font-bold text-lg mb-2">African Roots</h4>
              <p className="text-sm">Connecting young hearts to the rich traditions of Africa</p>
            </div>
            
            <div className="bg-black bg-opacity-30 rounded-lg p-6">
              <div className="text-yellow-300 text-4xl mb-3">👑</div>
              <h4 className="font-bold text-lg mb-2">Royal Heritage</h4>
              <p className="text-sm">Every child is royalty, deserving to shine in authentic fashion</p>
            </div>
            
            <div className="bg-black bg-opacity-30 rounded-lg p-6">
              <div className="text-yellow-300 text-4xl mb-3">✨</div>
              <h4 className="font-bold text-lg mb-2">Future Leaders</h4>
              <p className="text-sm">Raising confident children who celebrate their identity</p>
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-black bg-opacity-40 rounded-lg">
            <p className="text-lg italic text-yellow-100">
              "Let every child walk tall, knowing their heritage is beautiful, 
              their culture is powerful, and their future is bright."
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            
            {/* Brand Section */}
            <div className="md:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-[#CC5500] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">K</span>
                </div>
                <span className="text-xl font-bold">{SITE_CONFIG.name}</span>
              </div>
              <p className="text-gray-300 mb-4">
                Authentic African kitenge wear, custom made with love. 
                Celebrating heritage, one beautiful outfit at a time.
              </p>
              <div className="flex items-center space-x-2 text-[#CC5500]">
                <Heart className="w-4 h-4" />
                <span className="text-sm">Made in Kenya with African Pride</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-[#CC5500]">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-300 hover:text-[#CC5500] transition-colors">Home</Link></li>
                <li><Link href="/about" className="text-gray-300 hover:text-[#CC5500] transition-colors">About Us</Link></li>
                <li><Link href="/gallery" className="text-gray-300 hover:text-[#CC5500] transition-colors">Gallery</Link></li>
                <li><Link href="/order" className="text-gray-300 hover:text-[#CC5500] transition-colors">Make Order</Link></li>
                <li><Link href="/contact" className="text-gray-300 hover:text-[#CC5500] transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Our Promise */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-[#CC5500]">Our Promise</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Authentic African fabrics
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Custom & standard sizes
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Ready in 3 days
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Quality craftsmanship
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Cultural pride guaranteed
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-[#CC5500]">Get In Touch</h4>
              <div className="space-y-3">
                <div className="flex items-center text-gray-300">
                  <Phone className="w-4 h-4 mr-3 text-[#CC5500]" />
                  <span>+254 xxx xxx xxx</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Mail className="w-4 h-4 mr-3 text-[#CC5500]" />
                  <span>info@kitenge-wear.com</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <MapPin className="w-4 h-4 mr-3 text-[#CC5500]" />
                  <span>Nairobi, Kenya</span>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-6">
                <h5 className="font-semibold mb-3 text-[#CC5500]">Follow Our Journey</h5>
                <div className="flex space-x-3">
                  <a href="#" className="bg-[#CC5500] p-2 rounded-full hover:bg-[#FF7A00] transition-colors">
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a href="#" className="bg-[#CC5500] p-2 rounded-full hover:bg-[#FF7A00] transition-colors">
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a href="#" className="bg-[#CC5500] p-2 rounded-full hover:bg-[#FF7A00] transition-colors">
                    <Twitter className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} {SITE_CONFIG.name}. Made with{' '}
              <Heart className="inline w-4 h-4 text-red-500 mx-1" />
              for African heritage.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-[#CC5500] transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-[#CC5500] transition-colors">Terms of Service</Link>
              <Link href="/returns" className="hover:text-[#CC5500] transition-colors">Returns</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;