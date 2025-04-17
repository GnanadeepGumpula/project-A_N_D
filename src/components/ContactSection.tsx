
import React from "react";
import { Mail, MessageSquare, Send, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form handling would go here
  };

  return (
    <section id="contact" className="section-padding bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-drone-blue/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-drone-blue/10 rounded-full blur-2xl -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="tag-label mb-2">Get Involved</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Support <span className="text-drone-blue text-glow">Project A_N_D</span>
          </h2>
          <p className="text-white/70 max-w-xl mx-auto">
            Want to invest in or support our mission to revolutionize emergency healthcare? 
            Reach out to our team to discuss partnership opportunities.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Contact info */}
              <div className="md:w-2/5">
                <h3 className="text-2xl font-bold text-white mb-4">Get in Touch</h3>
                <p className="text-white/80 mb-6">
                  We're looking for partners, investors, and collaborators to help bring 
                  Project A_N_D to communities worldwide.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <Mail className="text-drone-blue mr-3 mt-1" size={20} />
                    <div>
                      <p className="text-white font-medium">Email Us</p>
                      <a href="mailto:info@project-and.com" className="text-white/70 hover:text-drone-blue">info@project-and.com</a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MessageSquare className="text-drone-blue mr-3 mt-1" size={20} />
                    <div>
                      <p className="text-white font-medium">Inquiries</p>
                      <p className="text-white/70">We'll respond within 24 hours</p>
                    </div>
                  </div>
                </div>
                
                {/* Social proof */}
                <div className="glass-card bg-white/5 p-4">
                  <h4 className="font-medium text-white mb-2">Current Partners</h4>
                  <div className="flex flex-wrap gap-4">
                    <div className="w-10 h-10 bg-white/20 rounded-full"></div>
                    <div className="w-10 h-10 bg-white/20 rounded-full"></div>
                    <div className="w-10 h-10 bg-white/20 rounded-full"></div>
                    <div className="w-10 h-10 bg-white/20 rounded-full"></div>
                  </div>
                </div>
              </div>
              
              {/* Contact form */}
              <div className="md:w-3/5">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-white text-sm">Your Name</label>
                      <Input 
                        id="name" 
                        placeholder="John Doe" 
                        required 
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-white text-sm">Email Address</label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="john@example.com" 
                        required 
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-white text-sm">Subject</label>
                    <Input 
                      id="subject" 
                      placeholder="How can we collaborate?" 
                      required 
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-white text-sm">Your Message</label>
                    <Textarea 
                      id="message" 
                      placeholder="I'm interested in partnering with Project A_N_D..." 
                      required 
                      rows={5}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50 resize-none"
                    />
                  </div>
                  
                  <div className="pt-2 flex justify-end">
                    <Button type="submit" className="interactive-button group">
                      Send Message
                      <Send className="ml-2 group-hover:-translate-y-1 transition-transform" size={16} />
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          
          {/* CTA */}
          <div className="mt-16 text-center">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
              Ready to revolutionize emergency healthcare?
            </h3>
            <Button className="interactive-button group" size="lg">
              Join Our Mission <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
