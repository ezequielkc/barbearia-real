import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="barbearia" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-jazz font-bold text-foreground mb-8">
            Uma Barbearia Diferente
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            Na Barbearia Real, cada corte é uma experiência única. Somos mais que uma barbearia - 
            somos um espaço cultural onde música e estilo se encontram.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-secondary border-border hover:shadow-jazz transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">🎸</div>
                <h3 className="text-xl font-jazz font-semibold text-foreground mb-2">
                  Trilha Sonora Exclusiva
                </h3>
                <p className="text-muted-foreground">
                  Rock clássico, blues autêntico e jazz refinado embalam cada atendimento
                </p>
              </CardContent>
            </Card>

            <Card className="bg-secondary border-border hover:shadow-jazz transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">👔</div>
                <h3 className="text-xl font-jazz font-semibold text-foreground mb-2">
                  Público Seleto
                </h3>
                <p className="text-muted-foreground">
                  Atendemos homens que valorizam qualidade, cultura e sofisticação
                </p>
              </CardContent>
            </Card>

            <Card className="bg-secondary border-border hover:shadow-jazz transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="text-xl font-jazz font-semibold text-foreground mb-2">
                  Experiência Premium
                </h3>
                <p className="text-muted-foreground">
                  Cada detalhe pensado para proporcionar momentos únicos e memoráveis
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-hero p-8 rounded-lg text-center">
            <h3 className="text-2xl font-jazz font-bold text-primary mb-4">
              Duas Paixões, Um Lugar
            </h3>
            <p className="text-lg text-foreground/90 mb-6">
              Durante o dia, oferecemos os melhores serviços de barbearia. 
              À noite, nosso espaço se transforma no point de encontro para 
              apreciadores de poker e boa conversa.
            </p>
            <div className="flex justify-center space-x-8 text-primary text-2xl">
              <span>♪</span>
              <span>✂️</span>
              <span>🎲</span>
              <span>♫</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;