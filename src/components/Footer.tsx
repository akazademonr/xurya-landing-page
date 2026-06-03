import { 
  Linkedin, 
  Twitter, 
  Facebook, 
  Instagram, 
  CheckCircle,
  ArrowUpRight 
} from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-[#0f1117] text-white w-full" style={{ fontFamily: "Manrope, sans-serif" }}>
      
      {/* Top section: Centered on mobile, side-by-side and left-aligned on desktop */}
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start text-center lg:text-left px-6 sm:px-12 lg:px-16 py-12 lg:py-16 gap-10 max-w-7xl mx-auto">

        {/* Left Text Block */}
        <div className="flex flex-col items-center lg:items-start gap-6 max-w-lg">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight">
            It's time to support zero pollution,{" "}
            <span className="text-gray-500">with renewable resources</span>
          </h2>

          {/* Badges: Stacked neatly in the center on mobile, row layout on tablet+ */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-2">
            <div className="flex items-center justify-center lg:justify-start gap-2 text-sm text-gray-300">
              <CheckCircle size={18} className="text-green-500 shrink-0" />
              <span>Experienced for more than 10 years</span>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-2 text-sm text-gray-300">
              <CheckCircle size={18} className="text-green-500 shrink-0" />
              <span>Support for the latest technology</span>
            </div>
          </div>
        </div>

        {/* Right CTA Block */}
        <div className="flex flex-col gap-6 items-center lg:items-start max-w-xs w-full lg:w-auto">
          <p className="text-gray-400 text-sm leading-relaxed">
            By increasing the effectiveness and efficiency of electricity use, 
            the use of renewable resources is very profitable for all industrial services.
          </p>
          <button className="bg-white text-black font-medium text-sm px-6 py-3 rounded-full flex items-center justify-center gap-2 hover:bg-gray-200 transition cursor-pointer w-full sm:w-fit">
            Get in touch <ArrowUpRight size={16} />
          </button>
        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 mx-6 sm:mx-12 lg:mx-16 max-w-7xl lg:mx-auto" />

      {/* Middle — logo, nav, socials */}
      {/* Centered column items on mobile, row-split layout on desktop */}
      <div className="flex flex-col md:flex-row justify-between items-center px-6 sm:px-12 lg:px-16 py-10 md:py-8 gap-8 md:gap-4 max-w-7xl mx-auto">

        {/* Logo */}
        <div className="flex justify-center">
          <Logo />
        </div>

        {/* Nav links */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 md:gap-8">
          {["Home", "About Us", "Features", "Services", "Contact"].map((link) => (
            <a
              key={link}
              href="#"
              className="text-gray-400 text-sm hover:text-white transition font-medium"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Social icons */}
        <div className="flex flex-row justify-center gap-3">
          {[
            { icon: <Linkedin size={16} />, href: "#" },
            { icon: <Twitter size={16} />, href: "#" },
            { icon: <Facebook size={16} />, href: "#" },
            { icon: <Instagram size={16} />, href: "#" },
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition"
            >
              {social.icon}
            </a>
          ))}
        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 mx-6 sm:mx-12 lg:mx-16 max-w-7xl lg:mx-auto" />

      {/* Bottom Legal section */}
      <div className="flex flex-col-reverse sm:flex-row justify-between items-center px-6 sm:px-12 lg:px-16 py-6 gap-4 max-w-7xl mx-auto">
        <p className="text-gray-500 text-xs sm:text-sm text-center sm:text-left">
          © 2026 Xurya Inc. All rights reserved - Built by Timi_can_build
        </p>
        <div className="flex justify-center gap-6">
          <a href="#" className="text-gray-500 text-xs sm:text-sm hover:text-white transition">Terms of Service</a>
          <a href="#" className="text-gray-500 text-xs sm:text-sm hover:text-white transition">Privacy Policy</a>
        </div>
      </div>

    </footer>
  );
}