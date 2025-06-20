// src/app/gallery/page.tsx
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Heart, ShoppingCart, Star, Filter, X, ArrowRight } from 'lucide-react';
import { products } from '@/data/products';
import { Product } from '@/types';

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'kids' | 'adults'>('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filter products based on selected category
  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleOrderNow = () => {
    // Close modal and redirect to order page with selected product
    setIsModalOpen(false);
    // In a real app, you'd pass the product data to the order page
    window.location.href = `/order?product=${selectedProduct?.id}`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#CC5500] to-[#FF7A00] py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our Beautiful Collection
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-4xl mx-auto">
            Discover authentic African kitenge wear that celebrates heritage and inspires confidence. 
            Click any item to start your custom order!
          </p>
          <div className="flex items-center justify-center space-x-2 text-yellow-100">
            <Star className="w-5 h-5 fill-current" />
            <span>Every piece tells a story</span>
            <Star className="w-5 h-5 fill-current" />
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Filter className="w-5 h-5 text-[#CC5500]" />
              <span className="font-semibold text-gray-700">Filter by Category:</span>
            </div>
            
            <div className="flex space-x-2">
              {[
                { key: 'all', label: 'All Items', count: products.length },
                { key: 'kids', label: 'Kids Collection', count: products.filter(p => p.category === 'kids').length },
                { key: 'adults', label: 'Adults Collection', count: products.filter(p => p.category === 'adults').length }
              ].map((category) => (
                <button
                  key={category.key}
                  onClick={() => setSelectedCategory(category.key as any)}
                  className={`px-6 py-2 rounded-full font-semibold transition-all duration-200 ${
                    selectedCategory === category.key
                      ? 'bg-[#CC5500] text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.label} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer group"
                onClick={() => handleProductClick(product)}
              >
                {/* Image Container */}
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center text-white">
                      <ShoppingCart className="w-12 h-12 mx-auto mb-2" />
                      <p className="font-semibold text-lg">Click to Order</p>
                    </div>
                  </div>

                  {/* Featured Badge */}
                  {product.featured && (
                    <div className="absolute top-4 left-4 bg-[#CC5500] text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </div>
                  )}

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm">
                    {product.category === 'kids' ? '👶 Kids' : '👩 Adults'}
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#CC5500] transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {product.description}
                  </p>
                  
                  <div className="flex justify-between items-center">
                    <div className="text-2xl font-bold text-[#CC5500]">
                      KSH {product.price.toLocaleString()}
                    </div>
                    <div className="flex items-center space-x-1">
                      <Heart className="w-5 h-5 text-gray-400 hover:text-red-500 transition-colors cursor-pointer" />
                      <span className="text-sm text-gray-500">Add to wishlist</span>
                    </div>
                  </div>

                  {/* Quick Info */}
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>✓ Custom sizing</span>
                      <span>✓ Ready in 3 days</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🎨</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No items found</h3>
              <p className="text-gray-600">Try adjusting your filter to see more products.</p>
            </div>
          )}
        </div>
      </section>

      {/* Product Detail Modal */}
      {isModalOpen && selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b">
              <h2 className="text-2xl font-bold text-gray-900">Order This Design</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Product Image */}
                <div className="relative h-96 rounded-lg overflow-hidden">
                  <Image
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    fill
                    sizes="50vw"
                    className="object-cover"
                  />
                </div>

                {/* Product Details */}
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {selectedProduct.name}
                  </h3>
                  <p className="text-gray-600 mb-6 text-lg">
                    {selectedProduct.description}
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between items-center py-3 border-b">
                      <span className="font-semibold">Price:</span>
                      <span className="text-2xl font-bold text-[#CC5500]">
                        KSH {selectedProduct.price.toLocaleString()}
                      </span>
                    </div>
                    
                    <div className="flex justify-between items-center py-3 border-b">
                      <span className="font-semibold">Category:</span>
                      <span className="capitalize">{selectedProduct.category}</span>
                    </div>
                    
                    <div className="flex justify-between items-center py-3 border-b">
                      <span className="font-semibold">Delivery:</span>
                      <span className="text-green-600 font-semibold">Ready in 3 days</span>
                    </div>
                  </div>

                  {/* Order Options */}
                  <div className="space-y-4">
                    <h4 className="font-bold text-lg mb-3">What would you like to do?</h4>
                    
                    <button
                      onClick={handleOrderNow}
                      className="w-full bg-[#CC5500] text-white py-4 rounded-lg font-semibold text-lg hover:bg-[#FF7A00] transition-colors duration-200 flex items-center justify-center space-x-2"
                    >
                      <ShoppingCart className="w-5 h-5" />
                      <span>Order This Design Now</span>
                      <ArrowRight className="w-5 h-5" />
                    </button>
                    
                    <button
                      onClick={() => setIsModalOpen(false)}
                      className="w-full border-2 border-[#CC5500] text-[#CC5500] py-4 rounded-lg font-semibold text-lg hover:bg-[#CC5500] hover:text-white transition-colors duration-200"
                    >
                      Continue Browsing
                    </button>
                  </div>

                  {/* Additional Info */}
                  <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                    <h5 className="font-semibold mb-2">What happens next?</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Choose your size (standard or custom measurements)</li>
                      <li>• Pay 70% upfront to start production</li>
                      <li>• We'll craft your beautiful kitenge with love</li>
                      <li>• Ready for pickup/delivery in just 3 days!</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action Section */}
      <section className="py-16 bg-[#CC5500]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Don't See What You're Looking For?
          </h2>
          <p className="text-xl text-white mb-8">
            We create custom designs too! Share your vision and let's bring it to life.
          </p>
          <a 
            href="/contact"
            className="inline-block bg-white text-[#CC5500] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
          >
            Contact Us for Custom Orders
          </a>
        </div>
      </section>
    </div>
  );
}