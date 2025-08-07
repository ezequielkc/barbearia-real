import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-accent rounded-full"></div>
          <h1 className="text-2xl font-jazz font-bold text-primary">
            Barbearia Real
          </h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#barbearia" className="text-foreground hover:text-primary transition-colors">
            Barbearia
          </a>
          <a href="#servicos" className="text-foreground hover:text-primary transition-colors">
            Serviços
          </a>
          <a href="#poker" className="text-foreground hover:text-primary transition-colors">
            Poker Club
          </a>
          <a href="#contato" className="text-foreground hover:text-primary transition-colors">
            Contato
          </a>
        </nav>

        <Button variant="default" className="bg-gradient-accent text-vinyl-black font-semibold hover:shadow-jazz transition-all duration-300">
          WhatsApp
        </Button>
      </div>
    </header>
  );
};

export default Header;