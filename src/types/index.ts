// src/types/index.ts
export interface Product {
  id: number;
  name: string;
  price: number;
  category: 'kids' | 'adults';
  image: string;
  description: string;
  featured?: boolean;
}

export interface CarouselSlide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  cta?: string;
}
