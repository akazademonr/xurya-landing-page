import { useState } from "react";
import type { FormEvent } from "react"; 
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";
import Button from "./Button";

export default function Contact() {
  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    projectType: "commercial-solar",
    capacityNeeded: "under-100kw",
    message: ""
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Structured Lead Logged Successfully:", formData);
    alert("Project brief submitted. Our engineering team will review your requirements.");
  };

  return (
    <section 
      id="contact"
      className="bg-gray-50 px-4 sm:px-8 lg:px-16 py-16 lg:py-24 w-full scroll-mt-24"
      style={{ fontFamily: "Manrope, sans-serif" }}
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16">
        
        {/* Left Column */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <ScrollReveal variant="slide-left">
              <p className="text-green-600 text-sm font-semibold tracking-wider uppercase mb-3">
                Project Consultation
              </p>
              <SectionHeading
                primaryText="Request an engineering"
                secondaryText="feasibility assessment"
                size="lg"
                className="text-left"
              />
            </ScrollReveal>
            
            <ScrollReveal variant="fade-up" delay={150}>
              <p className="text-gray-600 mt-4 text-base max-w-md leading-relaxed">
                Submit your facility parameters below. Our technical engineering division will evaluate your site's structural profile, solar irradiation capacity, and baseline utility loads to prepare a project brief.
              </p>
            </ScrollReveal>
          </div>

          {/* Corporate Channels */}
          <ScrollReveal variant="fade-up" delay={300} className="mt-8 lg:mt-0 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Corporate Headquarters</p>
              <p className="text-gray-900 font-bold mt-1 text-base">Lagos, Nigeria</p>
            </div>
            <div>
              <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Project Tendering</p>
              <p className="text-gray-900 font-bold mt-1 text-base">projects@xurya-clone.com</p>
            </div>
          </ScrollReveal>
        </div>

        {/* Right Column: Interaction Form */}
        <div className="flex-1 w-full">
          <ScrollReveal variant="scale-up" className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm w-full">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Company / Institution</label>
                  <input 
                    type="text" 
                    required
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-green-500 focus:bg-white transition-all text-sm"
                    placeholder="Enter entity name"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Corporate Email</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-green-500 focus:bg-white transition-all text-sm"
                    placeholder="name@company.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Infrastructure Scope</label>
                  <select 
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-green-500 focus:bg-white transition-all text-sm"
                  >
                    <option value="commercial-solar">Commercial Rooftop Solar</option>
                    <option value="industrial-solar">Industrial Grid Integration</option>
                    <option value="wind-generation">Utility-Scale Wind Power</option>
                    <option value="microgrid">Microgrid / ESS Storage</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Estimated Annual Load</label>
                  <select 
                    value={formData.capacityNeeded}
                    onChange={(e) => setFormData({ ...formData, capacityNeeded: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-green-500 focus:bg-white transition-all text-sm"
                  >
                    <option value="under-100kw">&lt; 100 kW Peak</option>
                    <option value="100kw-500kw">100 kW - 500 kW</option>
                    <option value="500kw-2mw">500 kW - 2 MW</option>
                    <option value="above-2mw">2 MW + Enterprise Scope</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Facility Requirements & Notes</label>
                <textarea 
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-green-500 focus:bg-white transition-all text-sm resize-none"
                  placeholder="Provide spatial layout context or baseline energy configurations..."
                />
              </div>

              <Button 
                label="Submit Project Request" 
                className="w-full mt-2 bg-green-500 border-green-500 text-white hover:bg-green-600 font-semibold py-3 flex items-center justify-center cursor-pointer"
              />
            </form>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}