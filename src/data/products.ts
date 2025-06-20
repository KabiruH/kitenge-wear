// src/data/products.ts
import { Product } from '@/types';

export const products: Product[] = [
  {
    id: 1,
    name: "Kids Ankara Dress",
    price: 2500,
    category: "kids",
    image: "/images/kids/ankara-dress-1.png",  
    description: "Beautiful traditional Ankara dress for kids",
    featured: true
  },
  {
    id: 2,
    name: "Boys Kitenge Shirt",
    price: 1800,
    category: "kids",
    image: "/images/kids/kitenge-shirt-1.png",  
    description: "Stylish kitenge shirt for boys",
    featured: true
  },
  {
    id: 3,
    name: "Girls Kitenge Skirt Set",
    price: 3200,
    category: "kids",
    image: "/images/kids/skirt-set-1.png",  
    description: "Colorful kitenge skirt and top set",
    featured: true
  },
  {
    id: 4,
    name: "Adult Kitenge Dress",
    price: 4500,
    category: "adults",
    image: "/images/adults/dress-1.jpg",  
    description: "Elegant kitenge dress for women"
  }
];