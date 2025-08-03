import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaUserFriends, FaCalendarCheck, FaShieldAlt, FaStar, FaChartLine } from 'react-icons/fa';

const ValueProposition = () => {
  const features = [
    {
      icon: <FaUserFriends className="text-4xl text-white" />,
      title: "Expert Coaches",
      description: "Connect with verified professionals across various disciplines with proven track records."
    },
    {
      icon: <FaCalendarCheck className="text-4xl text-white" />,
      title: "Flexible Scheduling",
      description: "Book sessions that fit your schedule, with options for both online and in-person coaching."
    },
    {
      icon: <FaShieldAlt className="text-4xl text-white" />,
      title: "Secure Platform",
      description: "Our platform ensures safe payments, verified reviews, and guaranteed satisfaction."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-white to-indigo-50 relative overflow-hidden" id="value-proposition">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <motion.div 
          className="absolute top-40 right-20 w-64 h-64 rounded-full bg-indigo-200 opacity-20"
          animate={{
            y: [0, 30, 0],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 left-40 w-80 h-80 rounded-full bg-blue-200 opacity-20"
          animate={{
            y: [0, -40, 0],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-indigo-100 text-indigo-700 font-medium text-sm mb-4">WHY CHOOSE US</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Why Choose Coached?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Our platform connects you with the best coaches to help you achieve your goals faster and more effectively.</p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="bg-gradient-to-br from-indigo-600 to-blue-600 p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 text-white relative overflow-hidden group"
              variants={itemVariants}
              whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(79, 70, 229, 0.5)" }}
            >
              <motion.div 
                className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-white opacity-10"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 45, 0]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex justify-center items-center mb-6 group-hover:bg-white/30 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-indigo-100">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-16 bg-white p-8 rounded-2xl shadow-xl relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          whileHover={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)" }}
        >
          <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-indigo-100 opacity-50"></div>
          <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-blue-100 opacity-50"></div>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
            <div className="md:w-2/3">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Unique Advantage</h3>
              <p className="text-gray-600 mb-6 text-lg">Unlike other platforms, Coached offers a personalized matching system that connects you with coaches who specifically match your goals, learning style, and preferences.</p>
              
              <ul className="space-y-4">
                {[
                  "Personalized coach matching based on your specific needs",
                  "Transparent pricing with no hidden fees",
                  "Satisfaction guarantee on your first session",
                  "Ongoing support from our customer success team"
                ].map((item, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                  >
                    <FaCheckCircle className="text-indigo-600 mt-1 flex-shrink-0 text-xl" />
                    <span className="text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <motion.div 
              className="md:w-1/3 bg-gradient-to-br from-indigo-600 to-blue-600 p-8 rounded-xl shadow-lg text-white"
              whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(79, 70, 229, 0.5)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <FaChartLine className="text-3xl text-indigo-200" />
                <h4 className="text-2xl font-bold">Success Rate</h4>
              </div>
              <div className="text-6xl font-bold mb-2">94%</div>
              <p className="text-indigo-100">of our clients report significant progress toward their goals within the first month.</p>
              
              <div className="mt-6 flex">
                {[...Array(5)].map((_, i) => (
                  <motion.div 
                    key={i}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i, duration: 0.3 }}
                  >
                    <FaStar className="text-yellow-400 text-xl" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ValueProposition;