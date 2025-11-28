import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white pt-20 pb-10 px-6 md:px-12">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-gray-800 pb-16">
        
        {/* Brand & Newsletter */}
        <div className="lg:col-span-1">
          <h3 className="text-xl font-bold mb-6">Don't miss out</h3>
          <p className="text-gray-400 text-xs mb-6">Sign up for the latest beauty news, product samples and coupons</p>
          
          <div className="space-y-4">
             <div>
               <label className="text-[10px] uppercase tracking-wider text-gray-500">Email Address</label>
               <input type="email" placeholder="Enter your email address" className="w-full bg-transparent border-b border-gray-700 py-2 text-sm focus:outline-none focus:border-white transition-colors" />
             </div>
             <div>
               <label className="text-[10px] uppercase tracking-wider text-gray-500">Birthday</label>
               <div className="flex items-center">
                 <input type="text" placeholder="DD/MM/YYYY" className="w-full bg-transparent border-b border-gray-700 py-2 text-sm focus:outline-none focus:border-white transition-colors" />
                 <button className="text-white ml-2"><ArrowRight size={16} /></button>
               </div>
             </div>
          </div>
        </div>

        {/* Links Column 1 */}
        <div className="lg:col-span-1 lg:pl-12">
          <h4 className="text-[10px] uppercase tracking-wider text-gray-500 mb-6">Company</h4>
          <ul className="space-y-3 text-xs text-gray-300">
            <li><a href="#" className="hover:text-white transition-colors">About</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Experts and spokesmodel</a></li>
          </ul>
        </div>

        {/* Links Column 2 */}
        <div className="lg:col-span-1">
          <h4 className="text-[10px] uppercase tracking-wider text-gray-500 mb-6">Customer Service</h4>
          <ul className="space-y-3 text-xs text-gray-300">
            <li><a href="#" className="hover:text-white transition-colors">Contact us</a></li>
            <li><a href="#" className="hover:text-white transition-colors">My account</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Store locator</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Redeem rewards</a></li>
          </ul>
        </div>

        {/* Links Column 3 */}
        <div className="lg:col-span-1">
          <h4 className="text-[10px] uppercase tracking-wider text-gray-500 mb-6">More to Explore</h4>
          <ul className="space-y-3 text-xs text-gray-300">
            <li><a href="#" className="hover:text-white transition-colors">Beauty Magazine</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Tools and consultations</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Offers</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Loreal paris</a></li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center pt-10 text-xs text-gray-500 gap-4">
        <div className="flex gap-4">
           <div className="border border-gray-700 rounded-full p-2 hover:bg-white hover:text-black transition-colors cursor-pointer"><Facebook size={14} /></div>
           <div className="border border-gray-700 rounded-full p-2 hover:bg-white hover:text-black transition-colors cursor-pointer"><Twitter size={14} /></div>
           <div className="border border-gray-700 rounded-full p-2 hover:bg-white hover:text-black transition-colors cursor-pointer"><Instagram size={14} /></div>
           <div className="border border-gray-700 rounded-full p-2 hover:bg-white hover:text-black transition-colors cursor-pointer"><Linkedin size={14} /></div>
        </div>

        <div className="flex gap-6 flex-wrap justify-center">
          <a href="#">Sitemap</a>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">User Content Permission Terms</a>
          <a href="#">Makeup.com</a>
          <a href="#">Skincare.com</a>
        </div>
        
        <div>© 2024 L'Oreal Paris</div>
      </div>
    </footer>
  );
};

export default Footer;