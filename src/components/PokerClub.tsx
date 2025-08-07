import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import pokerImage from "@/assets/poker-room.jpg";

const PokerClub = () => {
  return (
    <section id="poker" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-jazz font-bold text-foreground mb-6">
              Poker Club
            </h2>
            <p className="text-xl text-muted-foreground mb-6">
              Uma comunidade exclusiva de amigos unidos pela paixão
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <div className="text-primary text-xl">🎲</div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    Ambiente Privado
                  </h3>
                  <p className="text-muted-foreground">
                    Grupo fechado de amigos que se reúnem regularmente em atmosfera descontraída
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="text-primary text-xl">🎯</div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    Por Esporte e Paixão
                  </h3>
                  <p className="text-muted-foreground">
                    Jogamos pelo prazer do jogo, estratégia e companheirismo, sem fins comerciais
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="text-primary text-xl">🤝</div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    Valores Simbólicos
                  </h3>
                  <p className="text-muted-foreground">
                    Apostas puramente simbólicas, focadas na diversão e no aspecto social do jogo
                  </p>
                </div>
              </div>
            </div>

            <Card className="bg-muted border-border">
              <CardHeader>
                <CardTitle className="text-accent font-jazz">
                  ⚠️ Importante
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground">
                  Nossa comunidade de poker é estritamente recreativa e social, 
                  formada por um grupo de amigos que se reúnem por paixão ao jogo. 
                  Não temos qualquer atividade comercial ou monetária relacionada ao poker.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-vinyl">
              <img 
                src={pokerImage} 
                alt="Poker Club - Ambiente exclusivo" 
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-vinyl-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm font-semibold">Nosso ambiente exclusivo</p>
              </div>
            </div>
            
            {/* Decorative poker elements */}
            <div className="absolute -top-4 -right-4 text-4xl">🂡</div>
            <div className="absolute -bottom-4 -left-4 text-3xl opacity-50">♠️</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PokerClub;