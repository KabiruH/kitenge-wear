// src/components/order/HowItWorks.tsx
import React from 'react';
import { Search, Ruler, Heart, CheckCircle } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: 1,
      icon: <Search className="w-8 h-8" />,
      title: "Choose Design",
      description: "Browse our gallery and select your favorite kitenge design",
      color: "bg-blue-500"
    },
    {
      number: 2,
      icon: <Ruler className="w-8 h-8" />,
      title: "Submit Measurements", 
      description: "Choose standard size or provide custom measurements",
      color: "bg-purple-500"
    },
    {
      number: 3,
      icon: <Heart className="w-8 h-8" />,
      title: "We Create",
      description: "Our skilled artisans craft your kitenge with love and precision",
      color: "bg-pink-500"
    },
    {
      number: 4,
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Ready in 3 Days!",
      description: "Your beautiful kitenge is ready for pickup or delivery",
      color: "bg-green-500"
    }
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simple steps to get your beautiful kitenge. From selection to delivery, 
            we make it easy for you to dress your little one in authentic African heritage.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gray-300 transform translate-x-4 -translate-y-1/2 z-0">
                  <div className="absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2">
                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                  </div>
                </div>
              )}
              
              <div className="text-center relative z-10">
                <div className={`w-16 h-16 ${step.color} text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg transform hover:scale-110 transition-transform duration-200`}>
                  {step.icon}
                </div>
                <div className="absolute -top-2 -left-2 w-8 h-8 bg-[#CC5500] text-white rounded-full flex items-center justify-center text-sm font-bold shadow-md">
                  {step.number}
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="bg-white rounded-xl shadow-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Why Choose Bantu Baby?
            </h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-600">Fast 3-day delivery</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-600">Custom & standard sizes</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-gray-600">Authentic African fabrics</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;