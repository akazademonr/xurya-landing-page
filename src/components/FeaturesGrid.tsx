import { Layers, CheckCircle, MessageCircle, BookOpen, Package, Bot } from "lucide-react";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface FeaturesGridProps {
  primaryText?: string;
  secondaryText?: string;
  features?: Feature[];
}

const defaultFeatures: Feature[] = [
  {
    icon: <Layers size={24} className="text-green-500" />,
    title: "Layered security",
    description: "With layered security, we ensure the safety of every unit we provide.",
  },
  {
    icon: <CheckCircle size={24} className="text-green-500" />,
    title: "Quality control of each part",
    description: "Every unit you send is checked carefully for every detail.",
  },
  {
    icon: <MessageCircle size={24} className="text-green-500" />,
    title: "Reliable customer service",
    description: "Our customer service is available 24 hours a week, with qualified people.",
  },
  {
    icon: <BookOpen size={24} className="text-green-500" />,
    title: "Maintenance manual book",
    description: "We provide a guidebook that can be used to ensure maximum care.",
  },
  {
    icon: <Package size={24} className="text-green-500" />,
    title: "Delivered safely",
    description: "Every unit we send arrives safely and quickly, without any obstacles or drama.",
  },
  {
    icon: <Bot size={24} className="text-green-500" />,
    title: "Based on artificial intelligence",
    description: "You can control and view each unit from your phone, it's very easy to use.",
  },
];

export default function FeaturesGrid({
  primaryText = "We offer quality,",
  secondaryText = "with the best materials and service",
  features = defaultFeatures,
}: FeaturesGridProps) {
  return (
    <section className="px-30 py-16" w-full style={{ fontFamily: "Manrope, sans-serif" }}>

      {/* Heading */}
      <h2 className="text-center text-4xl w-[500px] font-semibold leading-tight mb-12 mx-auto">
        <span className="text-gray-900">{primaryText} </span>
        <span className="text-gray-400">{secondaryText}</span>
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-3 border border-gray-200 rounded-2xl overflow-hidden bg-white">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`
              p-8 flex flex-col gap-6
              ${index % 3 !== 2 ? "border-r border-gray-200" : ""}
              ${index < 3 ? "border-b border-gray-200" : ""}
            `}
          >
            {/* Icon box */}
            <div className="w-12 h-12 bg-white shadow-md rounded-xl flex items-center justify-center">
              {feature.icon}
            </div>

            {/* Text */}
            <div>
              <h3 className="text-gray-900 font-semibold text-lg mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}