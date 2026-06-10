import React, { useState, useEffect } from 'react';
import bg1 from '../images/img1.jpeg';
import bg2 from '../images/img10.jpeg';
import bg3 from '../images/img9.jpeg';

const slides = [
  {
    image: bg1,
    title: "IABM: Empowering Farmers in Makera Since 2007",
    subtitle: "Driving agricultural excellence in Rwanda through cooperation.",
  },
  {
    image: bg2, // Placeholder for testing
    title: "Leading the Maize Value Chain",
    subtitle: "From high-quality seeds to premium flour processing.",
  },
  {
    image: bg3,
    title: "Expanding into Horticulture",
    subtitle: "Diversifying for a sustainable and prosperous future.",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[600px] w-full overflow-hidden bg-gray-100">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Using img tag with a specific key to force re-render if needed */}
          <img 
            key={slide.image}
            src={slide.image} 
            alt={slide.title} 
            className="w-full h-full object-cover"
          />

          {/* Semi-transparent overlay */}
          <div 
  className="absolute inset-0 z-20" 
  style={{ backgroundColor: 'rgba(20, 120, 60, 0.85)' }}
/>

          {/* Content */}
          <div className="absolute inset-0 flex items-center px-12 md:px-24 z-30">
            <div className="max-w-3xl text-white">
              <h1 className="text-5xl md:text-7xl font-black mb-4 leading-tight drop-shadow-lg">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl text-gray-100 font-medium drop-shadow-md">
                {slide.subtitle}
              </p>
              <button className="mt-8 bg-yellow-400 text-green-950 px-10 py-4 rounded-full font-bold text-lg hover:bg-yellow-500 transition-all shadow-xl">
                Learn More
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-40 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-yellow-400 w-10' : 'bg-white/60'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
