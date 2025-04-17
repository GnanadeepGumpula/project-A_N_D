
import React, { useState } from "react";
import { Eye, X, Monitor, Package, Syringe, Heart, Hammer, Droplet, Camera, Wifi, Shield, Zap, BatteryCharging, Navigation, Compass } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

interface FeatureType {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  position: string;
  color: string;
  image: string;
  details?: string;
  specs?: string[];
}

const features: FeatureType[] = [
  {
    id: "display",
    name: "Display Interface",
    icon: <Monitor size={24} />,
    description: "High-definition display providing real-time patient diagnostics and video communication with medical professionals.",
    position: "top-[20%] left-[20%]",
    color: "bg-amber-500",
    image: "/lovable-uploads/display-interface.jpg",
    details: "The 4K high-resolution touchscreen interface allows for seamless communication between patients and remote medical staff. Features include vital sign monitoring, video conferencing, and medical record access.",
    specs: ["4K Resolution", "Gorilla Glass Protection", "Anti-glare Coating", "Voice Command Support"]
  },
  {
    id: "oxygen",
    name: "Oxygen Tank",
    icon: <Droplet size={24} />,
    description: "Portable oxygen supply for emergency respiratory support with multiple adapter options.",
    position: "top-[30%] right-[25%]",
    color: "bg-amber-500",
    image: "/lovable-uploads/oxygen-tank.jpg",
    details: "The lightweight yet durable oxygen tank provides up to 30 minutes of emergency respiratory support. The smart flow regulator adjusts oxygen delivery based on patient needs.",
    specs: ["30-minute Supply", "Automatic Flow Control", "Multiple Adapters", "Weight: 1.2kg"]
  },
  {
    id: "storage",
    name: "Cool Storage Tank",
    icon: <Package size={24} />,
    description: "Temperature-controlled compartment for storing temperature-sensitive medications and biological samples.",
    position: "top-[60%] left-[15%]",
    color: "bg-amber-500",
    image: "/lovable-uploads/cool-storage.jpg",
    details: "Maintains precise temperature control from -20°C to +8°C for various medical supplies including vaccines, insulin, and biological samples.",
    specs: ["Temperature Range: -20°C to +8°C", "Digital Temperature Display", "UV Sterilization", "Biometric Lock System"]
  },
  {
    id: "emergency",
    name: "First Aid & Emergency Kit",
    icon: <Package size={24} />,
    description: "Comprehensive emergency supplies including bandages, antiseptics, and basic medical tools.",
    position: "bottom-[30%] left-[30%]",
    color: "bg-amber-500",
    image: "/lovable-uploads/emergency-kit.jpg",
    details: "Contains over 50 essential first aid items organized in a compact space. LED-lit compartments help locate items quickly in low-light situations.",
    specs: ["Trauma Shears", "Blood Pressure Monitor", "Emergency Blanket", "Automated Inventory Tracking"]
  },
  {
    id: "medicine",
    name: "Medicine Storage Box",
    icon: <Syringe size={24} />,
    description: "Secure compartment containing essential emergency medications including epinephrine, antihistamines, and pain relievers.",
    position: "bottom-[20%] right-[20%]",
    color: "bg-amber-500",
    image: "/lovable-uploads/medicine-box.jpg",
    details: "Temperature-controlled storage for up to 20 different medications with automatic dispensing system. RFID tracking ensures medication safety and prevents tampering.",
    specs: ["Biometric Access", "Climate Control", "Automatic Dispenser", "Anti-tamper Alerts"]
  },
  {
    id: "hands",
    name: "Robotic Hands",
    icon: <Hammer size={24} />,
    description: "Precision manipulators capable of basic medical procedures under remote guidance from healthcare professionals.",
    position: "top-[45%] left-[30%]",
    color: "bg-amber-500",
    image: "/lovable-uploads/robotic-hands.jpg",
    details: "The robotic manipulation system has 7 degrees of freedom and haptic feedback, allowing remote doctors to perform basic procedures like bandaging, injection, and sample collection.",
    specs: ["Tactile Sensors", "7 Degrees of Freedom", "Precision: <0.5mm", "Force Feedback System"]
  },
  {
    id: "defibrillator",
    name: "Defibrillators",
    icon: <Heart size={24} />,
    description: "Automated external defibrillator (AED) for immediate response to cardiac emergencies.",
    position: "bottom-[40%] right-[25%]",
    color: "bg-amber-500",
    image: "/lovable-uploads/defibrillator.jpg",
    details: "Voice-guided AED with automatic rhythm analysis and shock delivery. Features pediatric and adult modes with real-time ECG monitoring capabilities.",
    specs: ["Voice Guidance", "Auto Rhythm Analysis", "Pediatric/Adult Modes", "500 Shock Capacity"]
  },
  {
    id: "camera",
    name: "Multi-spectrum Camera",
    icon: <Camera size={24} />,
    description: "Advanced imaging system with thermal, night vision, and standard HD capturing capabilities.",
    position: "top-[15%] right-[40%]",
    color: "bg-amber-500",
    image: "/lovable-uploads/camera.jpg",
    details: "The multi-spectrum camera system enables medical professionals to assess patients remotely with thermal imaging for detecting inflammation and injuries invisible to the naked eye.",
    specs: ["8K Resolution", "Thermal Imaging", "Night Vision", "3D Depth Mapping"]
  },
  {
    id: "connectivity",
    name: "High-speed Connectivity",
    icon: <Wifi size={24} />,
    description: "Military-grade communication systems ensuring reliable connections even in remote areas.",
    position: "bottom-[15%] left-[15%]",
    color: "bg-amber-500",
    image: "/lovable-uploads/connectivity.jpg",
    details: "Uses a combination of satellite, cellular, and mesh networking to ensure uninterrupted communication in any environment. Features end-to-end encryption for patient data security.",
    specs: ["5G/Satellite Hybrid", "Mesh Network Capable", "256-bit Encryption", "50km Range"]
  },
  {
    id: "shield",
    name: "Bio-containment System",
    icon: <Shield size={24} />,
    description: "Negative pressure isolation chamber for safely transporting infectious materials or samples.",
    position: "top-[40%] right-[10%]",
    color: "bg-amber-500",
    image: "/lovable-uploads/biocontainment.jpg",
    details: "HEPA-filtered negative pressure chamber providing BSL-3 level containment for handling potentially infectious specimens safely in field conditions.",
    specs: ["BSL-3 Containment", "HEPA Filtration", "UV Sterilization", "Remote Sample Analysis"]
  },
  {
    id: "power",
    name: "Advanced Power System",
    icon: <BatteryCharging size={24} />,
    description: "Hydrogen fuel cell with solar backup providing extended operation time of up to 12 hours.",
    position: "bottom-[40%] left-[10%]",
    color: "bg-amber-500",
    image: "/lovable-uploads/power-system.jpg",
    details: "The hybrid power system combines hydrogen fuel cell technology with solar backup, ensuring reliable operation in various environments for extended missions.",
    specs: ["12-hour Runtime", "Quick-swap Batteries", "Solar Charging", "Wireless Charging Pad"]
  },
  {
    id: "navigation",
    name: "Autonomous Navigation",
    icon: <Navigation size={24} />,
    description: "AI-driven navigation system capable of avoiding obstacles and finding optimal routes in any terrain.",
    position: "bottom-[10%] right-[40%]",
    color: "bg-amber-500",
    image: "/lovable-uploads/navigation.jpg",
    details: "The drone's AI navigation system uses LIDAR, radar, and computer vision to navigate complex environments autonomously, even without GPS signals.",
    specs: ["Collision Avoidance", "Terrain Adaptation", "All-weather Operation", "Indoor/Outdoor Capability"]
  }
];

const DroneFeatures: React.FC = () => {
  const [selectedFeature, setSelectedFeature] = useState<FeatureType | null>(null);
  const [open, setOpen] = useState(false);

  const handleFeatureClick = (feature: FeatureType) => {
    setSelectedFeature(feature);
    setOpen(true);
  };

  return (
    <section id="features" className="section-padding bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-flex items-center rounded-full bg-amber-500/20 px-2.5 py-0.5 text-xs font-medium text-amber-500 mb-2">Interactive Model</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Advanced <span className="text-amber-500">Drone Features</span>
          </h2>
          <p className="text-white/70 max-w-xl mx-auto">
            Explore our cutting-edge drone's components. Click on each feature to learn more about its capabilities.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto aspect-[16/9] border border-amber-500/30 bg-black/60 backdrop-blur-xl rounded-xl p-8">
          {/* Drone body placeholder (center of the container) */}
          <div className="absolute inset-[25%] rounded-full bg-amber-500/20 backdrop-blur-md border border-amber-500/30 animate-pulse-glow">
            <div className="absolute inset-[25%] rounded-full bg-amber-500/30"></div>
          </div>

          {/* Feature hotspots */}
          {features.map((feature) => (
            <HoverCard key={feature.id}>
              <HoverCardTrigger asChild>
                <button
                  className={`absolute ${feature.position} w-10 h-10 rounded-full ${feature.color} flex items-center justify-center text-black shadow-lg hover:scale-110 transition-transform z-10`}
                  onClick={() => handleFeatureClick(feature)}
                  aria-label={feature.name}
                >
                  {feature.icon}
                </button>
              </HoverCardTrigger>
              <HoverCardContent className="border border-amber-500/30 bg-black/90 text-white">
                <div className="flex items-center gap-2">
                  <div className={`w-8 h-8 rounded-full ${feature.color} flex items-center justify-center`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-medium text-amber-500">{feature.name}</h3>
                </div>
              </HoverCardContent>
            </HoverCard>
          ))}

          {/* Interactive prompt */}
          <div className="absolute bottom-4 left-0 right-0 text-center text-amber-500/60 text-sm">
            <Eye className="inline mr-2" size={16} />
            Click on features to explore details
          </div>
        </div>

        {/* Feature detail modal */}
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="border border-amber-500/30 bg-black/90 text-white">
            <DialogHeader>
              <DialogTitle className="text-2xl flex items-center gap-3">
                {selectedFeature?.icon && <div className={`w-8 h-8 rounded-full ${selectedFeature?.color} flex items-center justify-center`}>
                  {selectedFeature?.icon}
                </div>}
                <span className="text-amber-500">{selectedFeature?.name}</span>
              </DialogTitle>
              <DialogDescription className="text-white/70">
                {selectedFeature?.description}
              </DialogDescription>
            </DialogHeader>

            {/* Feature image */}
            {selectedFeature && (
              <div className="rounded-lg overflow-hidden my-4 border border-amber-500/30">
                <div className="aspect-video bg-black flex items-center justify-center">
                  {/* Replace with actual feature images when available */}
                  <div className="text-center text-amber-500/50">
                    <p className="text-sm">Feature Visualization Image</p>
                    <p className="text-xs">(Placeholder for {selectedFeature.name})</p>
                  </div>
                </div>
              </div>
            )}

            {/* Feature details */}
            {selectedFeature?.details && (
              <div className="mb-4">
                <h4 className="font-medium mb-2 text-amber-500">Technical Details:</h4>
                <p className="text-white/80">{selectedFeature.details}</p>
              </div>
            )}

            {/* Feature specs */}
            {selectedFeature?.specs && (
              <div className="p-4 rounded-lg bg-amber-500/10 border border-amber-500/20">
                <h4 className="font-medium mb-2 text-amber-500">Specifications:</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedFeature.specs.map((spec, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                      <span className="text-sm text-white/80">{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="p-4 rounded-lg bg-white/5 border border-white/10 mt-4">
              <h4 className="font-medium mb-2 text-amber-500">Usage Scenarios:</h4>
              <ul className="list-disc pl-5 space-y-1 text-sm text-white/80">
                <li>Emergency medical response</li>
                <li>Remote area assistance</li>
                <li>Disaster zone support</li>
                <li>First-response aid before paramedics arrive</li>
              </ul>
            </div>

            <div className="flex justify-end">
              <DialogClose className="bg-amber-500 hover:bg-amber-600 text-black px-4 py-2 rounded-md flex items-center">
                Close <X size={16} className="ml-2" />
              </DialogClose>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default DroneFeatures;
