
import { CheckCircle, Sparkles } from "lucide-react";

const WaitlistFormSuccess = () => {
  return (
    <section id="waitlist" className="py-20 sm:py-24 md:py-32 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Enhanced success animation */}
          <div className="relative mb-8 sm:mb-12">
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto shadow-2xl animate-[bounce_1s_ease-in-out_3]">
              <CheckCircle className="h-10 w-10 sm:h-12 sm:w-12 text-white animate-[spin_0.5s_ease-in-out]" />
            </div>
            <div className="absolute inset-0 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full blur-xl opacity-30 mx-auto animate-pulse"></div>
            
            {/* Floating celebration elements */}
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-[float_2s_ease-in-out_infinite] text-2xl"
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${10 + (i % 2) * 20}%`,
                  animationDelay: `${i * 0.3}s`
                }}
              >
                {['🎉', '✨', '🚀', '⭐', '🎊', '💫'][i]}
              </div>
            ))}
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 sm:mb-6 tracking-tight px-2 sm:px-0">
            You're In! 🎉
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-slate-600 mb-8 sm:mb-12 font-light max-w-2xl mx-auto px-2 sm:px-0">
            Welcome to the ElevateU waitlist. We'll send you early access as soon as it's ready.
          </p>
          
          {/* Premium success card - mobile responsive */}
          <div className="bg-white/80 backdrop-blur-sm p-6 sm:p-10 rounded-2xl sm:rounded-3xl shadow-2xl border border-white/50 max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-4 sm:mb-6">
              <Sparkles className="h-6 w-6 sm:h-8 sm:w-8 text-purple-600 mr-2 sm:mr-3" />
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">What's Next?</h3>
            </div>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
              Keep an eye on your inbox for <strong>exclusive updates</strong>, study tips, and your <strong>early access invitation</strong>. You're among the first 100 students to join!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaitlistFormSuccess;
