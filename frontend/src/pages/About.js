import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, Users, Globe, Award, Cpu } from 'lucide-react';

const About = () => {
  const stats = [
    { number: "10,000+", label: "Products", icon: Zap },
    { number: "50,000+", label: "Happy Customers", icon: Users },
    { number: "100+", label: "Countries", icon: Globe },
    { number: "5", label: "Years Experience", icon: Award }
  ];

  const values = [
    {
      icon: Cpu,
      title: "Innovation First",
      description: "We're always pushing the boundaries of what's possible, bringing you the latest in cyberpunk technology."
    },
    {
      icon: Shield,
      title: "Quality Guaranteed",
      description: "Every product goes through rigorous testing to ensure it meets our high standards for performance and durability."
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Our community of cyber warriors helps us understand what you need and drives our product development."
    }
  ];

  const team = [
    {
      name: "Akira Cyber",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1535207010348-71e47296838a",
      bio: "Visionary leader with 15 years in tech innovation"
    },
    {
      name: "Maya Neural",
      role: "Head of Design",
      image: "https://images.pexels.com/photos/7267188/pexels-photo-7267188.jpeg",
      bio: "Creative genius behind our cyberpunk aesthetic"
    },
    {
      name: "Zero Matrix",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1573689768803-192c737de7f8",
      bio: "Tech wizard making the impossible possible"
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
              ABOUT BERSERK
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We are the pioneers of the cyberpunk revolution, bringing you the future today. 
              Since 2019, we've been crafting cutting-edge products that blur the line between 
              science fiction and reality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-cyber-navy/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-neon rounded-full mx-auto mb-4 flex items-center justify-center cyberpunk-glow">
                  <stat.icon className="w-8 h-8 text-cyber-dark" />
                </div>
                <div className="text-3xl md:text-4xl font-orbitron font-bold text-cyber-blue neon-text mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-transparent bg-clip-text bg-gradient-neon mb-6">
                OUR STORY
              </h2>
              <div className="space-y-6 text-gray-300 text-lg">
                <p>
                  Born from a shared vision of a cyberpunk future, Berserk started in a small garage 
                  with just three passionate engineers who believed that the future shouldn't wait.
                </p>
                <p>
                  We saw a world where technology and humanity could merge seamlessly, where everyday 
                  objects could be transformed into something extraordinary. Our first product, a simple 
                  LED-enhanced phone case, sparked a revolution.
                </p>
                <p>
                  Today, we're proud to be at the forefront of the cyberpunk movement, creating products 
                  that don't just look futuristic – they define what the future means.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1512364615838-8088a04a778b"
                alt="Our Story"
                className="rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue/20 to-cyber-pink/20 rounded-xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-cyber-navy/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-transparent bg-clip-text bg-gradient-neon mb-6">
              OUR VALUES
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide us in creating the future
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="bg-cyber-navy/30 rounded-xl p-8 border border-cyber-blue/20 hover:border-cyber-blue/50 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-gradient-neon rounded-full mx-auto mb-6 flex items-center justify-center cyberpunk-glow">
                  <value.icon className="w-8 h-8 text-cyber-dark" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-transparent bg-clip-text bg-gradient-neon mb-6">
              MEET THE TEAM
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The cyber warriors behind the revolution
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="bg-cyber-navy/30 rounded-xl overflow-hidden border border-cyber-blue/20 hover:border-cyber-blue/50 transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark/80 via-transparent to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                  <p className="text-cyber-blue font-medium mb-3">{member.role}</p>
                  <p className="text-gray-300 text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-cyber-navy/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-transparent bg-clip-text bg-gradient-neon">
              JOIN THE FUTURE
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ready to experience the cyberpunk revolution? Explore our products and step into tomorrow.
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-neon text-cyber-dark px-8 py-4 rounded-lg font-bold text-lg cyberpunk-glow transition-all duration-300"
            >
              EXPLORE PRODUCTS
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;