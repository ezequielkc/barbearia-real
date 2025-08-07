import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
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
                  Rua da Música, 123<br />
                  Bairro Blues<br />
                  Cidade - Estado
                </p>
                <p className="text-muted-foreground">
                  <strong>Horário:</strong><br />
                  Seg-Sex: 9h às 19h<br />
                  Sáb: 8h às 17h
                </p>
              </CardContent>
            </Card>
          </div>

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