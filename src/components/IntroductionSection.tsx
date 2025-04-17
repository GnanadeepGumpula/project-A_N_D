
import React from "react";
import { Stethoscope, Clock, Map } from "lucide-react";

const IntroductionSection: React.FC = () => {
  return (
    <section id="introduction" className="section-padding relative overflow-hidden bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Content column */}
          <div className="md:w-1/2">
            <span className="tag-label mb-2">Revolutionary Healthcare</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              The Evolution of <span className="text-drone-blue text-glow">Emergency Healthcare</span>
            </h2>
            
            <p className="text-white/80 mb-6 leading-relaxed">
              In critical emergencies, every second counts. Project A_N_D transforms traditional healthcare 
              response through advanced drone technology, bypassing traditional barriers like traffic congestion 
              and remote location access challenges.
            </p>
            
            <p className="text-white/80 mb-8 leading-relaxed">
              Our Assistant Nursing Drones can deliver life-saving medical aid swiftly when traditional 
              emergency services may be delayed. From delivering defibrillators for heart attack victims 
              to providing oxygen and essential medicines in remote areas, these drones bridge the critical 
              gap between emergency onset and professional medical arrival.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="glass-card p-4 text-center">
                <Clock className="text-drone-blue mx-auto mb-2" size={28} />
                <h4 className="font-medium text-white">Rapid Response</h4>
                <p className="text-xs text-white/70">Cuts response time by up to 80%</p>
              </div>
              <div className="glass-card p-4 text-center">
                <Map className="text-drone-blue mx-auto mb-2" size={28} />
                <h4 className="font-medium text-white">Remote Access</h4>
                <p className="text-xs text-white/70">Reaches isolated locations</p>
              </div>
              <div className="glass-card p-4 text-center">
                <Stethoscope className="text-drone-blue mx-auto mb-2" size={28} />
                <h4 className="font-medium text-white">Medical Support</h4>
                <p className="text-xs text-white/70">Provides essential first aid</p>
              </div>
            </div>
          </div>
          
          {/* Animation column (Placeholder for 3D animation) */}
          <div className="md:w-1/2 relative">
            <div className="glass-card h-full flex items-center justify-center p-8">
              <div className="text-center">
                <div className="w-40 h-40 mx-auto relative">
                  {/* Animated elements representing a drone flying */}
                  <div className="absolute inset-0 border-4 border-dashed border-drone-blue rounded-full animate-rotate-slow"></div>
                  <div className="absolute inset-8 bg-drone-blue/20 rounded-full animate-pulse"></div>
                  <div className="absolute inset-[35%] bg-drone-blue rounded-full"></div>
                </div>
                <p className="text-white/70 mt-4">3D Animation of Drone Flight</p>
                <p className="text-sm text-white/50">(Will be replaced with actual 3D animation)</p>
              </div>
            </div>
            
            {/* Floating decoration elements */}
            <div className="absolute -right-12 top-1/4 w-24 h-24 bg-drone-blue/20 rounded-full blur-xl"></div>
            <div className="absolute -left-8 bottom-1/4 w-16 h-16 bg-drone-blue/30 rounded-full blur-md"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;
