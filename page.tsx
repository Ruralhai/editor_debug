import Navbar from "../components/layout/Navbar";
import Hero from "../components/landing/Hero";
import Features from "../components/landing/Features";
import AIShowcase from "../components/landing/AIShowcase";
import Preview3D from "../components/landing/Preview3D";
import BrandKit from "../components/landing/BrandKit";
import Testimonials from "../components/landing/Testimonials";
import Pricing from "../components/landing/Pricing";
import FAQ from "../components/landing/FAQ";
import CTA from "../components/landing/CTA";
import Footer from "../components/landing/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-950 text-white">
        <Hero />
        <AIShowcase />
        <Features />
        <Preview3D />
        <BrandKit />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
        <Footer />
      </main>
    </>
  );
}