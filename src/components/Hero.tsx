
import { ArrowRight } from "lucide-react";
import { EnhancedButton } from "@/components/ui/enhanced-button";
import { FloatingElement, PulsingDot, MagneticButton } from "@/components/ui/floating-elements";
import { memo, useCallback } from "react";

const Hero = memo(() => {
  const scrollToWaitlist = useCallback(() => {
    document.getElementById('waitlist')?.scrollIntoView({
      behavior: 'smooth'
    });
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      {/* Enhanced background pattern with floating elements */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(147,51,234,0.01)_50%,transparent_75%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(147,51,234,0.03),transparent_50%)] pointer-events-none" />
      
      {/* Floating decorative elements */}
      <FloatingElement className="absolute top-20 left-10 opacity-30" delay={0}>
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-400 to-blue-500 blur-xl" />
      </FloatingElement>
      <FloatingElement className="absolute top-40 right-20 opacity-20" delay={2}>
        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 blur-2xl" />
      </FloatingElement>
      <FloatingElement className="absolute bottom-20 left-1/4 opacity-25" delay={4}>
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 blur-lg" />
      </FloatingElement>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 lg:py-40">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          {/* Premium badge with enhanced animation */}
          <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-white/80 backdrop-blur-sm rounded-full text-purple-700 text-xs sm:text-sm font-medium mb-8 sm:mb-12 shadow-lg border border-purple-100 animate-fade-in hover:scale-105 transition-all duration-300 cursor-pointer group">
            <PulsingDot className="mr-2 sm:mr-3" size="sm" />
            <span className="group-hover:text-purple-800 transition-colors">Now in Beta — Early Access Available</span>
          </div>
          
          {/* Enhanced typography - mobile responsive */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-bold text-slate-900 mb-6 sm:mb-8 leading-[0.9] tracking-tight animate-fade-in px-2 sm:px-0">
            AI-Powered SAT/ACT Prep —{" "}
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent animate-[gradient_3s_ease-in-out_infinite]">
              Built for Gen Z
            </span>
          </h1>
          
          {/* Refined subheading - mobile responsive */}
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-600 mb-12 sm:mb-16 max-w-3xl mx-auto leading-relaxed font-light animate-fade-in px-2 sm:px-0">
            Smarter quizzes. Instant explanations. Frustration-free prep.
          </p>
          
          {/* Enhanced CTA with magnetic effect - mobile optimized */}
          <div className="animate-fade-in px-4 sm:px-0">
            <MagneticButton>
              <EnhancedButton 
                onClick={scrollToWaitlist} 
                variant="gradient"
                size="xl"
                className="w-full sm:w-auto min-h-[56px] group"
                ripple={true}
              >
                <span className="hidden sm:inline">👉 Join the Waitlist</span>
                <span className="sm:hidden">👉 Join Waitlist</span>
                <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-x-2 transition-transform duration-300 flex-shrink-0" />
              </EnhancedButton>
            </MagneticButton>
          </div>
          
          {/* Enhanced social proof - mobile responsive */}
          <div className="mt-12 sm:mt-16 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-slate-500 px-4 sm:px-0">
            <div className="flex -space-x-2 sm:-space-x-3">
              {[...Array(5)].map((_, i) => (
                <div 
                  key={i} 
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full border-2 border-white shadow-lg hover:scale-110 hover:z-10 transition-all duration-300 cursor-pointer"
                  style={{ animationDelay: `${i * 0.1}s` }}
                />
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
});

Hero.displayName = "Hero";

export default Hero;
