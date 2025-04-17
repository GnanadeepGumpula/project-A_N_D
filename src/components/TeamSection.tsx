
import React, { useState } from "react";
import { Github, Linkedin, Mail, Globe } from "lucide-react";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  links: {
    github?: string;
    linkedin?: string;
    email?: string;
    website?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    id: "gnanadeep",
    name: "Gnanadeep Gunpula",
    role: "Project Lead",
    bio: "Visionary technologist with expertise in robotics and drone technology. Led multiple successful healthcare innovation projects.",
    image: "https://via.placeholder.com/300x300?text=G",
    links: {
      github: "#",
      linkedin: "#",
      email: "gnanadeep@project-and.com"
    }
  },
  {
    id: "vamshi",
    name: "Vamshi B",
    role: "Technical Architect",
    bio: "Expert in embedded systems with 8+ years of experience developing medical devices and autonomous systems.",
    image: "https://via.placeholder.com/300x300?text=V",
    links: {
      github: "#",
      linkedin: "#",
      email: "vamshi@project-and.com",
      website: "#"
    }
  },
  {
    id: "rajini",
    name: "Rajini Reddy",
    role: "Healthcare Specialist",
    bio: "Medical professional with background in emergency response systems and telemedicine implementation.",
    image: "https://via.placeholder.com/300x300?text=R",
    links: {
      linkedin: "#",
      email: "rajini@project-and.com"
    }
  },
  {
    id: "shiva",
    name: "Shivakrishna Reddy",
    role: "UX/Software Designer",
    bio: "Specializes in creating intuitive interfaces for mission-critical applications in high-stress environments.",
    image: "https://via.placeholder.com/300x300?text=S",
    links: {
      github: "#",
      linkedin: "#",
      email: "shiva@project-and.com",
      website: "#"
    }
  }
];

const TeamSection: React.FC = () => {
  const [activeMember, setActiveMember] = useState<TeamMember | null>(null);

  const handleMouseEnter = (member: TeamMember) => {
    setActiveMember(member);
  };

  const handleMouseLeave = () => {
    setActiveMember(null);
  };

  return (
    <section id="team" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="tag-label mb-2">Meet The Innovators</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Our <span className="text-drone-blue text-glow">Team</span>
          </h2>
          <p className="text-white/70 max-w-xl mx-auto">
            The brilliant minds behind Project A_N_D, bringing together expertise in healthcare,
            technology, and design to revolutionize emergency response.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member) => (
            <div 
              key={member.id} 
              className="relative group"
              onMouseEnter={() => handleMouseEnter(member)}
              onMouseLeave={handleMouseLeave}
              onTouchStart={() => handleMouseEnter(member)}
            >
              <div className="glass-card overflow-hidden transition-all duration-300 transform group-hover:scale-105">
                {/* Member image */}
                <div className="aspect-square overflow-hidden">
                  <div 
                    className="w-full h-full bg-drone-gray-dark"
                    style={{ 
                      backgroundImage: `url(${member.image})`, 
                      backgroundSize: 'cover', 
                      backgroundPosition: 'center' 
                    }}
                  ></div>
                </div>
                
                {/* Member info */}
                <div className="p-4">
                  <h3 className="text-lg font-bold text-white">{member.name}</h3>
                  <p className="text-drone-blue">{member.role}</p>
                  
                  {/* Social links */}
                  <div className="flex space-x-2 mt-3">
                    {member.links.github && (
                      <a href={member.links.github} className="text-white/70 hover:text-white transition-colors" aria-label="Github">
                        <Github size={18} />
                      </a>
                    )}
                    {member.links.linkedin && (
                      <a href={member.links.linkedin} className="text-white/70 hover:text-white transition-colors" aria-label="LinkedIn">
                        <Linkedin size={18} />
                      </a>
                    )}
                    {member.links.email && (
                      <a href={`mailto:${member.links.email}`} className="text-white/70 hover:text-white transition-colors" aria-label="Email">
                        <Mail size={18} />
                      </a>
                    )}
                    {member.links.website && (
                      <a href={member.links.website} className="text-white/70 hover:text-white transition-colors" aria-label="Website">
                        <Globe size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Bio popup (visible on hover/touch) */}
              {activeMember?.id === member.id && (
                <div className="absolute left-0 right-0 top-full mt-2 glass-card p-4 z-10 backdrop-blur-lg bg-black/70 transform animate-fade-in-up">
                  <p className="text-white/90 text-sm">{member.bio}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
