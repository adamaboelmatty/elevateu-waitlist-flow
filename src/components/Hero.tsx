
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-white">
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(147,51,234,0.02)_50%,transparent_75%)] pointer-events-none" />
      
      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-purple-50 rounded-full text-purple-700 text-sm font-medium mb-8 animate-fade-in">
            ✨ Now in Beta — Early Access Available
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight animate-fade-in">
            AI-Powered SAT/ACT Prep —{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Built for Gen Z
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in">
            Smarter quizzes. Instant explanations. Frustration-free prep.
          </p>
          
          <Button 
            onClick={scrollToWaitlist}
            size="lg" 
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in group"
          >
            👉 Join the Waitlist
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <div className="mt-12 text-sm text-slate-500">
            Join 10,000+ students already on the waitlist
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
