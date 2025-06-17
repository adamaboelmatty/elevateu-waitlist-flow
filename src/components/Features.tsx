
import { Zap, Brain, Target, TrendingUp } from "lucide-react";
import { memo } from "react";

const Features = memo(() => {
  const features = [
    {
      icon: Zap,
      title: "Custom Quiz Generator",
      description: "Generate SAT/ACT quizzes instantly with AI precision.",
      alt: "Lightning bolt icon representing fast AI-powered quiz generation"
    },
    {
      icon: Brain,
      title: "Built-In Explanations", 
      description: "Understand the why behind every answer, not just the what.",
      alt: "Brain icon representing intelligent explanations and learning"
    },
    {
      icon: Target,
      title: "Hyper-Personalized Practice",
      description: "Smart learning engine that adapts to your unique needs.",
      alt: "Target icon representing personalized and focused practice sessions"
    },
    {
      icon: TrendingUp,
      title: "Track Your Growth",
      description: "Know exactly where you stand with detailed analytics.",
      alt: "Trending up icon representing progress tracking and score improvement"
    }
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-white" aria-labelledby="features-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Premium section header - mobile responsive */}
          <header className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-blue-50 rounded-full text-blue-700 text-sm font-medium mb-4 sm:mb-6" role="banner">
              🚀 Core Features
            </div>
            <h2 id="features-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-4 sm:mb-6 tracking-tight px-2 sm:px-0">
              What You'll Get with AI-Powered SAT/ACT Prep
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 font-light max-w-2xl mx-auto px-2 sm:px-0">
              Everything you need to ace your standardized tests, powered by artificial intelligence
            </p>
          </header>
          
          {/* Premium feature grid - mobile responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8" role="list">
            {features.map((feature, index) => (
              <article 
                key={index}
                className="group relative p-5 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-slate-50 to-white hover:from-purple-50 hover:to-blue-50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 border border-slate-100 hover:border-purple-200 hover:-translate-y-1 sm:hover:-translate-y-2 touch-manipulation will-change-transform"
                role="listitem"
              >
                {/* Elegant icon container - mobile responsive */}
                <div className="relative mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg will-change-transform" aria-hidden="true">
                    <feature.icon className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-white" aria-label={feature.alt} />
                  </div>
                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl sm:rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" aria-hidden="true"></div>
                </div>
                
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-slate-900 mb-3 sm:mb-4 group-hover:text-purple-900 transition-colors duration-300 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed font-light text-sm sm:text-base">
                  {feature.description}
                </p>
                
                {/* Subtle bottom accent */}
                <div className="absolute bottom-0 left-5 right-5 sm:left-6 sm:right-6 lg:left-8 lg:right-8 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true"></div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

Features.displayName = "Features";

export default Features;
