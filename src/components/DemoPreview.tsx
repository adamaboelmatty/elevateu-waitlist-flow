
const DemoPreview = () => {
  const demoSteps = [
    "Build a quiz in seconds",
    "Get instant answers + explanations",
    "Track your progress automatically",
    "Study smarter — not longer"
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              See ElevateU in Action
            </h2>
            <p className="text-xl text-slate-600">
              Watch how our AI transforms your study experience
            </p>
          </div>
          
          <div className="relative bg-slate-900 rounded-2xl overflow-hidden shadow-2xl">
            {/* Mock video player */}
            <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 relative">
              {/* Video placeholder with animated elements */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center">
                  <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-0 h-0 border-l-[8px] border-l-white border-y-[6px] border-y-transparent ml-1"></div>
                  </div>
                  <p className="text-white text-lg font-medium">Demo Preview</p>
                </div>
              </div>
              
              {/* Animated overlay steps */}
              <div className="absolute inset-0">
                {demoSteps.map((step, index) => (
                  <div
                    key={index}
                    className={`absolute bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-lg animate-fade-in`}
                    style={{
                      top: `${20 + index * 15}%`,
                      left: `${10 + index * 20}%`,
                      animationDelay: `${index * 0.5}s`,
                    }}
                  >
                    {step}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Video controls mockup */}
            <div className="bg-slate-800 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                  <div className="w-0 h-0 border-l-[6px] border-l-white border-y-[4px] border-y-transparent ml-0.5"></div>
                </div>
                <div className="text-white text-sm">
                  0:45 / 2:30
                </div>
              </div>
              <div className="text-slate-400 text-sm">
                Silent autoplay • Click to unmute
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoPreview;
