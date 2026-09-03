import { MapPin, Phone, Clock, Store } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 border-t border-border/50 bg-background relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Visit the Shop</h2>
          <p className="text-muted-foreground text-lg">
            Stop by to see today's fresh cuts, or call ahead to have your order ready for pickup.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="bg-card border border-border rounded-xl p-8 flex flex-col items-center text-center hover:border-primary/50 transition-colors">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
              <MapPin size={24} />
            </div>
            <h3 className="font-serif text-xl font-semibold mb-3">Location</h3>
            <p className="text-muted-foreground mb-4">
              4-5147 20 Ave SE<br/>
              Calgary, AB T2B 0B1<br/>
              Canada
            </p>
            <a 
              href="https://maps.google.com/?q=4-5147+20+Ave+SE,+Calgary,+AB" 
              target="_blank" 
              rel="noreferrer"
              className="text-primary font-medium text-sm hover:underline mt-auto"
            >
              Get Directions →
            </a>
          </div>

          <div className="bg-card border border-border rounded-xl p-8 flex flex-col items-center text-center hover:border-primary/50 transition-colors">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
              <Clock size={24} />
            </div>
            <h3 className="font-serif text-xl font-semibold mb-3">Hours</h3>
            <ul className="text-muted-foreground space-y-2 mb-4 w-full max-w-[200px]">
              <li className="flex justify-between">
                <span>Mon - Sat:</span>
                <span className="text-foreground font-medium">9am - 7pm</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span className="text-foreground font-medium">10am - 5pm</span>
              </li>
            </ul>
            <p className="text-sm text-primary/80 mt-auto italic">Open 7 days a week</p>
          </div>

          <div className="bg-card border border-border rounded-xl p-8 flex flex-col items-center text-center hover:border-primary/50 transition-colors">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
              <Phone size={24} />
            </div>
            <h3 className="font-serif text-xl font-semibold mb-3">Call Us</h3>
            <p className="text-muted-foreground mb-4">
              Have a question or want to place an order for pickup? Give us a call.
            </p>
            <div className="mt-auto">
              <a 
                href="tel:+14030000000" 
                className="text-2xl font-serif text-foreground hover:text-primary transition-colors block mb-1"
              >
                (403) Call-Shop
              </a>
              <span className="text-xs text-muted-foreground">Phone number available soon</span>
            </div>
          </div>

        </div>

        {/* Decorative banner at the bottom */}
        <div className="mt-16 w-full h-48 bg-secondary/20 rounded-2xl border border-secondary/30 relative overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-20 mix-blend-overlay"></div>
          <Store className="absolute -left-10 -bottom-10 w-64 h-64 text-secondary/20 -z-10" />
          <div className="text-center z-10 px-4">
            <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-2">Quality You Can Trust.</h3>
            <p className="text-muted-foreground">100% Halal certified meats prepared with mastery and respect.</p>
          </div>
        </div>

      </div>
    </section>
  );
}
