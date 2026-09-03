export function Footer() {
  return (
    <footer className="bg-card py-12 border-t border-border mt-auto relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 mb-12">
          
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/sahara-logo.jpg" 
                alt="Sahara Halal Meat" 
                className="h-12 w-auto rounded-sm object-cover"
              />
              <span className="font-serif font-bold text-xl tracking-wide">
                SAHARA
              </span>
            </div>
            <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
              Premium 100% Halal beef, lamb, goat, and chicken. Specializing in authentic Moroccan, Argentinian, and Custom Latin cuts.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-4 text-foreground">Location</h4>
            <address className="not-italic text-sm text-muted-foreground leading-loose">
              4-5147 20 Ave SE<br />
              Calgary, AB T2B 0B1<br />
              Canada
            </address>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-4 text-foreground">Hours</h4>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li className="flex justify-between max-w-[200px]">
                <span>Monday - Saturday:</span>
                <span>9am - 7pm</span>
              </li>
              <li className="flex justify-between max-w-[200px]">
                <span>Sunday:</span>
                <span>10am - 5pm</span>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Sahara Halal Meat. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-muted-foreground">
            <span className="hover:text-primary cursor-pointer transition-colors">Premium Quality Halal</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
