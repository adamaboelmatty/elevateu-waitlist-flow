
import { useCallback, useState } from "react";
import { toast } from "sonner";
import { useWaitlistForm } from "@/hooks/useWaitlistForm";
import WaitlistFormHeader from "./WaitlistFormHeader";
import WaitlistFormFields from "./WaitlistFormFields";
import WaitlistFormSuccess from "./WaitlistFormSuccess";

const WaitlistForm = () => {
  const { state, updateField, setLoading, setSubmitted } = useWaitlistForm();
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});
  const [successFields, setSuccessFields] = useState<Record<string, boolean>>({});

  const formSteps = ["Name", "Grade", "Email", "Test"];
  const currentStep = Object.values(state).filter(value => value && typeof value === 'string').length - 2;

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
    
    const fields = ["firstName", "email", "gradeLevel", "testType"];
    const isValid = fields.every(field => validateField(field, state[field as keyof typeof state] as string));
    
    if (!isValid) return;
    
    setLoading(true);
    
    try {
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
      setTimeout(() => validateField(field, value), 300);
    }
  }, [updateField, validateField]);

  if (state.isSubmitted) {
    return <WaitlistFormSuccess />;
  }

  return (
    <section id="waitlist" className="py-20 sm:py-24 md:py-32 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <WaitlistFormHeader 
            formSteps={formSteps}
            currentStep={currentStep}
          />
          
          <WaitlistFormFields
            state={state}
            validationErrors={validationErrors}
            successFields={successFields}
            onInputChange={handleInputChange}
            onSubmit={handleSubmit}
          />
        </div>
      </div>
    </section>
  );
};

export default WaitlistForm;
