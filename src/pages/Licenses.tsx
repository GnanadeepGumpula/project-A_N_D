
import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft, Check, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Licenses: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <Link to="/" className="text-amber-500 hover:text-amber-400 transition-colors flex items-center gap-2 mb-4">
              <ArrowLeft size={16} /> Back to Home
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Licenses & Legal Information</h1>
            <p className="text-white/70 max-w-3xl">
              Comprehensive information about Project A_N_D licenses, patents, and regulatory compliance.
            </p>
          </div>
          
          <div className="glass-card p-8 mb-10">
            <h2 className="text-2xl font-bold text-amber-500 mb-6">Open Source Licenses</h2>
            
            <p className="text-white/80 mb-6">
              Project A_N_D incorporates various open-source software components. We acknowledge and appreciate the contributions of the open-source community. Here are the major open-source components used in our systems:
            </p>
            
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 px-4 text-amber-500">Component</th>
                    <th className="text-left py-3 px-4 text-amber-500">License</th>
                    <th className="text-left py-3 px-4 text-amber-500">Version</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4">React</td>
                    <td className="py-3 px-4">MIT License</td>
                    <td className="py-3 px-4">18.3.1</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4">TensorFlow</td>
                    <td className="py-3 px-4">Apache License 2.0</td>
                    <td className="py-3 px-4">2.12.0</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4">OpenCV</td>
                    <td className="py-3 px-4">Apache License 2.0</td>
                    <td className="py-3 px-4">4.7.0</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4">ROS (Robot Operating System)</td>
                    <td className="py-3 px-4">BSD License</td>
                    <td className="py-3 px-4">Noetic</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4">PX4 Autopilot</td>
                    <td className="py-3 px-4">BSD License</td>
                    <td className="py-3 px-4">1.13.0</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Flask</td>
                    <td className="py-3 px-4">BSD License</td>
                    <td className="py-3 px-4">2.3.2</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <Button variant="outline" className="border-amber-500/50 text-amber-500 hover:bg-amber-500/10 flex items-center gap-2">
              <Download size={16} /> Download Complete License Information
            </Button>
          </div>
          
          <div className="glass-card p-8 mb-10">
            <h2 className="text-2xl font-bold text-amber-500 mb-6">Patent Information</h2>
            
            <p className="text-white/80 mb-6">
              Project A_N_D is protected by multiple patents covering our innovative drone technology and medical response systems. Our key patents include:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="p-4 bg-white/5 rounded-lg">
                <h3 className="font-semibold mb-2">US Patent #10,872,342</h3>
                <p className="text-white/80 text-sm">
                  Autonomous Medical Emergency Drone Navigation System
                </p>
                <p className="text-amber-500 text-sm mt-1">
                  Filed: June 2023 | Granted: November 2024
                </p>
              </div>
              
              <div className="p-4 bg-white/5 rounded-lg">
                <h3 className="font-semibold mb-2">US Patent #11,235,789</h3>
                <p className="text-white/80 text-sm">
                  Remote Medical Diagnostic System for Emergency Response
                </p>
                <p className="text-amber-500 text-sm mt-1">
                  Filed: August 2023 | Granted: December 2024
                </p>
              </div>
              
              <div className="p-4 bg-white/5 rounded-lg">
                <h3 className="font-semibold mb-2">EU Patent #EP3862107</h3>
                <p className="text-white/80 text-sm">
                  Precision Delivery System for Medical Supplies via Drone
                </p>
                <p className="text-amber-500 text-sm mt-1">
                  Filed: July 2023 | Granted: January 2025
                </p>
              </div>
              
              <div className="p-4 bg-white/5 rounded-lg">
                <h3 className="font-semibold mb-2">US Patent #11,498,324</h3>
                <p className="text-white/80 text-sm">
                  Secure Medical Data Transmission System for Remote Healthcare
                </p>
                <p className="text-amber-500 text-sm mt-1">
                  Filed: September 2023 | Pending
                </p>
              </div>
            </div>
          </div>
          
          <div className="glass-card p-8 mb-10">
            <h2 className="text-2xl font-bold text-amber-500 mb-6">Regulatory Compliance</h2>
            
            <p className="text-white/80 mb-6">
              Project A_N_D complies with various regulatory frameworks across multiple jurisdictions:
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-3">
                <div className="mt-1">
                  <div className="w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center">
                    <Check size={14} className="text-black" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Federal Aviation Administration (FAA) - United States</h3>
                  <p className="text-white/80 text-sm">
                    Our drones are certificated under Part 135 for air carrier operations and comply with Remote ID requirements. We maintain Special Airworthiness Certificates for our medical drone fleet and hold waivers for beyond visual line of sight (BVLOS) operations.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="mt-1">
                  <div className="w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center">
                    <Check size={14} className="text-black" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">European Union Aviation Safety Agency (EASA)</h3>
                  <p className="text-white/80 text-sm">
                    Our drones comply with the EU Drone Regulation framework including the "specific" category for medium-risk operations. We hold Light UAS Operator Certificates (LUC) for medical operations across European territories.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="mt-1">
                  <div className="w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center">
                    <Check size={14} className="text-black" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Medical Device Regulation</h3>
                  <p className="text-white/80 text-sm">
                    Our onboard medical equipment is FDA-cleared for emergency use (US) and carries CE marking (EU). We comply with ISO 13485 standards for medical devices and maintain compliance with Good Manufacturing Practices (GMP).
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="mt-1">
                  <div className="w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center">
                    <Check size={14} className="text-black" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Data Protection & Privacy</h3>
                  <p className="text-white/80 text-sm">
                    We comply with HIPAA regulations (US) for protected health information and GDPR (EU) for personal data processing. Our systems implement end-to-end encryption and follow the highest standards of data security.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="glass-card p-8 text-center">
            <h2 className="text-2xl font-bold text-amber-500 mb-4">Need More Information?</h2>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              For detailed license information, patent inquiries, or regulatory questions, please contact our legal department.
            </p>
            <Button className="bg-amber-500 hover:bg-amber-600 text-black">
              Contact Legal Department
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Licenses;
