import React, { useState, useMemo } from 'react';
import Hero from '../components/Hero';
import CakeCard from '../components/CakeCard';
import cakesData from '../data/cakes.json';
import { Filter, Search, Star, TrendingUp, Sparkles, Grid3X3, List } from 'lucide-react';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('popular');
  const [viewMode, setViewMode] = useState('grid');
  const [showFilters, setShowFilters] = useState(false);

  const categories = ['All', 'Fusion', 'Traditional', 'Chocolate', 'Fruit', 'Premium', 'Floral'];
  const sortOptions = [
    { value: 'popular', label: 'Most Popular' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'name', label: 'Name A-Z' }
  ];

  const filteredAndSortedCakes = useMemo(() => {
    let filtered = cakesData.filter(cake => {
      const matchesSearch = cake.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           cake.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || cake.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    // Sort the filtered results
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'name':
          return a.name.localeCompare(b.name);
        case 'popular':
        default:
          return b.bestseller - a.bestseller;
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, sortBy]);

  const bestsellers = cakesData.filter(cake => cake.bestseller);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-50">
      {/* Hero Section */}
      <Hero />
      
      {/* Bestsellers Section */}
      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Star className="w-8 h-8 text-yellow-500 fill-current" />
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Bestsellers
              </h2>
              <Star className="w-8 h-8 text-yellow-500 fill-current" />
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our most loved creations that have won hearts across the nation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestsellers.map((cake) => (
              <CakeCard
                key={cake.id}
                {...cake}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Main Cakes Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Sparkles className="w-8 h-8 text-orange-500" />
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Our Collection
              </h2>
              <Sparkles className="w-8 h-8 text-orange-500" />
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our handcrafted collection of premium cakes, each infused with authentic Indian flavors and made with love
            </p>
          </div>
          
          {/* Search and Filters */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-12 shadow-lg border border-orange-100">
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for flavors, ingredients..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                />
              </div>
              
              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
              
              {/* Sort and View Options */}
              <div className="flex items-center gap-3">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                
                <div className="flex bg-gray-100 rounded-full p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-full transition-all duration-300 ${
                      viewMode === 'grid' ? 'bg-white shadow-md text-orange-600' : 'text-gray-600'
                    }`}
                  >
                    <Grid3X3 className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-full transition-all duration-300 ${
                      viewMode === 'list' ? 'bg-white shadow-md text-orange-600' : 'text-gray-600'
                    }`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Results Info */}
          <div className="flex items-center justify-between mb-8">
            <p className="text-gray-600">
              Showing <span className="font-semibold text-orange-600">{filteredAndSortedCakes.length}</span> delicious cakes
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <TrendingUp className="w-4 h-4" />
              Updated daily with fresh options
            </div>
          </div>
          
          {/* Cakes Grid */}
          <div className={`grid gap-8 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1 lg:grid-cols-2'
          }`}>
            {filteredAndSortedCakes.map((cake) => (
              <CakeCard
                key={cake.id}
                {...cake}
              />
            ))}
          </div>
          
          {/* No Results */}
          {filteredAndSortedCakes.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🍰</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">No cakes found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search or filters</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                }}
                className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-300"
              >
                Clear Filters
              </button>
            </div>
          )}
          
          {/* Load More Button */}
          {filteredAndSortedCakes.length > 0 && (
            <div className="text-center mt-12">
              <button className="group bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                <span className="flex items-center gap-2">
                  Load More Delights
                  <Sparkles className="w-5 h-5 group-hover:animate-spin" />
                </span>
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;