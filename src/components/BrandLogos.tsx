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
  circleSize?: string;
  logoSize?: string;
  gap?: string;
  padding?: string;
}

export default function BrandLogos({
  circleSize = "w-44 h-44",
  logoSize = "w-24",
  gap = "gap-6",
  padding = "py-10",
}: BrandLogosProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className={`flex flex-wrap justify-center items-center ${gap} ${padding}`}>
      {brands.map((brand, index) => (
        <div
          key={index}
          onMouseEnter={() => setActiveIndex(index)}
          onMouseLeave={() => setActiveIndex(null)}
          className={`
            flex items-center justify-center rounded-full
            ${circleSize} cursor-pointer transition-all duration-300
            ${activeIndex === index ? "bg-white shadow-lg scale-105" : "bg-gray-100"}
          `}
        >
          <img
            src={brand.logo}
            alt={brand.name}
            className={`${logoSize} h-auto object-contain`}
          />
        </div>
      ))}
    </div>
  );
}