
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
      
      <div className="container mx-auto px-4 py-24 lg:py-40">
        <div className="max-w-5xl mx-auto text-center">
          {/* Premium badge */}
          <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full text-purple-700 text-sm font-medium mb-12 shadow-lg border border-purple-100 animate-fade-in">
            <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 animate-pulse"></div>
            Now in Beta — Early Access Available
          </div>
          
          {/* Enhanced typography */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-slate-900 mb-8 leading-[0.9] tracking-tight animate-fade-in">
            AI-Powered SAT/ACT Prep —{" "}
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Built for Gen Z
            </span>
          </h1>
          
          {/* Refined subheading */}
          <p className="text-xl md:text-2xl lg:text-3xl text-slate-600 mb-16 max-w-3xl mx-auto leading-relaxed font-light animate-fade-in">
            Smarter quizzes. Instant explanations. Frustration-free prep.
          </p>
          
          {/* Premium CTA */}
          <div className="animate-fade-in">
            <Button 
              onClick={scrollToWaitlist} 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-12 py-6 text-xl rounded-2xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 animate-fade-in group border-0 font-medium"
            >
              👉 Join the Waitlist
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
          </div>
          
          {/* Elegant social proof */}
          <div className="mt-16 flex items-center justify-center space-x-8 text-slate-500">
            <div className="flex -space-x-3">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-10 h-10 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full border-2 border-white shadow-lg"></div>
              ))}
            </div>
            <div className="text-sm font-medium">
              Join 100+ students already on the waitlist
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
