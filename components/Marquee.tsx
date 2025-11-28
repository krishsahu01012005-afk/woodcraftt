
import React from 'react';

const Marquee: React.FC = () => {
  return (
    <div className="bg-black py-4 md:py-6 overflow-hidden whitespace-nowrap border-y border-black">
      <div className="inline-flex animate-marquee">
        {Array.from({ length: 4 }).map((_, i) => (
          <span key={i} className="text-white text-3xl md:text-5xl font-bold uppercase tracking-widest mx-4 flex items-center">
            bespoke <span className="mx-8"></span> 
            woodcraft <span className="mx-8"></span> 
            minimalist <span className="mx-8"></span> 
            modern <span className="mx-8"></span> 
          </span>
        ))}
      </div>
       {/* Duplicate for seamless loop */}
      <div className="inline-flex animate-marquee absolute top-4 md:top-6 left-full">
        {Array.from({ length: 4 }).map((_, i) => (
          <span key={`dup-${i}`} className="text-white text-3xl md:text-5xl font-bold uppercase tracking-widest mx-4 flex items-center">
            bespoke <span className="mx-8"></span> 
            woodcraft <span className="mx-8"></span> 
            minimalist <span className="mx-8"></span> 
            modern <span className="mx-8"></span> 
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
