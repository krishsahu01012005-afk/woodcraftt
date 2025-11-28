import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'dark' | 'light' | 'outline';
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'dark', className = '', onClick }) => {
  const baseStyles = "flex items-center gap-2 px-6 py-2 rounded-full font-medium transition-all duration-300 transform active:scale-95";
  
  const variants = {
    dark: "bg-black text-white hover:bg-gray-800",
    light: "bg-white text-black hover:bg-gray-100",
    outline: "border border-black text-black hover:bg-black hover:text-white"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} onClick={onClick}>
      <span>{children}</span>
      <ArrowUpRight size={18} />
    </button>
  );
};

export default Button;