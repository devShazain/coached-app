import React from 'react';
import { motion } from 'framer-motion';
import { FaCheck, FaRegGem, FaRegClock, FaRegCalendarAlt, FaRegComments, FaRegFileAlt, FaRegChartBar, FaRegLightbulb, FaRegStar, FaRegBell } from 'react-icons/fa';

const Pricing = () => {
  // Common features for both pricing tiers to ensure uniform length
  const commonFeatures = [
    { icon: <FaRegCalendarAlt />, text: "Personalized coaching sessions", standard: "60-minute session", premium: "5 sixty-minute sessions" },
    { icon: <FaRegGem />, text: "Session format options", standard: "Online or in-person", premium: "Priority scheduling" },
    { icon: <FaRegComments />, text: "Coach communication", standard: "Basic messaging", premium: "Extended messaging" },
    { icon: <FaRegFileAlt />, text: "Session documentation", standard: "Session notes", premium: "Detailed progress tracking" },
    { icon: <FaRegChartBar />, text: "Progress tracking", standard: "Basic tracking", premium: "Advanced analytics" },
    { icon: <FaRegLightbulb />, text: "Improvement plan", standard: "Not included", premium: "Personalized plan" },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-indigo-50 to-white relative overflow-hidden" id="pricing">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <motion.div 
          className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-indigo-200 opacity-20"
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
          className="absolute bottom-40 -left-20 w-80 h-80 rounded-full bg-blue-200 opacity-20"
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
          <span className="inline-block py-1 px-3 rounded-full bg-indigo-100 text-indigo-700 font-medium text-sm mb-4">PRICING</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">No hidden fees, no surprises. Just straightforward pricing that works for everyone.</p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 justify-center items-stretch max-w-6xl mx-auto">
          {/* Standard Session Card */}
          <motion.div 
            className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ 
              y: -15, 
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              borderColor: "rgba(79, 70, 229, 0.2)"
            }}
          >
            <div className="p-8 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white relative overflow-hidden">
              <motion.div 
                className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-indigo-400 opacity-20"
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
              <motion.div 
                className="absolute -left-10 -bottom-10 w-40 h-40 rounded-full bg-indigo-400 opacity-10"
                animate={{
                  scale: [1, 1.3, 1],
                  rotate: [0, -45, 0]
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <FaRegClock className="text-2xl text-indigo-200" />
                  <h3 className="text-2xl font-bold">Standard Session</h3>
                </div>
                
                <div className="flex items-baseline">
                  <span className="text-5xl font-bold">$100</span>
                  <span className="ml-2 text-indigo-200">/session</span>
                </div>
                <p className="mt-4 text-indigo-100">Perfect for individual coaching needs</p>
              </div>
            </div>
            
            <div className="p-8 flex-grow">
              <ul className="space-y-5">
                {commonFeatures.map((feature, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                  >
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                      {feature.icon}
                    </span>
                    <div>
                      <span className="text-gray-700 font-medium">{feature.text}</span>
                      <p className="text-gray-500 text-sm">{feature.standard}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
              
              <motion.button 
                className="mt-8 w-full py-4 px-4 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-indigo-500/30"
                whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(79, 70, 229, 0.5)" }}
                whileTap={{ scale: 0.98 }}
              >
                Book a Session
              </motion.button>
            </div>
          </motion.div>
          
          {/* Package Deal Card */}
          <motion.div 
            className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-indigo-600 relative flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            whileHover={{ 
              y: -15, 
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            }}
          >
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-indigo-600 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
              Most Popular
            </div>
            
            <div className="p-8 bg-gradient-to-r from-indigo-600 to-blue-500 text-white relative overflow-hidden">
              <motion.div 
                className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-blue-400 opacity-20"
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
              <motion.div 
                className="absolute -left-10 -bottom-10 w-40 h-40 rounded-full bg-indigo-400 opacity-10"
                animate={{
                  scale: [1, 1.3, 1],
                  rotate: [0, -45, 0]
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <FaRegGem className="text-2xl text-blue-200" />
                  <h3 className="text-2xl font-bold">Package Deal</h3>
                </div>
                
                <div className="flex items-baseline">
                  <span className="text-5xl font-bold">$450</span>
                  <span className="ml-2 text-blue-200">/5 sessions</span>
                </div>
                <p className="mt-4 text-blue-100">Save $50 with our package deal</p>
              </div>
            </div>
            
            <div className="p-8 flex-grow">
              <ul className="space-y-5">
                {commonFeatures.map((feature, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                  >
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                      {feature.icon}
                    </span>
                    <div>
                      <span className="text-gray-700 font-medium">{feature.text}</span>
                      <p className="text-gray-500 text-sm">{feature.premium}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
              
              <motion.button 
                className="mt-8 w-full py-4 px-4 bg-gradient-to-r from-indigo-600 to-blue-500 text-white font-medium rounded-lg hover:from-indigo-700 hover:to-blue-600 transition-colors shadow-lg hover:shadow-blue-500/30"
                whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)" }}
                whileTap={{ scale: 0.98 }}
              >
                Get Package Deal
              </motion.button>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-20 bg-gradient-to-r from-indigo-50 to-blue-50 p-10 rounded-2xl shadow-lg text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          whileHover={{ boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
        >
          <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-indigo-200 opacity-20"></div>
          <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-blue-200 opacity-20"></div>
          
          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">For Coaches</h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">Join our platform and grow your coaching business with the industry's most competitive rates</p>
            
            <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 max-w-4xl mx-auto">
              <motion.div 
                className="bg-white p-8 rounded-xl shadow-md w-full flex flex-col justify-between"
                whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              >
                <div>
                  <h4 className="text-xl font-bold text-indigo-600 mb-2">Commission Fee</h4>
                  <div className="text-6xl font-bold text-gray-900 mb-2">2%</div>
                  <p className="text-gray-600">Industry-lowest commission on each booking</p>
                </div>
                <motion.div 
                  className="w-full h-2 bg-gradient-to-r from-indigo-500 to-indigo-300 rounded-full mt-4"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </motion.div>
              
              <motion.div 
                className="bg-white p-8 rounded-xl shadow-md w-full flex flex-col justify-between"
                whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              >
                <div>
                  <h4 className="text-xl font-bold text-indigo-600 mb-2">You Keep</h4>
                  <div className="text-6xl font-bold text-gray-900 mb-2">98%</div>
                  <p className="text-gray-600">Of your earnings on every session</p>
                </div>
                <motion.div 
                  className="w-full h-2 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full mt-4"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.7 }}
                />
              </motion.div>
            </div>
            
            <motion.button 
              className="mt-10 py-4 px-10 bg-gradient-to-r from-indigo-600 to-blue-500 text-white font-medium rounded-lg shadow-lg hover:shadow-indigo-500/30 inline-block"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(79, 70, 229, 0.5)" }}
              whileTap={{ scale: 0.98 }}
            >
              Apply as a Coach
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;