import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, Zap } from 'lucide-react';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/products';

const Home = () => {
  const featuredProducts = products.slice(0, 4);
  const testimonials = [
    {
      id: 1,
      name: "Akira Tanaka",
      avatar: "https://images.unsplash.com/photo-1535207010348-71e47296838a",
      rating: 5,
      comment: "Berserk delivers the most authentic cyberpunk experience! Their products are straight out of Ghost in the Shell."
    },
    {
      id: 2,
      name: "Maya Chen", 
      avatar: "https://images.pexels.com/photos/7267188/pexels-photo-7267188.jpeg",
      rating: 5,
      comment: "The quality is incredible and the aesthetic is perfect. Living my anime dreams!"
    },
    {
      id: 3,
      name: "Ryu Kojima",
      avatar: "https://images.unsplash.com/photo-1573689768803-192c737de7f8",
      rating: 5,
      comment: "Fast shipping, amazing products, and customer service from the future. 10/10!"
    }
  ];

  return (
    <div className="min-h-screen bg-cyber-dark">
      {/* Hero Section */}
      <Hero />

      {/* Featured Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-transparent bg-clip-text bg-gradient-neon mb-6">
              CATEGORIES
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our cyberpunk collection across multiple dimensions
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.slice(0, 8).map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group"
              >
                <Link to={`/categories/${category.name.toLowerCase()}`}>
                  <div className="bg-cyber-navy/30 rounded-xl p-6 border border-cyber-blue/20 hover:border-cyber-blue/50 transition-all duration-300 text-center">
                    <div className="w-12 h-12 bg-gradient-neon rounded-lg mx-auto mb-4 flex items-center justify-center group-hover:shadow-lg cyberpunk-glow transition-all duration-300">
                      <Zap className="w-6 h-6 text-cyber-dark" />
                    </div>
                    <h3 className="font-semibold text-white mb-2 group-hover:text-cyber-blue transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-sm text-gray-400">{category.count} items</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-cyber-navy/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-transparent bg-clip-text bg-gradient-neon mb-6">
              FEATURED PRODUCTS
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Handpicked cyberpunk essentials for the modern warrior
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center mt-12"
          >
            <Link to="/products">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center space-x-3 bg-gradient-neon text-cyber-dark px-8 py-4 rounded-lg font-bold text-lg mx-auto cyberpunk-glow transition-all duration-300"
              >
                <span>VIEW ALL PRODUCTS</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-transparent bg-clip-text bg-gradient-neon mb-6">
              TESTIMONIALS
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              What our cyber warriors are saying
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="bg-cyber-navy/30 rounded-xl p-6 border border-cyber-blue/20 hover:border-cyber-blue/50 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.name}</h4>
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 italic">"{testimonial.comment}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-cyber-navy/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-transparent bg-clip-text bg-gradient-neon">
              JOIN THE RESISTANCE
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Subscribe to get the latest cyberpunk gear, exclusive drops, and insider access to the future
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your neural link..."
                className="flex-1 bg-cyber-navy/50 border border-cyber-blue/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyber-blue/50 focus:border-cyber-blue"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-neon text-cyber-dark px-6 py-3 rounded-lg font-bold cyberpunk-glow transition-all duration-300"
              >
                SUBSCRIBE
              </motion.button>
            </div>
            
            <p className="text-sm text-gray-500">
              No spam, just pure cyberpunk excellence. Unsubscribe anytime.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;