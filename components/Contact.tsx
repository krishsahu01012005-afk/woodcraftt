import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-dark text-white py-24 px-6 md:px-12 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        
        {/* Massive Title */}
        <h1 className="text-[15vw] md:text-[12rem] font-bold text-center leading-[0.8] tracking-tighter mb-24 opacity-95">
          Contact me
        </h1>

        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left Column: Contact Details */}
          <div className="lg:col-span-4 flex flex-col justify-start pt-4 space-y-12">
            <div>
              <h3 className="text-gray-500 text-xs uppercase tracking-widest mb-3">Email Address</h3>
              <a href="mailto:krishsahu825@gmail.com" className="text-xl md:text-2xl font-medium hover:text-gray-300 transition-colors border-b border-transparent hover:border-gray-500 inline-block pb-1">
                krishsahu825@gmail.com
              </a>
            </div>

            <div>
              <h3 className="text-gray-500 text-xs uppercase tracking-widest mb-3">WhatsApp / Phone</h3>
              <a href="https://wa.me/919399856553" target="_blank" rel="noopener noreferrer" className="text-xl md:text-2xl font-medium hover:text-gray-300 transition-colors border-b border-transparent hover:border-gray-500 inline-block pb-1">
                +91 93998 56553
              </a>
            </div>

            <div>
              <h3 className="text-gray-500 text-xs uppercase tracking-widest mb-3">Socials</h3>
              <a href="https://instagram.com/thekrish_80" target="_blank" rel="noopener noreferrer" className="text-xl md:text-2xl font-medium hover:text-gray-300 transition-colors border-b border-transparent hover:border-gray-500 inline-block pb-1">
                @thekrish_80
              </a>
            </div>

             <div className="mt-auto pt-12">
               <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                 Available for bespoke furniture commissions and interior design consultations.
               </p>
            </div>
          </div>

          {/* Right Column: Minimal Form */}
          <div className="lg:col-span-8">
            <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
              
              {/* Name Row */}
              <div>
                <label className="block text-sm font-bold mb-8">Name (required)</label>
                <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                  <div className="group">
                    <input 
                      type="text" 
                      id="firstName"
                      className="w-full bg-transparent border-b border-gray-700 py-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-transparent"
                      placeholder="First Name"
                    />
                    <label htmlFor="firstName" className="block text-xs text-gray-500 mt-2 uppercase tracking-wide group-focus-within:text-white transition-colors">First Name</label>
                  </div>
                  <div className="group">
                    <input 
                      type="text" 
                      id="lastName"
                      className="w-full bg-transparent border-b border-gray-700 py-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-transparent"
                      placeholder="Last Name"
                    />
                    <label htmlFor="lastName" className="block text-xs text-gray-500 mt-2 uppercase tracking-wide group-focus-within:text-white transition-colors">Last Name</label>
                  </div>
                </div>
              </div>

              {/* Email Row */}
              <div className="group">
                 <label className="block text-sm font-bold mb-4">Email (required)</label>
                 <input 
                    type="email" 
                    className="w-full bg-transparent border-b border-gray-700 py-3 text-lg focus:outline-none focus:border-white transition-colors"
                  />
                  <span className="block text-xs text-gray-500 mt-2 uppercase tracking-wide group-focus-within:text-white transition-colors">Enter your email address</span>
              </div>

              {/* Message Row */}
              <div className="group">
                 <label className="block text-sm font-bold mb-4">Message (required)</label>
                 <textarea 
                    rows={2}
                    className="w-full bg-transparent border-b border-gray-700 py-3 text-lg focus:outline-none focus:border-white transition-colors resize-none"
                  ></textarea>
                  <span className="block text-xs text-gray-500 mt-2 uppercase tracking-wide group-focus-within:text-white transition-colors">Your inquiries or project details</span>
              </div>

              {/* Submit Button */}
              <div className="pt-8">
                <button type="submit" className="bg-white text-black px-12 py-4 font-bold uppercase tracking-widest text-sm hover:bg-beige transition-colors w-full md:w-auto">
                  Submit
                </button>
              </div>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;