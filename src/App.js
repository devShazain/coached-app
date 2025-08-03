import React from 'react';
import './App.css';

// Import all section components
import Hero from './components/sections/Hero';
import ValueProposition from './components/sections/ValueProposition';
import HowItWorks from './components/sections/HowItWorks';
import Pricing from './components/sections/Pricing';
import BookingForm from './components/sections/BookingForm';
import Testimonials from './components/sections/Testimonials';
import Footer from './components/sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <ValueProposition />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <div id="booking">
        <BookingForm />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;

