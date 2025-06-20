import { Product } from ".";

// src/types/order.ts
export interface CustomMeasurements {
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

export interface CustomerInfo {
  name: string;
  phone: string;
  email: string;
  location: string;
}

export interface OrderFormData {
  selectedProduct: Product | null;
  sizeOption: 'standard' | 'custom';
  selectedStandardSize: string;
  gender: 'boy' | 'girl';
  customMeasurements: CustomMeasurements;
  customerInfo: CustomerInfo;
}