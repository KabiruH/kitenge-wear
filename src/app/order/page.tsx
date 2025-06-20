// src/app/order/page.tsx - Refactored main page
'use client';

import React, { useState, useEffect } from 'react';
import { products } from '@/data/products';
import { Product } from '@/types';
import { CustomMeasurements, CustomerInfo } from '@/types/order';

// Import components
import ProductSelection from '@/components/order/ProductSelection';
import SizeSelector from '@/components/order/SizeSelector';
import MeasurementForm from '@/components/order/MeasurementForm';
import CustomerInformation from '@/components/order/CustomerInformation';
import OrderSummary from '@/components/order/OrderSummary';
import OrderSuccess from '@/components/order/OrderSuccess';
import HowItWorks from '@/components/order/HowItWorks';
import { CheckCircle } from 'lucide-react';

export default function OrderPage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [sizeOption, setSizeOption] = useState<'standard' | 'custom'>('standard');
  const [selectedStandardSize, setSelectedStandardSize] = useState('');
  const [gender, setGender] = useState<'boy' | 'girl'>('girl');
  const [customMeasurements, setCustomMeasurements] = useState<CustomMeasurements>({});
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo>({
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
    
    // Validate form
    if (!isFormValid()) {
      alert('Please fill in all required fields');
      return;
    }

    // Here you would normally send the data to your backend
    console.log('Order submitted:', {
      product: selectedProduct,
      sizeOption,
      selectedStandardSize,
      gender,
      customMeasurements,
      customerInfo,
      timestamp: new Date().toISOString()
    });
    
    setIsSubmitted(true);
  };

  const isFormValid = () => {
    return (
      selectedProduct &&
      (sizeOption === 'standard' ? selectedStandardSize : true) &&
      customerInfo.name.trim() &&
      customerInfo.phone.trim() &&
      customerInfo.location.trim()
    );
  };

  // Show success page if order is submitted
  if (isSubmitted) {
    return <OrderSuccess />;
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
          <div className="mt-4 flex items-center justify-center space-x-4 text-white opacity-90">
            <div className="flex items-center space-x-1">
              <CheckCircle className="w-5 h-5" />
              <span>70% upfront</span>
            </div>
            <div className="flex items-center space-x-1">
              <CheckCircle className="w-5 h-5" />
              <span>3-day delivery</span>
            </div>
            <div className="flex items-center space-x-1">
              <CheckCircle className="w-5 h-5" />
              <span>Perfect fit</span>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <form onSubmit={handleSubmitOrder} className="grid lg:grid-cols-3 gap-8">
          
          {/* Main Order Form */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Product Selection */}
            <ProductSelection selectedProduct={selectedProduct} />

            {/* Size Selection */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <SizeSelector
                sizeOption={sizeOption}
                setSizeOption={setSizeOption}
                selectedStandardSize={selectedStandardSize}
                setSelectedStandardSize={setSelectedStandardSize}
              />

              {/* Custom Measurements */}
              <MeasurementForm
                sizeOption={sizeOption}
                gender={gender}
                setGender={setGender}
                customMeasurements={customMeasurements}
                handleMeasurementChange={handleMeasurementChange}
              />
            </div>

            {/* Customer Information */}
            <CustomerInformation
              customerInfo={customerInfo}
              setCustomerInfo={setCustomerInfo}
            />
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <OrderSummary
              selectedProduct={selectedProduct}
              sizeOption={sizeOption}
              selectedStandardSize={selectedStandardSize}
              gender={gender}
            />
          </div>
        </form>
      </div>

      {/* How It Works Section */}
      <HowItWorks />
    </div>
  );
}