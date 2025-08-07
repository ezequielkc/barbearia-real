import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CraftBeer = () => {
  return (
    <section id="chopp" className="py-20 bg-gradient-blues">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-jazz font-bold text-foreground mb-4">
              🍺 Chopp Artesanal
            </h2>
            <p className="text-xl text-muted-foreground">
              A melhor qualidade em cerveja artesanal para acompanhar sua experiência
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="bg-card/50 border-border hover:shadow-jazz transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-jazz text-primary flex items-center">
                  🏆 Qualidade Premium
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Selecionamos as melhores cervejas artesanais da região, 
                  garantindo uma experiência única para nossos clientes.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 bg-background/20 rounded-lg">
                    <span className="text-primary text-lg">✓</span>
                    <span className="font-medium">Chopp gelado</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-background/20 rounded-lg">
                    <span className="text-primary text-lg">✓</span>
                    <span className="font-medium">Variedade de estilos</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-background/20 rounded-lg">
                    <span className="text-primary text-lg">✓</span>
                    <span className="font-medium">Rotatividade de marcas</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-background/20 rounded-lg">
                    <span className="text-primary text-lg">✓</span>
                    <span className="font-medium">Preços acessíveis</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-border hover:shadow-jazz transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-jazz text-primary flex items-center">
                  🎯 Estilos Disponíveis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-4 bg-background/20 rounded-lg hover:bg-background/30 transition-colors">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">🍺</span>
                      <span className="font-semibold">Pilsen</span>
                    </div>
                    <span className="text-sm text-muted-foreground">Clássica</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-background/20 rounded-lg hover:bg-background/30 transition-colors">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">🍺</span>
                      <span className="font-semibold">IPA</span>
                    </div>
                    <span className="text-sm text-muted-foreground">Aromática</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-background/20 rounded-lg hover:bg-background/30 transition-colors">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">🍺</span>
                      <span className="font-semibold">Stout</span>
                    </div>
                    <span className="text-sm text-muted-foreground">Robusta</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-background/20 rounded-lg hover:bg-background/30 transition-colors">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">🍺</span>
                      <span className="font-semibold">Wheat Beer</span>
                    </div>
                    <span className="text-sm text-muted-foreground">Refrescante</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-border hover:shadow-jazz transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-jazz text-primary flex items-center">
                  🍻 Experiência Completa
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Combine seu corte de cabelo com uma cerveja artesanal de qualidade. 
                  O ambiente perfeito para relaxar e socializar.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-3 bg-background/20 rounded-lg">
                    <span className="text-3xl">🍺</span>
                    <div>
                      <h4 className="font-semibold text-foreground">Chopp Gelado</h4>
                      <p className="text-sm text-muted-foreground">Sempre na temperatura ideal</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-3 bg-background/20 rounded-lg">
                    <span className="text-3xl">🎵</span>
                    <div>
                      <h4 className="font-semibold text-foreground">Ambiente Musical</h4>
                      <p className="text-sm text-muted-foreground">Rock, blues e jazz de fundo</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-3 bg-background/20 rounded-lg">
                    <span className="text-3xl">👥</span>
                    <div>
                      <h4 className="font-semibold text-foreground">Socialização</h4>
                      <p className="text-sm text-muted-foreground">Conheça pessoas com interesses similares</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CraftBeer;
