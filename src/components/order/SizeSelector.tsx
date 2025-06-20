// src/components/order/SizeSelector.tsx
import React from 'react';
import { Ruler } from 'lucide-react';
import { standardSizes } from '@/data/sizes';

interface SizeSelectorProps {
  sizeOption: 'standard' | 'custom';
  setSizeOption: (option: 'standard' | 'custom') => void;
  selectedStandardSize: string;
  setSelectedStandardSize: (size: string) => void;
}

const SizeSelector: React.FC<SizeSelectorProps> = ({
  sizeOption,
  setSizeOption,
  selectedStandardSize,
  setSelectedStandardSize
}) => {
  return (
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
    </div>
  );
};

export default SizeSelector;