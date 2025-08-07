import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      title: "Corte Clássico",
      description: "Cortes tradicionais com técnicas refinadas, inspirados nos grandes mestres da barbearia clássica.",
      icon: "✂️"
    },
    {
      title: "Barba & Bigode",
      description: "Modelagem e manutenção de barbas com produtos premium e técnicas artesanais.",
      icon: "🪒"
    },
    {
      title: "Tratamentos Capilares",
      description: "Hidratação e tratamentos especializados para manter seus cabelos sempre saudáveis.",
      icon: "💆‍♂️"
    },
    {
      title: "Assinatura Premium",
      description: "Planos mensais com benefícios exclusivos e atendimento prioritário.",
      icon: "⭐"
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-jazz font-bold text-foreground mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experiência premium para homens que valorizam qualidade e estilo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="bg-secondary border-border hover:shadow-jazz transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-jazz text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-center">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-muted p-6 rounded-lg inline-block mb-6">
            <p className="text-lg text-foreground font-semibold mb-2">
              💰 Valores e Planos de Assinatura
            </p>
            <p className="text-muted-foreground">
              Para informações sobre valores e nossos planos exclusivos de assinatura
            </p>
          </div>
          <div className="block">
            <Button 
              size="lg" 
              className="bg-gradient-accent text-vinyl-black font-semibold hover:shadow-jazz transition-all duration-300"
            >
              📱 Consultar via WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;