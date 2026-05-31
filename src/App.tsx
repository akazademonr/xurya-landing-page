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
    <div>
    <div className="min-h-screen bg-white px-5">
      <Navbar />
      <Herosection />
      <div className="flex flex-col justify-center items-center gap-20 py-20 text-center md:flex-row md:text-left">
        <SectionHeading
          primaryText="Focusing on quality,"
          secondaryText="we maintain customer trust"
          className="max-w-xl shrink-0 text-5xl"
        />
        <p className="text-gray-700 font-semibold text-xl leading-relaxed max-w-lg"
          style={{ fontFamily: "Manrope, sans-serif" }}
        >
          We ensure that every installation we build has strict quality checks.
          Sustainable solutions for an environmentally friendly and renewable future.
        </p>
      </div>
      <BrandLogos
        circleSize="w-56 h-56"
        logoSize="w-32"
        gap="gap-4"
        padding="py-4 pb-20"
      />
    </div>
     <div className="bg-gray-100 w-full" style={{ fontFamily: "Manrope, sans-serif" }}>
      <FeaturesGrid />
    </div>
      <div className="flex flex-row gap-10  bg-white w-full px-30 py-30" style={{ fontFamily: "Manrope, sans-serif" }}>
      
      {/* Left — text */}
      <div className="flex-1">
        <SectionHeading
          primaryText="Trusted service,"
          secondaryText="for your various needs"
          className="text-4xl max-w-full"
        />
         <Button label="Get in touch" className="mt-5 bg-green-500 border-green-500 text-white hover:bg-green-600 cursor-pointer" />
      <div className="mt-30 grid grid-cols-2 gap-3" style={{ fontFamily: "Manrope, sans-serif" }}>
        <ServicesCard number="01" title="Solar panels for home" />
        <ServicesCard number="02" title="Solar panels for industry" />
        <ServicesCard number="03" title="Solar panels for chargers" />
        <ServicesCard number="04" title="Wind power generator" />
      </div>
      </div>
      
      <div className="flex-1">
        <img
          src={ManSolar}
          alt="Solar"
          className="w-full h-auto rounded-2xl object-cover"
        />
      </div>

    </div>
    <div className="bg-white p-30 pt-20 gap-10 flex flex-col items-center">
      <SectionHeading 
          primaryText="See how we solve problems,"
          secondaryText="right on target"
          className="max-w-xl shrink-0 text-5xl text-center mx-auto"
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
    </div>
  )
}

 