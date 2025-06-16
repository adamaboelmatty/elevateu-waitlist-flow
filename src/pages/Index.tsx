
import Hero from "@/components/Hero";
import DemoPreview from "@/components/DemoPreview";
import Features from "@/components/Features";
import WaitlistForm from "@/components/WaitlistForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <DemoPreview />
      <Features />
      <WaitlistForm />
    </div>
  );
};

export default Index;
