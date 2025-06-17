
import { EnhancedButton } from "@/components/ui/enhanced-button";
import { AnimatedInput } from "@/components/ui/animated-input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight } from "lucide-react";

interface WaitlistFormFieldsProps {
  state: {
    firstName: string;
    gradeLevel: string;
    email: string;
    testType: string;
    isLoading: boolean;
  };
  validationErrors: Record<string, string>;
  successFields: Record<string, boolean>;
  onInputChange: (field: string, value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const WaitlistFormFields = ({ 
  state, 
  validationErrors, 
  successFields, 
  onInputChange, 
  onSubmit 
}: WaitlistFormFieldsProps) => {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-10 border border-white/50 mx-2 sm:mx-0 hover:shadow-3xl transition-all duration-500">
      <form onSubmit={onSubmit} action="https://formspree.io/f/xpwrlpqk" method="POST" className="space-y-6 sm:space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <AnimatedInput
            name="firstName"
            label="First Name"
            type="text"
            value={state.firstName}
            onChange={(e) => onInputChange("firstName", e.target.value)}
            className="transition-all duration-300"
            error={validationErrors.firstName}
            success={successFields.firstName}
            required
          />
          
          <div className="space-y-3">
            <Select value={state.gradeLevel} onValueChange={(value) => onInputChange("gradeLevel", value)} name="gradeLevel">
              <SelectTrigger className="h-12 sm:h-12 rounded-xl border-slate-200 focus:border-purple-500 focus:ring-purple-500 text-base bg-white/50 backdrop-blur-sm transition-all duration-300 hover:border-purple-300">
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
            <input type="hidden" name="gradeLevel" value={state.gradeLevel} />
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
          onChange={(e) => onInputChange("email", e.target.value)}
          error={validationErrors.email}
          success={successFields.email}
          required
        />
        
        <div className="space-y-3">
          <Select value={state.testType} onValueChange={(value) => onInputChange("testType", value)} name="testType">
            <SelectTrigger className="h-12 sm:h-12 rounded-xl border-slate-200 focus:border-purple-500 focus:ring-purple-500 text-base bg-white/50 backdrop-blur-sm transition-all duration-300 hover:border-purple-300">
              <SelectValue placeholder="Choose your test" />
            </SelectTrigger>
            <SelectContent className="bg-white/95 backdrop-blur-sm border-slate-200 rounded-xl">
              <SelectItem value="sat">SAT</SelectItem>
              <SelectItem value="act">ACT</SelectItem>
              <SelectItem value="both">Both SAT & ACT</SelectItem>
              <SelectItem value="undecided">Not sure yet</SelectItem>
            </SelectContent>
          </Select>
          <input type="hidden" name="testType" value={state.testType} />
          {validationErrors.testType && (
            <p className="text-sm text-red-500 animate-fade-in">{validationErrors.testType}</p>
          )}
        </div>
        
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
  );
};

export default WaitlistFormFields;
