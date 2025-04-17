
import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft, Calendar, User, Clock, ArrowRight, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const BlogPosts = [
  {
    id: 1,
    title: "The Evolution of Emergency Medical Response with Drone Technology",
    excerpt: "How Project A_N_D is revolutionizing the way we approach medical emergencies with cutting-edge drone technology.",
    author: "Dr. Rajini Reddy",
    date: "April 10, 2025",
    readTime: "8 min read",
    category: "Technology",
    image: "/lovable-uploads/blog-1.jpg"
  },
  {
    id: 2,
    title: "A Day in the Life: How A_N_D Drones Saved a Hiker in Remote Mountains",
    excerpt: "A real-world case study of how our emergency drones located and provided critical care to a hiker suffering from severe dehydration.",
    author: "Vamshi B",
    date: "April 5, 2025",
    readTime: "6 min read",
    category: "Case Studies",
    image: "/lovable-uploads/blog-2.jpg"
  },
  {
    id: 3,
    title: "The Technical Challenges of Building a Medical Response Drone",
    excerpt: "An inside look at the engineering hurdles we overcame to create a drone capable of delivering emergency medical care.",
    author: "Gnanadeep Gunpula",
    date: "March 28, 2025",
    readTime: "10 min read",
    category: "Engineering",
    image: "/lovable-uploads/blog-3.jpg"
  },
  {
    id: 4,
    title: "Regulatory Frameworks: Navigating Airspace Rules for Medical Drones",
    excerpt: "An overview of the current regulatory landscape and how we're working with authorities to create safe pathways for emergency drones.",
    author: "Shivakrishna Reddy",
    date: "March 20, 2025",
    readTime: "7 min read",
    category: "Regulation",
    image: "/lovable-uploads/blog-4.jpg"
  }
];

const categories = ["All", "Technology", "Case Studies", "Engineering", "Regulation", "Research", "Healthcare"];

const Blog: React.FC = () => {
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
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Project A_N_D Blog</h1>
              <p className="text-white/70 max-w-2xl">
                Insights, case studies and news about our emergency medical drone technology.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 mt-12">
            <div className="md:w-3/4">
              {/* Featured Post */}
              <div className="glass-card overflow-hidden mb-10">
                <div className="h-64 bg-amber-500/20 flex items-center justify-center">
                  <p className="text-amber-500/60">Featured Post Image</p>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap items-center gap-4 mb-3">
                    <span className="inline-flex items-center rounded-full bg-amber-500/20 px-2.5 py-0.5 text-xs font-medium text-amber-500">
                      Featured
                    </span>
                    <span className="text-white/60 text-sm flex items-center gap-1">
                      <Calendar size={14} /> April 15, 2025
                    </span>
                    <span className="text-white/60 text-sm flex items-center gap-1">
                      <User size={14} /> Dr. Rajini Reddy
                    </span>
                    <span className="text-white/60 text-sm flex items-center gap-1">
                      <Clock size={14} /> 12 min read
                    </span>
                  </div>
                  
                  <h2 className="text-2xl font-bold mb-3">
                    <a href="#" className="hover:text-amber-500 transition-colors">
                      The Future of Emergency Response: How Drones Are Changing the Game
                    </a>
                  </h2>
                  
                  <p className="text-white/80 mb-6">
                    In regions where traditional emergency services face challenges due to geography, infrastructure, or distance, drones are emerging as life-saving alternatives. Project A_N_D is at the forefront of this revolutionary approach to emergency medical response.
                  </p>
                  
                  <Button className="bg-amber-500 hover:bg-amber-600 text-black">
                    Read Article <ArrowRight size={16} className="ml-1" />
                  </Button>
                </div>
              </div>
              
              {/* Recent Posts */}
              <h2 className="text-2xl font-bold mb-6">Recent Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                {BlogPosts.map(post => (
                  <div key={post.id} className="glass-card overflow-hidden flex flex-col h-full">
                    <div className="h-48 bg-amber-500/20 flex items-center justify-center">
                      <p className="text-amber-500/60">Post Image</p>
                    </div>
                    <div className="p-5 flex flex-col flex-grow">
                      <div className="flex justify-between items-center mb-3">
                        <span className="inline-flex items-center rounded-full bg-amber-500/20 px-2.5 py-0.5 text-xs font-medium text-amber-500">
                          {post.category}
                        </span>
                        <span className="text-white/60 text-sm">{post.date}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold mb-2">
                        <a href="#" className="hover:text-amber-500 transition-colors">
                          {post.title}
                        </a>
                      </h3>
                      
                      <p className="text-white/70 text-sm mb-4 flex-grow">{post.excerpt}</p>
                      
                      <div className="flex justify-between items-center mt-auto pt-4 border-t border-white/10">
                        <span className="text-white/60 text-sm flex items-center gap-1">
                          <User size={14} /> {post.author}
                        </span>
                        <span className="text-white/60 text-sm flex items-center gap-1">
                          <Clock size={14} /> {post.readTime}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Pagination */}
              <div className="flex justify-center mt-10">
                <div className="flex items-center gap-2">
                  <a href="#" className="w-10 h-10 flex items-center justify-center rounded-md border border-amber-500/30 text-amber-500 hover:bg-amber-500/10 transition-colors">
                    <ArrowLeft size={16} />
                  </a>
                  <a href="#" className="w-10 h-10 flex items-center justify-center rounded-md bg-amber-500 text-black">1</a>
                  <a href="#" className="w-10 h-10 flex items-center justify-center rounded-md border border-amber-500/30 text-amber-500 hover:bg-amber-500/10 transition-colors">2</a>
                  <a href="#" className="w-10 h-10 flex items-center justify-center rounded-md border border-amber-500/30 text-amber-500 hover:bg-amber-500/10 transition-colors">3</a>
                  <a href="#" className="w-10 h-10 flex items-center justify-center rounded-md border border-amber-500/30 text-amber-500 hover:bg-amber-500/10 transition-colors">
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/4">
              {/* Search */}
              <div className="glass-card p-4 mb-6">
                <div className="relative">
                  <Input 
                    placeholder="Search articles..." 
                    className="pl-10 bg-black/50 border-amber-500/30 text-white placeholder:text-white/50 focus-visible:ring-amber-500"
                  />
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50" size={16} />
                </div>
              </div>
              
              {/* Categories */}
              <div className="glass-card p-5 mb-6">
                <h3 className="font-semibold mb-4 text-lg">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <a 
                        href="#" 
                        className={`block px-3 py-2 rounded-md text-sm transition-colors ${
                          category === "All" 
                            ? "bg-amber-500 text-black" 
                            : "text-white/70 hover:bg-amber-500/10 hover:text-white"
                        }`}
                      >
                        {category}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Newsletter */}
              <div className="glass-card p-5 mb-6">
                <h3 className="font-semibold mb-2 text-lg">Newsletter</h3>
                <p className="text-white/70 text-sm mb-4">
                  Subscribe to get the latest articles and updates.
                </p>
                <Input 
                  placeholder="Enter your email" 
                  className="mb-3 bg-black/50 border-amber-500/30 text-white placeholder:text-white/50 focus-visible:ring-amber-500"
                />
                <Button className="w-full bg-amber-500 hover:bg-amber-600 text-black">
                  Subscribe
                </Button>
              </div>
              
              {/* Recent Posts Sidebar */}
              <div className="glass-card p-5">
                <h3 className="font-semibold mb-4 text-lg">Popular Posts</h3>
                <ul className="space-y-4">
                  {BlogPosts.slice(0, 3).map((post, index) => (
                    <li key={index} className={index !== 0 ? "pt-4 border-t border-white/10" : ""}>
                      <a href="#" className="group">
                        <h4 className="font-medium text-white group-hover:text-amber-500 transition-colors">
                          {post.title}
                        </h4>
                        <div className="flex items-center gap-2 mt-1 text-xs text-white/60">
                          <Calendar size={12} />
                          <span>{post.date}</span>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
