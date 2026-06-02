import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection";
import SectionHeading from "./components/SectionHeading";
import BrandLogos from "./components/BrandLogos";
import FeaturesGrid from "./components/FeaturesGrid";
import AboutUs from "./components/AboutUs"; 
import Contact from "./components/Contact"; 
import ManSolar from "./assets/mansolar.jpg";
import Button from "./components/Button";
import ServicesCard from "./components/ServicesCard";
import { useState, useEffect } from "react";
import TestimonialCard from "./components/TestimoniesCard";
import solarImage from "./assets/carsolar.jpg";
import residentialImage from "./assets/housesolar.jpg";
import windImage from "./assets/windpowerindustry.jpg";
import Footer from "./components/Footer";
import ScrollReveal from "./components/ScrollReveal";

// 1. IMPORT THE LENIS SMOOTH SCROLL ENGINE
import Lenis from "lenis"; 

const testimonials = [
  {
    company: "Medtronic",
    quote: '"We have used services from Xurya for most of our stations, this is our strategic step to continue to increase the number of solar panel usage for our stations, we are very satisfied with the services from Xurya."',
    author: "Jeniffer Kolobaly",
    role: "CTO EV Medtronic",
    image: solarImage,
  },
  {
    company: "Telia Cygate",
    quote: '"Xurya helped us transition to residential solar panels seamlessly. The quality of installation and after-service support has been outstanding. We highly recommend their services."',
    author: "Marcus Lindgren",
    role: "Head of Operations, Telia Cygate",
    image: residentialImage,
  },
  {
    company: "Trend Micro",
    quote: '"The wind power solutions provided by Xurya have significantly reduced our energy costs. Their team is professional, efficient, and truly committed to renewable energy."',
    author: "Sarah Mitchell",
    role: "CEO, Trend Micro",
    image: windImage,
  },
];

export default function App() {
  const [activeTab, setActiveTab] = useState(0);
  const totalTabs = 3;
  const duration = 4000;

  // 2. RUN AUTOPLAY AND PREMIUM SCROLL INITIALIZATION
  useEffect(() => {
    // Premium Smooth Scrolling Initialization
    const lenis = new Lenis({
      duration: 1.2,       // Acceleration time profile
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // High-fidelity easing logic
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
    });

    // Request Animation Frame Loop Ticker
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Testimonial Auto-switch Interval Logic
    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % totalTabs);
    }, duration);

    // Dynamic Cleanups
    return () => {
      clearInterval(timer);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-white text-gray-900 antialiased overflow-x-hidden w-full relative">
      
      {/* Fixed Navigation floating above all content */}
      <Navbar />

      {/* 1. HOME LANDMARK CONTAINER */}
      <div id="home" className="bg-white px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto pt-24 scroll-mt-10">
        
        <ScrollReveal variant="scale-up" delay={150}>
          <Herosection />
        </ScrollReveal>
        
        {/* 2. VALUE PROPOSITION OVERVIEW */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-16 py-16 lg:py-24 text-center lg:text-left bg-white relative z-10">
          <ScrollReveal variant="slide-left" className="w-full">
            <SectionHeading
              primaryText="Focusing on quality,"
              secondaryText="we maintain customer trust"
              size="xl" 
              className="max-w-xl"
            />
          </ScrollReveal>
          
          <ScrollReveal variant="slide-right" delay={200} className="w-full">
            <p 
              className="text-gray-600 font-medium text-base sm:text-lg leading-relaxed max-w-lg"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              We ensure that every installation we build has strict quality checks.
              Sustainable solutions for an environmentally friendly and renewable future.
            </p>
          </ScrollReveal>
        </div>

        {/* Brand Logos */}
        <ScrollReveal variant="fade-up" delay={300}>
          <BrandLogos />
        </ScrollReveal>
      </div>

      {/* 3. SUSTAINABLE ABOUT US SECTION */}
      <AboutUs />

      {/* 4. PERFORMANCE FEATURES GRID */}
      <div id="features" className="bg-gray-50 w-full scroll-mt-24" style={{ fontFamily: "Manrope, sans-serif" }}>
        <ScrollReveal variant="fade-up">
          <FeaturesGrid />
        </ScrollReveal>
      </div>

      {/* 5. SERVICES MATRIX LOOKUP */}
      <div 
        id="services"
        className="flex flex-col lg:flex-row gap-12 lg:gap-16 bg-white w-full px-4 sm:px-8 lg:px-16 py-16 lg:py-24 max-w-7xl mx-auto scroll-mt-24" 
        style={{ fontFamily: "Manrope, sans-serif" }}
      >
        <div className="flex-1 order-2 lg:order-1 flex flex-col justify-center">
          <ScrollReveal variant="slide-left">
            <SectionHeading
              primaryText="Trusted service,"
              secondaryText="for your various needs"
              size="lg"
              className="max-w-xl text-center lg:text-left"
            />
          </ScrollReveal>
          
          <ScrollReveal variant="slide-left" delay={100}>
            <div className="flex justify-center lg:justify-start">
              <a href="#contact">
                <Button 
                  label="Get in touch" 
                  className="mt-6 bg-green-500 border-green-500 text-white hover:bg-green-600 cursor-pointer" 
                />
              </a>
            </div>
          </ScrollReveal>
          
          <div className="mt-12 lg:mt-16 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ScrollReveal variant="fade-up" delay={100}><ServicesCard number="01" title="Solar panels for home" /></ScrollReveal>
            <ScrollReveal variant="fade-up" delay={200}><ServicesCard number="02" title="Solar panels for industry" /></ScrollReveal>
            <ScrollReveal variant="fade-up" delay={300}><ServicesCard number="03" title="Solar panels for chargers" /></ScrollReveal>
            <ScrollReveal variant="fade-up" delay={400}><ServicesCard number="04" title="Wind power generator" /></ScrollReveal>
          </div>
        </div>
        
        <div className="flex-1 order-1 lg:order-2 flex items-center">
          <ScrollReveal variant="slide-right" delay={200} className="w-full">
            <img
              src={ManSolar}
              alt="Solar Installation Worker"
              className="w-full h-64 sm:h-96 lg:h-137.5 rounded-3xl object-cover shadow-sm"
            />
          </ScrollReveal>
        </div>
      </div>

      {/* 6. ENTERPRISE REVIEWS / TESTIMONIALS */}
      <div className="bg-white px-4 sm:px-8 lg:px-16 py-16 lg:py-24 flex flex-col items-center max-w-7xl mx-auto gap-12">
        <ScrollReveal variant="fade-up">
          <SectionHeading 
            primaryText="See how we solve problems,"
            secondaryText="right on target"
            size="lg"
            className="max-w-2xl text-center mx-auto"
          />
        </ScrollReveal>
        
        <ScrollReveal variant="scale-up" delay={150} className="w-full">
          <TestimonialCard
            company={testimonials[activeTab].company}
            quote={testimonials[activeTab].quote}
            author={testimonials[activeTab].author}
            role={testimonials[activeTab].role}
            image={testimonials[activeTab].image}
            activeTab={activeTab}
            onTabChange={setActiveTab}
            duration={duration}
          />
        </ScrollReveal>
      </div>

      {/* 7. HIGH-FIDELITY CONTACT FORM CHANNEL */}
      <Contact />

      {/* 8. FOOTER PROFILE */}
      <Footer />
    </div>
  );
}