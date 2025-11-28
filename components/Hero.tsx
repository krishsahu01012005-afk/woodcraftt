
import React from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';
import { ArrowUpRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden pt-20 pb-12">
      
      {/* 1. Background Typography Layer (Bottom) */}
      <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none select-none">
        <h1 className="text-[19vw] font-bold text-black tracking-tighter leading-none opacity-95">
          woodcraft
        </h1>
      </div>

      {/* 2. Product Image Layer (Middle) - Removed */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex justify-center items-center h-full mt-4 md:mt-0">
        {/* Main chair image has been removed as requested */}
      </div>

      {/* 3. UI Overlay Layer (Top) */}
      <div className="absolute inset-0 z-20 w-full max-w-[1400px] mx-auto pointer-events-none">
        
        {/* Left Content: Mission + Button */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute bottom-12 left-6 md:left-12 max-w-[300px] pointer-events-auto"
        >
          <p className="text-xs md:text-sm font-medium text-gray-800 leading-relaxed mb-6">
            Our mission is to deliver bespoke furniture that is purely made from wood and natural supplies.
            Our products reflect modern minimalism with a touch of creativity.
          </p>
          <Button variant="dark" onClick={() => document.getElementById('collection')?.scrollIntoView({behavior: 'smooth'})}>
            explore
          </Button>
        </motion.div>

        {/* Right Content: Collection Card */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute bottom-12 right-6 md:right-12 pointer-events-auto"
        >
          <div 
            className="group cursor-pointer bg-transparent"
            onClick={() => document.getElementById('collection')?.scrollIntoView({behavior: 'smooth'})}
          >
            {/* Card Container */}
            <div className="w-[140px] md:w-[180px] bg-beige border-2 border-black rounded-[2rem] p-4 pb-0 relative overflow-hidden transition-transform duration-300 group-hover:-translate-y-2">
              {/* Inner Image */}
              <div className="w-full aspect-[4/3] flex items-center justify-center mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&q=80&w=400" 
                  alt="Collection Preview"
                  className="w-full h-full object-contain mix-blend-multiply"
                />
              </div>
              
              {/* Bottom Label - Mimicking the black pill shape in reference */}
              <div className="absolute bottom-0 left-0 right-0 bg-black text-white py-2 text-center rounded-t-xl rounded-b-[1.8rem]">
                <span className="text-xs md:text-sm font-medium">full collection</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Mobile Layout Adjustment */}
      <div className="md:hidden absolute bottom-4 left-0 right-0 z-30 flex justify-center gap-4 px-4 pointer-events-none">
      </div>

    </section>
  );
};

export default Hero;
