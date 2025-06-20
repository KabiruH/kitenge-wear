// src/components/order/CustomerInformation.tsx
import React from 'react';
import { User } from 'lucide-react';
import { CustomerInfo } from '@/types/order';

interface CustomerInformationProps {
  customerInfo: CustomerInfo;
  setCustomerInfo: React.Dispatch<React.SetStateAction<CustomerInfo>>;
}

const CustomerInformation: React.FC<CustomerInformationProps> = ({
  customerInfo,
  setCustomerInfo
}) => {
  return (
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
  );
};

export default CustomerInformation;