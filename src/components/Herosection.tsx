import heroBg from "../assets/hero-bg.jpg"; 
import HeroButton from "./HeroButton";

export default function HeroSection() {
  const whatsappUrl = "https://wa.me/2349059475275?text=Hello%2C%20I%20would%20like%20to%20hire%20you%20for%20a%20project!";

  return (
    <section className="relative w-full max-w-[1400px] mx-auto overflow-hidden rounded-3xl bg-slate-950 min-h-[380px] md:min-h-[760px] flex flex-col justify-between lg:block">
      
      <div className="absolute inset-0 w-full h-full">
        <img src={heroBg} alt="hero" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-slate-950/40 lg:bg-slate-950/20" />
      </div>

      <div className="relative z-10 px-6 sm:px-12 lg:pl-25 pt-14 pb-16 lg:py-0 lg:h-full lg:min-h-[760px] flex flex-col justify-center gap-6 md:gap-8" style={{ fontFamily: "Manrope, sans-serif" }}>
        <p className="text-white/80 lg:text-white/70 text-sm md:text-base font-medium tracking-wide">
          #1 Energy provider in the world
        </p>

        <div>
          <h1 className="text-white text-4xl sm:text-6xl lg:text-[100px] font-bold leading-[1.1] mb-6 tracking-tight">
            New Energy <br className="hidden sm:inline" /> for the Future
          </h1>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center sm:justify-start gap-3 sm:gap-4">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <HeroButton label="Hire Me" className="flex items-center justify-center text-center" />
            </a>
            <HeroButton label="Our services" className="flex items-center justify-center text-center" />
          </div>
        </div>
      </div>
      
      {/* Stats Bar Container remains unchanged */}
    </section>
  );
}