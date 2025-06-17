
import { ArrowRight } from "lucide-react";
import { EnhancedButton } from "@/components/ui/enhanced-button";
import { FloatingElement, PulsingDot, MagneticButton } from "@/components/ui/floating-elements";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { memo, useCallback } from "react";
import { useTextRotation } from "@/hooks/useTextRotation";
import { useTypewriter } from "@/hooks/useTypewriter";
import { useRotatingKeywords } from "@/hooks/useRotatingKeywords";

const Hero = memo(() => {
  const scrollToWaitlist = useCallback(() => {
    document.getElementById('waitlist')?.scrollIntoView({
      behavior: 'smooth'
    });
  }, []);

  const rotatingTexts = [
    "Smarter quizzes. Instant explanations. Frustration-free prep.",
    "Personalized practice. Real-time feedback. Score improvements.",
    "Adaptive learning. Expert insights. Confidence building.",
    "Interactive lessons. Progress tracking. Success guaranteed."
  ];

  const { currentText, isAnimating } = useTextRotation({
    texts: rotatingTexts,
    interval: 3500,
    initialDelay: 2000
  });

  // Rotating keywords for the main headline
  const keywords = ["Revolutionary", "Intelligent", "Adaptive", "Cutting-Edge"];
  const { currentKeyword, isAnimating: keywordAnimating } = useRotatingKeywords({
    keywords,
    interval: 2500,
    initialDelay: 500
  });

  // Typewriter effect for the gradient text
  const gradientText = "Built for Gen Z";
  const { displayText: typewriterText, isComplete } = useTypewriter({
    text: gradientText,
    delay: 1500,
    speed: 120
  });

  const studentAvatars = [
    {
      src: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop&crop=face",
      alt: "Student using laptop",
      fallback: "AS"
    },
    {
      src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=face",
      alt: "Student studying with laptop",
      fallback: "BS"
    },
    {
      src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=400&fit=crop&crop=face",
      alt: "Student in study group",
      fallback: "CS"
    },
    {
      src: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=400&fit=crop&crop=face",
      alt: "Student working at desk",
      fallback: "DS"
    },
    {
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      alt: "Student preparing for exam",
      fallback: "ES"
    }
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      {/* Enhanced background pattern with floating elements */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(147,51,234,0.01)_50%,transparent_75%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(147,51,234,0.03),transparent_50%)] pointer-events-none" />
      
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
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-bold text-slate-900 mb-6 sm:mb-8 leading-[0.9] tracking-tight animate-fade-in px-2 sm:px-0">
            <span className={`inline-block transition-all duration-300 ${
              keywordAnimating ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'
            }`}>
              {currentKeyword}
            </span>{" "}
            AI-Powered SAT/ACT Prep —{" "}
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent animate-[gradient_3s_ease-in-out_infinite] relative">
              {typewriterText}
              {!isComplete && (
                <span className="animate-pulse text-purple-600 ml-1">|</span>
              )}
            </span>
          </h1>
          
          <div className="h-20 sm:h-24 md:h-28 lg:h-32 flex items-center justify-center mb-12 sm:mb-16">
            <p className={`text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light px-2 sm:px-0 transition-all duration-300 ${
              isAnimating ? 'opacity-0 transform translate-y-2' : 'opacity-100 transform translate-y-0'
            }`}>
              {currentText}
            </p>
          </div>
          
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
          
          <div className="mt-12 sm:mt-16 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-slate-500 px-4 sm:px-0">
            <div className="flex -space-x-2 sm:-space-x-3">
              {studentAvatars.map((student, i) => (
                <Avatar 
                  key={i} 
                  className="w-8 h-8 sm:w-10 sm:h-10 border-2 border-white shadow-lg hover:scale-110 hover:z-10 transition-all duration-300 cursor-pointer"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <AvatarImage 
                    src={student.src} 
                    alt={student.alt}
                  />
                  <AvatarFallback className="bg-gradient-to-br from-purple-400 to-blue-500 text-white text-xs font-medium">
                    {student.fallback}
                  </AvatarFallback>
                </Avatar>
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
