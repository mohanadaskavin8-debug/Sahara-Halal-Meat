import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b border-transparent ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-md border-border/50 py-3 shadow-sm'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div 
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => scrollTo('hero')}
        >
          <img 
            src="/sahara-logo.jpg" 
            alt="Sahara Halal Meat" 
            className="h-10 w-auto rounded-sm object-cover group-hover:opacity-90 transition-opacity"
          />
          <span className="font-serif font-bold text-xl tracking-wide hidden sm:block">
            SAHARA <span className="text-primary font-normal">HALAL MEATS</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollTo('specialties')} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">Specialties</button>
          <button onClick={() => scrollTo('custom-cuts')} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">Custom Cuts</button>
          <button onClick={() => scrollTo('contact')} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">Location</button>
          <Button onClick={() => scrollTo('contact')} variant="default" size="sm" className="font-serif italic tracking-wide">
            Visit Us
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-foreground p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border/50 p-4 flex flex-col gap-4 shadow-xl md:hidden">
          <button onClick={() => scrollTo('specialties')} className="text-left py-2 text-lg font-serif border-b border-border/30">Specialties</button>
          <button onClick={() => scrollTo('custom-cuts')} className="text-left py-2 text-lg font-serif border-b border-border/30">Custom Cuts</button>
          <button onClick={() => scrollTo('contact')} className="text-left py-2 text-lg font-serif border-b border-border/30">Location & Hours</button>
          <Button onClick={() => scrollTo('contact')} className="w-full mt-2 font-serif italic">Visit Us</Button>
        </div>
      )}
    </header>
  );
}
