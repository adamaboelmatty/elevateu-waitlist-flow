
const DemoPreview = () => {
  const demoSteps = [
    "Build a quiz in seconds",
    "Get instant answers + explanations", 
    "Track your progress automatically",
    "Study smarter — not longer"
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Premium section header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-purple-50 rounded-full text-purple-700 text-sm font-medium mb-6">
              ✨ Product Demo
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
              See ElevateU in Action
            </h2>
            <p className="text-xl md:text-2xl text-slate-600 font-light max-w-2xl mx-auto">
              Watch how our AI transforms your study experience
            </p>
          </div>
          
          {/* Premium video container */}
          <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-700/50">
            {/* Elegant video player */}
            <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 relative">
              {/* Sophisticated overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              
              {/* Central play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-12 text-center border border-white/20 shadow-2xl">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer">
                    <div className="w-0 h-0 border-l-[12px] border-l-white border-y-[8px] border-y-transparent ml-1"></div>
                  </div>
                  <p className="text-white text-xl font-medium">Demo Preview</p>
                  <p className="text-white/70 text-sm mt-2">2:30 duration</p>
                </div>
              </div>
              
              {/* Floating step indicators */}
              <div className="absolute inset-0 pointer-events-none">
                {demoSteps.map((step, index) => (
                  <div
                    key={index}
                    className="absolute bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-xl text-sm font-medium shadow-2xl border border-white/20 backdrop-blur-sm animate-fade-in hover:scale-105 transition-transform duration-300"
                    style={{
                      top: `${15 + index * 18}%`,
                      left: `${8 + index * 22}%`,
                      animationDelay: `${index * 0.7}s`,
                    }}
                  >
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      {step}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Elegant controls */}
            <div className="bg-gradient-to-r from-slate-800 to-slate-900 px-8 py-6 flex items-center justify-between border-t border-slate-700/50">
              <div className="flex items-center space-x-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200 cursor-pointer">
                  <div className="w-0 h-0 border-l-[8px] border-l-white border-y-[5px] border-y-transparent ml-1"></div>
                </div>
                <div className="text-white font-medium">
                  0:45 / 2:30
                </div>
              </div>
              <div className="text-slate-400 text-sm font-medium">
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
