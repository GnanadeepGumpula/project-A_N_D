
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Heart, Timer, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen overflow-hidden flex items-center justify-center bg-black">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-background z-0"></div>
      
      {/* Gold pattern overlay */}
      <div className="absolute inset-0 opacity-20">
        <img 
          src="/lovable-uploads/58fdec7b-5640-4859-8e5b-31d0ee3da411.png" 
          alt="Gold pattern" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Hero content */}
      <div className="container mx-auto px-4 z-10 mt-16 flex flex-col items-center justify-center">
        <div className={`transition-all duration-1000 delay-300 ${
          loaded ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-10"
        }`}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6">
            <span className="text-amber-500 block">Project A_N_D</span>
            <span className="text-white block mt-2">Assistant Nursing Drone</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 text-center max-w-3xl mx-auto mb-8">
            <span className="text-amber-400 font-semibold">No more deaths because of lateness</span>
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Button 
              className="bg-amber-500 hover:bg-amber-600 text-black group" 
              size="lg"
              onClick={() => scrollToSection('features')}
            >
              Explore the Drone
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              className="border-amber-500 text-amber-500 hover:bg-amber-500/20" 
              size="lg"
              onClick={() => scrollToSection('use-cases')}
            >
              Learn How It Saves Lives
              <Heart className="ml-2 text-red-500" />
            </Button>
          </div>
        </div>
        
        {/* 3D Drone placeholder */}
        <div className={`mt-12 mb-4 relative w-full max-w-2xl h-[300px] md:h-[400px] border border-amber-500/30 bg-black/60 backdrop-blur-xl rounded-xl animate-float ${
          loaded ? "opacity-100" : "opacity-0"
        } transition-opacity duration-1000 delay-500`}>
          <div className="absolute inset-0 flex items-center justify-center text-white/50">
            <div className="text-center">
              <div className="w-40 h-40 border-4 border-amber-500/30 border-t-amber-500 rounded-full animate-rotate-slow mx-auto mb-4"></div>
              <p className="animate-pulse text-amber-400">3D Drone Model</p>
              <p className="text-sm">(Will be replaced with actual 3D model)</p>
            </div>
          </div>
        </div>
        
        {/* Stats indicators */}
        <div className={`flex flex-wrap justify-center gap-8 mt-8 ${
          loaded ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-10"
        } transition-all duration-1000 delay-700`}>
          <div className="border border-amber-500/30 bg-black/60 backdrop-blur-xl rounded-xl p-4 flex items-center gap-3">
            <Timer className="text-amber-500" />
            <div>
              <p className="text-sm text-white/70">Response Time</p>
              <p className="text-xl font-bold text-white">Under 5 Minutes</p>
            </div>
          </div>
          
          <div className="border border-amber-500/30 bg-black/60 backdrop-blur-xl rounded-xl p-4 flex items-center gap-3">
            <Heart className="text-red-500" />
            <div>
              <p className="text-sm text-white/70">Lives Saved</p>
              <p className="text-xl font-bold text-white">Potential 1000's</p>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
          <a onClick={() => scrollToSection('introduction')} className="text-amber-500 cursor-pointer hover:text-amber-400 transition-colors">
            <ArrowDown />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
