const Footer = () => {
  return (
    <footer className="bg-vinyl-black border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-accent rounded-full"></div>
            <h3 className="text-2xl font-jazz font-bold text-primary">
              Barbearia Real
            </h3>
          </div>
          
          <p className="text-muted-foreground mb-6">
            Onde o estilo encontra a música
          </p>
          
          <div className="flex justify-center space-x-8 text-primary text-3xl mb-6">
            <span className="hover:scale-110 transition-transform cursor-pointer">🎸</span>
            <span className="hover:scale-110 transition-transform cursor-pointer">✂️</span>
            <span className="hover:scale-110 transition-transform cursor-pointer">🎲</span>
            <span className="hover:scale-110 transition-transform cursor-pointer">🎷</span>
          </div>
          
          <div className="border-t border-border pt-6">
            <p className="text-sm text-muted-foreground">
              © 2025 Barbearia Real. Uma experiência única para homens de estilo.
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              * Poker Club: Atividade recreativa entre amigos, sem fins comerciais
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Desenvolvido por Ezequiel Kowalski
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;