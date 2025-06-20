// src/components/order/OrderSuccess.tsx
import React from 'react';
import { CheckCircle, Heart, Home, ShoppingBag } from 'lucide-react';

const OrderSuccess: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Order Received!</h2>
        <p className="text-gray-600 mb-6">
          Thank you for your order! We've received your measurements and will start crafting your beautiful kitenge right away.
        </p>
        <div className="bg-[#CC5500] bg-opacity-10 rounded-lg p-4 mb-6">
          <p className="text-[#CC5500] font-semibold flex items-center justify-center">
            <Heart className="w-4 h-4 mr-2" />
            Your order will be ready in 3 days!
          </p>
        </div>
        <p className="text-sm text-gray-500 mb-6">
          We'll contact you within 24 hours to confirm payment details and delivery arrangements.
        </p>
        
        <div className="space-y-3">
          <button
            onClick={() => window.location.href = '/'}
            className="w-full bg-[#CC5500] text-white py-3 rounded-lg font-semibold hover:bg-[#FF7A00] transition-colors flex items-center justify-center"
          >
            <Home className="w-5 h-5 mr-2" />
            Back to Home
          </button>
          
          <button
            onClick={() => window.location.href = '/gallery'}
            className="w-full border-2 border-[#CC5500] text-[#CC5500] py-3 rounded-lg font-semibold hover:bg-[#CC5500] hover:text-white transition-colors flex items-center justify-center"
          >
            <ShoppingBag className="w-5 h-5 mr-2" />
            Continue Shopping
          </button>
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-200">
          <p className="text-xs text-gray-400">
            Order confirmation will be sent to your phone and email
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
