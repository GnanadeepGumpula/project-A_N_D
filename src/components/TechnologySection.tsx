
import React from "react";
import { Sun, Battery, Zap, Leaf, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const TechnologySection: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="technology" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="tag-label mb-2">Eco Innovation</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Technology & <span className="text-drone-blue text-glow">Sustainability</span>
          </h2>
          <p className="text-white/70 max-w-xl mx-auto">
            Our drones combine cutting-edge technology with sustainable power solutions to 
            deliver life-saving care with minimal environmental impact.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Solar station visualization */}
          <div className="relative">
            <div className="glass-card p-8 flex items-center justify-center h-full">
              {/* Solar box visual */}
              <div className="relative w-full aspect-square max-w-xs">
                {/* Base box */}
                <div className="absolute inset-[10%] bottom-0 bg-drone-gray/30 backdrop-blur-sm border border-white/10 rounded-lg"></div>
                
                {/* Solar panels */}
                <div className="absolute left-[5%] right-[5%] top-[5%] h-[30%] bg-blue-900/60 border border-white/20 rounded-md grid grid-cols-8 grid-rows-3 gap-px p-1">
                  {Array.from({ length: 24 }).map((_, i) => (
                    <div key={i} className="bg-blue-800/80"></div>
                  ))}
                </div>
                
                {/* Energy rays */}
                <div className="absolute top-[-5%] left-1/2 transform -translate-x-1/2 text-yellow-400">
                  <Sun className="w-10 h-10 animate-pulse" />
                </div>
                
                {/* Drone placeholder */}
                <div className="absolute inset-[20%] bottom-[10%] flex items-center justify-center animate-float">
                  <div className="w-16 h-16 rounded-full bg-drone-blue/20 flex items-center justify-center">
                    <div className="w-8 h-8 bg-drone-blue/40 rounded-full"></div>
                  </div>
                </div>
                
                {/* Energy flow indicators */}
                <div className="absolute bottom-[15%] left-[15%] right-[15%] h-1 bg-drone-blue/20 overflow-hidden rounded-full">
                  <div className="h-full w-1/3 bg-drone-blue animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Technology description */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Solar-Powered Base Station</h3>
            <p className="text-white/80 mb-6">
              Project A_N_D utilizes an innovative solar-powered base station network that enables our drones to 
              operate continuously without relying on traditional power grids. This sustainable approach ensures 
              our emergency response system remains operational even in power outages or remote locations.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="glass-card p-4">
                <Sun className="text-yellow-400 mb-2" size={24} />
                <h4 className="text-lg font-medium text-white mb-1">Solar Power</h4>
                <p className="text-sm text-white/70">
                  High-efficiency panels generate 500W power even in low-light conditions
                </p>
              </div>
              <div className="glass-card p-4">
                <Battery className="text-green-400 mb-2" size={24} />
                <h4 className="text-lg font-medium text-white mb-1">Power Storage</h4>
                <p className="text-sm text-white/70">
                  Advanced lithium-polymer batteries store 2kWh for night operations
                </p>
              </div>
              <div className="glass-card p-4">
                <Zap className="text-amber-400 mb-2" size={24} />
                <h4 className="text-lg font-medium text-white mb-1">Fast Charging</h4>
                <p className="text-sm text-white/70">
                  Drones recharge to 80% capacity in under 15 minutes
                </p>
              </div>
              <div className="glass-card p-4">
                <Leaf className="text-emerald-400 mb-2" size={24} />
                <h4 className="text-lg font-medium text-white mb-1">Eco-Friendly</h4>
                <p className="text-sm text-white/70">
                  Zero emissions operation with 95% recyclable components
                </p>
              </div>
            </div>
            
            <div className="glass-card bg-white/5 p-5 mb-6">
              <h4 className="text-lg font-medium text-white mb-2">Sustainability Impact</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li className="flex items-start">
                  <span className="bg-drone-blue/20 text-drone-blue w-5 h-5 rounded-full flex items-center justify-center mr-2 mt-0.5">•</span>
                  <span>Reduces carbon footprint by 70% compared to traditional ambulances</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-drone-blue/20 text-drone-blue w-5 h-5 rounded-full flex items-center justify-center mr-2 mt-0.5">•</span>
                  <span>Energy-positive stations feed excess power back to community grids</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-drone-blue/20 text-drone-blue w-5 h-5 rounded-full flex items-center justify-center mr-2 mt-0.5">•</span>
                  <span>Noise pollution reduced by 85% through advanced propulsion system</span>
                </li>
              </ul>
            </div>
            
            <Button 
              className="interactive-button group"
              onClick={() => scrollToSection('technology-details')}
            >
              Learn More About Our Technology
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
