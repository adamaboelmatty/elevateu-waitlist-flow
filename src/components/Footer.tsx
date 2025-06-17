
import { Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-8 py-16">
        {/* Main Content */}
        <div className="flex flex-col items-center space-y-8">
          {/* Logo */}
          <div className="flex flex-col items-center space-y-3">
            <img 
              src="/lovable-uploads/cf040f7e-22cd-4e8d-8658-9a1db1f0756d.png" 
              alt="ElevateU Logo" 
              className="h-10 w-auto"
            />
            <h3 className="text-xl font-semibold text-gray-900">
              ElevateU
            </h3>
          </div>

          {/* Tagline */}
          <p className="text-gray-600 text-center font-light">
            AI-Powered SAT/ACT Prep Built for Gen Z
          </p>

          {/* Social Links */}
          <div className="flex space-x-6">
            <a
              href="https://www.instagram.com/elevateu.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 text-gray-600 hover:bg-pink-50 hover:text-pink-600 transition-all duration-200"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://x.com/elevateuapp"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200"
            >
              <Twitter size={18} />
            </a>
            <a
              href="https://www.tiktok.com/@elevateuapp"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-all duration-200"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                <path d="M19.321 5.562a5.124 5.124 0 0 1-.443-.258 6.228 6.228 0 0 1-1.137-.966c-.849-.849-1.169-1.946-1.169-3.338h-3.097v13.317c0 .931-.754 1.685-1.685 1.685s-1.685-.754-1.685-1.685.754-1.685 1.685-1.685c.154 0 .303.021.443.058V9.592c-.14-.017-.283-.025-.443-.025C8.57 9.567 6 12.137 6 15.317S8.57 21.067 11.79 21.067s5.79-2.57 5.79-5.75V9.854a9.344 9.344 0 0 0 4.42 1.129V7.886c0-.012 0-.023-.002-.035a6.312 6.312 0 0 1-2.677-2.289z"/>
              </svg>
            </a>
          </div>

          {/* Contact */}
          <p className="text-gray-500 text-sm">
            <a 
              href="mailto:hello@elevateu.app" 
              className="hover:text-gray-700 transition-colors duration-200"
            >
              hello@elevateu.app
            </a>
          </p>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-500">
          <p>© 2024 ElevateU. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="hover:text-gray-700 transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="hover:text-gray-700 transition-colors duration-200">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
