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
    <div className={`flex flex-col gap-4 w-full ${className}`} style={{ fontFamily: "Manrope, sans-serif" }}>

      {/* Card */}
      <div className="flex flex-row bg-gray-100 rounded-3xl p-4 gap-4">

        {/* Left — text */}
        <div className="flex-1 p-10 flex flex-col gap-8">
          <div className="flex flex-col gap-6">
            <h3 className="text-gray-900 font-bold text-xl">{company}</h3>
            <p className="text-gray-700 text-base leading-relaxed">{quote}</p>
            <Button
              label={buttonLabel}
              onClick={onClick}
              className="bg-green-500 border-green-500 text-sm text-white hover:bg-green-600 w-fit rounded-full"
            />
          </div>

          {/* Author */}
          <p className="text-gray-900 text-sm font-semibold">
            {author} <span className="text-green-500 font-normal">— {role}</span>
          </p>
        </div>

        {/* Right — image */}
        <div className="w-1/2">
          <img
            src={image}
            alt={company}
            className="w-full h-full min-h-[300px] object-cover rounded-2xl"
          />
        </div>

      </div>

     {/* Tabs */}
<div className="flex flex-row items-center justify-center gap-10 w-full">
  {tabs.map((tab, index) => (
    <button
      key={index}
      onClick={() => onTabChange?.(index)}
      className={`flex flex-col items-center gap-2 transition-all duration-200 w-full ${
        activeTab === index ? "text-gray-900" : "text-gray-400"
      }`}
    >
      <div className="flex items-center gap-2 text-sm">
        {tab.icon}
        <span>{tab.label}</span>
      </div>

      {/* Line with fill animation */}
      <div className="w-full h-[2px] bg-gray-200 rounded-full overflow-hidden">
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