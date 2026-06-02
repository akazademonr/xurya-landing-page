import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";

export default function AboutUs() {
  return (
    <section 
      id="about"
      className="bg-white px-4 sm:px-8 lg:px-16 py-16 lg:py-24 max-w-7xl mx-auto border-t border-gray-100 scroll-mt-24"
      style={{ fontFamily: "Manrope, sans-serif" }}
    >
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
        
        {/* Left Column: Mission Profile */}
        <div className="flex-1">
          <ScrollReveal variant="slide-left">
            <p className="text-green-600 text-sm font-semibold tracking-wider uppercase mb-3">
              Corporate Profile
            </p>
            <SectionHeading
              primaryText="Accelerating commercial"
              secondaryText="energy independence"
              size="lg"
              className="text-left max-w-xl"
            />
          </ScrollReveal>
          
          <ScrollReveal variant="fade-up" delay={200}>
            <p className="text-gray-600 mt-6 text-base sm:text-lg leading-relaxed max-w-lg">
              We specialize in end-to-end clean energy infrastructure, providing asset development, structural engineering, and smart grid integration. By eliminating upfront capital expenditure through performance-backed power agreements, we enable enterprise clients to transition seamlessly to sustainable operations.
            </p>
          </ScrollReveal>
        </div>

        {/* Right Column: Operational Framework */}
        <div className="flex-1 w-full grid grid-cols-1 gap-6">
          <ScrollReveal variant="slide-right" delay={100}>
            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-green-500/30 transition-all duration-300">
              <h3 className="text-lg font-bold text-gray-900 mb-2">EPC & Asset Management</h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Our in-house team manages the complete lifecycle of asset deployment: detailed hardware engineering, procurement of tier-1 components, structural installation, and long-term diagnostic optimization.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="slide-right" delay={200}>
            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-green-500/30 transition-all duration-300">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Zero-Capital PPA Models</h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                We mitigate investment risk by funding, building, and operating the system ourselves. Clients pay strictly for the electricity generated, locking in lower utility tariffs from day one.
              </p>
            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}