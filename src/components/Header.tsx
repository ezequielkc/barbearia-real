import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const toggleMenu = () => {
    if (!isMenuOpen) {
      setIsMenuOpen(true);
      // Pequeno delay para animação de entrada
      setTimeout(() => setIsVisible(true), 10);
    } else {
      setIsVisible(false);
      setTimeout(() => setIsMenuOpen(false), 200);
    }
  };

  const closeMenu = () => {
    setIsVisible(false);
    setTimeout(() => setIsMenuOpen(false), 200);
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
    { href: "#chopp", label: "Chopp" },
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

      {/* Mobile Menu - Renderização condicional simples */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className={`md:hidden fixed inset-0 z-40 bg-black/60 transition-opacity duration-200 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
            onClick={closeMenu}
          />
          
          {/* Menu Panel */}
          <div 
            className={`md:hidden fixed top-0 right-0 z-50 h-full w-80 bg-background border-l border-border shadow-2xl transition-transform duration-200 ${
              isVisible ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-border bg-background">
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

              {/* Navigation */}
              <nav className="flex-1 p-6 bg-background">
                <div className="flex flex-col space-y-6">
                  {navItems.map((item, index) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={closeMenu}
                      className={`text-lg font-medium text-foreground hover:text-primary transition-all duration-200 py-2 border-b border-border/20 bg-background ${
                        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                      }`}
                      style={{
                        transitionDelay: `${index * 50}ms`
                      }}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </nav>

              {/* WhatsApp Button */}
              <div className="p-6 border-t border-border bg-background">
                <Button 
                  variant="default" 
                  className="w-full bg-gradient-accent text-vinyl-black font-semibold hover:shadow-jazz transition-all duration-300"
                >
                  WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;