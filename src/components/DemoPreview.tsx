
const DemoPreview = () => {
  const demoSteps = [
    "Build a quiz in seconds",
    "Get instant answers + explanations", 
    "Track your progress automatically",
    "Study smarter — not longer"
  ];

  return (
    <section className="py-20 sm:py-24 md:py-32 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Premium section header - mobile responsive */}
          <div className="text-center mb-16 sm:mb-20">
            <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-purple-50 rounded-full text-purple-700 text-sm font-medium mb-4 sm:mb-6">
              ✨ Product Demo
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 sm:mb-6 tracking-tight px-2 sm:px-0">
              See ElevateU in Action
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-slate-600 font-light max-w-2xl mx-auto px-2 sm:px-0">
              Watch how our AI transforms your study experience
            </p>
          </div>
          
          {/* Premium video container - mobile responsive */}
          <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-slate-700/50 mx-2 sm:mx-0">
            {/* Elegant video player */}
            <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 relative">
              {/* Sophisticated overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              
              {/* Central play button - mobile responsive */}
              <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-8">
                <div className="bg-white/10 backdrop-blur-xl rounded-xl sm:rounded-2xl p-8 sm:p-12 text-center border border-white/20 shadow-2xl max-w-sm sm:max-w-none">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer touch-manipulation">
                    <div className="w-0 h-0 border-l-[10px] sm:border-l-[12px] border-l-white border-y-[6px] sm:border-y-[8px] border-y-transparent ml-1"></div>
                  </div>
                  <p className="text-white text-lg sm:text-xl font-medium">Demo Preview</p>
                  <p className="text-white/70 text-sm mt-2">2:30 duration</p>
                </div>
              </div>
              
              {/* Floating step indicators - mobile responsive */}
              <div className="absolute inset-0 pointer-events-none hidden sm:block">
                {demoSteps.map((step, index) => (
                  <div
                    key={index}
                    className="absolute bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium shadow-2xl border border-white/20 backdrop-blur-sm animate-fade-in hover:scale-105 transition-transform duration-300"
                    style={{
                      top: `${15 + index * 18}%`,
                      left: `${8 + index * 22}%`,
                      animationDelay: `${index * 0.7}s`,
                    }}
                  >
                    <div className="flex items-center">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full mr-2 sm:mr-3"></div>
                      {step}
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile step indicators - shown only on mobile */}
              <div className="absolute bottom-4 left-4 right-4 sm:hidden">
                <div className="bg-black/40 backdrop-blur-sm rounded-lg p-3 space-y-2">
                  {demoSteps.map((step, index) => (
                    <div key={index} className="flex items-center text-white text-xs">
                      <div className="w-1.5 h-1.5 bg-white rounded-full mr-2"></div>
                      {step}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Elegant controls - mobile responsive */}
            <div className="bg-gradient-to-r from-slate-800 to-slate-900 px-4 sm:px-8 py-4 sm:py-6 flex items-center justify-between border-t border-slate-700/50">
              <div className="flex items-center space-x-3 sm:space-x-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200 cursor-pointer touch-manipulation">
                  <div className="w-0 h-0 border-l-[6px] sm:border-l-[8px] border-l-white border-y-[4px] sm:border-y-[5px] border-y-transparent ml-1"></div>
                </div>
                <div className="text-white font-medium text-sm sm:text-base">
                  0:45 / 2:30
                </div>
              </div>
              <div className="text-slate-400 text-xs sm:text-sm font-medium hidden sm:block">
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
