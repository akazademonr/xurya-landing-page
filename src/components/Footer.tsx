import { 
  Linkedin, 
  Twitter, 
  Facebook, 
  Instagram, 
  CheckCircle 
} from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-[#0f1117] text-white w-full" style={{ fontFamily: "Manrope, sans-serif" }}>
      
      {/* Top section */}
      <div className="flex flex-row justify-between items-start px-16 py-16 gap-10">

        {/* Left */}
        <div className="flex flex-col gap-6 max-w-lg">
          <h2 className="text-4xl font-semibold leading-tight">
            It's time to support zero pollution,{" "}
            <span className="text-gray-500">with renewable resources</span>
          </h2>

          {/* Badges */}
          <div className="flex flex-row gap-6 mt-2">
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <CheckCircle size={18} className="text-green-500" />
              <span>Experienced for more than 10 years</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <CheckCircle size={18} className="text-green-500" />
              <span>Support for the latest technology</span>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col gap-6 items-start max-w-xs">
          <p className="text-gray-400 text-sm leading-relaxed">
            By increasing the effectiveness and efficiency of electricity use, 
            the use of renewable resources is very profitable for all industrial services.
          </p>
          <button className="bg-white text-black font-medium text-sm px-6 py-3 rounded-full flex items-center gap-2 hover:bg-gray-200 transition cursor-pointer">
            Get in touch <span>↗</span>
          </button>
        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 mx-16" />

      {/* Middle — logo, nav, socials */}
      <div className="flex flex-row justify-between items-center px-16 py-8">

        {/* Logo */}
        <Logo />

        {/* Nav links */}
        <div className="flex flex-row gap-8">
          {["Home", "About Us", "Features", "Services", "Contact"].map((link) => (
            <a
              key={link}
              href="#"
              className="text-gray-400 text-sm hover:text-white transition"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Social icons */}
        <div className="flex flex-row gap-3">
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
      <div className="border-t border-gray-800 mx-16" />

      {/* Bottom */}
      <div className="flex flex-row justify-between items-center px-16 py-6">
        <p className="text-gray-500 text-sm">© 2024 Xurya Inc. All rights reserved</p>
        <div className="flex gap-6">
          <a href="#" className="text-gray-500 text-sm hover:text-white transition">Terms of Service</a>
          <a href="#" className="text-gray-500 text-sm hover:text-white transition">Privacy Policy</a>
        </div>
      </div>

    </footer>
  );
}