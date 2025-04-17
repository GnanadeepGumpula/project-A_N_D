
import React, { useState } from "react";
import { Phone, Laptop, TabletSmartphone, ArrowLeft, ArrowRight, Sun, Heart, Zap, AlertTriangle } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

const AppInterface: React.FC = () => {
  const [activeTab, setActiveTab] = useState("doctor");
  
  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  const handleActionButton = (action: string) => {
    toast({
      title: `${action} action initiated`,
      description: `The ${action} functionality would be triggered in the actual application.`,
      duration: 3000,
    });
  };

  return (
    <section id="app-interface" className="section-padding bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-drone-blue/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="tag-label mb-2">User Experience</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Drone App <span className="text-drone-blue text-glow">Interface</span>
          </h2>
          <p className="text-white/70 max-w-xl mx-auto">
            Our intuitive application interfaces allow both medical professionals and everyday users to 
            interact with the A_N_D drone system efficiently.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="doctor" className="w-full" onValueChange={handleTabChange}>
            <div className="flex justify-center mb-8">
              <TabsList className="glass-card bg-white/5 grid grid-cols-2">
                <TabsTrigger 
                  value="doctor" 
                  className={`px-8 py-2 ${activeTab === "doctor" ? "bg-drone-blue text-white data-[state=active]:bg-drone-blue" : "text-white/70"}`}
                >
                  <Laptop className="mr-2 h-4 w-4" />
                  Doctor Interface
                </TabsTrigger>
                <TabsTrigger 
                  value="user" 
                  className={`px-8 py-2 ${activeTab === "user" ? "bg-drone-blue text-white data-[state=active]:bg-drone-blue" : "text-white/70"}`}
                >
                  <Phone className="mr-2 h-4 w-4" />
                  User Interface
                </TabsTrigger>
              </TabsList>
            </div>
            
            {/* Doctor Interface Tab */}
            <TabsContent value="doctor" className="mt-0 focus-visible:outline-none focus-visible:ring-0">
              <div className="glass-card p-8">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/2">
                    <h3 className="text-2xl font-bold text-white mb-4">Medical Professional Dashboard</h3>
                    <p className="text-white/80 mb-6">
                      The Doctor Interface provides comprehensive drone control and patient monitoring capabilities, 
                      enabling remote medical guidance in emergency situations.
                    </p>
                    
                    <div className="space-y-4">
                      <div className="glass-card bg-white/5 p-4">
                        <h4 className="text-lg font-medium text-white mb-2">Key Features</h4>
                        <ul className="space-y-2 text-sm text-white/80">
                          <li className="flex items-start">
                            <span className="bg-drone-blue/20 text-drone-blue w-5 h-5 rounded-full flex items-center justify-center mr-2 mt-0.5">1</span>
                            <span>Real-time patient vitals monitoring</span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-drone-blue/20 text-drone-blue w-5 h-5 rounded-full flex items-center justify-center mr-2 mt-0.5">2</span>
                            <span>Remote medication dispensing control</span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-drone-blue/20 text-drone-blue w-5 h-5 rounded-full flex items-center justify-center mr-2 mt-0.5">3</span>
                            <span>Two-way video communication</span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-drone-blue/20 text-drone-blue w-5 h-5 rounded-full flex items-center justify-center mr-2 mt-0.5">4</span>
                            <span>Advanced diagnostics tools</span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-drone-blue/20 text-drone-blue w-5 h-5 rounded-full flex items-center justify-center mr-2 mt-0.5">5</span>
                            <span>Multi-drone fleet management</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  {/* Mock interface graphic */}
                  <div className="md:w-1/2 relative">
                    <div className="aspect-[4/3] bg-drone-gray-dark rounded-lg overflow-hidden border border-white/10">
                      {/* Mock doctor interface UI */}
                      <div className="absolute inset-0 flex flex-col">
                        {/* Header */}
                        <div className="bg-black/40 p-3 flex justify-between items-center">
                          <div className="flex items-center">
                            <Laptop size={16} className="text-drone-blue mr-1" />
                            <span className="text-white text-sm">Doctor Dashboard</span>
                          </div>
                          <div className="flex items-center space-x-2 text-xs text-white/70">
                            <span>ID: DR-42032</span>
                            <span>•</span>
                            <span className="text-green-400">LIVE</span>
                          </div>
                        </div>
                        
                        {/* Main content */}
                        <div className="flex-1 p-3 grid grid-cols-3 gap-2">
                          {/* Video feed */}
                          <div className="col-span-2 bg-black/40 rounded-md flex items-center justify-center aspect-video relative">
                            <div className="text-white/50 text-center">
                              <TabletSmartphone size={32} className="mx-auto mb-1" />
                              <span className="text-xs">Live Patient Feed</span>
                            </div>
                            <div className="absolute top-2 right-2">
                              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                            </div>
                            <div className="absolute bottom-2 left-2 text-xs text-white/60">
                              Location: 34.052235, -118.243683
                            </div>
                          </div>
                          
                          {/* Stats panel */}
                          <div className="bg-black/40 rounded-md p-2 flex flex-col justify-between">
                            <div>
                              <div className="text-xs text-white/70 mb-1 flex justify-between">
                                <span>Heart Rate</span>
                                <span className="text-drone-blue">Normal</span>
                              </div>
                              <div className="text-sm text-white mb-2 flex items-center">
                                <Heart size={14} className="text-red-500 mr-1 animate-pulse" />
                                <span>86 BPM</span>
                              </div>
                              
                              <div className="text-xs text-white/70 mb-1 flex justify-between">
                                <span>SpO2</span>
                                <span className="text-drone-blue">Normal</span>
                              </div>
                              <div className="text-sm text-white mb-2">94%</div>
                              
                              <div className="text-xs text-white/70 mb-1 flex justify-between">
                                <span>Temperature</span>
                                <span className="text-drone-blue">Normal</span>
                              </div>
                              <div className="text-sm text-white">37.2 °C</div>
                            </div>
                            
                            <div className="text-xs text-drone-blue cursor-pointer hover:underline" onClick={() => handleActionButton('View More Stats')}>+ 4 more stats</div>
                          </div>
                          
                          {/* Controls panel */}
                          <div className="col-span-3 bg-black/40 rounded-md p-2 flex items-center justify-between">
                            <div className="flex space-x-2">
                              <Button 
                                size="sm" 
                                variant="outline" 
                                className="h-7 text-xs glass-button text-white"
                                onClick={() => handleActionButton('Return To Base')}
                              >
                                <ArrowLeft size={12} className="mr-1" /> RTB
                              </Button>
                              <Button 
                                size="sm" 
                                variant="outline" 
                                className="h-7 text-xs glass-button text-white"
                                onClick={() => handleActionButton('Medication')}
                              >
                                <Zap size={12} className="mr-1" /> Medication
                              </Button>
                              <Button 
                                size="sm" 
                                variant="outline" 
                                className="h-7 text-xs glass-button text-white"
                                onClick={() => handleActionButton('Vitals')}
                              >
                                <AlertTriangle size={12} className="mr-1" /> Vitals
                              </Button>
                            </div>
                            
                            <Button 
                              size="sm" 
                              className="h-7 bg-drone-blue hover:bg-drone-blue-dark text-white text-xs"
                              onClick={() => handleActionButton('Assist')}
                            >
                              Assist <ArrowRight size={12} className="ml-1" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            {/* User Interface Tab */}
            <TabsContent value="user" className="mt-0 focus-visible:outline-none focus-visible:ring-0">
              <div className="glass-card p-8">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/2">
                    <h3 className="text-2xl font-bold text-white mb-4">General Public Interface</h3>
                    <p className="text-white/80 mb-6">
                      The User Interface allows anyone to request emergency drone assistance with a simple, 
                      intuitive mobile application designed for high-stress situations.
                    </p>
                    
                    <div className="space-y-4">
                      <div className="glass-card bg-white/5 p-4">
                        <h4 className="text-lg font-medium text-white mb-2">Key Features</h4>
                        <ul className="space-y-2 text-sm text-white/80">
                          <li className="flex items-start">
                            <span className="bg-drone-blue/20 text-drone-blue w-5 h-5 rounded-full flex items-center justify-center mr-2 mt-0.5">1</span>
                            <span>One-tap emergency requests</span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-drone-blue/20 text-drone-blue w-5 h-5 rounded-full flex items-center justify-center mr-2 mt-0.5">2</span>
                            <span>Voice-activated controls</span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-drone-blue/20 text-drone-blue w-5 h-5 rounded-full flex items-center justify-center mr-2 mt-0.5">3</span>
                            <span>Real-time drone tracking</span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-drone-blue/20 text-drone-blue w-5 h-5 rounded-full flex items-center justify-center mr-2 mt-0.5">4</span>
                            <span>Guided first aid instructions</span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-drone-blue/20 text-drone-blue w-5 h-5 rounded-full flex items-center justify-center mr-2 mt-0.5">5</span>
                            <span>Connection to emergency services</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  {/* Mock interface graphic */}
                  <div className="md:w-1/2 relative">
                    {/* Phone mockup */}
                    <div className="relative mx-auto w-64 h-[500px] rounded-3xl overflow-hidden border-8 border-drone-gray-dark bg-black">
                      {/* App screen */}
                      <div className="absolute inset-0 flex flex-col">
                        {/* Status bar */}
                        <div className="bg-black p-2 flex justify-between items-center">
                          <div className="text-white text-xs">9:41 AM</div>
                          <div className="flex items-center space-x-2">
                            <div className="w-4 h-2 bg-white/70 rounded-sm"></div>
                            <div className="w-2 h-2 bg-white/70 rounded-full"></div>
                            <div className="text-white text-xs">85%</div>
                          </div>
                        </div>
                        
                        {/* App content */}
                        <div className="flex-1 bg-drone-gray-dark p-4 flex flex-col">
                          {/* App header */}
                          <div className="flex justify-between items-center mb-4">
                            <div>
                              <div className="text-drone-blue font-bold">A_N_D</div>
                              <div className="text-white text-xs">Emergency Response</div>
                            </div>
                            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                              <Phone size={16} className="text-white" />
                            </div>
                          </div>
                          
                          {/* Main emergency button */}
                          <div className="flex-1 flex items-center justify-center mb-4">
                            <button 
                              className="w-32 h-32 rounded-full bg-red-500/80 flex items-center justify-center border-4 border-white/20 animate-pulse hover:bg-red-500 hover:scale-105 transition-all"
                              onClick={() => handleActionButton('Emergency Request')}
                            >
                              <div className="text-center">
                                <div className="text-white font-bold text-lg">REQUEST</div>
                                <div className="text-white/80 text-xs">EMERGENCY</div>
                              </div>
                            </button>
                          </div>
                          
                          {/* Status panel */}
                          <div className="glass-card mb-4 p-3">
                            <div className="flex items-center justify-between mb-2">
                              <div className="text-white text-sm">Nearest Drone</div>
                              <div className="text-drone-blue text-sm">2.3 km</div>
                            </div>
                            <div className="w-full bg-white/20 h-1 rounded-full">
                              <div className="bg-drone-blue h-1 rounded-full w-3/4"></div>
                            </div>
                            <div className="flex justify-between mt-1">
                              <div className="text-white/60 text-xs">Est. arrival: 4 min</div>
                              <div className="text-green-400 text-xs animate-pulse">Tracking</div>
                            </div>
                          </div>
                          
                          {/* Quick access buttons */}
                          <div className="grid grid-cols-3 gap-2">
                            <button 
                              className="glass-card p-2 flex flex-col items-center justify-center hover:bg-white/10 transition-colors"
                              onClick={() => handleActionButton('Heart Emergency')}
                            >
                              <Heart size={16} className="text-red-400 mb-1" />
                              <span className="text-white text-xs">Heart</span>
                            </button>
                            <button 
                              className="glass-card p-2 flex flex-col items-center justify-center hover:bg-white/10 transition-colors"
                              onClick={() => handleActionButton('Find Station')}
                            >
                              <Sun size={16} className="text-yellow-400 mb-1" />
                              <span className="text-white text-xs">Station</span>
                            </button>
                            <button 
                              className="glass-card p-2 flex flex-col items-center justify-center hover:bg-white/10 transition-colors"
                              onClick={() => handleActionButton('Emergency Call')}
                            >
                              <Phone size={16} className="text-green-400 mb-1" />
                              <span className="text-white text-xs">Call</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default AppInterface;
