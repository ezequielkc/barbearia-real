import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const toggleMenu = () => {
    if (!isMenuOpen) {
      setIsMenuOpen(true);
      setIsAnimating(true);
    } else {
      setIsAnimating(false);
      setTimeout(() => setIsMenuOpen(false), 300);
    }
  };

  const closeMenu = () => {
    setIsAnimating(false);
    setTimeout(() => setIsMenuOpen(false), 300);
  };

  // Fechar menu ao pressionar ESC
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevenir scroll do body quando menu está aberto
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navItems = [
    { href: "#barbearia", label: "Barbearia" },
    { href: "#servicos", label: "Serviços" },
    { href: "#poker", label: "Poker Club" },
    { href: "#contato", label: "Contato" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-accent rounded-full"></div>
          <h1 className="text-2xl font-jazz font-bold text-primary">
            Barbearia Real
          </h1>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop WhatsApp Button */}
        <Button 
          variant="default" 
          className="hidden md:flex bg-gradient-accent text-vinyl-black font-semibold hover:shadow-jazz transition-all duration-300"
        >
          WhatsApp
        </Button>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay - Só renderiza quando aberto */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40">
          {/* Backdrop */}
          <div 
            className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
              isAnimating ? 'opacity-100' : 'opacity-0'
            }`}
            onClick={closeMenu}
          />
          
          {/* Menu Panel */}
          <div 
            className={`fixed top-0 right-0 h-full w-80 bg-background border-l border-border shadow-2xl transform transition-transform duration-300 ease-in-out ${
              isAnimating ? 'translate-x-0' : 'translate-x-full'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col h-full">
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-6 border-b border-border">
                <h2 className="text-xl font-jazz font-bold text-primary">
                  Menu
                </h2>
                <button
                  onClick={closeMenu}
                  className="p-2 text-foreground hover:text-primary transition-colors"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Mobile Navigation */}
              <nav className="flex-1 p-6">
                <div className="flex flex-col space-y-6">
                  {navItems.map((item, index) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={closeMenu}
                      className={`text-lg font-medium text-foreground hover:text-primary transition-all duration-300 py-2 border-b border-border/20 ${
                        isAnimating ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                      }`}
                      style={{
                        transitionDelay: `${index * 100}ms`
                      }}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </nav>

              {/* Mobile WhatsApp Button */}
              <div className="p-6 border-t border-border">
                <Button 
                  variant="default" 
                  className="w-full bg-gradient-accent text-vinyl-black font-semibold hover:shadow-jazz transition-all duration-300"
                >
                  WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;