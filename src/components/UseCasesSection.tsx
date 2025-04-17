
import React, { useState } from "react";
import { ArrowLeft, ArrowRight, Baby, Mountain, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface UseCase {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  stats: { label: string; value: string }[];
}

const useCases: UseCase[] = [
  {
    id: "borewell",
    title: "Borewell Rescue",
    description: "Drones can deliver oxygen, communicate with trapped children, and provide visual monitoring while rescue operations are underway, dramatically improving survival rates in borewell accidents.",
    icon: <Baby className="w-12 h-12 text-drone-blue" />,
    stats: [
      { label: "Oxygen Delivery", value: "100%" },
      { label: "Visual Monitoring", value: "4K HD" },
      { label: "Communication", value: "Real-time" }
    ]
  },
  {
    id: "cave",
    title: "Cave Medicine Delivery",
    description: "For explorers or accident victims trapped in caves, our drones can navigate narrow passages to deliver essential medications, supplies, and establish communication links with rescue teams.",
    icon: <Mountain className="w-12 h-12 text-drone-blue" />,
    stats: [
      { label: "Navigation", value: "LIDAR" },
      { label: "Payload", value: "1.5kg" },
      { label: "Battery Life", value: "45 min" }
    ]
  },
  {
    id: "heart-attack",
    title: "Heart Attack Response",
    description: "Critical minutes matter in cardiac emergencies. Our drones can rapidly deliver defibrillators and heart medication to victims before ambulances arrive, significantly increasing survival chances.",
    icon: <Heart className="w-12 h-12 text-drone-blue" />,
    stats: [
      { label: "Response Time", value: "<5 min" },
      { label: "Defibrillator", value: "AED" },
      { label: "Success Rate", value: "+70%" }
    ]
  }
];

const UseCasesSection: React.FC = () => {
  const [activeCase, setActiveCase] = useState(0);

  const nextCase = () => {
    setActiveCase((prev) => (prev + 1) % useCases.length);
  };

  const prevCase = () => {
    setActiveCase((prev) => (prev - 1 + useCases.length) % useCases.length);
  };

  const currentCase = useCases[activeCase];

  return (
    <section id="use-cases" className="section-padding bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-drone-blue/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-drone-blue/5 rounded-full blur-2xl -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="tag-label mb-2">Real-World Applications</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Life-Saving <span className="text-drone-blue text-glow">Use Cases</span>
          </h2>
          <p className="text-white/70 max-w-xl mx-auto">
            Discover how Project A_N_D drones are making a difference in critical emergency scenarios.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row glass-card overflow-hidden">
            {/* Case visuals */}
            <div className="md:w-1/2 bg-white/5 flex items-center justify-center p-8 relative">
              <div className="relative w-full aspect-square flex items-center justify-center">
                {/* Icon */}
                <div className="absolute inset-[30%] flex items-center justify-center">
                  <div className="relative">
                    {/* Animated rings */}
                    <div className="absolute inset-[-30px] border-2 border-drone-blue/30 rounded-full animate-pulse"></div>
                    <div className="absolute inset-[-15px] border border-drone-blue/50 rounded-full"></div>
                    {/* Icon */}
                    <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center">
                      {currentCase.icon}
                    </div>
                  </div>
                </div>
                
                {/* Stats indicators positioned around the icon */}
                {currentCase.stats.map((stat, index) => {
                  // Calculate position around the circle
                  const angle = (index * (360 / currentCase.stats.length)) * (Math.PI / 180);
                  const distance = 120; // Distance from center
                  const top = 50 + Math.sin(angle) * distance;
                  const left = 50 + Math.cos(angle) * distance;
                  
                  return (
                    <div 
                      key={stat.label} 
                      className="absolute glass-card px-3 py-2 transform -translate-x-1/2 -translate-y-1/2 animate-fade-in-up"
                      style={{ 
                        top: `${top}%`, 
                        left: `${left}%`,
                        animationDelay: `${index * 0.2}s`
                      }}
                    >
                      <div className="text-xs text-white/70">{stat.label}</div>
                      <div className="text-sm font-bold text-white">{stat.value}</div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            {/* Case description */}
            <div className="md:w-1/2 p-8 flex flex-col">
              <h3 className="text-2xl font-bold text-white mb-4">{currentCase.title}</h3>
              <p className="text-white/80 mb-6 flex-grow">{currentCase.description}</p>
              
              {/* Navigation controls */}
              <div className="flex items-center justify-between mt-4">
                <div className="text-sm text-white/60">
                  Case {activeCase + 1} of {useCases.length}
                </div>
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="icon" 
                    onClick={prevCase}
                    className="glass-button text-white h-9 w-9"
                  >
                    <ArrowLeft size={16} />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon" 
                    onClick={nextCase}
                    className="glass-button text-white h-9 w-9"
                  >
                    <ArrowRight size={16} />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Case selection indicators */}
          <div className="flex justify-center mt-8 gap-2">
            {useCases.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeCase ? "bg-drone-blue w-6" : "bg-white/30"
                }`}
                onClick={() => setActiveCase(index)}
                aria-label={`View case ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
