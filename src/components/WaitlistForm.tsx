
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { ArrowRight, CheckCircle } from "lucide-react";

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
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitted(true);
    setIsLoading(false);
    toast.success("Welcome to the waitlist! We'll be in touch soon.");
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <section id="waitlist" className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              You're In! 🎉
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              Welcome to the ElevateU waitlist. We'll send you early access as soon as it's ready.
            </p>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <p className="text-slate-700">
                <strong>What's next?</strong> Keep an eye on your inbox for exclusive updates, study tips, and your early access invitation.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="waitlist" className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Get early access.
            </h2>
            <p className="text-xl text-slate-600">
              Join the waitlist to be first in line.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="firstName" className="text-slate-700 font-medium">
                    First Name
                  </Label>
                  <Input
                    id="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    className="mt-2 h-12 rounded-xl border-slate-200 focus:border-purple-500 focus:ring-purple-500"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="gradeLevel" className="text-slate-700 font-medium">
                    Grade Level
                  </Label>
                  <Select value={formData.gradeLevel} onValueChange={(value) => handleInputChange("gradeLevel", value)}>
                    <SelectTrigger className="mt-2 h-12 rounded-xl border-slate-200 focus:border-purple-500 focus:ring-purple-500">
                      <SelectValue placeholder="Select grade" />
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
              
              <div>
                <Label htmlFor="email" className="text-slate-700 font-medium">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="mt-2 h-12 rounded-xl border-slate-200 focus:border-purple-500 focus:ring-purple-500"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="testType" className="text-slate-700 font-medium">
                  SAT or ACT?
                </Label>
                <Select value={formData.testType} onValueChange={(value) => handleInputChange("testType", value)}>
                  <SelectTrigger className="mt-2 h-12 rounded-xl border-slate-200 focus:border-purple-500 focus:ring-purple-500">
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
              
              <Button 
                type="submit"
                disabled={isLoading}
                className="w-full h-12 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-xl text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                    Joining...
                  </div>
                ) : (
                  <>
                    👉 Join Now
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>
            
            <p className="text-center text-sm text-slate-500 mt-6">
              By joining, you agree to receive updates about ElevateU. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaitlistForm;
