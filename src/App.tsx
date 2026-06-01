import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection";
import SectionHeading from "./components/SectionHeading";
import BrandLogos from "./components/BrandLogos";
import FeaturesGrid from "./components/FeaturesGrid";
import ManSolar from "./assets/mansolar.jpg";
import Button from "./components/Button";
import ServicesCard from "./components/ServicesCard";
import { useState, useEffect } from "react";
import TestimonialCard from "./components/TestimoniesCard";
import solarImage from "./assets/carsolar.jpg";
import residentialImage from "./assets/housesolar.jpg";
import windImage from "./assets/windpowerindustry.jpg";
import Footer from "./components/Footer";

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
  const duration = 4000; // 4 seconds per tab

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % totalTabs);
    }, duration);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white text-gray-900 antialiased overflow-x-hidden w-full">
      
      {/* Header and Hero Block Wrapper */}
      {/* FIXED: Moved Herosection outside this wrapper and isolated padding structures to clear sub-pixel line rendering completely */}
      <div className="bg-white px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
        <Navbar />
      </div>

      {/* Hero section now breathes fully on its own grid space */}
      <div className="w-full px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto relative z-10">
        <Herosection />
      </div>
        
      {/* Quality Check Section Wrapper */}
      <div className="bg-white px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto relative z-20 -mt-1 md:mt-0">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-16 py-16 lg:py-24 text-center lg:text-left">
          <SectionHeading
            primaryText="Focusing on quality,"
            secondaryText="we maintain customer trust"
            size="xl" 
            className="max-w-xl"
          />
          <p 
            className="text-gray-600 font-medium text-base sm:text-lg leading-relaxed max-w-lg"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            We ensure that every installation we build has strict quality checks.
            Sustainable solutions for an environmentally friendly and renewable future.
          </p>
        </div>

        {/* Brand Logos */}
        <BrandLogos />
      </div>

      {/* Features Grid Section Container */}
      <div className="bg-gray-50 w-full" style={{ fontFamily: "Manrope, sans-serif" }}>
        <FeaturesGrid />
      </div>

      {/* Trusted Services Section */}
      <div 
        className="flex flex-col lg:flex-row gap-12 lg:gap-16 bg-white w-full px-4 sm:px-8 lg:px-16 py-16 lg:py-24 max-w-7xl mx-auto" 
        style={{ fontFamily: "Manrope, sans-serif" }}
      >
        {/* Left Layout Column — text & sub-grid */}
        <div className="flex-1 order-2 lg:order-1 flex flex-col justify-center">
          <SectionHeading
            primaryText="Trusted service,"
            secondaryText="for your various needs"
            size="lg"
            className="max-w-xl text-center lg:text-left"
          />
          
          <div className="flex justify-center lg:justify-start">
            <Button 
              label="Get in touch" 
              className="mt-6 bg-green-500 border-green-500 text-white hover:bg-green-600 cursor-pointer" 
            />
          </div>
          
          {/* Services Grid Display Block */}
          <div className="mt-12 lg:mt-16 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ServicesCard number="01" title="Solar panels for home" />
            <ServicesCard number="02" title="Solar panels for industry" />
            <ServicesCard number="03" title="Solar panels for chargers" />
            <ServicesCard number="04" title="Wind power generator" />
          </div>
        </div>
        
        {/* Right Layout Column — Image Presentation */}
        <div className="flex-1 order-1 lg:order-2 flex items-center">
          <img
            src={ManSolar}
            alt="Solar Installation Worker"
            className="w-full h-64 sm:h-96 lg:h-[550px] rounded-3xl object-cover shadow-sm"
          />
        </div>
      </div>

      {/* Testimonials Dynamic Carousel Section */}
      <div className="bg-white px-4 sm:px-8 lg:px-16 py-16 lg:py-24 flex flex-col items-center max-w-7xl mx-auto gap-12">
        <SectionHeading 
          primaryText="See how we solve problems,"
          secondaryText="right on target"
          size="lg"
          className="max-w-2xl text-center mx-auto"
        />
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
      </div>

      <Footer />
    </div>
  )
}