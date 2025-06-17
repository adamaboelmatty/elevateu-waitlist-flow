import { Instagram, Twitter } from "lucide-react";
const Footer = () => {
  return <footer className="relative bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-8 py-12">
        {/* Single row layout for desktop, stacked for mobile */}
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          {/* Left: Logo and tagline */}
          <div className="flex items-center space-x-4">
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900">ElevateU</h3>
              <p className="text-sm text-gray-600 font-light">AI-Powered SAT/ACT Prep Built for Gen Z</p>
            </div>
          </div>

          {/* Center: Social links */}
          <div className="flex items-center space-x-4">
            <a href="https://www.instagram.com/elevateu.app/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-50 text-gray-600 hover:bg-pink-50 hover:text-pink-600 transition-all duration-200">
              <Instagram size={16} />
            </a>
            <a href="https://x.com/elevateuapp" target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-50 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200">
              <Twitter size={16} />
            </a>
            <a href="https://www.tiktok.com/@elevateuapp" target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-all duration-200">
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                <path d="M19.321 5.562a5.124 5.124 0 0 1-.443-.258 6.228 6.228 0 0 1-1.137-.966c-.849-.849-1.169-1.946-1.169-3.338h-3.097v13.317c0 .931-.754 1.685-1.685 1.685s-1.685-.754-1.685-1.685.754-1.685 1.685-1.685c.154 0 .303.021.443.058V9.592c-.14-.017-.283-.025-.443-.025C8.57 9.567 6 12.137 6 15.317S8.57 21.067 11.79 21.067s5.79-2.57 5.79-5.75V9.854a9.344 9.344 0 0 0 4.42 1.129V7.886c0-.012 0-.023-.002-.035a6.312 6.312 0 0 1-2.677-2.289z" />
              </svg>
            </a>
          </div>

          {/* Right: Contact and legal */}
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-500">
            <a href="mailto:hello@elevateu.app" className="hover:text-gray-700 transition-colors duration-200">
              hello@elevateu.app
            </a>
            <div className="flex items-center space-x-4">
              <a href="#" className="hover:text-gray-700 transition-colors duration-200">Privacy</a>
              <a href="#" className="hover:text-gray-700 transition-colors duration-200">Terms</a>
            </div>
          </div>
        </div>

        {/* Bottom row: Copyright */}
        <div className="mt-8 pt-6 border-t border-gray-100 text-center">
          <p className="text-sm text-gray-500">© 2025 ElevateU. All rights reserved.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;