import React from 'react';
import { motion } from 'framer-motion';
import {
  FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope,
  FaPhone, FaMapMarkerAlt, FaArrowUp, FaHeart
} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaFacebook />, url: "#", label: "Facebook", color: "from-blue-600 to-blue-400" },
    { icon: <FaTwitter />, url: "#", label: "Twitter", color: "from-blue-400 to-blue-300" },
    { icon: <FaInstagram />, url: "#", label: "Instagram", color: "from-pink-500 to-purple-500" },
    { icon: <FaLinkedin />, url: "#", label: "LinkedIn", color: "from-blue-700 to-blue-500" }
  ];

  const contactInfo = [
    { icon: <FaEnvelope />, text: "contact@coached.com" },
    { icon: <FaPhone />, text: "+1 (555) 123-4567" },
    { icon: <FaMapMarkerAlt />, text: "123 Coaching Street, San Francisco, CA" }
  ];

  const footerLinks = [
    {
      title: "Company",
      links: [
        { text: "About Us", url: "#" },
        { text: "Our Coaches", url: "#" },
        { text: "Testimonials", url: "#testimonials" },
        { text: "Careers", url: "#" }
      ]
    },
    {
      title: "Resources",
      links: [
        { text: "Blog", url: "#" },
        { text: "FAQ", url: "#" },
        { text: "Support", url: "#" },
        { text: "Coach Resources", url: "#" }
      ]
    },
    {
      title: "Legal",
      links: [
        { text: "Privacy Policy", url: "#" },
        { text: "Terms of Service", url: "#" },
        { text: "Cookie Policy", url: "#" },
        { text: "Accessibility", url: "#" }
      ]
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-indigo-900 text-white pt-16 pb-8 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzMTgyQ0UiIGZpbGwtb3BhY2l0eT0iLjQiPjxwYXRoIGQ9Ik0zNiAzNGM0LjQxOCAwIDgtMy41ODIgOC04cy0zLjU4Mi04LTgtOC04IDMuNTgyLTggOCAzLjU4MiA4IDggOHptMC0yYzMuMzE0IDAgNi0yLjY4NiA2LTZzLTIuNjg2LTYtNi02LTYgMi42ODYtNiA2IDIuNjg2IDYgNiA2em0xNy0xMmM0LjQxOCAwIDgtMy41ODIgOC04cy0zLjU4Mi04LTgtOC04IDMuNTgyLTggOCAzLjU4MiA4IDggOHptMC0yYzMuMzE0IDAgNi0yLjY4NiA2LTZzLTIuNjg2LTYtNi02LTYgMi42ODYtNiA2IDIuNjg2IDYgNiA2em0tMTkgMTJjNC40MTggMCA4LTMuNTgyIDgtOHMtMy41ODItOC04LTgtOCAzLjU4Mi04IDggMy41ODIgOCA4IDh6bTAtMmMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNi02IDIuNjg2LTYgNiAyLjY4NiA2IDYgNnptLTE3LTEyYzQuNDE4IDAgOC0zLjU4MiA4LThzLTMuNTgyLTgtOC04LTggMy41ODItOCA4IDMuNTgyIDggOCA4em0wLTJjMy4zMTQgMCA2LTIuNjg2IDYtNnMtMi42ODYtNi02LTYtNiAyLjY4Ni02IDYgMi42ODYgNiA2IDZ6bS0xOS0yNGM0LjQxOCAwIDgtMy41ODIgOC04cy0zLjU4Mi04LTgtOC04IDMuNTgyLTggOCAzLjU4MiA4IDggOHptMC0yYzMuMzE0IDAgNi0yLjY4NiA2LTZzLTIuNjg2LTYtNi02LTYgMi42ODYtNiA2IDIuNjg2IDYgNiA2em0tMTcgMTJjNC40MTggMCA4LTMuNTgyIDgtOHMtMy41ODItOC04LTgtOCAzLjU4Mi04IDggMy41ODIgOCA4IDh6bTAtMmMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNi02IDIuNjg2LTYgNiAyLjY4NiA2IDYgNnptMTkgMjRjNC40MTggMCA4LTMuNTgyIDgtOHMtMy41ODItOC04LTgtOCAzLjU4Mi04IDggMy41ODIgOCA4IDh6bTAtMmMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNi02IDIuNjg2LTYgNiAyLjY4NiA2IDYgNnoiLz48L2c+PC9nPjwvc3ZnPg==')] bg-center [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0))]" />
      </div>

      {/* Floating elements */}
      <motion.div
        className="absolute top-1/4 left-10 w-8 h-8 rounded-full bg-blue-400 opacity-20"
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
        className="absolute bottom-1/4 right-20 w-12 h-12 rounded-full bg-purple-400 opacity-20"
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

      <motion.div
        className="absolute top-1/3 right-1/4 w-10 h-10 rounded-full bg-indigo-300 opacity-20"
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Back to top button */}
        <motion.button
          onClick={scrollToTop}
          className="absolute right-8 -top-10 bg-gradient-to-r from-indigo-600 to-blue-500 w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:shadow-indigo-500/50 text-white"
          whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(79, 70, 229, 0.5)" }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <FaArrowUp />
        </motion.button>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.h2
                className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text inline-block"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                Coached
              </motion.h2>
              <p className="text-gray-300 mb-6 max-w-md">
                Connecting you with expert coaches to help you achieve your goals and transform your life through personalized guidance.
              </p>

              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    aria-label={social.label}
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-white shadow-lg overflow-hidden relative`}
                    whileHover={{ scale: 1.15, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-tr ${social.color} opacity-80`}></div>
                    <span className="relative z-10">{social.icon}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {footerLinks.map((column, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
              className="backdrop-blur-sm bg-indigo-900/10 p-6 rounded-xl border border-indigo-800/30"
            >
              <h3 className="text-lg font-semibold mb-4 text-indigo-300">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <motion.li
                    key={linkIndex}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <a
                      href={link.url}
                      className="text-gray-300 hover:text-indigo-300 transition-colors flex items-center gap-2"
                    >
                      <motion.span
                        className="w-1.5 h-1.5 bg-indigo-500 rounded-full inline-block"
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1.5 }}
                        transition={{ duration: 0.2 }}
                      />
                      {link.text}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="border-t border-indigo-800/30 pt-8 backdrop-blur-sm"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.p
              className="text-indigo-200 text-sm mb-4 md:mb-0 flex items-center gap-2"
              whileHover={{ scale: 1.02 }}
            >
              © {currentYear} Coached. All rights reserved. Made with
              <motion.span
                animate={{
                  scale: [1, 1.2, 1],
                  color: ['#ec4899', '#8b5cf6', '#ec4899'],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <FaHeart className="inline text-pink-500" />
              </motion.span>
            </motion.p>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-indigo-200">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center"
                  whileHover={{ y: -2, x: 2 }}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.1 * index,
                    hover: { duration: 0.2 }
                  }}
                >
                  <span className="mr-2 text-indigo-400">{item.icon}</span>
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;