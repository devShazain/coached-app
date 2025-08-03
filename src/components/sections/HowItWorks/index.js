import React from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaCalendarCheck, FaUserFriends, FaCheckCircle, FaArrowRight } from 'react-icons/fa';

const HowItWorks = () => {
  const steps = [
    {
      icon: <FaSearch className="text-4xl text-white" />,
      title: "Find Your Coach",
      description: "Browse our extensive network of verified coaches across various disciplines and specialties."
    },
    {
      icon: <FaCalendarCheck className="text-4xl text-white" />,
      title: "Book a Session",
      description: "Select a time that works for you and choose between online or in-person coaching."
    },
    {
      icon: <FaUserFriends className="text-4xl text-white" />,
      title: "Meet Your Coach",
      description: "Connect with your coach and start your personalized journey toward achieving your goals."
    },
    {
      icon: <FaCheckCircle className="text-4xl text-white" />,
      title: "Track Your Progress",
      description: "Receive feedback, track your improvements, and continue growing with ongoing support."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-600 to-blue-700 text-white relative overflow-hidden" id="how-it-works">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNGRkZGRkYiIGZpbGwtb3BhY2l0eT0iLjQiPjxwYXRoIGQ9Ik0zNiAzNGM0LjQxOCAwIDgtMy41ODIgOC04cy0zLjU4Mi04LTgtOC04IDMuNTgyLTggOCAzLjU4MiA4IDggOHptMC0yYzMuMzE0IDAgNi0yLjY4NiA2LTZzLTIuNjg2LTYtNi02LTYgMi42ODYtNiA2IDIuNjg2IDYgNiA2em0xNy0xMmM0LjQxOCAwIDgtMy41ODIgOC04cy0zLjU4Mi04LTgtOC04IDMuNTgyLTggOCAzLjU4MiA4IDggOHptMC0yYzMuMzE0IDAgNi0yLjY4NiA2LTZzLTIuNjg2LTYtNi02LTYgMi42ODYtNiA2IDIuNjg2IDYgNiA2em0tMTkgMTJjNC40MTggMCA4LTMuNTgyIDgtOHMtMy41ODItOC04LTgtOCAzLjU4Mi04IDggMy41ODIgOCA4IDh6bTAtMmMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNi02IDIuNjg2LTYgNiAyLjY4NiA2IDYgNnptLTE3LTEyYzQuNDE4IDAgOC0zLjU4MiA4LThzLTMuNTgyLTgtOC04LTggMy41ODItOCA4IDMuNTgyIDggOCA4em0wLTJjMy4zMTQgMCA2LTIuNjg2IDYtNnMtMi42ODYtNi02LTYtNiAyLjY4Ni02IDYgMi42ODYgNiA2IDZ6bS0xOS0yNGM0LjQxOCAwIDgtMy41ODIgOC04cy0zLjU4Mi04LTgtOC04IDMuNTgyLTggOCAzLjU4MiA4IDggOHptMC0yYzMuMzE0IDAgNi0yLjY4NiA2LTZzLTIuNjg2LTYtNi02LTYgMi42ODYtNiA2IDIuNjg2IDYgNiA2em0tMTcgMTJjNC40MTggMCA4LTMuNTgyIDgtOHMtMy41ODItOC04LTgtOCAzLjU4Mi04IDggMy41ODIgOCA4IDh6bTAtMmMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNi02IDIuNjg2LTYgNiAyLjY4NiA2IDYgNnptMTkgMjRjNC40MTggMCA4LTMuNTgyIDgtOHMtMy41ODItOC04LTgtOCAzLjU4Mi04IDggMy41ODIgOCA4IDh6bTAtMmMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNi02IDIuNjg2LTYgNiAyLjY4NiA2IDYgNnoiLz48L2c+PC9nPjwvc3ZnPg==')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>
      
      <motion.div 
        className="absolute top-1/4 left-10 w-20 h-20 rounded-full bg-blue-400 opacity-20"
        animate={{
          y: [0, 30, 0],
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute bottom-1/4 right-20 w-32 h-32 rounded-full bg-indigo-400 opacity-20"
        animate={{
          y: [0, -40, 0],
          scale: [1, 1.3, 1],
          rotate: [0, -180, -360]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-sm text-white font-medium text-sm mb-4">PROCESS</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto">Getting started with Coached is simple and straightforward.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              className="text-center relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className="relative">
                <motion.div 
                  className="w-24 h-24 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg relative z-10 overflow-hidden"
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)" }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/50 to-blue-600/50 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">{step.icon}</div>
                </motion.div>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-12 left-full w-full h-0.5 bg-indigo-400/50 items-center justify-end">
                    <motion.div 
                      className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center"
                      initial={{ x: "-50%", opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.2, duration: 0.6 }}
                    >
                      <FaArrowRight className="text-white text-sm" />
                    </motion.div>
                  </div>
                )}
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-indigo-100">{step.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <motion.button 
            className="px-8 py-4 bg-white text-indigo-600 font-medium rounded-lg shadow-lg hover:bg-gray-100 transition-all flex items-center gap-2 mx-auto"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(255, 255, 255, 0.3)" }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Start Your Journey</span>
            <FaArrowRight className="text-sm" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;