// src/lib/constants.ts
export const COLORS = {
  primary: '#CC5500', // Burnt orange
  secondary: '#000000', // Black
  accent: '#FF7A00', // Lighter orange for hover states
  background: '#FFFFFF',
  text: {
    primary: '#000000',
    secondary: '#666666',
    light: '#FFFFFF'
  }
} as const;

export const SITE_CONFIG = {
  name: 'Kitenge Wear',
  description: 'Beautiful African Kitenge Wear for Kids & Adults',
  tagline: 'Authentic African Fashion, Custom Made',
  fulfillmentDays: 3
} as const;