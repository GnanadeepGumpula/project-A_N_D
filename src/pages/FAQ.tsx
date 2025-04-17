
import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft, Plus, Minus } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "What is Project A_N_D?",
      answer: "Project A_N_D (Assistant Nursing Drone) is a revolutionary healthcare innovation designed to provide emergency medical response using advanced drone technology. Our drones can deliver critical medical supplies, perform basic diagnostic functions, and establish communication with medical professionals remotely."
    },
    {
      question: "How quickly can the drone reach a patient?",
      answer: "The A_N_D drone can reach patients within a 15km radius in under 5 minutes, flying at speeds of up to 75 km/h. This rapid response time is crucial for emergency situations like cardiac arrests, where every minute counts."
    },
    {
      question: "What medical supplies does the drone carry?",
      answer: "Each drone is equipped with essential emergency medical supplies including defibrillators, emergency medications (like epinephrine and antihistamines), oxygen supply, first aid materials, and temperature-controlled storage for sensitive medical items. The specific loadout can be customized based on the emergency type."
    },
    {
      question: "How does the drone navigate in complex environments?",
      answer: "Our drones use a sophisticated AI navigation system that combines LIDAR, radar, computer vision, and multiple GPS systems to navigate safely through complex environments. They can avoid obstacles, adapt to various weather conditions, and even operate in GPS-denied areas using visual positioning systems."
    },
    {
      question: "Who operates the drone during an emergency?",
      answer: "The A_N_D system operates with varying levels of autonomy. In fully autonomous mode, the drone can navigate, land, and provide basic instructions to bystanders. In assisted mode, medical professionals remotely control specific functions while the drone handles navigation. The system is designed to be usable by both medical professionals and the general public in emergencies."
    },
    {
      question: "How is patient privacy protected during drone operations?",
      answer: "All data transmitted by the drone is end-to-end encrypted and complies with healthcare privacy regulations including HIPAA. Video and patient information are only accessible to authorized medical personnel, and data storage follows strict security protocols."
    },
    {
      question: "What happens if the drone malfunctions during a mission?",
      answer: "The A_N_D system incorporates multiple redundancy features. If a malfunction occurs, the drone automatically activates backup systems and can execute emergency protocols including safe landing procedures or return-to-base operations. Each drone undergoes rigorous safety testing and regular maintenance."
    },
    {
      question: "How does the drone communicate in areas with poor connectivity?",
      answer: "Our drones use a hybrid communication system combining cellular (5G), satellite, and mesh networking capabilities. This allows them to maintain reliable communication even in remote areas or during network outages. The drones can also create local hotspots in disaster scenarios."
    },
    {
      question: "How environmentally friendly is the drone system?",
      answer: "The A_N_D system is designed with sustainability in mind. The drones use hydrogen fuel cells with solar backup power, minimizing environmental impact. Materials are selected for durability and recyclability, and the system's long lifespan reduces resource consumption compared to traditional emergency response vehicles."
    }
  ];

  const categories = [
    "General Information",
    "Technical Specifications",
    "Medical Applications",
    "Safety & Security",
    "Deployment & Operations"
  ];

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
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Frequently Asked Questions</h1>
              <p className="text-white/70 max-w-2xl">
                Find answers to the most common questions about Project A_N_D and our emergency medical drone technology.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
            <div className="md:col-span-1">
              <div className="glass-card p-6 sticky top-24">
                <h3 className="text-xl font-bold mb-4 text-amber-500">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <a href="#" className="text-white/80 hover:text-white transition-colors block py-2 px-3 rounded-md hover:bg-white/5">
                        {category}
                      </a>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8 pt-6 border-t border-white/10">
                  <h4 className="font-medium mb-2">Can't find an answer?</h4>
                  <p className="text-white/70 text-sm mb-4">
                    Contact our team directly for personalized assistance.
                  </p>
                  <Button className="w-full bg-amber-500 hover:bg-amber-600 text-black">
                    Ask a Question
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-3">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="glass-card border-0 overflow-hidden">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-white/5 group">
                      <span className="text-left font-medium text-lg">{faq.question}</span>
                      <div className="shrink-0 border border-amber-500/50 rounded-full p-1 text-amber-500 group-data-[state=open]:bg-amber-500 group-data-[state=open]:text-black transition-colors">
                        <Plus size={16} className="group-data-[state=open]:hidden" />
                        <Minus size={16} className="hidden group-data-[state=open]:block" />
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-white/80">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              
              <div className="mt-12 glass-card p-8 text-center">
                <h3 className="text-xl font-bold mb-2">Still have questions?</h3>
                <p className="text-white/70 mb-6 max-w-md mx-auto">
                  Our team is ready to answer any questions you may have about Project A_N_D.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button className="bg-amber-500 hover:bg-amber-600 text-black">
                    Contact Support
                  </Button>
                  <Button variant="outline" className="border-amber-500/50 text-amber-500 hover:bg-amber-500/10">
                    View Documentation
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default FAQ;
