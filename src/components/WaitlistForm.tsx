import { useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { ArrowRight, CheckCircle, Sparkles } from "lucide-react";
import { useWaitlistForm } from "@/hooks/useWaitlistForm";

const WaitlistForm = () => {
  const { state, updateField, setLoading, setSubmitted } = useWaitlistForm();

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setSubmitted(true);
    setLoading(false);
    toast.success("Welcome to the waitlist! We'll be in touch soon.");
  }, [setLoading, setSubmitted]);

  const handleInputChange = useCallback((field: string, value: string) => {
    updateField(field as any, value);
  }, [updateField]);

  if (state.isSubmitted) {
    return (
      <section id="waitlist" className="py-20 sm:py-24 md:py-32 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            {/* Success animation - mobile responsive */}
            <div className="relative mb-8 sm:mb-12">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto shadow-2xl">
                <CheckCircle className="h-10 w-10 sm:h-12 sm:w-12 text-white" />
              </div>
              <div className="absolute inset-0 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full blur-xl opacity-30 mx-auto animate-pulse"></div>
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
  }

  return (
    <section id="waitlist" className="py-20 sm:py-24 md:py-32 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Premium form header - mobile responsive */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-purple-700 text-sm font-medium mb-4 sm:mb-6 shadow-lg border border-purple-100">
              🔥 Limited Early Access
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 sm:mb-6 tracking-tight px-2 sm:px-0">
              Get Early Access
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-slate-600 font-light px-2 sm:px-0">
              Join the waitlist to be first in line for ElevateU
            </p>
          </div>
          
          {/* Premium form container - mobile responsive */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-10 border border-white/50 mx-2 sm:mx-0">
            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                <div className="space-y-3">
                  <Label htmlFor="firstName" className="text-slate-700 font-semibold text-base sm:text-lg">
                    First Name
                  </Label>
                  <Input
                    id="firstName"
                    type="text"
                    value={state.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    className="h-12 sm:h-14 rounded-xl sm:rounded-2xl border-slate-200 focus:border-purple-500 focus:ring-purple-500 text-base sm:text-lg bg-white/50 backdrop-blur-sm touch-manipulation"
                    placeholder="Enter your first name"
                    required
                  />
                </div>
                
                <div className="space-y-3">
                  <Label htmlFor="gradeLevel" className="text-slate-700 font-semibold text-base sm:text-lg">
                    Grade Level
                  </Label>
                  <Select value={state.gradeLevel} onValueChange={(value) => handleInputChange("gradeLevel", value)}>
                    <SelectTrigger className="h-12 sm:h-14 rounded-xl sm:rounded-2xl border-slate-200 focus:border-purple-500 focus:ring-purple-500 text-base sm:text-lg bg-white/50 backdrop-blur-sm">
                      <SelectValue placeholder="Select your grade" />
                    </SelectTrigger>
                    <SelectContent className="bg-white/95 backdrop-blur-sm border-slate-200 rounded-xl">
                      <SelectItem value="freshman">9th Grade (Freshman)</SelectItem>
                      <SelectItem value="sophomore">10th Grade (Sophomore)</SelectItem>
                      <SelectItem value="junior">11th Grade (Junior)</SelectItem>
                      <SelectItem value="senior">12th Grade (Senior)</SelectItem>
                      <SelectItem value="college">College Student</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-3">
                <Label htmlFor="email" className="text-slate-700 font-semibold text-base sm:text-lg">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={state.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="h-12 sm:h-14 rounded-xl sm:rounded-2xl border-slate-200 focus:border-purple-500 focus:ring-purple-500 text-base sm:text-lg bg-white/50 backdrop-blur-sm touch-manipulation"
                  placeholder="Enter your email address"
                  required
                />
              </div>
              
              <div className="space-y-3">
                <Label htmlFor="testType" className="text-slate-700 font-semibold text-base sm:text-lg">
                  SAT or ACT?
                </Label>
                <Select value={state.testType} onValueChange={(value) => handleInputChange("testType", value)}>
                  <SelectTrigger className="h-12 sm:h-14 rounded-xl sm:rounded-2xl border-slate-200 focus:border-purple-500 focus:ring-purple-500 text-base sm:text-lg bg-white/50 backdrop-blur-sm">
                    <SelectValue placeholder="Choose your test" />
                  </SelectTrigger>
                  <SelectContent className="bg-white/95 backdrop-blur-sm border-slate-200 rounded-xl">
                    <SelectItem value="sat">SAT</SelectItem>
                    <SelectItem value="act">ACT</SelectItem>
                    <SelectItem value="both">Both SAT & ACT</SelectItem>
                    <SelectItem value="undecided">Not sure yet</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              {/* Premium CTA button - mobile responsive */}
              <Button 
                type="submit"
                disabled={state.isLoading}
                className="w-full h-14 sm:h-16 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-xl sm:rounded-2xl text-lg sm:text-xl font-semibold shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 group border-0 mt-6 sm:mt-8 touch-manipulation will-change-transform"
              >
                {state.isLoading ? (
                  <div className="flex items-center">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 border-3 border-white border-t-transparent rounded-full animate-spin mr-3" />
                    Joining the waitlist...
                  </div>
                ) : (
                  <>
                    👉 Join Now — Get Early Access
                    <ArrowRight className="ml-2 sm:ml-3 h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-x-2 transition-transform duration-300" />
                  </>
                )}
              </Button>
            </form>
            
            <p className="text-center text-slate-500 mt-6 sm:mt-8 text-base sm:text-lg">
              By joining, you agree to receive updates about ElevateU. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaitlistForm;
