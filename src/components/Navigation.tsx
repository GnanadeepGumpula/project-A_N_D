
import React, { useState, useEffect } from "react";
import { Menu, X, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";

const Navigation: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleAudio = () => {
    setAudioEnabled(!audioEnabled);
    // Audio implementation would go here
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    }
  };

  const handleNavigation = (path: string, id?: string) => {
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
    
    if (path === '/') {
      if (window.location.pathname === '/') {
        // Already on home page, scroll to section
        if (id) {
          scrollToSection(id);
        }
      } else {
        // Navigate to home page, then scroll to section after page loads
        navigate('/');
        if (id) {
          setTimeout(() => {
            const section = document.getElementById(id);
            if (section) {
              section.scrollIntoView({ behavior: 'smooth' });
            }
          }, 300);
        }
      }
    } else {
      // Navigate to another page
      navigate(path);
    }
  };

  // All navigation items organized by categories
  const navItems = {
    main: [
      { name: "Home", id: "home", path: "/" },
      { name: "Introduction", id: "introduction", path: "/" },
      { name: "Features", id: "features", path: "/" },
      { name: "Use Cases", id: "use-cases", path: "/" },
      { name: "Technology", id: "technology", path: "/" },
      { name: "Team", id: "team", path: "/" },
      { name: "Contact", id: "contact", path: "/" }
    ],
    resources: [
      { name: "Documentation", id: "documentation", path: "/documentation" },
      { name: "FAQ", id: "faq", path: "/faq" },
      { name: "Press Kit", id: "press-kit", path: "/press-kit" },
      { name: "Blog", id: "blog", path: "/blog" }
    ],
    legal: [
      { name: "Privacy", id: "privacy", path: "/privacy" },
      { name: "Terms", id: "terms", path: "/terms" },
      { name: "Licenses", id: "licenses", path: "/licenses" },
      { name: "Contact", id: "contact", path: "/" }
    ]
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/60 backdrop-blur-lg py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-2xl font-bold text-white">
            Project <span className="text-amber-500">A_N_D</span>
          </span>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          {navItems.main.map((item) => (
            <a 
              key={item.name} 
              href="#"
              className="text-white/80 hover:text-white transition-colors duration-200"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation(item.path, item.id);
              }}
            >
              {item.name}
            </a>
          ))}
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleAudio} 
            className="text-white hover:bg-white/10"
          >
            {audioEnabled ? <Volume2 size={20} /> : <VolumeX size={20} />}
          </Button>

          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setMobileMenuOpen(true)} 
            className="md:hidden text-white hover:bg-white/10"
          >
            <Menu size={24} />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-lg z-50 flex flex-col p-6 overflow-y-auto">
          <div className="flex justify-between items-center mb-10">
            <span className="text-2xl font-bold text-white">
              Project <span className="text-amber-500">A_N_D</span>
            </span>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setMobileMenuOpen(false)} 
              className="text-white"
            >
              <X size={24} />
            </Button>
          </div>
          
          <nav className="flex flex-col space-y-6">
            <div className="border-b border-white/10 pb-4">
              <h3 className="text-amber-500 mb-4 font-medium">Navigation</h3>
              {navItems.main.map((item) => (
                <a 
                  key={item.name} 
                  href="#"
                  className="block text-xl text-white/80 hover:text-white py-2"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation(item.path, item.id);
                  }}
                >
                  {item.name}
                </a>
              ))}
            </div>
            
            <div className="border-b border-white/10 pb-4">
              <h3 className="text-amber-500 mb-4 font-medium">Resources</h3>
              {navItems.resources.map((item) => (
                <a 
                  key={item.name} 
                  href="#"
                  className="block text-xl text-white/80 hover:text-white py-2"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation(item.path, item.id);
                  }}
                >
                  {item.name}
                </a>
              ))}
            </div>
            
            <div>
              <h3 className="text-amber-500 mb-4 font-medium">Legal</h3>
              {navItems.legal.map((item) => (
                <a 
                  key={item.name} 
                  href="#"
                  className="block text-xl text-white/80 hover:text-white py-2"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation(item.path, item.id);
                  }}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navigation;
