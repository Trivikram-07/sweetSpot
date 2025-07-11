import React, { useState } from 'react';
import { ShoppingCart, Heart, Star, Sparkles, Crown } from 'lucide-react';

const CakeCard = ({ id, name, price, image, description, category, spiceLevel, bestseller }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const getCategoryColor = (category) => {
    const colors = {
      'Fusion': 'from-purple-500 to-pink-500',
      'Chocolate': 'from-amber-600 to-orange-600',
      'Traditional': 'from-orange-500 to-red-500',
      'Fruit': 'from-green-500 to-emerald-500',
      'Premium': 'from-yellow-500 to-orange-500',
      'Floral': 'from-pink-500 to-rose-500'
    };
    return colors[category] || 'from-gray-500 to-gray-600';
  };

  const getSpiceLevelColor = (level) => {
    const colors = {
      'Mild': 'text-green-600 bg-green-50',
      'Sweet': 'text-pink-600 bg-pink-50',
      'Aromatic': 'text-purple-600 bg-purple-50',
      'Spiced': 'text-orange-600 bg-orange-50',
      'Refreshing': 'text-blue-600 bg-blue-50',
      'Royal': 'text-yellow-600 bg-yellow-50',
      'Fragrant': 'text-rose-600 bg-rose-50'
    };
    return colors[level] || 'text-gray-600 bg-gray-50';
  };

  return (
    <div 
      className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 transform hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Bestseller Badge */}
      {bestseller && (
        <div className="absolute top-4 left-4 z-20 flex items-center gap-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
          <Crown className="w-3 h-3" />
          Bestseller
        </div>
      )}

      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        
        {/* Gradient Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
        
        {/* Floating Action Buttons */}
        <div className={`absolute top-4 right-4 flex flex-col gap-2 transform transition-all duration-300 ${isHovered ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
          <button 
            onClick={() => setIsLiked(!isLiked)}
            className={`w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300 hover:scale-110 shadow-lg ${
              isLiked 
                ? 'bg-red-500 text-white' 
                : 'bg-white/90 text-gray-600 hover:text-red-500'
            }`}
          >
            <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
          </button>
          
          <button className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-600 hover:text-orange-500 transition-all duration-300 hover:scale-110 shadow-lg">
            <Sparkles className="w-5 h-5" />
          </button>
        </div>
        
        {/* Category Badge */}
        <div className={`absolute bottom-4 left-4 bg-gradient-to-r ${getCategoryColor(category)} text-white text-sm font-semibold px-4 py-2 rounded-full shadow-lg transform transition-all duration-300 ${isHovered ? 'scale-105' : ''}`}>
          {category}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-800 group-hover:text-orange-600 transition-colors duration-300 leading-tight">
            {name}
          </h3>
          <div className="flex items-center gap-1 text-yellow-500">
            <Star className="w-4 h-4 fill-current" />
            <span className="text-sm font-medium text-gray-600">4.8</span>
          </div>
        </div>
        
        {/* Spice Level */}
        <div className={`inline-flex items-center gap-1 text-xs font-medium px-3 py-1 rounded-full mb-3 ${getSpiceLevelColor(spiceLevel)}`}>
          <Sparkles className="w-3 h-3" />
          {spiceLevel}
        </div>
        
        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-2">
          {description}
        </p>
        
        {/* Price and Add to Cart */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              ₹{price}
            </span>
            <span className="text-xs text-gray-500">Free Delivery</span>
          </div>
          
          <button className="group/btn relative bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl overflow-hidden">
            <span className="relative z-10 flex items-center gap-2">
              <ShoppingCart className="w-4 h-4" />
              Add to Cart
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 opacity-0 group-hover/btn:opacity-20 transition-opacity duration-300"></div>
          </button>
        </div>
        
        {/* Quick Info */}
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
          <span className="text-xs text-gray-500 flex items-center gap-1">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            Fresh Today
          </span>
          <span className="text-xs text-gray-500">Serves 6-8</span>
        </div>
      </div>
      
      {/* Hover Glow Effect */}
      <div className={`absolute inset-0 rounded-3xl transition-all duration-300 pointer-events-none ${isHovered ? 'ring-2 ring-orange-300 ring-opacity-50' : ''}`}></div>
    </div>
  );
};

export default CakeCard;