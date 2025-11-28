
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const CaseStudies: React.FC = () => {
  const [activeImage, setActiveImage] = useState(0);

  const cases = [
    { id: 0, title: "Cozy corner with light wood tone", img: "https://images.unsplash.com/photo-1595515106967-14380b6b8341?auto=format&fit=crop&q=80&w=1200" },
    { id: 1, title: "Redesign of restaurant in Quebec", img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?auto=format&fit=crop&q=80&w=1200" },
    { id: 2, title: "Dining table for a Japandi home", img: "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?auto=format&fit=crop&q=80&w=1200" },
    { id: 3, title: "Japanese style living room", img: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&q=80&w=1200" }
  ];

  return (
    <section className="bg-beige py-20 px-6 md:px-12">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left List */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-12">Case<br/>Studies</h2>
          <div className="flex flex-col">
            {cases.map((item, index) => (
              <div 
                key={item.id}
                className="group border-b border-gray-300 py-6 cursor-pointer flex items-center justify-between hover:border-black transition-colors"
                onMouseEnter={() => setActiveImage(index)}
              >
                <span className="text-lg text-gray-600 group-hover:text-black transition-colors">{item.title}</span>
                <span className="bg-transparent group-hover:bg-black group-hover:text-white rounded-full p-2 transition-all transform group-hover:-rotate-45">
                   <ArrowRight size={16} />
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image Display */}
        <div className="h-[300px] md:h-[600px] w-full relative rounded-2xl overflow-hidden shadow-lg">
          {cases.map((item, index) => (
             <img 
               key={item.id}
               src={item.img}
               alt={item.title}
               className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${activeImage === index ? 'opacity-100' : 'opacity-0'}`}
             />
          ))}
        </div>

      </div>
    </section>
  );
};

export default CaseStudies;
