import React, { useEffect, useState } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const controls = useAnimation();
  
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marathon Runner",
      image: "https://randomuser.me/api/portraits/women/32.jpg",
      quote: "My running coach from Coached helped me shave 15 minutes off my marathon time in just three months. The personalized training plan and weekly check-ins made all the difference in my performance.",
      stars: 5
    },
    {
      name: "Michael Chen",
      role: "MBA Student",
      image: "https://randomuser.me/api/portraits/men/46.jpg",
      quote: "I was struggling with advanced statistics in my MBA program until I found an academic coach through Coached. After just five sessions, I went from barely passing to scoring in the top 10% of my class.",
      stars: 5
    },
    {
      name: "Alicia Rodriguez",
      role: "Entrepreneur",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      quote: "My life coach from Coached helped me navigate a major career transition with confidence. The platform made it easy to find someone who understood my specific challenges and could provide actionable guidance.",
      stars: 5
    },
    {
      name: "David Thompson",
      role: "Software Developer",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
      quote: "The technical coaching I received through Coached was instrumental in helping me master new programming languages. My coach's expertise and teaching style accelerated my learning curve significantly.",
      stars: 5
    },
    {
      name: "Emma Wilson",
      role: "Yoga Instructor",
      image: "https://randomuser.me/api/portraits/women/17.jpg",
      quote: "Working with a business coach from Coached helped me transform my passion for yoga into a thriving studio. The marketing strategies and business planning guidance were exactly what I needed.",
      stars: 4
    },
    {
      name: "James Peterson",
      role: "High School Student",
      image: "https://randomuser.me/api/portraits/men/36.jpg",
      quote: "My academic coach from Coached helped me improve my study habits and time management skills. I raised my GPA from 2.8 to 3.7 in one semester and got accepted to my dream college!",
      stars: 5
    },
    {
      name: "Sophia Martinez",
      role: "Public Speaker",
      image: "https://randomuser.me/api/portraits/women/29.jpg",
      quote: "The communication coach I found through Coached transformed my public speaking abilities. I went from dreading presentations to confidently delivering keynote speeches at industry events.",
      stars: 5
    },
    {
      name: "Robert Kim",
      role: "Finance Professional",
      image: "https://randomuser.me/api/portraits/men/53.jpg",
      quote: "My career coach from Coached provided invaluable guidance during my job search. Their interview preparation and salary negotiation advice helped me land a position with a 30% higher salary than my previous role.",
      stars: 5
    }
  ];

  // Calculate visible testimonials based on screen size
  const getVisibleCount = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 768) return 1;
      if (window.innerWidth < 1024) return 2;
      return 3;
    }
    return 3; // Default for SSR
  };

  // Function to get the currently visible testimonials
  const getVisibleTestimonials = () => {
    const visibleCount = getVisibleCount();
    const result = [];
    
    for (let i = 0; i < visibleCount; i++) {
      const index = (activeIndex + i) % testimonials.length;
      result.push({
        ...testimonials[index],
        originalIndex: index
      });
    }
    
    return result;
  };

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change every 5 seconds
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Animation when testimonials change
  useEffect(() => {
    controls.start({
      opacity: [0, 1],
      x: [50, 0],
      transition: { duration: 0.5 }
    });
  }, [activeIndex, controls]);

  return (
    <section className="py-20 bg-gradient-to-r from-indigo-50 to-blue-50 relative overflow-hidden" id="testimonials">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-24 -left-24 w-48 h-48 rounded-full bg-indigo-200 opacity-20"></div>
        <div className="absolute top-1/4 right-0 w-64 h-64 rounded-full bg-blue-200 opacity-20"></div>
        <div className="absolute bottom-0 left-1/3 w-40 h-40 rounded-full bg-indigo-300 opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-indigo-100 text-indigo-700 font-medium text-sm mb-4">TESTIMONIALS</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Hear from clients who have transformed their lives with the help of our coaches.</p>
        </motion.div>

        {/* Testimonial carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <motion.div 
              className="flex flex-wrap justify-center gap-8"
              animate={controls}
            >
              {getVisibleTestimonials().map((testimonial, index) => (
                <motion.div 
                  key={`${testimonial.originalIndex}-${index}`}
                  className="bg-white rounded-xl shadow-lg overflow-hidden w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] flex-shrink-0 relative z-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ 
                    y: -10, 
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    transition: { duration: 0.2 }
                  }}
                >
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-6">
                      <FaQuoteLeft className="text-4xl text-indigo-200" />
                      <div className="flex">
                        {[...Array(testimonial.stars)].map((_, i) => (
                          <FaStar key={i} className="text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-6 italic">{testimonial.quote}</p>
                    
                    <div className="flex items-center">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full mr-4 object-cover border-2 border-indigo-100"
                      />
                      <div>
                        <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                        <p className="text-indigo-600 text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          {/* Navigation dots */}
          <div className="flex justify-center mt-10 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeIndex ? 'bg-indigo-600 w-6' : 'bg-indigo-200'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;