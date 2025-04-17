
import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const Terms: React.FC = () => {
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
              <FileText className="text-amber-500" size={28} />
              <h1 className="text-3xl md:text-4xl font-bold">Terms of Service</h1>
            </div>
            <p className="text-white/70 max-w-3xl">
              Last updated: April 15, 2025
            </p>
          </div>
          
          <div className="glass-card p-8 mb-10">
            <div className="prose prose-invert max-w-none">
              <p className="text-white/80 mb-6">
                These Terms of Service ("Terms") govern your access to and use of Project A_N_D's website, mobile applications, products, and services. By accessing or using our services, you agree to be bound by these Terms.
              </p>
              
              <h2 className="text-xl font-bold text-amber-500 mt-8 mb-4">1. Acceptance of Terms</h2>
              <p className="text-white/80 mb-6">
                By accessing or using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use our services.
              </p>
              
              <h2 className="text-xl font-bold text-amber-500 mt-8 mb-4">2. Description of Services</h2>
              <p className="text-white/80 mb-4">
                Project A_N_D provides emergency medical response drone technology and related services, including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-white/80 mb-6">
                <li>Emergency medical drone deployment and operation</li>
                <li>Remote medical consultation via drone interface</li>
                <li>Medical supply delivery</li>
                <li>Health monitoring and diagnostic services</li>
                <li>Emergency response coordination</li>
                <li>Information and educational resources</li>
              </ul>
              
              <h2 className="text-xl font-bold text-amber-500 mt-8 mb-4">3. User Accounts</h2>
              <p className="text-white/80 mb-4">
                To access certain features of our services, you may be required to create an account. When creating an account, you agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-white/80 mb-6">
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Notify us immediately of any unauthorized use of your account</li>
                <li>Accept responsibility for all activities that occur under your account</li>
              </ul>
              
              <h2 className="text-xl font-bold text-amber-500 mt-8 mb-4">4. Medical Disclaimer</h2>
              <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-lg mb-6">
                <p className="text-white/80 text-sm leading-relaxed">
                  <strong className="text-amber-500">IMPORTANT:</strong> Project A_N_D services are designed to provide emergency medical response and are not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of qualified healthcare providers for any medical conditions. In case of a medical emergency, contact emergency services (911 in the US or appropriate emergency number in your region) immediately.
                </p>
              </div>
              
              <h2 className="text-xl font-bold text-amber-500 mt-8 mb-4">5. User Conduct</h2>
              <p className="text-white/80 mb-4">
                When using our services, you agree not to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-white/80 mb-6">
                <li>Use the services for any illegal purpose</li>
                <li>Interfere with or disrupt the services or servers or networks connected to the services</li>
                <li>Attempt to gain unauthorized access to any part of the services</li>
                <li>Impersonate any person or entity</li>
                <li>Make false emergency reports or requests</li>
                <li>Transmit harmful code or content</li>
                <li>Use our services to harass, abuse, or harm another person</li>
              </ul>
              
              <h2 className="text-xl font-bold text-amber-500 mt-8 mb-4">6. Intellectual Property Rights</h2>
              <p className="text-white/80 mb-6">
                All content, features, and functionality of our services, including but not limited to text, graphics, logos, button icons, images, audio clips, data compilations, and software, are owned by Project A_N_D or our licensors and are protected by copyright, trademark, and other intellectual property laws.
              </p>
              
              <h2 className="text-xl font-bold text-amber-500 mt-8 mb-4">7. Limitation of Liability</h2>
              <p className="text-white/80 mb-6">
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, PROJECT A_N_D SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICES.
              </p>
              
              <h2 className="text-xl font-bold text-amber-500 mt-8 mb-4">8. Indemnification</h2>
              <p className="text-white/80 mb-6">
                You agree to defend, indemnify, and hold harmless Project A_N_D and our officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses, including without limitation reasonable attorney's fees and costs, arising out of or in any way connected with your access to or use of the services or your violation of these Terms.
              </p>
              
              <h2 className="text-xl font-bold text-amber-500 mt-8 mb-4">9. Termination</h2>
              <p className="text-white/80 mb-6">
                We may terminate or suspend your access to the services immediately, without prior notice or liability, for any reason, including without limitation if you breach these Terms. Upon termination, your right to use the services will immediately cease.
              </p>
              
              <h2 className="text-xl font-bold text-amber-500 mt-8 mb-4">10. Changes to Terms</h2>
              <p className="text-white/80 mb-6">
                We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
              </p>
              
              <h2 className="text-xl font-bold text-amber-500 mt-8 mb-4">11. Governing Law</h2>
              <p className="text-white/80 mb-6">
                These Terms shall be governed and construed in accordance with the laws of [Jurisdiction], without regard to its conflict of law provisions.
              </p>
              
              <h2 className="text-xl font-bold text-amber-500 mt-8 mb-4">12. Contact Us</h2>
              <p className="text-white/80 mb-4">
                If you have any questions about these Terms, please contact us at:
              </p>
              <div className="p-4 bg-white/5 rounded-lg">
                <p className="text-white mb-1">Project A_N_D Legal Department</p>
                <p className="text-white/80 text-sm">Email: legal@project-and.com</p>
                <p className="text-white/80 text-sm">Phone: +1 (555) 123-4567</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Terms;
