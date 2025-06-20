// src/components/order/OrderSummary.tsx
import React from 'react';
import { CreditCard, CheckCircle, Phone, Mail, MapPin } from 'lucide-react';
import { Product } from '@/types';

interface OrderSummaryProps {
  selectedProduct: Product | null;
  sizeOption: 'standard' | 'custom';
  selectedStandardSize: string;
  gender: 'boy' | 'girl';
}

const OrderSummary: React.FC<OrderSummaryProps> = ({
  selectedProduct,
  sizeOption,
  selectedStandardSize,
  gender
}) => {
  const calculateTotal = () => {
    if (!selectedProduct) return 0;
    return selectedProduct.price;
  };

  const calculateUpfront = () => {
    return Math.round(calculateTotal() * 0.7); // 70% upfront
  };

  return (
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
          className="w-full bg-[#CC5500] text-white py-4 rounded-lg font-semibold text-lg hover:bg-[#FF7A00] transition-colors"
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
  );
};

export default OrderSummary;