// src/components/order/ProductSelection.tsx
import React from 'react';
import Image from 'next/image';
import { ShoppingCart } from 'lucide-react';
import { Product } from '@/types';

interface ProductSelectionProps {
  selectedProduct: Product | null;
}

const ProductSelection: React.FC<ProductSelectionProps> = ({ selectedProduct }) => {
  return (
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
  );
};

export default ProductSelection;