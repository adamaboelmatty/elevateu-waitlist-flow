
import { ProgressIndicator } from "@/components/ui/progress-indicator";

interface WaitlistFormHeaderProps {
  formSteps: string[];
  currentStep: number;
}

const WaitlistFormHeader = ({ formSteps, currentStep }: WaitlistFormHeaderProps) => {
  return (
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
      
      <ProgressIndicator 
        steps={formSteps}
        currentStep={Math.min(currentStep, formSteps.length - 1)}
        className="mb-8"
      />
    </div>
  );
};

export default WaitlistFormHeader;
