
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Truck, Calculator, Phone, User, CheckCircle, Home } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: string; // e.g., "₹25,000"
}

interface ShippingModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
}

interface CalculationResult {
  distance: number;
  shippingCharge: number;
  total: number;
  estimatedDays: string;
  isCustomQuote: boolean;
}

const ShippingModal: React.FC<ShippingModalProps> = ({ isOpen, onClose, product }) => {
  const [step, setStep] = useState<'input' | 'calculating' | 'summary'>('input');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    pincode: '',
    address: '',
    quantity: 1,
  });
  const [result, setResult] = useState<CalculationResult | null>(null);

  if (!isOpen || !product) return null;

  const parsePrice = (priceStr: string) => {
    return parseInt(priceStr.replace(/[^0-9]/g, ''));
  };

  const handleCalculate = async (e: React.FormEvent) => {
    e.preventDefault();
    setStep('calculating');

    // SIMULATED BACKEND API CALL
    // In a real app, this would be: await fetch('/api/calculate-shipping', ...)
    setTimeout(() => {
      const pin = formData.pincode;
      let distance = 0;
      const ratePerKm = 10;
      const minCharge = 100;

      // Mock Logic based on Chhattisgarh Pincodes (Centered on Bhilai - 490xxx)
      if (pin.startsWith('490')) {
        // Bhilai / Durg Local
        distance = Math.floor(Math.random() * 10) + 5; // 5-15 km
      } else if (pin.startsWith('491')) {
        // Durg District Outer
        distance = Math.floor(Math.random() * 20) + 20; // 20-40 km
      } else if (pin.startsWith('492')) {
        // Raipur
        distance = Math.floor(Math.random() * 15) + 35; // 35-50 km
      } else if (pin.startsWith('49')) {
        // Rest of Chhattisgarh
        distance = Math.floor(Math.random() * 100) + 60; // 60-160 km
      } else {
        // Outside CG / Far
        distance = Math.floor(Math.random() * 500) + 250; // > 250 km
      }

      // Logic: Max auto-calc distance is 200km
      const isCustomQuote = distance > 200;
      
      let shippingCharge = 0;
      if (!isCustomQuote) {
        shippingCharge = Math.max(minCharge, distance * ratePerKm);
      }

      const productPrice = parsePrice(product.price);
      // Total includes shipping only if it's not a custom quote
      const total = (productPrice * formData.quantity) + (isCustomQuote ? 0 : shippingCharge);

      setResult({
        distance,
        shippingCharge,
        total,
        estimatedDays: distance < 50 ? '1-3 Days' : '5-7 Days',
        isCustomQuote
      });
      setStep('summary');
    }, 1500);
  };

  const handleWhatsAppOrder = () => {
    if (!result) return;
    
    const productPrice = parsePrice(product.price);
    const phoneNumber = "919399856553"; 

    // Format matches the requirement
    const message = 
`Hi, I want to order furniture:

📦 *Product:* ${product.name}
🔢 *Quantity:* ${formData.quantity}
💰 *Product Price:* ₹${productPrice.toLocaleString()}
📍 *Delivery Location:* ${formData.pincode}
🚚 *Distance:* ${result.distance} km from Bhilai
🚚 *Shipping Charge:* ${result.isCustomQuote ? 'Contact for Quote' : `₹${result.shippingCharge} (@ ₹10/km)`}
💵 *Total Amount:* ${result.isCustomQuote ? 'To be discussed' : `₹${result.total.toLocaleString()}`}

👤 *Name:* ${formData.name}
📱 *Phone:* ${formData.phone}
🏠 *Address:* ${formData.address || 'Not provided'}

Please confirm my order!`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
        {/* Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        />

        {/* Modal Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative bg-[#1a1a1a] w-full max-w-md rounded-2xl overflow-hidden shadow-2xl border border-white/10"
        >
          {/* Header */}
          <div className="flex justify-between items-center p-6 border-b border-white/10 bg-[#111]">
            <h3 className="text-xl font-light text-white">
              {step === 'summary' ? 'Order Summary' : 'Shipping Calculator'}
            </h3>
            <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
              <X size={24} />
            </button>
          </div>

          <div className="p-6">
            
            {/* PRODUCT PREVIEW */}
            <div className="flex items-center gap-4 mb-8 bg-[#222] p-3 rounded-lg border border-white/5">
              <div className="w-12 h-12 bg-gray-700 rounded-md flex items-center justify-center text-xs text-gray-400">
                Img
              </div>
              <div>
                <p className="text-sm text-gray-400">Ordering</p>
                <p className="font-medium text-white">{product.name}</p>
              </div>
              <div className="ml-auto text-wood font-bold">
                {product.price}
              </div>
            </div>

            {/* STEP 1: INPUT FORM */}
            {step === 'input' && (
              <form onSubmit={handleCalculate} className="space-y-5">
                <div className="space-y-4">
                  <div className="relative group">
                    <User size={18} className="absolute left-0 top-3 text-gray-500 group-focus-within:text-white transition-colors" />
                    <input 
                      required
                      type="text" 
                      placeholder="Customer Name"
                      className="w-full bg-transparent border-b border-gray-700 py-2 pl-8 text-white focus:outline-none focus:border-white transition-colors placeholder-gray-600"
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                    />
                  </div>

                  <div className="relative group">
                    <Phone size={18} className="absolute left-0 top-3 text-gray-500 group-focus-within:text-white transition-colors" />
                    <input 
                      required
                      type="tel" 
                      placeholder="Phone Number (10 digits)"
                      pattern="[0-9]{10}"
                      className="w-full bg-transparent border-b border-gray-700 py-2 pl-8 text-white focus:outline-none focus:border-white transition-colors placeholder-gray-600"
                      value={formData.phone}
                      onChange={e => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative group">
                      <MapPin size={18} className="absolute left-0 top-3 text-gray-500 group-focus-within:text-white transition-colors" />
                      <input 
                        required
                        type="text" 
                        maxLength={6}
                        placeholder="Pincode"
                        className="w-full bg-transparent border-b border-gray-700 py-2 pl-8 text-white focus:outline-none focus:border-white transition-colors placeholder-gray-600"
                        value={formData.pincode}
                        onChange={e => setFormData({...formData, pincode: e.target.value})}
                      />
                    </div>
                    <div className="relative group">
                      <Calculator size={18} className="absolute left-0 top-3 text-gray-500 group-focus-within:text-white transition-colors" />
                      <input 
                        required
                        type="number" 
                        min="1"
                        placeholder="Qty"
                        className="w-full bg-transparent border-b border-gray-700 py-2 pl-8 text-white focus:outline-none focus:border-white transition-colors placeholder-gray-600"
                        value={formData.quantity}
                        onChange={e => setFormData({...formData, quantity: parseInt(e.target.value) || 1})}
                      />
                    </div>
                  </div>

                  <div className="relative group">
                    <Home size={18} className="absolute left-0 top-3 text-gray-500 group-focus-within:text-white transition-colors" />
                    <input 
                      type="text" 
                      placeholder="Delivery Address (Optional)"
                      className="w-full bg-transparent border-b border-gray-700 py-2 pl-8 text-white focus:outline-none focus:border-white transition-colors placeholder-gray-600"
                      value={formData.address}
                      onChange={e => setFormData({...formData, address: e.target.value})}
                    />
                  </div>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-white text-black py-4 font-bold uppercase tracking-wider hover:bg-beige transition-colors mt-4 flex items-center justify-center gap-2"
                >
                  <Truck size={18} />
                  Calculate Shipping
                </button>
              </form>
            )}

            {/* STEP 2: CALCULATING ANIMATION */}
            {step === 'calculating' && (
              <div className="py-12 flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 border-4 border-white/20 border-t-white rounded-full animate-spin mb-6"></div>
                <h4 className="text-lg font-medium text-white mb-2">Calculating Rates...</h4>
                <p className="text-sm text-gray-500">Checking distance from Bhilai to {formData.pincode}</p>
              </div>
            )}

            {/* STEP 3: SUMMARY */}
            {step === 'summary' && result && (
              <div className="space-y-6">
                
                <div className="bg-[#111] p-5 rounded-xl border border-white/5 space-y-3">
                  <div className="flex justify-between text-gray-400 text-sm">
                    <span>Product Price ({formData.quantity}x)</span>
                    <span>₹{(parsePrice(product.price) * formData.quantity).toLocaleString()}</span>
                  </div>
                  
                  <div className="flex justify-between text-gray-400 text-sm items-center">
                     <span className="flex items-center gap-1">
                      <MapPin size={12} /> Distance (from Bhilai)
                    </span>
                    <span>{result.distance} km</span>
                  </div>

                  <div className="flex justify-between text-gray-400 text-sm items-center">
                    <span className="flex items-center gap-2">
                      <Truck size={14} /> 
                      Shipping Charge
                    </span>
                    <span className={result.shippingCharge === 0 && !result.isCustomQuote ? "text-green-400 font-medium" : "text-white"}>
                      {result.isCustomQuote 
                        ? "Contact for Quote" 
                        : (result.shippingCharge === 0 ? "FREE" : `₹${result.shippingCharge}`)}
                    </span>
                  </div>

                  <div className="h-px bg-gray-800 my-2"></div>

                  <div className="flex justify-between items-center">
                    <span className="text-white font-medium">Total Amount</span>
                    <span className="text-2xl font-bold text-white">
                      {result.isCustomQuote ? "On Request" : `₹${result.total.toLocaleString()}`}
                    </span>
                  </div>
                </div>

                {result.isCustomQuote && (
                  <div className="flex items-start gap-3 bg-yellow-900/20 p-3 rounded-lg">
                    <Truck size={18} className="text-yellow-400 mt-0.5" />
                    <div>
                      <p className="text-sm text-yellow-200 font-medium">Distance &gt; 200km</p>
                      <p className="text-xs text-yellow-300/60">Shipping charges will be provided via custom quote.</p>
                    </div>
                  </div>
                )}

                <button 
                  onClick={handleWhatsAppOrder}
                  className="w-full bg-green-600 text-white py-4 font-bold uppercase tracking-wider hover:bg-green-500 transition-colors flex items-center justify-center gap-2 rounded-lg"
                >
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                  Confirm Order
                </button>
              </div>
            )}
            
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ShippingModal;
