import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Collection from './components/Collection';
import About from './components/About';
import Contact from './components/Contact';
import CaseStudies from './components/CaseStudies';
import FeaturedProducts from './components/FeaturedProducts';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-beige selection:bg-black selection:text-white font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Collection />
        <CaseStudies />
        <FeaturedProducts />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;