import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SocialProof } from './components/SocialProof';
import { Features } from './components/Features';
import { ProductShowcase } from './components/ProductShowcase';
import { ProductGallery } from './components/ProductGallery';
import { HowItWorks } from './components/HowItWorks';
import { ProductDetails } from './components/ProductDetails';
import { Pricing } from './components/Pricing';
import { Comparison } from './components/Comparison';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { Toaster } from './components/ui/sonner';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <Features />
        <ProductShowcase />
        <ProductGallery />
        <HowItWorks />
        <ProductDetails />
        <Pricing />
        <Comparison />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <Toaster position="top-right" richColors />
    </div>
  );
}