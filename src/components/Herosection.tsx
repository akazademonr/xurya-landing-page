import heroBg from "../assets/hero-bg.jpg"; // your image
import HeroButton from "./HeroButton";

export default function HeroSection() {
  return (
    <section className="relative w-full max-w-[1400px] mx-auto overflow-hidden rounded-3xl bg-slate-950 min-h-[760px]">
      <img
        src={heroBg}
        alt="hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

       <div className="relative z-10 h-full min-h-[760px] pl-25 flex flex-col justify-center gap-8" style={{ fontFamily: "Manrope, sans-serif" }}>
        
        {/* Top */}
        <p className="text-white/70 text-base">#1 Energy provider in the world</p>

        {/* Bottom */}
        <div>
          <h1 className="text-white text-[100px] font-bold leading-tight mb-6">
            New Energy <br /> for the Future
          </h1>

          {/* Buttons */}
          <div className="flex items-center gap-1">
            <HeroButton label="Get in touch" />
            <HeroButton label="Our services" />
          </div>
        </div>

      </div>

      <div className="absolute inset-0 bg-slate-950/20" />
      <div className="stats-bar absolute bottom-0 right-0 bg-white px-13 py-10 flex  gap-10 rounded-tl-3xl rounded-br-2xl font-mono" style={{ fontFamily: "Manrope, sans-serif"}}>
         <div
            className="absolute -left-6 bottom-0 w-6 h-6 bg-transparent"
            style={{
              boxShadow: "6px 6px 0 6px white",
              borderBottomRightRadius: "24px",
            }}
          />

          {/* Concave corner — top side */}
          <div
            className="absolute right-0 -top-6 w-6 h-6 bg-transparent"
            style={{
              boxShadow: "6px 6px 0 6px white",
              borderBottomRightRadius: "24px",
            }}
          />

          <div
            className="absolute -right-7 bottom-0 w-8 h-8 bg-transparent"
            style={{
              boxShadow: "6px 6px 0 6px white",
              borderBottomRightRadius: "24px",
            }}
          />

        <div>
          <p className="text-7xl font-semibold text-gray-900">6 mil</p>
          <p className="text-sm text-gray-500 mt-1 ml-2 max-w-[130px]">The company's annual net income</p>
        </div>
        <div>
           <p className="text-7xl font-semibold text-gray-900">315</p>
            <p className="text-sm text-gray-500 mt-1 ml-2 max-w-[130px]">Projects completed worldwide</p>
        </div>
        <div>
           <p className="text-7xl font-semibold text-gray-900">120K</p>
            <p className="text-sm text-gray-500 mt-1 ml-2 max-w-[140px]">Employees work in all parts of the world</p>
        </div>
      </div>
    </section>
  );
}
