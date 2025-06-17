
import Hero from "@/components/Hero";
import DemoPreview from "@/components/DemoPreview";
import Features from "@/components/Features";
import LazyWaitlistForm from "@/components/LazyWaitlistForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <DemoPreview />
      <Features />
      <LazyWaitlistForm />
      <Footer />
    </div>
  );
};

export default Index;
