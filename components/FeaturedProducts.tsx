
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const FeaturedProducts: React.FC = () => {
  const products = [
    { title: "La chaise", img: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&q=80&w=600" },
    { title: "Wooden sideboard", img: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=600" },
    { title: "Modern chair", img: "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&q=80&w=600" },
  ];

  return (
    <section className="bg-beige py-20 px-6 md:px-12 border-t border-gray-200">
      <h2 className="text-4xl font-bold mb-12">Featured Products</h2>
      
      <div className="grid md:grid-cols-3 gap-8">
        {products.map((product, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="group cursor-pointer"
            onClick={() => window.open('https://wa.me/919399856553', '_blank')}
          >
            <div className="bg-white rounded-[2rem] p-8 aspect-square flex items-center justify-center mb-4 relative overflow-hidden">
              <div className="absolute inset-0 bg-gray-50 opacity-0 group-hover:opacity-10 transition-opacity" />
              <img 
                src={product.img} 
                alt={product.title} 
                className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            <div className="flex items-center justify-between bg-black text-white px-6 py-4 rounded-full transition-transform active:scale-95">
              <span className="font-medium text-sm">{product.title}</span>
              <ArrowUpRight size={16} />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
