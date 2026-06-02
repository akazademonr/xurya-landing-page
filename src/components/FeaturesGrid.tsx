import ScrollReveal from "./ScrollReveal";

interface FeatureCardProps {
  number: string;
  title: string;
  description: string;
  className?: string;
}

function FeatureCard({ number, title, description, className = "" }: FeatureCardProps) {
  return (
    <div 
      className={`p-6 sm:p-8 flex flex-col gap-3 bg-white transition-all duration-300 hover:bg-gray-50/50 group h-full ${className}`}
    >
      <div className="text-xs sm:text-sm font-semibold text-green-500 tracking-wider">
        {number}
      </div>
      <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-200">
        {title}
      </h3>
      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-medium">
        {description}
      </p>
    </div>
  );
}

export default function FeaturesGrid() {
  const corporateFeatures = [
    {
      number: "01",
      title: "Renewable Evaluation",
      description: "Our technical engineers execute full-scale spatial assessments, mapping structural shading and peak solar irradiance patterns to guarantee optimal performance metrics."
    },
    {
      number: "02",
      title: "Hardware Procurement",
      description: "We source strictly tier-1 components and high-efficiency photovoltaic systems directly from certified global manufacturers to secure multi-decade structural lifespans."
    },
    {
      number: "03",
      title: "Smart Grid Interface",
      description: "Integrating intelligent telemetry meters and load balancing systems to dynamically switch between storage arrays and direct commercial consumption paths."
    },
    {
      number: "04",
      title: "Regulatory Compliance",
      description: "Our compliance desks manage full state and local permitting tracks, grid-interconnection approvals, and net-metering legal frameworks seamlessly."
    },
    {
      number: "05",
      title: "Performance Guarantees",
      description: "Eliminate asset risk profiles. Enjoy maximum continuous energy generation thresholds backed entirely by active system maintenance protocols and structural insurance plans."
    },
    {
      number: "06",
      title: "Asset Diagnostics",
      description: "Continuous real-time optimization using proprietary IoT sensory grids, dispatching proactive field units long before thermal or output anomalies affect your baseline."
    }
  ];

  return (
    <section 
      className="w-full bg-white py-16 lg:py-24"
      style={{ fontFamily: "Manrope, sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        
        {/* Outer Bounding Frame: Handles the border wrapper cleanly without cutting off right-side edges */}
        <div className="border border-gray-100 rounded-2xl bg-gray-100">
          
          {/* Inner Grid Layer: Gap handles lines between cards smoothly */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px">
            {corporateFeatures.map((feature, idx) => {
              // Construct sharp clean corner-matching variables
              let cornerClasses = "";
              
              // Top-Left (Card 01)
              if (idx === 0) cornerClasses += " rounded-tl-2xl";
              
              // Top-Right Handles (Changes depending on layout columns per viewpoint)
              if (idx === 0) cornerClasses += " max-md:rounded-tr-2xl";
              if (idx === 1) cornerClasses += " md:max-lg:rounded-tr-2xl";
              if (idx === 2) cornerClasses += " lg:rounded-tr-2xl";
              
              // Bottom-Left Handles
              if (idx === 5) cornerClasses += " max-md:rounded-bl-2xl";
              if (idx === 4) cornerClasses += " md:max-lg:rounded-bl-2xl";
              if (idx === 3) cornerClasses += " lg:rounded-bl-2xl";
              
              // Bottom-Right (Card 06)
              if (idx === 5) cornerClasses += " rounded-br-2xl";

              return (
                <ScrollReveal 
                  key={feature.number} 
                  variant="fade-up" 
                  delay={idx * 50}
                  className="h-full"
                >
                  <FeatureCard
                    number={feature.number}
                    title={feature.title}
                    description={feature.description}
                    className={cornerClasses}
                  />
                </ScrollReveal>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}