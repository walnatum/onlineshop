import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
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
    // Handle form submission here
    alert('Message sent! We\'ll get back to you in the cybernet.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Neural Link",
      info: "contact@berserk.cyber",
      description: "Direct neural communication channel"
    },
    {
      icon: Phone,
      title: "Quantum Phone",
      info: "+1 (555) CYBER-01",
      description: "24/7 quantum support line"
    },
    {
      icon: MapPin,
      title: "Physical Location",
      info: "Neo Tokyo District 9",
      description: "Cyberpunk headquarters"
    },
    {
      icon: Clock,
      title: "Operating Hours",
      info: "24/7 Cyber Time",
      description: "Always online in the matrix"
    }
  ];

  return (
    <div className="min-h-screen bg-cyber-dark pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-orbitron font-bold text-transparent bg-clip-text bg-gradient-neon mb-6">
              CONTACT US
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Connect with our cyber warriors. We're here to help you navigate the future.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl md:text-3xl font-orbitron font-bold text-transparent bg-clip-text bg-gradient-neon mb-6">
                GET IN TOUCH
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Ready to join the cyberpunk revolution? Our team is standing by to assist you 
                with any questions about our products or services.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="flex items-start space-x-4 p-4 bg-cyber-navy/30 rounded-lg border border-cyber-blue/20 hover:border-cyber-blue/50 transition-all duration-300"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-neon rounded-lg flex items-center justify-center cyberpunk-glow">
                      <info.icon className="w-6 h-6 text-cyber-dark" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">{info.title}</h3>
                    <p className="text-cyber-blue font-medium">{info.info}</p>
                    <p className="text-gray-400 text-sm">{info.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-cyber-blue/20">
              <h3 className="text-lg font-semibold text-white mb-4">Connect in the Matrix</h3>
              <div className="flex space-x-4">
                {['Twitter', 'Discord', 'GitHub', 'LinkedIn'].map((platform, index) => (
                  <motion.button
                    key={platform}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 bg-cyber-navy/50 rounded-lg flex items-center justify-center border border-cyber-blue/30 hover:border-cyber-blue/70 transition-colors"
                  >
                    <span className="text-cyber-blue font-medium text-sm">{platform[0]}</span>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <div className="bg-cyber-navy/20 rounded-xl p-8 border border-cyber-blue/20">
              <h2 className="text-2xl md:text-3xl font-orbitron font-bold text-transparent bg-clip-text bg-gradient-neon mb-8">
                SEND MESSAGE
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-medium mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-cyber-navy/50 border border-cyber-blue/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyber-blue/50 focus:border-cyber-blue transition-all"
                      placeholder="Your cyber alias"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-cyber-navy/50 border border-cyber-blue/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyber-blue/50 focus:border-cyber-blue transition-all"
                      placeholder="your@neural.link"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-cyber-navy/50 border border-cyber-blue/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyber-blue/50 focus:border-cyber-blue transition-all"
                    placeholder="What's on your mind?"
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full bg-cyber-navy/50 border border-cyber-blue/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyber-blue/50 focus:border-cyber-blue transition-all resize-none"
                    placeholder="Tell us about your cyberpunk dreams..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center space-x-3 bg-gradient-neon text-cyber-dark px-8 py-4 rounded-lg font-bold text-lg cyberpunk-glow transition-all duration-300"
                >
                  <Send className="w-5 h-5" />
                  <span>TRANSMIT MESSAGE</span>
                </motion.button>
              </form>

              {/* Additional Info */}
              <div className="mt-8 pt-8 border-t border-cyber-blue/20">
                <div className="flex items-center space-x-2 text-cyber-blue mb-2">
                  <MessageCircle className="w-5 h-5" />
                  <span className="font-medium">Quick Response Guarantee</span>
                </div>
                <p className="text-gray-400 text-sm">
                  Our cyber team typically responds within 24 hours. For urgent matters, 
                  use our quantum phone line for immediate assistance.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20"
        >
          <div className="bg-cyber-navy/20 rounded-xl p-8 border border-cyber-blue/20">
            <h2 className="text-2xl md:text-3xl font-orbitron font-bold text-transparent bg-clip-text bg-gradient-neon mb-6 text-center">
              FIND US IN THE CYBERNET
            </h2>
            <div className="relative h-64 bg-cyber-navy/50 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-cyber-blue mx-auto mb-4" />
                  <p className="text-white text-lg font-medium">Neo Tokyo District 9</p>
                  <p className="text-gray-400">Cyberpunk Headquarters</p>
                  <p className="text-cyber-blue text-sm mt-2">
                    Interactive map loading in neural interface...
                  </p>
                </div>
              </div>
              {/* Animated grid overlay */}
              <div className="absolute inset-0 cyberpunk-grid opacity-30"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;