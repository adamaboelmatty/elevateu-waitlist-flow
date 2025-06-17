import { useCallback, useState } from "react";
import { EnhancedButton } from "@/components/ui/enhanced-button";
import { AnimatedInput } from "@/components/ui/animated-input";
import { ProgressIndicator } from "@/components/ui/progress-indicator";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { ArrowRight, CheckCircle, Sparkles } from "lucide-react";
import { useWaitlistForm } from "@/hooks/useWaitlistForm";

const WaitlistForm = () => {
  const { state, updateField, setLoading, setSubmitted } = useWaitlistForm();
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});
  const [successFields, setSuccessFields] = useState<Record<string, boolean>>({});

  const formSteps = ["Name", "Grade", "Email", "Test"];
  const currentStep = Object.values(state).filter(value => value && typeof value === 'string').length - 2; // Subtract isSubmitted and isLoading

  const validateField = useCallback((field: string, value: string) => {
    let error = "";
    
    switch (field) {
      case "firstName":
        if (!value.trim()) error = "First name is required";
        else if (value.length < 2) error = "Name must be at least 2 characters";
        break;
      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value.trim()) error = "Email is required";
        else if (!emailRegex.test(value)) error = "Please enter a valid email";
        break;
      case "gradeLevel":
        if (!value) error = "Please select your grade level";
        break;
      case "testType":
        if (!value) error = "Please select your test type";
        break;
    }
    
    setValidationErrors(prev => ({ ...prev, [field]: error }));
    setSuccessFields(prev => ({ ...prev, [field]: !error && value.length > 0 }));
    
    return !error;
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    const fields = ["firstName", "email", "gradeLevel", "testType"];
    const isValid = fields.every(field => validateField(field, state[field as keyof typeof state] as string));
    
    if (!isValid) return;
    
    setLoading(true);
    
    try {
      // Submit to Formspree
      const formData = new FormData();
      formData.append('firstName', state.firstName);
      formData.append('email', state.email);
      formData.append('gradeLevel', state.gradeLevel);
      formData.append('testType', state.testType);
      
      const response = await fetch('https://formspree.io/f/xpwrlpqk', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        // Create confetti effect
        const confetti = document.createElement('div');
        confetti.innerHTML = '🎉'.repeat(20);
        confetti.className = 'fixed inset-0 pointer-events-none z-50 flex items-center justify-center text-4xl animate-pulse';
        document.body.appendChild(confetti);
        
        setTimeout(() => document.body.removeChild(confetti), 2000);
        
        setSubmitted(true);
        toast.success("Welcome to the waitlist! We'll be in touch soon.");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error("Something went wrong. Please try again.");
    }
    
    setLoading(false);
  }, [state, validateField, setLoading, setSubmitted]);

  const handleInputChange = useCallback((field: string, value: string) => {
    updateField(field as any, value);
    if (value) {
      setTimeout(() => validateField(field, value), 300); // Debounced validation
    }
  }, [updateField, validateField]);

  const handleSelectChange = useCallback((field: string, value: string) => {
    updateField(field as any, value);
    validateField(field, value);
  }, [updateField, validateField]);

  if (state.isSubmitted) {
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
  }

  return (
    <section id="waitlist" className="py-20 sm:py-24 md:py-32 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Enhanced form header with progress */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-purple-700 text-sm font-medium mb-6 shadow-lg border border-purple-100 animate-fade-in">
              🔥 Limited Early Access
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight px-2 sm:px-0">
              Get Early Access
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-slate-600 font-light px-2 sm:px-0 mb-8">
              Join the waitlist to be first in line for ElevateU
            </p>
            
            {/* Progress indicator */}
            <ProgressIndicator 
              steps={formSteps}
              currentStep={Math.min(currentStep, formSteps.length - 1)}
              className="mb-8"
            />
          </div>
          
          {/* Enhanced form container */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-10 border border-white/50 mx-2 sm:mx-0 hover:shadow-3xl transition-all duration-500">
            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                <AnimatedInput
                  name="firstName"
                  label="First Name"
                  type="text"
                  value={state.firstName}
                  onChange={(e) => handleInputChange("firstName", e.target.value)}
                  className="transition-all duration-300"
                  error={validationErrors.firstName}
                  success={successFields.firstName}
                  required
                />
                
                <div className="space-y-3">
                  <Label htmlFor="gradeLevel" className="text-slate-700 font-semibold text-base sm:text-lg">
                    Grade Level
                  </Label>
                  <Select value={state.gradeLevel} onValueChange={(value) => handleSelectChange("gradeLevel", value)}>
                    <SelectTrigger className="h-12 sm:h-12 rounded-xl border-slate-200 focus:border-purple-500 focus:ring-purple-500 text-base bg-white/50 backdrop-blur-sm transition-all duration-300 hover:border-purple-300">
                      <SelectValue placeholder="Select your grade" />
                    </SelectTrigger>
                    <SelectContent className="bg-white backdrop-blur-sm border-slate-200 rounded-xl z-[60]">
                      <SelectItem value="freshman">9th Grade (Freshman)</SelectItem>
                      <SelectItem value="sophomore">10th Grade (Sophomore)</SelectItem>
                      <SelectItem value="junior">11th Grade (Junior)</SelectItem>
                      <SelectItem value="senior">12th Grade (Senior)</SelectItem>
                      <SelectItem value="college">College Student</SelectItem>
                    </SelectContent>
                  </Select>
                  {validationErrors.gradeLevel && (
                    <p className="text-sm text-red-500 animate-fade-in">{validationErrors.gradeLevel}</p>
                  )}
                </div>
              </div>
              
              <AnimatedInput
                name="email"
                label="Email Address"
                type="email"
                value={state.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                error={validationErrors.email}
                success={successFields.email}
                required
              />
              
              <div className="space-y-3">
                <Label htmlFor="testType" className="text-slate-700 font-semibold text-base sm:text-lg">
                  SAT or ACT?
                </Label>
                <Select value={state.testType} onValueChange={(value) => handleSelectChange("testType", value)}>
                  <SelectTrigger className="h-12 sm:h-12 rounded-xl border-slate-200 focus:border-purple-500 focus:ring-purple-500 text-base bg-white/50 backdrop-blur-sm transition-all duration-300 hover:border-purple-300">
                    <SelectValue placeholder="Choose your test" />
                  </SelectTrigger>
                  <SelectContent className="bg-white backdrop-blur-sm border-slate-200 rounded-xl z-[60]">
                    <SelectItem value="sat">SAT</SelectItem>
                    <SelectItem value="act">ACT</SelectItem>
                    <SelectItem value="both">Both SAT & ACT</SelectItem>
                    <SelectItem value="undecided">Not sure yet</SelectItem>
                  </SelectContent>
                </Select>
                {validationErrors.testType && (
                  <p className="text-sm text-red-500 animate-fade-in">{validationErrors.testType}</p>
                )}
              </div>
              
              {/* Enhanced CTA button */}
              <EnhancedButton 
                type="submit"
                loading={state.isLoading}
                variant="gradient"
                size="xl"
                className="w-full mt-6 sm:mt-8 group"
                ripple={true}
              >
                {!state.isLoading && (
                  <>
                    <span className="hidden sm:inline">👉 Join Now — Get Early Access</span>
                    <span className="sm:hidden">👉 Join Waitlist</span>
                    <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-x-2 transition-transform duration-300 flex-shrink-0" />
                  </>
                )}
              </EnhancedButton>
            </form>
            
            <p className="text-center text-slate-500 mt-6 sm:mt-8 text-base">
              By joining, you agree to receive updates about ElevateU. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaitlistForm;
