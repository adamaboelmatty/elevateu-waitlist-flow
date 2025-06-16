
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { ArrowRight, CheckCircle, Sparkles } from "lucide-react";

const WaitlistForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    gradeLevel: "",
    email: "",
    testType: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitted(true);
    setIsLoading(false);
    toast.success("Welcome to the waitlist! We'll be in touch soon.");
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <section id="waitlist" className="py-32 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            {/* Success animation */}
            <div className="relative mb-12">
              <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto shadow-2xl">
                <CheckCircle className="h-12 w-12 text-white" />
              </div>
              <div className="absolute inset-0 w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full blur-xl opacity-30 mx-auto animate-pulse"></div>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
              You're In! 🎉
            </h2>
            <p className="text-xl md:text-2xl text-slate-600 mb-12 font-light max-w-2xl mx-auto">
              Welcome to the ElevateU waitlist. We'll send you early access as soon as it's ready.
            </p>
            
            {/* Premium success card */}
            <div className="bg-white/80 backdrop-blur-sm p-10 rounded-3xl shadow-2xl border border-white/50 max-w-2xl mx-auto">
              <div className="flex items-center justify-center mb-6">
                <Sparkles className="h-8 w-8 text-purple-600 mr-3" />
                <h3 className="text-2xl font-bold text-slate-900">What's Next?</h3>
              </div>
              <p className="text-slate-700 text-lg leading-relaxed">
                Keep an eye on your inbox for <strong>exclusive updates</strong>, study tips, and your <strong>early access invitation</strong>. You're among the first 100 students to join!
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="waitlist" className="py-32 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Premium form header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-purple-700 text-sm font-medium mb-6 shadow-lg border border-purple-100">
              🔥 Limited Early Access
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
              Get Early Access
            </h2>
            <p className="text-xl md:text-2xl text-slate-600 font-light">
              Join the waitlist to be first in line for ElevateU
            </p>
          </div>
          
          {/* Premium form container */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-10 border border-white/50">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <Label htmlFor="firstName" className="text-slate-700 font-semibold text-lg">
                    First Name
                  </Label>
                  <Input
                    id="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    className="h-14 rounded-2xl border-slate-200 focus:border-purple-500 focus:ring-purple-500 text-lg bg-white/50 backdrop-blur-sm"
                    placeholder="Enter your first name"
                    required
                  />
                </div>
                
                <div className="space-y-3">
                  <Label htmlFor="gradeLevel" className="text-slate-700 font-semibold text-lg">
                    Grade Level
                  </Label>
                  <Select value={formData.gradeLevel} onValueChange={(value) => handleInputChange("gradeLevel", value)}>
                    <SelectTrigger className="h-14 rounded-2xl border-slate-200 focus:border-purple-500 focus:ring-purple-500 text-lg bg-white/50 backdrop-blur-sm">
                      <SelectValue placeholder="Select your grade" />
                    </SelectTrigger>
                    <SelectContent>
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
                <Label htmlFor="email" className="text-slate-700 font-semibold text-lg">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="h-14 rounded-2xl border-slate-200 focus:border-purple-500 focus:ring-purple-500 text-lg bg-white/50 backdrop-blur-sm"
                  placeholder="Enter your email address"
                  required
                />
              </div>
              
              <div className="space-y-3">
                <Label htmlFor="testType" className="text-slate-700 font-semibold text-lg">
                  SAT or ACT?
                </Label>
                <Select value={formData.testType} onValueChange={(value) => handleInputChange("testType", value)}>
                  <SelectTrigger className="h-14 rounded-2xl border-slate-200 focus:border-purple-500 focus:ring-purple-500 text-lg bg-white/50 backdrop-blur-sm">
                    <SelectValue placeholder="Choose your test" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sat">SAT</SelectItem>
                    <SelectItem value="act">ACT</SelectItem>
                    <SelectItem value="both">Both SAT & ACT</SelectItem>
                    <SelectItem value="undecided">Not sure yet</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              {/* Premium CTA button */}
              <Button 
                type="submit"
                disabled={isLoading}
                className="w-full h-16 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-2xl text-xl font-semibold shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 group border-0 mt-8"
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin mr-3" />
                    Joining the waitlist...
                  </div>
                ) : (
                  <>
                    👉 Join Now — Get Early Access
                    <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
                  </>
                )}
              </Button>
            </form>
            
            <p className="text-center text-slate-500 mt-8 text-lg">
              By joining, you agree to receive updates about ElevateU. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaitlistForm;
