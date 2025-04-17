
import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft, Download, Image, FileText, Users, Video } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const PressKit: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <Link to="/" className="text-amber-500 hover:text-amber-400 transition-colors flex items-center gap-2 mb-4">
                <ArrowLeft size={16} /> Back to Home
              </Link>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Press Kit</h1>
              <p className="text-white/70 max-w-2xl">
                Access all the resources you need to feature Project A_N_D in your publication.
              </p>
            </div>
            
            <Button className="bg-amber-500 hover:bg-amber-600 text-black hidden sm:flex items-center gap-2">
              <Download size={16} /> Download Complete Kit
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-card p-6 text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-amber-500/20 flex items-center justify-center mb-4">
                <Image className="text-amber-500" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-1">Logo Pack</h3>
              <p className="text-sm text-white/70 mb-4">
                Download our logo in various formats and sizes.
              </p>
              <Button variant="outline" className="border-amber-500/50 text-amber-500 hover:bg-amber-500/10 w-full mt-auto">
                Download Logos
              </Button>
            </div>
            
            <div className="glass-card p-6 text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-amber-500/20 flex items-center justify-center mb-4">
                <Image className="text-amber-500" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-1">Image Gallery</h3>
              <p className="text-sm text-white/70 mb-4">
                High-resolution images of A_N_D drones in action.
              </p>
              <Button variant="outline" className="border-amber-500/50 text-amber-500 hover:bg-amber-500/10 w-full mt-auto">
                Browse Images
              </Button>
            </div>
            
            <div className="glass-card p-6 text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-amber-500/20 flex items-center justify-center mb-4">
                <FileText className="text-amber-500" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-1">Fact Sheets</h3>
              <p className="text-sm text-white/70 mb-4">
                Key information and statistics about our technology.
              </p>
              <Button variant="outline" className="border-amber-500/50 text-amber-500 hover:bg-amber-500/10 w-full mt-auto">
                Download Fact Sheets
              </Button>
            </div>
            
            <div className="glass-card p-6 text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-amber-500/20 flex items-center justify-center mb-4">
                <Video className="text-amber-500" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-1">Video Content</h3>
              <p className="text-sm text-white/70 mb-4">
                Promotional videos and B-roll footage for media use.
              </p>
              <Button variant="outline" className="border-amber-500/50 text-amber-500 hover:bg-amber-500/10 w-full mt-auto">
                Access Videos
              </Button>
            </div>
          </div>
          
          <section className="mt-16">
            <h2 className="text-2xl font-bold mb-6 text-amber-500">About Project A_N_D</h2>
            
            <div className="glass-card p-6">
              <p className="text-white/80 mb-4">
                Project A_N_D (Assistant Nursing Drone) is revolutionizing emergency healthcare response through advanced drone technology. Our mission is to dramatically reduce response times for medical emergencies, particularly in scenarios where every second counts.
              </p>
              
              <p className="text-white/80 mb-4">
                Founded in 2023, Project A_N_D was developed by a team of healthcare professionals, aerospace engineers, and AI specialists with the goal of addressing critical gaps in emergency medical services worldwide.
              </p>
              
              <p className="text-white/80">
                The A_N_D drone system combines cutting-edge autonomous flight technology, remote medical capabilities, and an intuitive interface that can be operated by both medical professionals and civilians in emergency situations.
              </p>
            </div>
          </section>
          
          <section className="mt-12">
            <h2 className="text-2xl font-bold mb-6 text-amber-500">Key Statistics</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass-card p-6">
                <div className="text-3xl font-bold text-amber-500 mb-2">&lt; 5 min</div>
                <p className="text-white/80">Average response time to medical emergencies within a 15km radius</p>
              </div>
              
              <div className="glass-card p-6">
                <div className="text-3xl font-bold text-amber-500 mb-2">98.7%</div>
                <p className="text-white/80">Success rate in initial field trials for emergency response missions</p>
              </div>
              
              <div className="glass-card p-6">
                <div className="text-3xl font-bold text-amber-500 mb-2">12+ hours</div>
                <p className="text-white/80">Operational time on a single charge with our hybrid power system</p>
              </div>
            </div>
          </section>
          
          <section className="mt-12">
            <h2 className="text-2xl font-bold mb-6 text-amber-500">Leadership Team</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              <div className="glass-card p-6 text-center">
                <div className="w-24 h-24 rounded-full bg-amber-500/20 mx-auto mb-4 flex items-center justify-center">
                  <Users className="text-amber-500" size={32} />
                </div>
                <h3 className="text-lg font-semibold mb-1">Gnanadeep Gunpula</h3>
                <p className="text-sm text-amber-500">Founder & CEO</p>
                <p className="mt-3 text-sm text-white/70">
                  Healthcare technology innovator with 15+ years experience in medical systems design.
                </p>
              </div>
              
              <div className="glass-card p-6 text-center">
                <div className="w-24 h-24 rounded-full bg-amber-500/20 mx-auto mb-4 flex items-center justify-center">
                  <Users className="text-amber-500" size={32} />
                </div>
                <h3 className="text-lg font-semibold mb-1">Vamshi B</h3>
                <p className="text-sm text-amber-500">CTO</p>
                <p className="mt-3 text-sm text-white/70">
                  Aerospace engineer specializing in autonomous flight systems and AI integration.
                </p>
              </div>
              
              <div className="glass-card p-6 text-center">
                <div className="w-24 h-24 rounded-full bg-amber-500/20 mx-auto mb-4 flex items-center justify-center">
                  <Users className="text-amber-500" size={32} />
                </div>
                <h3 className="text-lg font-semibold mb-1">Rajini Reddy</h3>
                <p className="text-sm text-amber-500">Medical Director</p>
                <p className="mt-3 text-sm text-white/70">
                  Emergency medicine specialist with focus on remote healthcare delivery systems.
                </p>
              </div>
              
              <div className="glass-card p-6 text-center">
                <div className="w-24 h-24 rounded-full bg-amber-500/20 mx-auto mb-4 flex items-center justify-center">
                  <Users className="text-amber-500" size={32} />
                </div>
                <h3 className="text-lg font-semibold mb-1">Shivakrishna Reddy</h3>
                <p className="text-sm text-amber-500">Operations Director</p>
                <p className="mt-3 text-sm text-white/70">
                  Logistics and operations expert specializing in emergency response coordination.
                </p>
              </div>
            </div>
          </section>
          
          <section className="mt-12">
            <h2 className="text-2xl font-bold mb-6 text-amber-500">Media Contact</h2>
            
            <div className="glass-card p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold mb-1">Press Inquiries</h3>
                  <p className="text-white/80">For interviews, feature requests, and other press inquiries.</p>
                  <p className="text-amber-500 mt-2">press@project-and.com</p>
                </div>
                
                <Button className="mt-4 md:mt-0 bg-amber-500 hover:bg-amber-600 text-black">
                  Contact Press Team
                </Button>
              </div>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PressKit;
