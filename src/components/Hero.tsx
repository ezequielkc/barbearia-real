import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-barbershop.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-vinyl-black/90 via-vinyl-black/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-left max-w-4xl">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-jazz font-bold text-foreground mb-6 leading-tight">
            Blues<span className="text-primary">Shop</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-light">
            Onde o estilo encontra a música
          </p>
          <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
            Uma barbearia única para apreciadores de rock, blues e jazz. 
            Mais que um corte de cabelo, uma experiência cultural completa 
            com nossa exclusiva comunidade de poker.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-gradient-accent text-vinyl-black font-semibold hover:shadow-jazz transition-all duration-300 text-lg px-8 py-6"
            >
              Agendar Horário
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-vinyl-black transition-all duration-300 text-lg px-8 py-6"
            >
              Conhecer Planos
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-8 right-8 text-primary/30 text-6xl">♪</div>
      <div className="absolute top-1/4 right-1/4 text-primary/20 text-4xl">♫</div>
    </section>
  );
};

export default Hero;