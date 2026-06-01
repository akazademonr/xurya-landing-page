import { Zap, Sun, Wind } from "lucide-react";
import Button from "./Button";

interface Tab {
  icon: React.ReactNode;
  label: string;
}

interface TestimonialProps {
  company?: string;
  quote?: string;
  author?: string;
  role?: string;
  image?: string;
  buttonLabel?: string;
  tabs?: Tab[];
  activeTab?: number;
  onTabChange?: (index: number) => void;
  onClick?: () => void;
  className?: string;
  duration?: number;
}

const defaultTabs: Tab[] = [
  { icon: <Zap size={16} />, label: "Electric car charging station" },
  { icon: <Sun size={16} />, label: "Residential solar panels" },
  { icon: <Wind size={16} />, label: "Wind power for industry" },
];

export default function TestimonialCard({
  company = "Medtronic",
  quote = '"We have used services from Xurya for most of our stations, this is our strategic step to continue to increase the number of solar panel usage for our stations, we are very satisfied with the services from Xurya."',
  author = "Jeniffer Kolobaly",
  role = "CTO EV Medtronic",
  image,
  buttonLabel = "View case study",
  tabs = defaultTabs,
  activeTab = 0,
  onTabChange,
  onClick,
  className = "",
  duration = 4000,
}: TestimonialProps) {
  return (
    <div className={`flex flex-col gap-6 w-full ${className}`} style={{ fontFamily: "Manrope, sans-serif" }}>

      {/* Card Wrapper: Vertical on Mobile, Row layout on Desktop */}
      <div className="flex flex-col md:flex-row bg-gray-100 rounded-3xl p-4 sm:p-6 gap-6 md:gap-4 items-stretch">

        {/* Left — text */}
        {/* Adjusted padding: dynamic p-4 on mobile scaling up to p-10 on desktop */}
        <div className="flex-1 p-4 sm:p-6 lg:p-10 flex flex-col justify-between gap-6">
          <div className="flex flex-col gap-4 md:gap-6">
            <h3 className="text-gray-900 font-bold text-lg md:text-xl">{company}</h3>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">{quote}</p>
            <Button
              label={buttonLabel}
              onClick={onClick}
              className="bg-green-500 border-green-500 text-sm text-white hover:bg-green-600 w-full sm:w-fit rounded-full justify-center cursor-pointer mt-2"
            />
          </div>

          {/* Author */}
          <p className="text-gray-900 text-xs md:text-sm font-semibold border-t border-gray-200/60 pt-4 md:border-none md:pt-0">
            {author} <span className="text-green-500 font-normal block sm:inline">— {role}</span>
          </p>
        </div>

        {/* Right — image */}
        {/* Changed: Full width on mobile, 1/2 width on desktop with controlled heights */}
        <div className="w-full md:w-1/2 h-64 sm:h-80 md:h-auto min-h-[250px] md:min-h-[350px]">
          <img
            src={image}
            alt={company}
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

      </div>

      {/* Tabs Menu Wrapper */}
      {/* Tightened down gap spacing for standard mobile layouts */}
      <div className="flex flex-row items-center justify-center gap-3 sm:gap-6 md:gap-10 w-full px-2">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => onTabChange?.(index)}
            className={`flex flex-col items-center gap-2 transition-all duration-200 w-full cursor-pointer ${
              activeTab === index ? "text-gray-900" : "text-gray-400"
            }`}
          >
            {/* Inner responsive layout: hidden text label on phone layout */}
            <div className="flex items-center gap-1.5 md:gap-2 text-xs md:text-sm font-medium">
              <span className="p-1 md:p-0">{tab.icon}</span>
              <span className="hidden sm:inline tracking-tight">{tab.label}</span>
            </div>

            {/* Line with fill animation */}
            <div className="w-full h-[3px] bg-gray-200 rounded-full overflow-hidden mt-1">
              <div
                className="h-full bg-green-500 rounded-full"
                style={{
                  width: activeTab === index ? "100%" : "0%",
                  animation: activeTab === index ? `fillLine ${duration}ms linear forwards` : "none",
                }}
              />
            </div>
          </button>
        ))}
      </div>

    </div>
  );
}