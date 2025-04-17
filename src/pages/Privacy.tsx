
import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft, Shield, Lock, Eye } from "lucide-react";
import { Link } from "react-router-dom";

const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <Link to="/" className="text-amber-500 hover:text-amber-400 transition-colors flex items-center gap-2 mb-4">
              <ArrowLeft size={16} /> Back to Home
            </Link>
            <div className="flex items-center gap-3 mb-2">
              <Shield className="text-amber-500" size={28} />
              <h1 className="text-3xl md:text-4xl font-bold">Privacy Policy</h1>
            </div>
            <p className="text-white/70 max-w-3xl">
              Last updated: April 15, 2025
            </p>
          </div>
          
          <div className="glass-card p-8 mb-10">
            <div className="prose prose-invert max-w-none">
              <p className="text-white/80 mb-6">
                At Project A_N_D, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you interact with our website, mobile application, products, or services.
              </p>
              
              <h2 className="text-xl font-bold text-amber-500 mt-8 mb-4">Information We Collect</h2>
              
              <h3 className="font-semibold mb-2">Personal Information</h3>
              <p className="text-white/80 mb-4">
                We may collect personal information that you voluntarily provide when interacting with our services, including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-white/80 mb-6">
                <li>Name, email address, phone number, and contact details</li>
                <li>Account credentials (username and password)</li>
                <li>Billing and payment information</li>
                <li>Professional credentials for medical personnel</li>
                <li>Location data when using our emergency services</li>
                <li>Health information shared during emergency situations</li>
              </ul>
              
              <h3 className="font-semibold mb-2">Usage Data</h3>
              <p className="text-white/80 mb-4">
                We automatically collect certain information when you visit, use, or navigate our platforms:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-white/80 mb-6">
                <li>Device and browser information</li>
                <li>IP address and geographic location</li>
                <li>Usage patterns and interaction with our services</li>
                <li>System logs and performance data</li>
              </ul>
              
              <h2 className="text-xl font-bold text-amber-500 mt-8 mb-4">How We Use Your Information</h2>
              <p className="text-white/80 mb-4">
                We use the information we collect for various purposes, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-white/80 mb-6">
                <li>Providing, operating, and maintaining our services</li>
                <li>Coordinating emergency medical responses</li>
                <li>Improving and personalizing user experience</li>
                <li>Processing payments and transactions</li>
                <li>Communicating with you about updates, security alerts, and support</li>
                <li>Analyzing usage patterns and optimizing our services</li>
                <li>Protecting our services and preventing fraud</li>
                <li>Complying with legal obligations</li>
              </ul>
              
              <h2 className="text-xl font-bold text-amber-500 mt-8 mb-4">Medical Data Privacy</h2>
              <p className="text-white/80 mb-6">
                For users in the United States, any protected health information collected during emergency services is handled in compliance with the Health Insurance Portability and Accountability Act (HIPAA). For users in the European Union, we comply with GDPR requirements for health data processing.
              </p>
              
              <div className="flex items-start gap-4 p-4 bg-amber-500/10 border border-amber-500/20 rounded-lg mb-6">
                <div className="mt-1">
                  <Lock size={24} className="text-amber-500" />
                </div>
                <div>
                  <h4 className="font-semibold">Medical Data Security</h4>
                  <p className="text-white/80 text-sm">
                    All medical data transmitted via our drones or stored in our systems is end-to-end encrypted and accessible only to authorized medical personnel. We maintain strict access controls and audit logs for all medical information access.
                  </p>
                </div>
              </div>
              
              <h2 className="text-xl font-bold text-amber-500 mt-8 mb-4">Sharing Your Information</h2>
              <p className="text-white/80 mb-4">
                We may share your information with:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-white/80 mb-6">
                <li>Medical professionals and emergency services directly involved in your care</li>
                <li>Service providers who perform services on our behalf</li>
                <li>Law enforcement or other authorities when required by law</li>
                <li>Business partners with your explicit consent</li>
              </ul>
              
              <h2 className="text-xl font-bold text-amber-500 mt-8 mb-4">Data Retention and Deletion</h2>
              <p className="text-white/80 mb-6">
                We retain your data only as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law. You can request deletion of your personal information by contacting our privacy team.
              </p>
              
              <h2 className="text-xl font-bold text-amber-500 mt-8 mb-4">Your Privacy Rights</h2>
              <p className="text-white/80 mb-4">
                Depending on your location, you may have the following rights:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-white/80 mb-6">
                <li>Access to your personal information</li>
                <li>Correction of inaccurate data</li>
                <li>Deletion of your personal information</li>
                <li>Restriction of processing</li>
                <li>Data portability</li>
                <li>Objection to processing</li>
                <li>Withdrawal of consent</li>
              </ul>
              
              <h2 className="text-xl font-bold text-amber-500 mt-8 mb-4">Contact Us</h2>
              <p className="text-white/80 mb-4">
                If you have questions or concerns about this Privacy Policy or our data practices, please contact our Privacy Officer:
              </p>
              <div className="p-4 bg-white/5 rounded-lg">
                <p className="text-white mb-1">Privacy Officer</p>
                <p className="text-white/80 text-sm">Project A_N_D</p>
                <p className="text-white/80 text-sm">Email: privacy@project-and.com</p>
                <p className="text-white/80 text-sm">Phone: +1 (555) 123-4567</p>
              </div>
            </div>
          </div>
          
          <div className="glass-card p-6 text-center">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-amber-500/20 flex items-center justify-center">
                <Eye className="text-amber-500" size={24} />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2">Privacy Commitment</h3>
            <p className="text-white/80 max-w-2xl mx-auto">
              Project A_N_D is committed to maintaining the highest standards of data privacy and security. 
              We regularly review and update our practices to ensure your information remains protected.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Privacy;
