import { useState } from "react";
import trendMicro from "../assets/trendmicro.png";
import telia from "../assets/teliacygate.png";
import business from "../assets/orangebusiness.png";
import headspace from "../assets/headspace.png";
import medtronic from "../assets/medtronic.png";

const brands = [
  { name: "Trend Micro", logo: trendMicro },
  { name: "Telia Cygate", logo: telia },
  { name: "Business", logo: business },
  { name: "Headspace", logo: headspace },
  { name: "Medtronic", logo: medtronic },
];

interface BrandLogosProps {
  className?: string; // Standard hook for external structural layouts
}

export default function BrandLogos({ className = "" }: BrandLogosProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    // Fixed: Flexible gaps and dynamic vertical padding to match mobile and desktop profiles
    <div className={`flex flex-wrap justify-center items-center gap-4 sm:gap-6 py-10 pb-16 md:pb-24 ${className}`}>
      {brands.map((brand, index) => (
        <div
          key={index}
          onMouseEnter={() => setActiveIndex(index)}
          onMouseLeave={() => setActiveIndex(null)}
          // Added touch support for crisp interactive states on mobile screens
          onTouchStart={() => setActiveIndex(index)}
          onTouchEnd={() => setActiveIndex(null)}
          className={`
            flex items-center justify-center rounded-full select-none
            w-28 h-28 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 
            cursor-pointer transition-all duration-300
            ${activeIndex === index ? "bg-white shadow-xl scale-105" : "bg-gray-50 md:bg-gray-100"}
          `}
        >
          <img
            src={brand.logo}
            alt={brand.name}
            // Fluid logo sizing matching the scale changes of the parent circle frame
            className="w-16 sm:w-24 md:w-28 lg:w-32 h-auto max-w-[70%] object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
          />
        </div>
      ))}
    </div>
  );
}