import heroBg from "../assets/hero-bg.jpg"; // your image
import HeroButton from "./HeroButton";

export default function HeroSection() {
  return (
    <section className="relative w-full max-w-[1400px] mx-auto overflow-hidden rounded-3xl bg-slate-950 min-h-[500px] md:min-h-[760px] flex flex-col justify-between lg:block">
      
      {/* Background Image Container */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={heroBg}
          alt="hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark overlay slightly darkened on mobile for better text contrast */}
        <div className="absolute inset-0 bg-slate-950/40 lg:bg-slate-950/20" />
      </div>

      {/* Main Text Content */}
      <div 
        className="relative z-10 px-6 sm:px-12 lg:pl-25 pt-20 pb-32 lg:py-0 lg:h-full lg:min-h-[760px] flex flex-col justify-center gap-6 md:gap-8" 
        style={{ fontFamily: "Manrope, sans-serif" }}
      >
        {/* Top */}
        <p className="text-white/80 lg:text-white/70 text-sm md:text-base font-medium tracking-wide">
          #1 Energy provider in the world
        </p>

        {/* Bottom */}
        <div>
          {/* Fluid font sizing: text-4xl on phone, text-6xl on tablet, text-[100px] on desktop */}
          <h1 className="text-white text-4xl sm:text-6xl lg:text-[100px] font-bold leading-[1.1] mb-6 tracking-tight">
            New Energy <br className="hidden sm:inline" /> for the Future
          </h1>

          {/* Buttons - switch to full width stack on tiny devices, row on larger */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-2">
            <HeroButton label="Get in touch" />
            <HeroButton label="Our services" />
          </div>
        </div>
      </div>

      {/* Stats Bar Container */}
      {/* Dynamic positioning: Relative layout block on mobile, Absolute cutout card on large desktops */}
      <div className="stats-bar relative lg:absolute bottom-0 right-0 bg-white px-6 py-8 sm:px-10 md:px-13 md:py-10 flex flex-col sm:flex-row gap-8 sm:gap-10 rounded-t-3xl lg:rounded-t-none lg:rounded-tl-3xl lg:rounded-br-2xl" style={{ fontFamily: "Manrope, sans-serif"}}>
        
        {/* Concave corner calculations - HIDDEN on mobile because the card fills the width or stacks */}
        <div
          className="hidden lg:block absolute -left-6 bottom-0 w-6 h-6 bg-transparent"
          style={{
            boxShadow: "6px 6px 0 6px white",
            borderBottomRightRadius: "24px",
          }}
        />

        {/* Concave corner — top side */}
        <div
          className="hidden lg:block absolute right-0 -top-6 w-6 h-6 bg-transparent"
          style={{
            boxShadow: "6px 6px 0 6px white",
            borderBottomRightRadius: "24px",
          }}
        />

        <div
          className="hidden lg:block absolute -right-7 bottom-0 w-8 h-8 bg-transparent"
          style={{
            boxShadow: "6px 6px 0 6px white",
            borderBottomRightRadius: "24px",
          }}
        />

        {/* Individual Stats items - responsive typography scales down size from 7xl */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <p className="text-5xl md:text-7xl font-semibold text-gray-900 tracking-tight">6 mil</p>
          <p className="text-xs md:text-sm text-gray-500 mt-1 sm:ml-2 max-w-[150px]">The company's annual net income</p>
        </div>
        
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <p className="text-5xl md:text-7xl font-semibold text-gray-900 tracking-tight">315</p>
          <p className="text-xs md:text-sm text-gray-500 mt-1 sm:ml-2 max-w-[150px]">Projects completed worldwide</p>
        </div>
        
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <p className="text-5xl md:text-7xl font-semibold text-gray-900 tracking-tight">120K</p>
          <p className="text-xs md:text-sm text-gray-500 mt-1 sm:ml-2 max-w-[160px]">Employees work in all parts of the world</p>
        </div>
      </div>
    </section>
  );
}