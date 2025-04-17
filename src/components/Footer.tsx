
import React from "react";
import { Github, Twitter, Linkedin, Mail, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExternalLinkClick = (linkName: string) => {
    // This would typically navigate to external links
    console.log(`Clicked on ${linkName} link`);
    // Replace with actual navigation in production
  };

  return (
    <footer className="bg-background border-t border-white/10 py-12">
      <div className="container mx-auto px-4">
        {/* Back to top button */}
        <div className="flex justify-center mb-10">
          <Button 
            variant="outline" 
            size="icon" 
            onClick={scrollToTop}
            className="rounded-full w-12 h-12 glass-button text-white border-white/20 hover:scale-110 transition-transform"
          >
            <ArrowUp size={20} />
          </Button>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          {/* Logo */}
          <div className="mb-6 md:mb-0">
            <span className="text-2xl font-bold text-white">
              Project <span className="text-drone-blue">A_N_D</span>
            </span>
            <p className="text-white/60 text-sm mt-1 max-w-xs">
              Revolutionizing emergency healthcare with drone technology
            </p>
          </div>
          
          {/* Nav links */}
          <nav className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-12 mb-6 md:mb-0">
            <div>
              <h4 className="text-white font-medium mb-3">Navigation</h4>
              <ul className="space-y-2">
                {["Home", "Features", "Technology", "Team"].map((item) => (
                  <li key={item}>
                    <a 
                      href={`#${item.toLowerCase()}`} 
                      className="text-white/60 hover:text-white transition-colors text-sm"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(item.toLowerCase());
                      }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-3">Resources</h4>
              <ul className="space-y-2">
                {["Documentation", "FAQ", "Press Kit", "Blog"].map((item) => (
                  <li key={item}>
                    <a 
                      href="#" 
                      className="text-white/60 hover:text-white transition-colors text-sm"
                      onClick={(e) => {
                        e.preventDefault();
                        handleExternalLinkClick(item);
                      }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-3">Legal</h4>
              <ul className="space-y-2">
                {["Privacy", "Terms", "Licenses", "Contact"].map((item) => (
                  <li key={item}>
                    <a 
                      href="#" 
                      className="text-white/60 hover:text-white transition-colors text-sm"
                      onClick={(e) => {
                        e.preventDefault();
                        const sectionId = item.toLowerCase() === "contact" ? "contact" : item.toLowerCase();
                        if (item.toLowerCase() === "contact") {
                          scrollToSection(sectionId);
                        } else {
                          handleExternalLinkClick(item);
                        }
                      }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-3">Connect</h4>
              <div className="flex space-x-3">
                <a 
                  href="#" 
                  className="text-white/60 hover:text-white transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    handleExternalLinkClick("Github");
                  }}
                >
                  <Github size={18} />
                </a>
                <a 
                  href="#" 
                  className="text-white/60 hover:text-white transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    handleExternalLinkClick("Twitter");
                  }}
                >
                  <Twitter size={18} />
                </a>
                <a 
                  href="#" 
                  className="text-white/60 hover:text-white transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    handleExternalLinkClick("Linkedin");
                  }}
                >
                  <Linkedin size={18} />
                </a>
                <a 
                  href="#" 
                  className="text-white/60 hover:text-white transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    handleExternalLinkClick("Mail");
                  }}
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </nav>
        </div>
        
        <div className="border-t border-white/10 pt-6 mt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-white/40 text-sm mb-4 sm:mb-0">
            &copy; {new Date().getFullYear()} Project A_N_D. All rights reserved.
          </p>
          
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/13da2285-bfa9-4de6-850e-1998e865a6bf.png" 
              alt="Project A_N_D Logo" 
              className="h-10 opacity-50 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
