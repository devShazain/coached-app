import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaPhone, FaCalendarAlt, FaComments, FaClock } from 'react-icons/fa';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    duration: '60',
    coachingType: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Booking request submitted! We will contact you shortly.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      duration: '60',
      coachingType: '',
      message: ''
    });
  };

  const coachingTypes = [
    'Sports Coaching',
    'Fitness Training',
    'Wellness Coaching',
    'Academic Tutoring',
    'Life Coaching',
    'Career Coaching',
    'Other'
  ];

  const durations = [
    { value: '30', label: '30 minutes' },
    { value: '60', label: '1 hour' },
    { value: '90', label: '1.5 hours' },
    { value: '120', label: '2 hours' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white to-indigo-50 relative overflow-hidden" id="booking">
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
          <span className="inline-block py-1 px-3 rounded-full bg-indigo-100 text-indigo-700 font-medium text-sm mb-4">GET STARTED</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Book Your Session</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Fill out the form below and we'll match you with the perfect coach for your needs.</p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <motion.div
            className="lg:w-1/2 order-2 lg:order-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-xl p-8 border border-gray-100">
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2 flex items-center gap-2">
                  <FaUser className="text-indigo-600" />
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2 flex items-center gap-2">
                  <FaEnvelope className="text-indigo-600" />
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  placeholder="Your email"
                  required
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2 flex items-center gap-2">
                  <FaPhone className="text-indigo-600" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  placeholder="Your phone number"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2 flex items-center gap-2">
                    <FaCalendarAlt className="text-indigo-600" />
                    Session Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2 flex items-center gap-2">
                    <FaClock className="text-indigo-600" />
                    Session Time
                  </label>
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2 flex items-center gap-2">
                  <FaClock className="text-indigo-600" />
                  Session Duration
                </label>
                <select
                  name="duration"
                  value={formData.duration}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  required
                >
                  {durations.map((duration) => (
                    <option key={duration.value} value={duration.value}>{duration.label}</option>
                  ))}
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2 flex items-center gap-2">
                  <FaCalendarAlt className="text-indigo-600" />
                  Coaching Type
                </label>
                <select
                  name="coachingType"
                  value={formData.coachingType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  required
                >
                  <option value="" disabled>Select coaching type</option>
                  {coachingTypes.map((type, index) => (
                    <option key={index} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2 flex items-center gap-2">
                  <FaComments className="text-indigo-600" />
                  Additional Information
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  rows="4"
                  placeholder="Tell us about your goals and what you're looking for in a coach"
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="w-full py-3 px-4 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Submit Booking Request
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            className="lg:w-1/2 order-1 lg:order-2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-indigo-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What Happens Next?</h3>

              <ol className="space-y-6">
                {[
                  {
                    title: "Submit Your Request",
                    description: "Fill out the form with your coaching needs and preferences."
                  },
                  {
                    title: "Get Matched",
                    description: "Our system will match you with coaches who specialize in your area of interest."
                  },
                  {
                    title: "Review Options",
                    description: "You'll receive profiles of matched coaches within 24 hours to review."
                  },
                  {
                    title: "Schedule Session",
                    description: "Choose your preferred coach and schedule your first session at a convenient time."
                  }
                ].map((step, index) => (
                  <motion.li
                    key={index}
                    className="flex gap-4"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900">{step.title}</h4>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </motion.li>
                ))}
              </ol>

              <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Need Help?</h4>
                <p className="text-gray-600 mb-4">Our support team is available to assist you with any questions about the booking process.</p>
                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-indigo-600" />
                  <a href="mailto:support@coached.com" className="text-indigo-600 hover:underline">support@coached.com</a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;