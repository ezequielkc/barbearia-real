import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-jazz font-bold text-foreground mb-4">
              Entre em Contato
            </h2>
            <p className="text-xl text-muted-foreground">
              Pronto para uma experiência única? Fale conosco!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-card border-border hover:shadow-jazz transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-jazz text-primary flex items-center">
                  📱 WhatsApp
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  A forma mais rápida de agendar seu horário ou tirar dúvidas sobre nossos planos
                </p>
                <Button 
                  size="lg" 
                  className="w-full bg-gradient-accent text-vinyl-black font-semibold hover:shadow-jazz transition-all duration-300"
                >
                  Abrir WhatsApp
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:shadow-jazz transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-jazz text-primary flex items-center">
                  📍 Localização
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">
                  <strong>Endereço:</strong><br />
                  Barbearia Real<br />
                  Blumenau - SC
                </p>
                <p className="text-muted-foreground">
                  <strong>Horário:</strong><br />
                  Seg-Sex: 9h30 às 13h e 13h30 às 20h<br />
                  Sáb: 9h30 às 17h<br />
                  Dom: Fechado
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Mapa do Google */}
          <Card className="bg-card border-border hover:shadow-jazz transition-all duration-300 mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-jazz text-primary flex items-center">
                🗺️ Como Chegar
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.8951469929507!2d-49.074982899999995!3d-26.9068226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94df19ee05cc4d91%3A0xb632c404aee9030d!2sBarbearia%20Real!5e0!3m2!1spt-BR!2sbr!4v1754602845316!5m2!1spt-BR!2sbr" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização da Barbearia Real em Blumenau - SC"
                  aria-label="Mapa interativo mostrando a localização da Barbearia Real"
                />
              </div>
              <div className="mt-4 text-center">
                <p className="text-sm text-muted-foreground">
                  Clique no mapa para abrir no Google Maps
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-blues border-border">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-jazz font-bold text-foreground mb-4">
                💼 Planos de Assinatura Disponíveis
              </h3>
              <p className="text-lg text-foreground/90 mb-6">
                Oferecemos planos mensais personalizados com benefícios exclusivos. 
                Para conhecer valores e vantagens de cada plano, entre em contato via WhatsApp.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 text-foreground/80">
                <div>✂️ Cortes ilimitados</div>
                <div>🎯 Atendimento prioritário</div>
                <div>🎁 Benefícios exclusivos</div>
              </div>
              <Button 
                variant="outline" 
                size="lg"
                className="border-foreground text-foreground hover:bg-foreground hover:text-vinyl-black transition-all duration-300"
                onClick={() => window.open('https://booksy.com/pt-br/102229_barbearia-real-essencia-das-maos_barbearias_834719_blumenau', '_blank')}
              >
                Consultar Planos
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;