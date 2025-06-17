
import { Instagram, Twitter } from "lucide-react";
import { FloatingElement } from "@/components/ui/floating-elements";

const Footer = () => {
  const socialLinks = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/elevateu.app/",
      icon: Instagram,
      color: "hover:text-pink-500"
    },
    {
      name: "X (Twitter)",
      url: "https://x.com/elevateuapp",
      icon: Twitter,
      color: "hover:text-blue-400"
    },
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@elevateuapp",
      icon: () => (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
          <path d="M19.321 5.562a5.124 5.124 0 0 1-.443-.258 6.228 6.228 0 0 1-1.137-.966c-.849-.849-1.169-1.946-1.169-3.338h-3.097v13.317c0 .931-.754 1.685-1.685 1.685s-1.685-.754-1.685-1.685.754-1.685 1.685-1.685c.154 0 .303.021.443.058V9.592c-.14-.017-.283-.025-.443-.025C8.57 9.567 6 12.137 6 15.317S8.57 21.067 11.79 21.067s5.79-2.57 5.79-5.75V9.854a9.344 9.344 0 0 0 4.42 1.129V7.886c0-.012 0-.023-.002-.035a6.312 6.312 0 0 1-2.677-2.289z"/>
        </svg>
      ),
      color: "hover:text-gray-900"
    }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50/30 border-t border-purple-100/20">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(147,51,234,0.01)_50%,transparent_75%)] pointer-events-none" />
      
      <FloatingElement className="absolute top-10 left-10 opacity-20" delay={0}>
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-blue-500 blur-xl" />
      </FloatingElement>
      <FloatingElement className="absolute bottom-10 right-20 opacity-15" delay={2}>
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 blur-2xl" />
      </FloatingElement>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto">
          {/* Main footer content */}
          <div className="flex flex-col items-center space-y-8">
            {/* Logo */}
            <div className="flex flex-col items-center space-y-4">
              <img 
                src="/lovable-uploads/cf040f7e-22cd-4e8d-8658-9a1db1f0756d.png" 
                alt="ElevateU Logo" 
                className="h-12 w-auto hover:scale-105 transition-transform duration-300"
              />
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                ElevateU
              </h3>
            </div>

            {/* Tagline */}
            <p className="text-slate-600 text-center max-w-md text-lg font-light">
              AI-Powered SAT/ACT Prep Built for Gen Z
            </p>

            {/* Social Media Links */}
            <div className="flex items-center space-x-6">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-full bg-white/80 backdrop-blur-sm border border-purple-100 text-slate-600 ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg hover:bg-white group`}
                    aria-label={`Follow us on ${social.name}`}
                  >
                    <IconComponent />
                  </a>
                );
              })}
            </div>

            {/* Contact info */}
            <div className="text-center space-y-2">
              <p className="text-slate-500 text-sm">
                Questions? Reach out to us at{" "}
                <a 
                  href="mailto:hello@elevateu.app" 
                  className="text-purple-600 hover:text-purple-700 transition-colors underline underline-offset-2"
                >
                  hello@elevateu.app
                </a>
              </p>
            </div>
          </div>

          {/* Bottom section */}
          <div className="mt-12 pt-8 border-t border-purple-100/30 flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
            <p className="text-slate-500 text-sm">
              © 2024 ElevateU. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm text-slate-500">
              <a href="#" className="hover:text-purple-600 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-purple-600 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
