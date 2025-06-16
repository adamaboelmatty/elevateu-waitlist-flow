
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
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Premium section header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full text-blue-700 text-sm font-medium mb-6">
              🚀 Core Features
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
              What You'll Get
            </h2>
            <p className="text-xl md:text-2xl text-slate-600 font-light max-w-2xl mx-auto">
              Everything you need to ace your SAT/ACT, powered by AI
            </p>
          </div>
          
          {/* Premium feature grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group relative p-8 rounded-3xl bg-gradient-to-br from-slate-50 to-white hover:from-purple-50 hover:to-blue-50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 border border-slate-100 hover:border-purple-200 hover:-translate-y-2"
              >
                {/* Elegant icon container */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-purple-900 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed font-light">
                  {feature.description}
                </p>
                
                {/* Subtle bottom accent */}
                <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
