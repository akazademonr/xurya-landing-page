import { useState } from "react";
// Import your custom reusable Button component
import Button from "./Button"; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 w-full z-999 bg-white/90 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <div className="text-xl font-bold text-gray-900 tracking-tight">
          Xurya<span className="text-green-500">.</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-600">
          <a href="#home" className="hover:text-green-500 transition-colors duration-200">Home</a>
          <a href="#about" className="hover:text-green-500 transition-colors duration-200">About Us</a>
          <a href="#features" className="hover:text-green-500 transition-colors duration-200">Features</a>
          <a href="#services" className="hover:text-green-500 transition-colors duration-200">Services</a>
          <a href="#contact" className="hover:text-green-500 transition-colors duration-200">Contact</a>
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden md:flex items-center">
          <a href="#contact" className="inline-block">
            <Button 
              label="Get in touch" 
              className="bg-green-500 border-green-500 text-white hover:bg-green-600 hover:border-green-600 font-semibold cursor-pointer"
            />
          </a>
        </div>

        {/* Mobile Hamburger Trigger */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Animated Mobile Dropdown Panel */}
      <div 
        className={`md:hidden bg-white border-b border-gray-100 px-4 space-y-3 shadow-lg absolute w-full left-0 transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen 
            ? "max-h-85 opacity-100 pt-2 pb-6 visible" 
            : "max-h-0 opacity-0 pt-0 pb-0 invisible pointer-events-none"
        }`}
      >
        <a href="#home" onClick={() => setIsOpen(false)} className="block text-sm font-semibold text-gray-600 hover:text-green-500 py-2">Home</a>
        <a href="#about" onClick={() => setIsOpen(false)} className="block text-sm font-semibold text-gray-600 hover:text-green-500 py-2">About Us</a>
        <a href="#features" onClick={() => setIsOpen(false)} className="block text-sm font-semibold text-gray-600 hover:text-green-500 py-2">Features</a>
        <a href="#services" onClick={() => setIsOpen(false)} className="block text-sm font-semibold text-gray-600 hover:text-green-500 py-2">Services</a>
        <a href="#contact" onClick={() => setIsOpen(false)} className="block text-sm font-semibold text-gray-600 hover:text-green-500 py-2">Contact</a>
        <div className="pt-2">
          <a href="#contact" onClick={() => setIsOpen(false)} className="block">
            <Button 
              label="Get in touch" 
              className="w-full bg-green-500 border-green-500 text-white text-center font-semibold cursor-pointer"
            />
          </a>
        </div>
      </div>
    </nav>
  );
}