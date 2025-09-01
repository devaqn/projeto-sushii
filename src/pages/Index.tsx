import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, Star, Clock, Truck, Sparkles, Award, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import heroSushi from '@/assets/hero-sushi.jpg'

const Index = () => {
  const navigate = useNavigate()

  const features = [
    {
      icon: <Star className="h-10 w-10 text-sushi-gold" />,
      title: "Qualidade Premium",
      description: "Ingredientes frescos importados e selecionados diariamente pelos nossos chefs",
      color: "luxury"
    },
    {
      icon: <Clock className="h-10 w-10 text-sushi-emerald" />,
      title: "Delivery Expresso", 
      description: "Entrega em até 35 minutos com embalagem térmica especial",
      color: "fresh"
    },
    {
      icon: <Truck className="h-10 w-10 text-sushi-red" />,
      title: "Frete Grátis",
      description: "Pedidos acima de R$ 60,00 sem taxa de entrega para toda Recife",
      color: "appetite"
    },
    {
      icon: <Sparkles className="h-10 w-10 text-sushi-coral" />,
      title: "Experiência Única",
      description: "Sabores autênticos japoneses com toque brasileiro especial",
      color: "luxury"
    },
    {
      icon: <Award className="h-10 w-10 text-sushi-gold" />,
      title: "Premiado",
      description: "Eleito melhor sushi de Recife por 3 anos consecutivos",
      color: "luxury"
    },
    {
      icon: <Heart className="h-10 w-10 text-sushi-red" />,
      title: "Feito com Amor",
      description: "Cada peça é preparada com carinho e dedicação pelos nossos mestres sushimen",
      color: "appetite"
    }
  ]

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroSushi})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-sushi-navy/90 via-background/80 to-sushi-red/30" />
        
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <div className="fade-up-appetite">
            <div className="text-6xl mb-4">🍣</div>
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
              <span className="hover-luxury">Sushi</span>
              <span className="text-sushi-gold ml-4">House</span>
            </h1>
            <p className="text-2xl md:text-3xl text-white/95 mb-8 leading-relaxed">
              O <span className="text-sushi-coral font-bold">melhor sushi</span> da cidade,
              <br className="hidden md:block" />
              agora no <span className="text-sushi-gold font-bold">conforto da sua casa</span>
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center slide-luxury" style={{ animationDelay: '0.4s' }}>
            <Button
              size="lg"
              className="btn-appetite text-xl px-12 py-6 shadow-red-glow"
              onClick={() => navigate('/cardapio')}
            >
              Ver Cardápio Completo
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
            
            <Button
              size="lg"
              className="btn-luxury text-xl px-12 py-6"
              onClick={() => navigate('/promocoes')}
            >
              🔥 Promoções Especiais
            </Button>
          </div>

          <div className="mt-12 bounce-fresh" style={{ animationDelay: '0.6s' }}>
            <p className="text-lg text-white/80 mb-4">
              ⭐ Mais de <span className="text-sushi-gold font-bold">10.000 clientes</span> satisfeitos
            </p>
            <div className="flex justify-center space-x-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-sushi-gold fill-current" />
              ))}
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 text-4xl animate-bounce" style={{ animationDelay: '1s' }}>🥢</div>
        <div className="absolute top-32 right-16 text-3xl animate-bounce" style={{ animationDelay: '1.5s' }}>🍱</div>
        <div className="absolute bottom-20 left-16 text-3xl animate-bounce" style={{ animationDelay: '2s' }}>🌊</div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 bg-gradient-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 text-9xl">🍣</div>
          <div className="absolute bottom-10 right-10 text-9xl">🥢</div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 fade-up-appetite">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="hover-appetite">Por que escolher a</span>
              <br />
              <span className="hover-luxury">Sushi House?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Mais do que um restaurante, somos uma experiência gastronômica única
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="card-gourmet text-center slide-luxury" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="flex justify-center mb-6">
                  <div className="p-4 rounded-full glass-luxury">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 hover-appetite">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-primary/10 via-background to-secondary/10 relative">
        <div className="absolute inset-0 glass-appetite" />
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="fade-up-appetite">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              <span className="hover-appetite">Monte seu Combo</span>
              <br />
              <span className="hover-luxury">de Sushi Perfeito</span>
            </h2>
            <p className="text-2xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
              Personalize seu pedido escolhendo suas peças favoritas e descobra 
              <span className="text-primary font-semibold"> combinações únicas de sabores</span>
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12 bounce-fresh">
            <div className="card-deluxe text-center">
              <div className="text-4xl mb-4">🍱</div>
              <h3 className="text-xl font-bold text-foreground mb-2">Combo Pequeno</h3>
              <p className="text-muted-foreground mb-3">15-20 peças selecionadas</p>
              <p className="text-2xl font-bold text-primary">A partir de R$ 45</p>
            </div>
            <div className="card-deluxe text-center">
              <div className="text-4xl mb-4">🍣</div>
              <h3 className="text-xl font-bold text-foreground mb-2">Combo Médio</h3>
              <p className="text-muted-foreground mb-3">25-30 peças variadas</p>
              <p className="text-2xl font-bold text-primary">A partir de R$ 70</p>
            </div>
            <div className="card-deluxe text-center">
              <div className="text-4xl mb-4">🥢</div>
              <h3 className="text-xl font-bold text-foreground mb-2">Combo Grande</h3>
              <p className="text-muted-foreground mb-3">35-40 peças premium</p>
              <p className="text-2xl font-bold text-primary">A partir de R$ 95</p>
            </div>
          </div>
          
          <Button
            size="lg"
            className="btn-luxury text-2xl px-16 py-8 shadow-gold-luxury"
            onClick={() => navigate('/cardapio')}
          >
            🍣 Montar Meu Combo
            <ArrowRight className="ml-4 h-6 w-6" />
          </Button>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 px-6 border-t border-border/50">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="fade-up-appetite">
              <h3 className="text-4xl font-bold text-foreground mb-8 hover-appetite">
                Horário de Funcionamento
              </h3>
              <div className="space-y-6">
                <div className="card-gourmet">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-bold text-lg text-foreground">Segunda à Sexta</p>
                      <p className="text-muted-foreground">Delivery & Balcão</p>
                    </div>
                    <p className="text-xl font-bold text-primary">18:00 - 23:30</p>
                  </div>
                </div>
                <div className="card-gourmet">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-bold text-lg text-foreground">Sábado e Domingo</p>
                      <p className="text-muted-foreground">Delivery & Balcão</p>
                    </div>
                    <p className="text-xl font-bold text-primary">18:00 - 00:00</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center slide-luxury">
              <div className="card-deluxe">
                <div className="text-6xl mb-4">🟢</div>
                <h4 className="text-2xl font-bold text-sushi-emerald mb-2">
                  Aberto Agora!
                </h4>
                <p className="text-muted-foreground mb-4">
                  Fazendo entregas em todo Recife
                </p>
                <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>Tempo médio de entrega: 35-45min</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Index