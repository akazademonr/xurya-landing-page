import { useState } from "react";
import Button from "./Button";
import Logo from "./Logo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white text-black p-4 relative z-50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo Area */}
          <Logo />

          {/* Hamburger Menu Button (Visible ONLY on Mobile/Tablet) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none cursor-pointer"
            aria-label="Toggle Menu"
          >
            <span
              className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${
                isOpen ? "transform rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-black transition-opacity duration-300 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${
                isOpen ? "transform -rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>

          {/* Desktop Navigation Links (Hidden on Mobile, flex on Desktop) */}
          <div
            className="hidden md:flex space-x-8 text-[17px] font-semibold"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            <a href="#" className="hover:text-gray-500 transition-colors">Home</a>
            <a href="#" className="hover:text-gray-500 transition-colors">About Us</a>
            <a href="#" className="hover:text-gray-500 transition-colors">Features</a>
            <a href="#" className="hover:text-gray-500 transition-colors">Services</a>
            <a href="#" className="hover:text-gray-500 transition-colors">Contact</a>
          </div>

          {/* Desktop Call to Actions (Hidden on Mobile) */}
          <div
            className="hidden md:flex gap-3"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            <Button label="Log in" variant="outline" className="border-gray-300 cursor-pointer" />
            <Button label="Get in touch" className="bg-green-500 border-green-500 text-white hover:bg-green-600 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Mobile Sliding Dropdown Drawer */}
      <div
        className={`absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-lg p-6 md:hidden flex flex-col gap-6 transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-4 invisible pointer-events-none"
        }`}
        style={{ fontFamily: "Manrope, sans-serif" }}
      >
        {/* Mobile Links */}
        <div className="flex flex-col space-y-4 text-lg font-semibold">
          <a href="#" onClick={() => setIsOpen(false)} className="hover:text-green-500 transition-colors">Home</a>
          <a href="#" onClick={() => setIsOpen(false)} className="hover:text-green-500 transition-colors">About Us</a>
          <a href="#" onClick={() => setIsOpen(false)} className="hover:text-green-500 transition-colors">Features</a>
          <a href="#" onClick={() => setIsOpen(false)} className="hover:text-green-500 transition-colors">Services</a>
          <a href="#" onClick={() => setIsOpen(false)} className="hover:text-green-500 transition-colors">Contact</a>
        </div>

        {/* Divider line in drawer */}
        <div className="h-px bg-gray-200 w-full" />

        {/* Mobile CTA Buttons */}
        <div className="flex flex-col gap-3 w-full">
          <Button label="Log in" variant="outline" className="border-gray-300 w-full justify-center cursor-pointer" />
          <Button label="Get in touch" className="bg-green-500 border-green-500 text-white hover:bg-green-600 w-full justify-center cursor-pointer" />
        </div>
      </div>
    </nav>
  );
}