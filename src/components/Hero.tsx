
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-purple-50/30">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),transparent)] pointer-events-none" />
      
      <div className="container mx-auto px-4 py-24 lg:py-40">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[0.9]">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              AI-Powered
            </span>
            <br />
            <span className="text-slate-900">
              SAT/ACT Prep
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 mb-4 font-medium">
            10x Faster, Smarter, Simpler.
          </p>
          
          <p className="text-lg text-slate-500 mb-12 max-w-2xl mx-auto">
            Join the early testers shaping the future of test prep.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button 
              onClick={scrollToWaitlist} 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              Apply for Early Access
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 border-2 border-white"></div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 border-2 border-white"></div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 border-2 border-white"></div>
              </div>
              <span className="text-slate-500 text-sm">127 students already applied</span>
            </div>
          </div>
          
          <div className="mt-16">
            <div className="w-6 h-6 mx-auto text-slate-400 animate-bounce">
              ↓
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
