
import { Zap, Brain, Target, TrendingUp } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "Custom Quiz Generator",
      description: "Generate SAT/ACT quizzes instantly with AI precision."
    },
    {
      icon: Brain,
      title: "Built-In Explanations", 
      description: "Understand the why behind every answer, not just the what."
    },
    {
      icon: Target,
      title: "Hyper-Personalized Practice",
      description: "Smart learning engine that adapts to your unique needs."
    },
    {
      icon: TrendingUp,
      title: "Track Your Growth",
      description: "Know exactly where you stand with detailed analytics."
    }
  ];

  return (
    <section className="py-20 sm:py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Premium section header - mobile responsive */}
          <div className="text-center mb-16 sm:mb-20">
            <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-blue-50 rounded-full text-blue-700 text-sm font-medium mb-4 sm:mb-6">
              🚀 Core Features
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 sm:mb-6 tracking-tight px-2 sm:px-0">
              What You'll Get
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-slate-600 font-light max-w-2xl mx-auto px-2 sm:px-0">
              Everything you need to ace your SAT/ACT, powered by AI
            </p>
          </div>
          
          {/* Premium feature grid - mobile responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group relative p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-50 to-white hover:from-purple-50 hover:to-blue-50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 border border-slate-100 hover:border-purple-200 hover:-translate-y-2 touch-manipulation"
              >
                {/* Elegant icon container - mobile responsive */}
                <div className="relative mb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                    <feature.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 sm:mb-4 group-hover:text-purple-900 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed font-light text-sm sm:text-base">
                  {feature.description}
                </p>
                
                {/* Subtle bottom accent */}
                <div className="absolute bottom-0 left-6 right-6 sm:left-8 sm:right-8 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
