import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Specialties } from "@/components/sections/specialties";
import { CustomCuts } from "@/components/sections/custom-cuts";
import { Contact } from "@/components/sections/contact";

function NoiseOverlay() {
  return (
    <div 
      className="pointer-events-none fixed inset-0 z-[100] opacity-[0.025] mix-blend-screen" 
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
      }}
    />
  );
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh] relative bg-background overflow-x-hidden selection:bg-primary/30 selection:text-primary">
      <NoiseOverlay />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Specialties />
        <CustomCuts />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
