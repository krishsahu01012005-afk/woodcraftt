import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-white text-dark overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              Crafting Soul Into <span className="text-wood">Every Detail.</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6 text-lg">
              Woodcraft isn't just a furniture store; it's a celebration of natural materials and human ingenuity. 
              We believe that furniture should do more than fill a space—it should tell a story.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8 text-lg">
              Our artisans blend traditional woodworking techniques with modern minimalist aesthetics to create 
              pieces that are timeless, durable, and uniquely yours. From the grain of the oak to the curve of the armrest, 
              every detail is considered.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mt-12">
              <div>
                <h4 className="text-3xl font-bold mb-2">10+</h4>
                <p className="text-sm text-gray-500 uppercase tracking-wide">Years of Experience</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold mb-2">500+</h4>
                <p className="text-sm text-gray-500 uppercase tracking-wide">Projects Completed</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 relative"
          >
             <div className="aspect-square rounded-[3rem] overflow-hidden relative z-10">
               <img 
                 src="https://images.unsplash.com/photo-1604578762246-41134e37f9cc?auto=format&fit=crop&q=80&w=1000" 
                 alt="Craftsman at work" 
                 className="w-full h-full object-cover"
               />
             </div>
             {/* Decorative circle */}
             <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-beige rounded-full -z-0"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;