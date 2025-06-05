import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, User, Zap } from 'lucide-react';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle authentication here
    alert(isLogin ? 'Logged in successfully!' : 'Account created successfully!');
  };

  return (
    <div className="min-h-screen bg-cyber-dark flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <Link to="/" className="inline-flex items-center space-x-2 mb-8">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 180 }}
              transition={{ duration: 0.3 }}
              className="w-10 h-10 bg-gradient-neon rounded-lg flex items-center justify-center"
            >
              <Zap className="w-6 h-6 text-cyber-dark" />
            </motion.div>
            <span className="font-orbitron text-2xl font-bold neon-text text-cyber-blue">
              BERSERK
            </span>
          </Link>
          
          <h1 className="text-3xl md:text-4xl font-orbitron font-bold text-transparent bg-clip-text bg-gradient-neon mb-2">
            {isLogin ? 'NEURAL LOGIN' : 'JOIN THE MATRIX'}
          </h1>
          <p className="text-gray-300">
            {isLogin 
              ? 'Connect to your cyber account' 
              : 'Create your cyberpunk identity'
            }
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-cyber-navy/30 rounded-xl p-8 border border-cyber-blue/20"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name field (only for signup) */}
            {!isLogin && (
              <div>
                <label className="block text-white font-medium mb-2">Cyber Alias</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyber-blue w-5 h-5" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required={!isLogin}
                    className="w-full bg-cyber-navy/50 border border-cyber-blue/30 rounded-lg pl-12 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyber-blue/50 focus:border-cyber-blue transition-all"
                    placeholder="Enter your cyber alias"
                  />
                </div>
              </div>
            )}

            {/* Email field */}
            <div>
              <label className="block text-white font-medium mb-2">Neural Link</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyber-blue w-5 h-5" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-cyber-navy/50 border border-cyber-blue/30 rounded-lg pl-12 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyber-blue/50 focus:border-cyber-blue transition-all"
                  placeholder="your@neural.link"
                />
              </div>
            </div>

            {/* Password field */}
            <div>
              <label className="block text-white font-medium mb-2">Security Code</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyber-blue w-5 h-5" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full bg-cyber-navy/50 border border-cyber-blue/30 rounded-lg pl-12 pr-12 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyber-blue/50 focus:border-cyber-blue transition-all"
                  placeholder="Enter your security code"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-cyber-blue transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Confirm Password field (only for signup) */}
            {!isLogin && (
              <div>
                <label className="block text-white font-medium mb-2">Confirm Security Code</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyber-blue w-5 h-5" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required={!isLogin}
                    className="w-full bg-cyber-navy/50 border border-cyber-blue/30 rounded-lg pl-12 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyber-blue/50 focus:border-cyber-blue transition-all"
                    placeholder="Confirm your security code"
                  />
                </div>
              </div>
            )}

            {/* Remember me & Forgot password (only for login) */}
            {isLogin && (
              <div className="flex items-center justify-between">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="rounded border-cyber-blue/30 bg-cyber-navy/50 text-cyber-blue focus:ring-cyber-blue/50"
                  />
                  <span className="text-gray-300 text-sm">Remember me</span>
                </label>
                <button
                  type="button"
                  className="text-cyber-blue hover:text-white text-sm transition-colors"
                >
                  Forgot password?
                </button>
              </div>
            )}

            {/* Submit button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-neon text-cyber-dark py-3 rounded-lg font-bold text-lg cyberpunk-glow transition-all duration-300"
            >
              {isLogin ? 'CONNECT TO MATRIX' : 'CREATE ACCOUNT'}
            </motion.button>
          </form>

          {/* Divider */}
          <div className="mt-6 mb-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-cyber-blue/20"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-cyber-navy/30 px-4 text-gray-400">or</span>
              </div>
            </div>
          </div>

          {/* Social login buttons */}
          <div className="space-y-3">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full border border-cyber-blue/30 text-white py-3 rounded-lg font-medium hover:bg-cyber-blue/10 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>🔗</span>
              <span>Connect with Neural Grid</span>
            </motion.button>
          </div>

          {/* Toggle between login/signup */}
          <div className="mt-6 text-center">
            <span className="text-gray-400">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
            </span>
            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="ml-2 text-cyber-blue hover:text-white font-medium transition-colors"
            >
              {isLogin ? 'Join the Matrix' : 'Neural Login'}
            </button>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 text-center"
        >
          <p className="text-gray-500 text-sm">
            By connecting, you agree to our{' '}
            <Link to="/terms" className="text-cyber-blue hover:text-white transition-colors">
              Cyber Terms
            </Link>{' '}
            and{' '}
            <Link to="/privacy" className="text-cyber-blue hover:text-white transition-colors">
              Neural Privacy Policy
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;