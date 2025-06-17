
import Hero from "@/components/Hero";
import DemoPreview from "@/components/DemoPreview";
import Features from "@/components/Features";
import LazyWaitlistForm from "@/components/LazyWaitlistForm";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const Index = () => {
  return (
    <>
      <SEOHead />
      <main className="min-h-screen bg-white">
        <Hero />
        <DemoPreview />
        <Features />
        <LazyWaitlistForm />
        <Footer />
      </main>
    </>
  );
};

export default Index;
