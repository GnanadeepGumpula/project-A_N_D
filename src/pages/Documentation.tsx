
import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft, FileText, BookOpen, Code, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Documentation: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <div>
              <Link to="/" className="text-amber-500 hover:text-amber-400 transition-colors flex items-center gap-2 mb-4">
                <ArrowLeft size={16} /> Back to Home
              </Link>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Documentation</h1>
              <p className="text-white/70 max-w-2xl">
                Comprehensive technical information and guides for the A_N_D drone system.
              </p>
            </div>
            
            <Button className="bg-amber-500 hover:bg-amber-600 text-black hidden sm:flex items-center gap-2">
              <Download size={16} /> Download PDF
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="md:col-span-1">
              <div className="glass-card p-6 sticky top-24">
                <h3 className="text-xl font-bold mb-4 text-amber-500">Contents</h3>
                <ul className="space-y-4">
                  <li>
                    <a href="#technical-specs" className="text-white/80 hover:text-white transition-colors flex items-center gap-2">
                      <FileText size={16} /> Technical Specifications
                    </a>
                  </li>
                  <li>
                    <a href="#user-guides" className="text-white/80 hover:text-white transition-colors flex items-center gap-2">
                      <BookOpen size={16} /> User Guides
                    </a>
                  </li>
                  <li>
                    <a href="#api-docs" className="text-white/80 hover:text-white transition-colors flex items-center gap-2">
                      <Code size={16} /> API Documentation
                    </a>
                  </li>
                </ul>
                
                <div className="mt-8 pt-6 border-t border-white/10">
                  <h4 className="font-medium mb-2">Need Help?</h4>
                  <p className="text-white/70 text-sm mb-4">
                    Our technical team is available 24/7 to assist with any questions.
                  </p>
                  <Button variant="outline" className="w-full border-amber-500/50 text-amber-500 hover:bg-amber-500/10">
                    Contact Support
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-2">
              <section id="technical-specs" className="mb-16">
                <h2 className="text-2xl font-bold mb-6 text-amber-500">Technical Specifications</h2>
                
                <div className="glass-card p-6 mb-8">
                  <h3 className="font-semibold mb-4">Drone Specifications</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-amber-500 font-medium mb-2">Dimensions & Weight</h4>
                      <ul className="space-y-2 text-sm text-white/80">
                        <li className="flex justify-between">
                          <span>Length:</span>
                          <span>62 cm</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Width:</span>
                          <span>55 cm</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Height:</span>
                          <span>18 cm</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Weight:</span>
                          <span>3.5 kg (unloaded)</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-amber-500 font-medium mb-2">Performance</h4>
                      <ul className="space-y-2 text-sm text-white/80">
                        <li className="flex justify-between">
                          <span>Max Speed:</span>
                          <span>75 km/h</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Flight Time:</span>
                          <span>Up to 45 minutes</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Max Range:</span>
                          <span>15 km</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Max Payload:</span>
                          <span>2.5 kg</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="glass-card p-6">
                  <h3 className="font-semibold mb-4">Component Specifications</h3>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-white/10">
                          <th className="text-left py-3 px-4 text-amber-500">Component</th>
                          <th className="text-left py-3 px-4 text-amber-500">Details</th>
                          <th className="text-left py-3 px-4 text-amber-500">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-white/5">
                          <td className="py-3 px-4 font-medium">Processor</td>
                          <td className="py-3 px-4 text-white/80">Octa-core 3.2GHz Neural Engine</td>
                          <td className="py-3 px-4"><span className="text-green-400">Active</span></td>
                        </tr>
                        <tr className="border-b border-white/5">
                          <td className="py-3 px-4 font-medium">Navigation System</td>
                          <td className="py-3 px-4 text-white/80">GPS, GLONASS, Galileo, BeiDou</td>
                          <td className="py-3 px-4"><span className="text-green-400">Active</span></td>
                        </tr>
                        <tr className="border-b border-white/5">
                          <td className="py-3 px-4 font-medium">Camera System</td>
                          <td className="py-3 px-4 text-white/80">8K Ultra HD + Thermal + Night Vision</td>
                          <td className="py-3 px-4"><span className="text-green-400">Active</span></td>
                        </tr>
                        <tr className="border-b border-white/5">
                          <td className="py-3 px-4 font-medium">Battery</td>
                          <td className="py-3 px-4 text-white/80">12,000mAh Li-Ion + Hydrogen Fuel Cell</td>
                          <td className="py-3 px-4"><span className="text-green-400">Active</span></td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 font-medium">Communication</td>
                          <td className="py-3 px-4 text-white/80">5G, Satellite, Mesh Networking</td>
                          <td className="py-3 px-4"><span className="text-green-400">Active</span></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>
              
              <section id="user-guides" className="mb-16">
                <h2 className="text-2xl font-bold mb-6 text-amber-500">User Guides</h2>
                
                <div className="glass-card p-6 mb-6">
                  <h3 className="font-semibold mb-4">Getting Started</h3>
                  <p className="text-white/80 mb-4">
                    This guide will walk you through the initial setup and first-time operation of your A_N_D medical drone system.
                  </p>
                  <ol className="list-decimal pl-5 space-y-2 text-white/80">
                    <li>Unbox and inspect all components</li>
                    <li>Charge the drone using the included charging station</li>
                    <li>Install the A_N_D mobile application on your device</li>
                    <li>Connect the drone to your account via Bluetooth pairing</li>
                    <li>Complete the initial system calibration</li>
                    <li>Review safety protocols and regulations</li>
                  </ol>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="glass-card p-6">
                    <h3 className="font-semibold mb-4">For Medical Professionals</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <FileText className="text-amber-500 shrink-0 mt-0.5" size={18} />
                        <div>
                          <h4 className="font-medium">Remote Operation Guide</h4>
                          <p className="text-sm text-white/70">Detailed instructions for remote drone control and medical operations.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <FileText className="text-amber-500 shrink-0 mt-0.5" size={18} />
                        <div>
                          <h4 className="font-medium">Medical Supplies Management</h4>
                          <p className="text-sm text-white/70">How to optimize and manage the drone's medical inventory.</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="glass-card p-6">
                    <h3 className="font-semibold mb-4">For Emergency Responders</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <FileText className="text-amber-500 shrink-0 mt-0.5" size={18} />
                        <div>
                          <h4 className="font-medium">Emergency Deployment Protocol</h4>
                          <p className="text-sm text-white/70">Step-by-step guide for rapid drone deployment in emergencies.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <FileText className="text-amber-500 shrink-0 mt-0.5" size={18} />
                        <div>
                          <h4 className="font-medium">Coordination with Ground Teams</h4>
                          <p className="text-sm text-white/70">Protocols for integrating drone support with ground medical teams.</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
              
              <section id="api-docs" className="mb-16">
                <h2 className="text-2xl font-bold mb-6 text-amber-500">API Documentation</h2>
                
                <div className="glass-card p-6">
                  <h3 className="font-semibold mb-4">Integration API</h3>
                  <p className="text-white/80 mb-4">
                    The A_N_D system provides a comprehensive API for integration with hospital systems, emergency response networks, and third-party applications.
                  </p>
                  
                  <div className="bg-gray-900 p-4 rounded-md mb-6 overflow-x-auto">
                    <pre className="text-sm text-white/90"><code>
{`// Example API request to deploy drone
POST /api/v1/drones/deploy
Content-Type: application/json
Authorization: Bearer YOUR_API_KEY

{
  "emergencyType": "cardiac",
  "location": {
    "latitude": 37.7749,
    "longitude": -122.4194
  },
  "patientInfo": {
    "age": 65,
    "gender": "male",
    "symptoms": ["chest pain", "difficulty breathing"]
  }
}`}
                    </code></pre>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-amber-500 font-medium mb-2">Available Endpoints</h4>
                      <ul className="space-y-1 text-sm text-white/80">
                        <li>GET /api/v1/drones - List all drones</li>
                        <li>GET /api/v1/drones/:id - Get drone status</li>
                        <li>POST /api/v1/drones/deploy - Deploy drone</li>
                        <li>PUT /api/v1/drones/:id/recall - Recall drone</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-amber-500 font-medium mb-2">SDK Downloads</h4>
                      <ul className="space-y-2 text-sm">
                        <li>
                          <a href="#" className="text-amber-400 hover:text-amber-300 transition-colors">
                            JavaScript SDK v2.3.1
                          </a>
                        </li>
                        <li>
                          <a href="#" className="text-amber-400 hover:text-amber-300 transition-colors">
                            Python SDK v1.8.0
                          </a>
                        </li>
                        <li>
                          <a href="#" className="text-amber-400 hover:text-amber-300 transition-colors">
                            Java SDK v3.1.2
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Documentation;
