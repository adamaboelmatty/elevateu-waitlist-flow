
import { Zap, Brain, Target, TrendingUp } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "Custom Quiz Generator",
      description: "Generate SAT/ACT quizzes instantly."
    },
    {
      icon: Brain,
      title: "Built-In Explanations",
      description: "Understand why — not just what."
    },
    {
      icon: Target,
      title: "Hyper-Personalized Practice",
      description: "Smart learning engine that adapts to you."
    },
    {
      icon: TrendingUp,
      title: "Track Your Growth",
      description: "Know exactly where you stand, every day."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              What You'll Get
            </h2>
            <p className="text-xl text-slate-600">
              Everything you need to ace your SAT/ACT
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group p-6 rounded-2xl bg-slate-50 hover:bg-gradient-to-br hover:from-purple-50 hover:to-blue-50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
