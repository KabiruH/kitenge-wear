// src/app/order/page.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { User, Ruler, ShoppingCart, CreditCard, Phone, Mail, MapPin, CheckCircle, Info } from 'lucide-react';
import { products } from '@/data/products';
import { Product } from '@/types';

// Standard sizes data
const standardSizes = {
  kids: [
    { age: '1-2 years', chest: '50-52cm', waist: '48-50cm', height: '80-92cm' },
    { age: '2-3 years', chest: '52-54cm', waist: '50-52cm', height: '92-98cm' },
    { age: '3-4 years', chest: '54-56cm', waist: '52-54cm', height: '98-104cm' },
    { age: '4-5 years', chest: '56-58cm', waist: '54-56cm', height: '104-110cm' },
    { age: '5-6 years', chest: '58-60cm', waist: '56-58cm', height: '110-116cm' },
    { age: '6-7 years', chest: '60-62cm', waist: '58-60cm', height: '116-122cm' },
    { age: '7-8 years', chest: '62-64cm', waist: '60-62cm', height: '122-128cm' },
    { age: '8-9 years', chest: '64-66cm', waist: '62-64cm', height: '128-134cm' },
    { age: '9-10 years', chest: '66-68cm', waist: '64-66cm', height: '134-140cm' },
    { age: '10-12 years', chest: '68-72cm', waist: '66-70cm', height: '140-152cm' },
  ]
};

interface CustomMeasurements {
  // Boys measurements
  shoulder?: string;
  chest?: string;
  shoulderToWaist?: string;
  fullLengthShirt?: string;
  sleeves?: string;
  waist?: string;
  hips?: string;
  fullLengthTrouser?: string;
  bottom?: string;
  
  // Girls measurements
  shoulderToBust?: string;
  bust?: string;
  shoulderToUnderBust?: string;
  waistToHips?: string;
  waistToKnee?: string;
  fullLengthDress?: string;
  slitLength?: string;
  armRound?: string;
}

export default function OrderPage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [sizeOption, setSizeOption] = useState<'standard' | 'custom'>('standard');
  const [selectedStandardSize, setSelectedStandardSize] = useState('');
  const [gender, setGender] = useState<'boy' | 'girl'>('girl');
  const [customMeasurements, setCustomMeasurements] = useState<CustomMeasurements>({});
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    email: '',
    location: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Get product from URL params (if coming from gallery)
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('product');
    if (productId) {
      const product = products.find(p => p.id === parseInt(productId));
      if (product) {
        setSelectedProduct(product);
      }
    }
  }, []);

  const handleMeasurementChange = (key: keyof CustomMeasurements, value: string) => {
    setCustomMeasurements(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally send the data to your backend
    console.log('Order submitted:', {
      product: selectedProduct,
      sizeOption,
      selectedStandardSize,
      gender,
      customMeasurements,
      customerInfo
    });
    setIsSubmitted(true);
  };

  const calculateTotal = () => {
    if (!selectedProduct) return 0;
    return selectedProduct.price;
  };

  const calculateUpfront = () => {
    return Math.round(calculateTotal() * 0.7); // 70% upfront
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Order Received!</h2>
          <p className="text-gray-600 mb-6">
            Thank you for your order! We've received your measurements and will start crafting your beautiful kitenge right away.
          </p>
          <div className="bg-[#CC5500] bg-opacity-10 rounded-lg p-4 mb-6">
            <p className="text-[#CC5500] font-semibold">
              Your order will be ready in 3 days!
            </p>
          </div>
          <p className="text-sm text-gray-500 mb-6">
            We'll contact you within 24 hours to confirm payment details and delivery arrangements.
          </p>
          <button
            onClick={() => window.location.href = '/'}
            className="w-full bg-[#CC5500] text-white py-3 rounded-lg font-semibold hover:bg-[#FF7A00] transition-colors"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-[#CC5500] to-[#FF7A00] py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Make Your Order
          </h1>
          <p className="text-xl text-white">
            Custom made with love, ready in just 3 days!
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <form onSubmit={handleSubmitOrder} className="grid lg:grid-cols-3 gap-8">
          
          {/* Main Order Form */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Product Selection */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <ShoppingCart className="w-6 h-6 mr-3 text-[#CC5500]" />
                Select Your Design
              </h2>
              
              {selectedProduct ? (
                <div className="flex items-center space-x-4 p-4 border border-[#CC5500] rounded-lg bg-[#CC5500] bg-opacity-5">
                  <div className="relative w-20 h-20 rounded-lg overflow-hidden">
                    <Image
                      src={selectedProduct.image}
                      alt={selectedProduct.name}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg">{selectedProduct.name}</h3>
                    <p className="text-gray-600">{selectedProduct.description}</p>
                    <p className="text-[#CC5500] font-bold">KSH {selectedProduct.price.toLocaleString()}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => window.location.href = '/gallery'}
                    className="text-[#CC5500] hover:text-[#FF7A00] font-semibold"
                  >
                    Change Design
                  </button>
                </div>
              ) : (
                <div className="text-center py-8">
                  <div className="text-4xl mb-4">👗</div>
                  <p className="text-gray-600 mb-4">No design selected yet</p>
                  <a
                    href="/gallery"
                    className="inline-block bg-[#CC5500] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#FF7A00] transition-colors"
                  >
                    Browse Our Gallery
                  </a>
                </div>
              )}
            </div>

            {/* Size Selection */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Ruler className="w-6 h-6 mr-3 text-[#CC5500]" />
                Choose Your Size Option
              </h2>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <button
                  type="button"
                  onClick={() => setSizeOption('standard')}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    sizeOption === 'standard'
                      ? 'border-[#CC5500] bg-[#CC5500] bg-opacity-10'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="text-center">
                    <div className="text-2xl mb-2">📏</div>
                    <h3 className="font-bold">Standard Sizes</h3>
                    <p className="text-sm text-gray-600">Choose by age group</p>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setSizeOption('custom')}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    sizeOption === 'custom'
                      ? 'border-[#CC5500] bg-[#CC5500] bg-opacity-10'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="text-center">
                    <div className="text-2xl mb-2">📐</div>
                    <h3 className="font-bold">Custom Measurements</h3>
                    <p className="text-sm text-gray-600">Perfect fit guaranteed</p>
                  </div>
                </button>
              </div>

              {/* Standard Sizes */}
              {sizeOption === 'standard' && (
                <div>
                  <h3 className="font-bold mb-4">Select Age Group:</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {standardSizes.kids.map((size) => (
                      <button
                        key={size.age}
                        type="button"
                        onClick={() => setSelectedStandardSize(size.age)}
                        className={`p-3 rounded-lg border text-left transition-all ${
                          selectedStandardSize === size.age
                            ? 'border-[#CC5500] bg-[#CC5500] bg-opacity-10'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="font-semibold">{size.age}</div>
                        <div className="text-xs text-gray-600">
                          Chest: {size.chest}<br />
                          Height: {size.height}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Custom Measurements */}
              {sizeOption === 'custom' && (
                <div>
                  {/* Gender Selection */}
                  <div className="mb-6">
                    <h3 className="font-bold mb-4">Gender (for measurement form):</h3>
                    <div className="flex space-x-4">
                      <button
                        type="button"
                        onClick={() => setGender('girl')}
                        className={`px-6 py-3 rounded-lg border-2 transition-all ${
                          gender === 'girl'
                            ? 'border-[#CC5500] bg-[#CC5500] bg-opacity-10'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        👧 Girl
                      </button>
                      <button
                        type="button"
                        onClick={() => setGender('boy')}
                        className={`px-6 py-3 rounded-lg border-2 transition-all ${
                          gender === 'boy'
                            ? 'border-[#CC5500] bg-[#CC5500] bg-opacity-10'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        👦 Boy
                      </button>
                    </div>
                  </div>

                  {/* Measurement Guide */}
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                    <div className="flex items-start space-x-2">
                      <Info className="w-5 h-5 text-blue-600 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-blue-900">Measurement Tips:</h4>
                        <ul className="text-sm text-blue-800 mt-1 space-y-1">
                          <li>• Use a soft measuring tape</li>
                          <li>• Measure over light clothing</li>
                          <li>• Keep tape snug but not tight</li>
                          <li>• All measurements in centimeters (cm)</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Boys Measurements */}
                  {gender === 'boy' && (
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Shoulder (cm)
                        </label>
                        <input
                          type="number"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#CC5500] focus:border-transparent"
                          placeholder="e.g. 25"
                          value={customMeasurements.shoulder || ''}
                          onChange={(e) => handleMeasurementChange('shoulder', e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Chest (cm)
                        </label>
                        <input
                          type="number"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#CC5500] focus:border-transparent"
                          placeholder="e.g. 60"
                          value={customMeasurements.chest || ''}
                          onChange={(e) => handleMeasurementChange('chest', e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Shoulder to Waist (cm)
                        </label>
                        <input
                          type="number"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#CC5500] focus:border-transparent"
                          placeholder="e.g. 35"
                          value={customMeasurements.shoulderToWaist || ''}
                          onChange={(e) => handleMeasurementChange('shoulderToWaist', e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Full Length Shirt (cm)
                        </label>
                        <input
                          type="number"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#CC5500] focus:border-transparent"
                          placeholder="e.g. 45"
                          value={customMeasurements.fullLengthShirt || ''}
                          onChange={(e) => handleMeasurementChange('fullLengthShirt', e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Sleeves (cm)
                        </label>
                        <input
                          type="number"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#CC5500] focus:border-transparent"
                          placeholder="e.g. 40"
                          value={customMeasurements.sleeves || ''}
                          onChange={(e) => handleMeasurementChange('sleeves', e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Waist (cm)
                        </label>
                        <input
                          type="number"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#CC5500] focus:border-transparent"
                          placeholder="e.g. 55"
                          value={customMeasurements.waist || ''}
                          onChange={(e) => handleMeasurementChange('waist', e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Hips (cm)
                        </label>
                        <input
                          type="number"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#CC5500] focus:border-transparent"
                          placeholder="e.g. 65"
                          value={customMeasurements.hips || ''}
                          onChange={(e) => handleMeasurementChange('hips', e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Full Length Trouser (cm)
                        </label>
                        <input
                          type="number"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#CC5500] focus:border-transparent"
                          placeholder="e.g. 75"
                          value={customMeasurements.fullLengthTrouser || ''}
                          onChange={(e) => handleMeasurementChange('fullLengthTrouser', e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Bottom (cm)
                        </label>
                        <input
                          type="number"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#CC5500] focus:border-transparent"
                          placeholder="e.g. 20"
                          value={customMeasurements.bottom || ''}
                          onChange={(e) => handleMeasurementChange('bottom', e.target.value)}
                        />
                      </div>
                    </div>
                  )}

                  {/* Girls Measurements */}
                  {gender === 'girl' && (
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Shoulder (cm)
                        </label>
                        <input
                          type="number"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#CC5500] focus:border-transparent"
                          placeholder="e.g. 25"
                          value={customMeasurements.shoulder || ''}
                          onChange={(e) => handleMeasurementChange('shoulder', e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Shoulder to Bust (cm)
                        </label>
                        <input
                          type="number"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#CC5500] focus:border-transparent"
                          placeholder="e.g. 20"
                          value={customMeasurements.shoulderToBust || ''}
                          onChange={(e) => handleMeasurementChange('shoulderToBust', e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Bust (cm)
                        </label>
                        <input
                          type="number"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#CC5500] focus:border-transparent"
                          placeholder="e.g. 60"
                          value={customMeasurements.bust || ''}
                          onChange={(e) => handleMeasurementChange('bust', e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Shoulder to Under Bust (cm)
                        </label>
                        <input
                          type="number"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#CC5500] focus:border-transparent"
                          placeholder="e.g. 25"
                          value={customMeasurements.shoulderToUnderBust || ''}
                          onChange={(e) => handleMeasurementChange('shoulderToUnderBust', e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Shoulder to Waist (cm)
                        </label>
                        <input
                          type="number"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#CC5500] focus:border-transparent"
                          placeholder="e.g. 35"
                          value={customMeasurements.shoulderToWaist || ''}
                          onChange={(e) => handleMeasurementChange('shoulderToWaist', e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Waist (cm)
                        </label>
                        <input
                          type="number"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#CC5500] focus:border-transparent"
                          placeholder="e.g. 55"
                          value={customMeasurements.waist || ''}
                          onChange={(e) => handleMeasurementChange('waist', e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Waist to Hips (cm)
                        </label>
                        <input
                          type="number"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#CC5500] focus:border-transparent"
                          placeholder="e.g. 18"
                          value={customMeasurements.waistToHips || ''}
                          onChange={(e) => handleMeasurementChange('waistToHips', e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Hips (cm)
                        </label>
                        <input
                          type="number"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#CC5500] focus:border-transparent"
                          placeholder="e.g. 65"
                          value={customMeasurements.hips || ''}
                          onChange={(e) => handleMeasurementChange('hips', e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Waist to Knee (cm)
                        </label>
                        <input
                          type="number"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#CC5500] focus:border-transparent"
                          placeholder="e.g. 30"
                          value={customMeasurements.waistToKnee || ''}
                          onChange={(e) => handleMeasurementChange('waistToKnee', e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Full Length Dress (cm)
                        </label>
                        <input
                          type="number"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#CC5500] focus:border-transparent"
                          placeholder="e.g. 80"
                          value={customMeasurements.fullLengthDress || ''}
                          onChange={(e) => handleMeasurementChange('fullLengthDress', e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Slit Length (cm) - Optional
                        </label>
                        <input
                          type="number"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#CC5500] focus:border-transparent"
                          placeholder="e.g. 15"
                          value={customMeasurements.slitLength || ''}
                          onChange={(e) => handleMeasurementChange('slitLength', e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Arm Round (cm)
                        </label>
                        <input
                          type="number"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#CC5500] focus:border-transparent"
                          placeholder="e.g. 22"
                          value={customMeasurements.armRound || ''}
                          onChange={(e) => handleMeasurementChange('armRound', e.target.value)}
                        />
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Customer Information */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <User className="w-6 h-6 mr-3 text-[#CC5500]" />
                Your Information
              </h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#CC5500] focus:border-transparent"
                    placeholder="Enter your full name"
                    value={customerInfo.name}
                    onChange={(e) => setCustomerInfo(prev => ({ ...prev, name: e.target.value }))}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#CC5500] focus:border-transparent"
                    placeholder="+254 xxx xxx xxx"
                    value={customerInfo.phone}
                    onChange={(e) => setCustomerInfo(prev => ({ ...prev, phone: e.target.value }))}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#CC5500] focus:border-transparent"
                    placeholder="your.email@example.com"
                    value={customerInfo.email}
                    onChange={(e) => setCustomerInfo(prev => ({ ...prev, email: e.target.value }))}
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Location/Delivery Address *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#CC5500] focus:border-transparent"
                    placeholder="e.g. Nairobi, Karen"
                    value={customerInfo.location}
                    onChange={(e) => setCustomerInfo(prev => ({ ...prev, location: e.target.value }))}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <CreditCard className="w-6 h-6 mr-3 text-[#CC5500]" />
                Order Summary
              </h2>

              {selectedProduct && (
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span>Product:</span>
                    <span className="font-semibold">{selectedProduct.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Price:</span>
                    <span className="font-semibold">KSH {selectedProduct.price.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Size Option:</span>
                    <span className="capitalize">{sizeOption}</span>
                  </div>
                  {sizeOption === 'standard' && selectedStandardSize && (
                    <div className="flex justify-between">
                      <span>Selected Size:</span>
                      <span className="text-sm">{selectedStandardSize}</span>
                    </div>
                  )}
                  {sizeOption === 'custom' && (
                    <div className="flex justify-between">
                      <span>Gender:</span>
                      <span className="capitalize">{gender}</span>
                    </div>
                  )}
                </div>
              )}

              <div className="border-t pt-4 space-y-3">
                <div className="flex justify-between font-semibold">
                  <span>Total Amount:</span>
                  <span>KSH {calculateTotal().toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-[#CC5500] font-bold">
                  <span>Pay Now (70%):</span>
                  <span>KSH {calculateUpfront().toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-gray-600 text-sm">
                  <span>Balance on Delivery:</span>
                  <span>KSH {(calculateTotal() - calculateUpfront()).toLocaleString()}</span>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="font-semibold text-green-800">Ready in 3 Days</span>
                  </div>
                  <p className="text-sm text-green-700 mt-1">
                    Your beautiful kitenge will be ready for pickup or delivery in just 3 days!
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={!selectedProduct || (sizeOption === 'standard' && !selectedStandardSize) || !customerInfo.name || !customerInfo.phone || !customerInfo.location}
                  className="w-full bg-[#CC5500] text-white py-4 rounded-lg font-semibold text-lg hover:bg-[#FF7A00] transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                >
                  Submit Order
                </button>

                <div className="text-center">
                  <p className="text-sm text-gray-600">
                    We'll contact you within 24 hours to confirm payment and delivery details.
                  </p>
                </div>
              </div>

              {/* Contact Info */}
              <div className="mt-6 pt-6 border-t space-y-2">
                <h3 className="font-semibold text-gray-900 mb-3">Need Help?</h3>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Phone className="w-4 h-4 text-[#CC5500]" />
                  <span>+254 xxx xxx xxx</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Mail className="w-4 h-4 text-[#CC5500]" />
                  <span>orders@bantubaby.com</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <MapPin className="w-4 h-4 text-[#CC5500]" />
                  <span>Nairobi, Kenya</span>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Simple steps to get your beautiful kitenge</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#CC5500] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="font-bold text-lg mb-2">Choose Design</h3>
              <p className="text-gray-600 text-sm">Browse our gallery and select your favorite kitenge design</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#CC5500] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="font-bold text-lg mb-2">Submit Measurements</h3>
              <p className="text-gray-600 text-sm">Choose standard size or provide custom measurements</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#CC5500] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="font-bold text-lg mb-2">We Create</h3>
              <p className="text-gray-600 text-sm">Our skilled artisans craft your kitenge with love and precision</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#CC5500] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="font-bold text-lg mb-2">Ready in 3 Days!</h3>
              <p className="text-gray-600 text-sm">Your beautiful kitenge is ready for pickup or delivery</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}