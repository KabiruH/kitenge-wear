// src/components/order/MeasurementForm.tsx
import React from 'react';
import { Info } from 'lucide-react';
import { CustomMeasurements } from '@/types/order';

interface MeasurementFormProps {
  sizeOption: 'standard' | 'custom';
  gender: 'boy' | 'girl';
  setGender: (gender: 'boy' | 'girl') => void;
  customMeasurements: CustomMeasurements;
  handleMeasurementChange: (key: keyof CustomMeasurements, value: string) => void;
}

const MeasurementForm: React.FC<MeasurementFormProps> = ({
  sizeOption,
  gender,
  setGender,
  customMeasurements,
  handleMeasurementChange
}) => {
  if (sizeOption !== 'custom') return null;

  return (
    <div className="space-y-6">
      {/* Gender Selection */}
      <div>
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
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
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
  );
};

export default MeasurementForm;
