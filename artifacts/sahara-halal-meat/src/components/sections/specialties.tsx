import { motion, type Variants } from "framer-motion";
import { Beef, Drumstick, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Specialties() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="specialties" className="py-24 relative border-t border-border/50 bg-card/30">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Master Specialties</h2>
          <p className="text-muted-foreground text-lg">
            Our butchers bring authentic techniques from across the globe to your table. Every cut is treated with the respect it deserves.
          </p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {/* Moroccan */}
          <motion.div variants={item} className="bg-background border border-border p-8 rounded-xl relative group hover:border-primary/50 transition-colors">
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -z-10 transition-transform group-hover:scale-110" />
            <div className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center mb-6 text-primary">
              <Beef size={24} />
            </div>
            <h3 className="font-serif text-2xl font-semibold mb-3">Moroccan Cuts</h3>
            <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
              Traditional cuts for authentic flavor, perfect for slow cooking and festive gatherings.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/60"/> Tagine Cuts</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/60"/> Lamb Shoulder & Leg</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/60"/> Beef Shank & Ribs</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/60"/> Brochette & Stew</li>
            </ul>
          </motion.div>

          {/* Argentinian */}
          <motion.div variants={item} className="bg-background border border-border p-8 rounded-xl relative group hover:border-primary/50 transition-colors">
            <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/10 rounded-bl-full -z-10 transition-transform group-hover:scale-110" />
            <div className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center mb-6 text-primary">
              <Beef size={24} />
            </div>
            <h3 className="font-serif text-2xl font-semibold mb-3">Argentinian Asado</h3>
            <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
              The soul of the parrillada. Precision cuts designed for the grill and open fire.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/60"/> Asado de Tira & Vacío</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/60"/> Entraña & Bife de Chorizo</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/60"/> Ojo de Bife</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/60"/> Colita & Tapa de Cuadril</li>
            </ul>
          </motion.div>

          {/* Everyday & Custom */}
          <motion.div variants={item} className="bg-background border border-border p-8 rounded-xl relative group hover:border-primary/50 transition-colors md:col-span-2 lg:col-span-1">
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -z-10 transition-transform group-hover:scale-110" />
            <div className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center mb-6 text-primary">
              <Drumstick size={24} />
            </div>
            <h3 className="font-serif text-2xl font-semibold mb-3">Latin & Everyday</h3>
            <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
              Custom Latin cuts and daily staples prepared exactly to your specifications.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/60"/> Custom Latin Cuts</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/60"/> Halal Chicken & Goat</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/60"/> Premium Ground Meat</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/60"/> Bulk & BBQ Orders</li>
            </ul>
          </motion.div>

        </motion.div>

        {/* Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 bg-secondary text-secondary-foreground p-8 md:p-12 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8 border border-secondary/50 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-30 mix-blend-overlay"></div>
          <div className="relative z-10 max-w-xl">
            <Quote className="text-primary/40 w-12 h-12 mb-4" />
            <h3 className="font-serif text-2xl md:text-3xl mb-2 text-white">We cut to your exact preference.</h3>
            <p className="text-secondary-foreground/80">
              Thickness, size, bone-in or boneless. Whether for a delicate stew or a massive weekend BBQ, tell us how you want it.
            </p>
          </div>
          <div className="relative z-10 w-full md:w-auto">
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => document.getElementById('custom-cuts')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full md:w-auto bg-transparent border-primary/50 text-white hover:bg-primary/20 hover:text-white"
            >
              Request a Custom Cut
            </Button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
