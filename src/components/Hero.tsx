
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      {/* Elegant background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(147,51,234,0.01)_50%,transparent_75%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(147,51,234,0.03),transparent_50%)] pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 lg:py-40">
        <div className="max-w-5xl mx-auto text-center">
          {/* Premium badge */}
          <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-white/80 backdrop-blur-sm rounded-full text-purple-700 text-xs sm:text-sm font-medium mb-8 sm:mb-12 shadow-lg border border-purple-100 animate-fade-in">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-500 rounded-full mr-2 sm:mr-3 animate-pulse"></div>
            Now in Beta — Early Access Available
          </div>
          
          {/* Enhanced typography - mobile responsive */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-bold text-slate-900 mb-6 sm:mb-8 leading-[0.9] tracking-tight animate-fade-in px-2 sm:px-0">
            AI-Powered SAT/ACT Prep —{" "}
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Built for Gen Z
            </span>
          </h1>
          
          {/* Refined subheading - mobile responsive */}
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-600 mb-12 sm:mb-16 max-w-3xl mx-auto leading-relaxed font-light animate-fade-in px-2 sm:px-0">
            Smarter quizzes. Instant explanations. Frustration-free prep.
          </p>
          
          {/* Premium CTA - mobile optimized */}
          <div className="animate-fade-in px-4 sm:px-0">
            <Button 
              onClick={scrollToWaitlist} 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 sm:px-12 py-4 sm:py-6 text-lg sm:text-xl rounded-2xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 animate-fade-in group border-0 font-medium w-full sm:w-auto min-h-[56px] touch-manipulation"
            >
              👉 Join the Waitlist
              <ArrowRight className="ml-2 sm:ml-3 h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
          </div>
          
          {/* Elegant social proof - mobile responsive */}
          <div className="mt-12 sm:mt-16 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-slate-500 px-4 sm:px-0">
            <div className="flex -space-x-2 sm:-space-x-3">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full border-2 border-white shadow-lg"></div>
              ))}
            </div>
            <div className="text-sm font-medium text-center sm:text-left">
              Join 100+ students already on the waitlist
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
