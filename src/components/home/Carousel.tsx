// src/components/home/Carousel.tsx - Final version with images
'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { carouselSlides } from '@/data/carousel';

const Carousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
  };

  if (!carouselSlides || carouselSlides.length === 0) {
    return (
      <div className="h-[60vh] md:h-[70vh] bg-gray-200 flex items-center justify-center">
        <p className="text-gray-500 text-xl">No carousel slides available</p>
      </div>
    );
  }

  return (
    <div 
      className="relative w-full overflow-hidden"
      style={{ 
        height: '60vh',
        minHeight: '400px'
      }}
    >
      {/* Background image with fallback */}
      <div
        className="w-full h-full relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${carouselSlides[currentSlide]?.image})`,
          backgroundColor: '#CC5500' // Fallback color if image doesn't load
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0"></div>
        
        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center text-white px-4 max-w-lg">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
              {carouselSlides[currentSlide].title}
            </h1>
            <p className="text-lg md:text-xl mb-6 drop-shadow-lg">
              {carouselSlides[currentSlide].subtitle}
            </p>
            {carouselSlides[currentSlide].cta && (
              <button 
                className="text-white text-lg px-8 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                style={{ backgroundColor: '#CC5500' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#FF7A00';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#CC5500';
                }}
              >
                {carouselSlides[currentSlide].cta}
              </button>
            )}
          </div>
        </div>
      </div>
      
      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition-all duration-200 z-20 shadow-lg"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
     
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition-all duration-200 z-20 shadow-lg"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>
      
      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {carouselSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide
                ? 'bg-white shadow-lg'
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;