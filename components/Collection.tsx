
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, ShoppingBag } from 'lucide-react';
import ShippingModal from './ShippingModal';

const Collection: React.FC = () => {
  // A large set of reliable, high-quality furniture images from Unsplash
  const productImages = [
    "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&q=80&w=800", // Modern Grey Chair
    "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&q=80&w=800", // White Wooden Chair
    "https://images.unsplash.com/photo-1550254478-ead40cc54513?auto=format&fit=crop&q=80&w=800", // Black Sofa
    "https://images.unsplash.com/photo-1577140917170-285929dfe55c?auto=format&fit=crop&q=80&w=800", // Velvet Sofa
    "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=800", // Modern Coffee Table
    "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&q=80&w=800", // Minimalist Table
    "https://images.unsplash.com/photo-1519947486511-46149fa0a254?auto=format&fit=crop&q=80&w=800", // White Armchair
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800", // Minimal Chair Dark
    "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&q=80&w=800", // Cozy Bedroom
    "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&q=80&w=800", // Modern Living Room
    "https://images.unsplash.com/photo-1540932296235-d84d01913059?auto=format&fit=crop&q=80&w=800", // Pink Sofa
    "https://images.unsplash.com/photo-1581539250439-c96689b516dd?auto=format&fit=crop&q=80&w=800", // Artistic Chair
    "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&q=80&w=800", // Wooden Chair
    "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&q=80&w=800", // Marble Table
    "https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?auto=format&fit=crop&q=80&w=800", // Wood Sideboard
    "https://images.unsplash.com/photo-1595515106967-14380b6b8341?auto=format&fit=crop&q=80&w=800", // White Room
    "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=800", // Mid Century Chair
    "https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&q=80&w=800", // Living Room Setup
    "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&q=80&w=800", // Luxury Sofa Dark
    "https://images.unsplash.com/photo-1617325247661-675ab4b64ae4?auto=format&fit=crop&q=80&w=800", // Stool
    "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&q=80&w=800", // Modern Kitchen
    "https://images.unsplash.com/photo-1532323544230-7191fd510c59?auto=format&fit=crop&q=80&w=800", // Wood Detail
    "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&q=80&w=800", // Modern Bedroom
    "https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&q=80&w=800", // Red Sofa
    "https://images.unsplash.com/photo-1507473888900-52e1ad145924?auto=format&fit=crop&q=80&w=800", // Lamp
    "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=800", // Sideboard
    "https://images.unsplash.com/photo-1512152272829-e313960121ce?auto=format&fit=crop&q=80&w=800", // Office
    "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?auto=format&fit=crop&q=80&w=800", // Dining
    "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=80&w=800", // Lounge Chair
    "https://images.unsplash.com/photo-1601392740426-907c7aa453c4?auto=format&fit=crop&q=80&w=800", // Armchair
    "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&q=80&w=800", // Blue Chair
    "https://images.unsplash.com/photo-1551298370-9d3d53740c72?auto=format&fit=crop&q=80&w=800", // Kitchen
    "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&q=80&w=800", // Decor
    "https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&q=80&w=800", // Grey Sofa
    "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&q=80&w=800", // Modern Cabinet
    "https://images.unsplash.com/photo-1596162955024-873166013628?auto=format&fit=crop&q=80&w=800", // White Bed
    "https://images.unsplash.com/photo-1463171379579-3fdfb86d6285?auto=format&fit=crop&q=80&w=800", // Shelf
    "https://images.unsplash.com/photo-1611269154421-4e27c3300729?auto=format&fit=crop&q=80&w=800", // Lamp Minimal
    "https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&q=80&w=800", // Sofa Detail
    "https://images.unsplash.com/photo-1522771753035-0a5822841f1a?auto=format&fit=crop&q=80&w=800"  // Clean Room
  ];

  // Generate 40 products using the image list
  // Updated with INR prices
  const products = Array.from({ length: 40 }).map((_, i) => ({
    id: i + 1,
    name: `Bespoke Item ${i + 1}`,
    category: ['Chair', 'Sofa', 'Table', 'Lighting', 'Storage', 'Bedding'][i % 6],
    img: productImages[i % productImages.length],
    price: `₹${(Math.floor(Math.random() * 60) + 10) * 1000}` // Generates prices like ₹15000, ₹45000
  }));

  const [visibleCount, setVisibleCount] = useState(8);
  const [selectedProduct, setSelectedProduct] = useState<{id: number, name: string, price: string} | null>(null);

  return (
    <section id="collection" className="bg-dark text-white py-24 min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-4xl md:text-6xl font-light mb-6 tracking-tight">
              The Collection
            </h2>
            <p className="text-gray-400 max-w-lg text-sm md:text-base leading-relaxed">
              Explore our comprehensive curated selection of 40+ unique pieces. 
              Each item is crafted with precision, embracing modern minimalism 
              and natural warmth.
            </p>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-6 md:gap-x-8">
          {products.slice(0, visibleCount).map((p, i) => (
            <motion.div 
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 4) * 0.05 }}
              className="group"
            >
              <div className="aspect-[4/5] bg-gray-800 rounded-2xl overflow-hidden mb-4 relative">
                 <img 
                  src={p.img} 
                  alt={p.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  loading="lazy"
                />
                
                {/* Overlay Button */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                  <button 
                    onClick={() => setSelectedProduct(p)}
                    className="bg-white hover:bg-beige text-black px-6 py-3 rounded-full flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 font-medium shadow-lg w-full justify-center sm:w-auto"
                  >
                    <ShoppingBag size={18} />
                    <span className="whitespace-nowrap">Order Now</span>
                  </button>
                </div>
              </div>

              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-medium text-white">{p.name}</h3>
                  <p className="text-sm text-gray-500">{p.category}</p>
                </div>
                <span className="text-beige font-medium">{p.price}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More */}
        {visibleCount < products.length && (
          <div className="flex justify-center mt-16">
            <button 
              onClick={() => setVisibleCount(prev => Math.min(prev + 8, products.length))}
              className="border border-white/20 text-white px-10 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300"
            >
              View More Collection
            </button>
          </div>
        )}

      </div>

      <ShippingModal 
        isOpen={!!selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
        product={selectedProduct} 
      />
    </section>
  );
};

export default Collection;
