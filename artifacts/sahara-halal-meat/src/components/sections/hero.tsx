import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-[90dvh] flex items-center justify-center pt-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background z-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <img 
            src="/sahara-logo.jpg" 
            alt="Sahara Halal Meats Logo" 
            className="w-40 md:w-56 h-auto mx-auto rounded-md shadow-2xl shadow-black/50 border border-primary/20"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <h1 className="font-serif text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
            Tradition in <br/><span className="text-primary italic font-normal">Every Cut.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
            Premium 100% Halal Beef, Lamb, Goat & Chicken. Proudly serving Calgary with masterfully prepared Moroccan, Argentinian, and Custom Latin cuts.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              onClick={() => scrollTo('contact')}
              className="w-full sm:w-auto text-base font-serif tracking-wide px-8"
            >
              Visit the Shop
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => scrollTo('custom-cuts')}
              className="w-full sm:w-auto text-base font-serif tracking-wide px-8"
            >
              Request Custom Cut
            </Button>
          </div>
        </motion.div>

      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
      >
        <span className="text-xs tracking-widest uppercase font-medium">Discover</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary/50 to-transparent" />
      </motion.div>
    </section>
  );
}
