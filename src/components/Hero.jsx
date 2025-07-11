import React, { useState, useEffect } from 'react';
import { Cake, Star, Award, Sparkles, Crown, Heart } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "Traditional Meets Modern",
      subtitle: "Authentic Indian flavors in contemporary cake artistry",
      accent: "सुगंधित"
    },
    {
      title: "Royal Indulgence",
      subtitle: "Crafted with premium ingredients and royal spices",
      accent: "राजसी"
    },
    {
      title: "Sweet Memories",
      subtitle: "Every bite tells a story of heritage and love",
      accent: "मिठास"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 py-20 overflow-hidden min-h-[80vh] flex items-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-orange-400 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-red-400 rounded-full blur-xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/3 w-60 h-60 bg-pink-400 rounded-full blur-xl animate-pulse delay-2000" />
        <div className="absolute bottom-1/3 left-1/4 w-24 h-24 bg-yellow-400 rounded-full blur-lg animate-bounce" />
      </div>
      
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 text-6xl text-orange-600 animate-spin-slow">🪷</div>
        <div className="absolute bottom-10 left-10 text-4xl text-red-600 animate-bounce">✨</div>
        <div className="absolute top-1/3 right-1/4 text-5xl text-pink-600 animate-pulse">🌸</div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Logo with Animation */}
          <div className="flex items-center justify-center mb-8 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 p-4 rounded-full shadow-2xl transform group-hover:scale-110 transition-transform duration-300">
                <Cake className="w-10 h-10 text-white" />
              </div>
            </div>
            <div className="ml-6">
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent">
                Sweet<span className="text-yellow-600">Spot</span>
              </h1>
              <p className="text-lg text-gray-600 font-medium tracking-wide">मिठाई का राजा</p>
            </div>
          </div>
          
          {/* Dynamic Content Slider */}
          <div className="mb-12 h-32 flex items-center justify-center">
            <div className="text-center transition-all duration-1000 ease-in-out">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                {slides[currentSlide].title}
              </h2>
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                {slides[currentSlide].subtitle}
              </p>
              <div className="text-3xl font-bold text-orange-600 mt-2 opacity-70">
                {slides[currentSlide].accent}
              </div>
            </div>
          </div>
          
          {/* Features with Indian Touch */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="group flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-orange-200">
              <Crown className="w-6 h-6 text-orange-500 group-hover:text-orange-600 transition-colors" />
              <span className="text-gray-700 font-semibold">Royal Quality</span>
              <span className="text-sm text-orange-600">राजसी गुणवत्ता</span>
            </div>
            <div className="group flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-red-200">
              <Sparkles className="w-6 h-6 text-red-500 group-hover:text-red-600 transition-colors" />
              <span className="text-gray-700 font-semibold">Handcrafted</span>
              <span className="text-sm text-red-600">हस्तनिर्मित</span>
            </div>
            <div className="group flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-pink-200">
              <Heart className="w-6 h-6 text-pink-500 group-hover:text-pink-600 transition-colors" />
              <span className="text-gray-700 font-semibold">Made with Love</span>
              <span className="text-sm text-pink-600">प्रेम से बना</span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group relative bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden">
              <span className="relative z-10">Explore Collection</span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </button>
            <button className="group bg-white/90 backdrop-blur-sm border-2 border-orange-300 hover:border-orange-500 text-orange-600 hover:text-orange-700 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <span className="flex items-center gap-2">
                <Star className="w-5 h-5 group-hover:text-yellow-500 transition-colors" />
                View Bestsellers
              </span>
            </button>
          </div>
          
          {/* Slide Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-orange-500 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;