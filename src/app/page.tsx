import React from 'react';
import Carousel from '@/components/home/Carousel';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import { SITE_CONFIG } from '@/lib/constants';

export default function HomePage() {
  return (
    <div>
      {/* Hero Carousel */}
      <Carousel />
      
      {/* Featured Products */}
      <FeaturedProducts />
      
      {/* Call to Action Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Your Custom Kitenge?
          </h2>
          <p className="text-xl text-white mb-8">
            Standard sizes available or tell us your measurements. 
            Ready in just {SITE_CONFIG.fulfillmentDays} days!
          </p>
          <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
            <a 
              href="/order"
              className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Make Your Order
            </a>
            <a 
              href="/contact"
              className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors duration-200"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}