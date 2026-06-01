import heroBg from "../assets/hero-bg.jpg"; 
import HeroButton from "./HeroButton";

export default function HeroSection() {
  return (
    <section className="relative w-full max-w-[1400px] mx-auto overflow-hidden rounded-3xl bg-slate-950 min-h-[380px] md:min-h-[760px] flex flex-col justify-between lg:block">
      
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
        className="relative z-10 px-6 sm:px-12 lg:pl-25 pt-14 pb-16 lg:py-0 lg:h-full lg:min-h-[760px] flex flex-col justify-center gap-6 md:gap-8" 
        style={{ fontFamily: "Manrope, sans-serif" }}
      >
        {/* Top */}
        <p className="text-white/80 lg:text-white/70 text-sm md:text-base font-medium tracking-wide">
          #1 Energy provider in the world
        </p>

        {/* Bottom */}
        <div>
          {/* Fluid font sizing */}
          <h1 className="text-white text-4xl sm:text-6xl lg:text-[100px] font-bold leading-[1.1] mb-6 tracking-tight">
            New Energy <br className="hidden sm:inline" /> for the Future
          </h1>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center sm:justify-start gap-3 sm:gap-4">
            <HeroButton label="Get in touch" className="flex items-center justify-center text-center" />
            <HeroButton label="Our services" className="flex items-center justify-center text-center" />
          </div>
        </div>
      </div>

      {/* Stats Bar Container */}
      {/* ERADICATION FIX: Completely strips out mobile rounding, shadows, and borders. Uses a clean negative margin to merge perfectly with the section below. */}
      <div 
        className="stats-bar relative lg:absolute bottom-0 right-0 bg-white px-6 py-8 sm:px-10 md:px-13 md:py-10 flex flex-col sm:flex-row gap-8 sm:gap-10 rounded-none rounded-3xl lg:rounded-tl-3xl rounded-br-none lg:rounded-br-none z-20 shadow-none border-none outline-none -mb-2 lg:mb-0" 
        style={{ 
          fontFamily: "Manrope, sans-serif",
          boxShadow: "none",
          border: "none"
        }}
      >
        
        {/* Concave corner calculations - Left Side Mask (Desktop Only) */}
        <div
          className="hidden lg:block absolute -left-6 bottom-0 w-6 h-6 bg-transparent pointer-events-none"
          style={{
            boxShadow: "6px 6px 0 6px white",
            borderBottomRightRadius: "24px",
          }}
        />

        {/* Concave corner — Top Side Mask (Desktop Only) */}
        <div
          className="hidden lg:block absolute right-0 -top-6 w-6 h-6 bg-transparent pointer-events-none"
          style={{
            boxShadow: "6px 6px 0 6px white",
            borderBottomRightRadius: "24px",
          }}
        />

        {/* Individual Stats items */}
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