import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, Star, Clock, Truck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import heroSushi from '@/assets/hero-sushi.jpg'

const Index = () => {
  const navigate = useNavigate()

  const features = [
    {
      icon: <Star className="h-8 w-8 text-primary" />,
      title: "Qualidade Premium",
      description: "Ingredientes frescos e selecionados diariamente"
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Delivery Rápido", 
      description: "Entrega em até 45 minutos na sua região"
    },
    {
      icon: <Truck className="h-8 w-8 text-primary" />,
      title: "Frete Grátis",
      description: "Pedidos acima de R$ 60,00 sem taxa de entrega"
    }
  ]

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroSushi})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-up">
            🍣 <span className="text-primary">Sushi House</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            O melhor sushi da cidade, agora no conforto da sua casa
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <Button
              size="lg"
              className="btn-sushi-gold text-lg px-8 py-4"
              onClick={() => navigate('/cardapio')}
            >
              Ver Cardápio
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button
              size="lg"
              className="btn-sushi-outline text-lg px-8 py-4"
              onClick={() => navigate('/promocoes')}
            >
              Promoções
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Por que escolher a Sushi House?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="card-sushi text-center animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Monte seu Combo de Sushi
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Personalize seu pedido escolhendo suas peças favoritas
          </p>
          
          <Button
            size="lg"
            className="btn-sushi-gold text-lg px-12 py-4"
            onClick={() => navigate('/cardapio')}
          >
            Montar Combo
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 px-4 border-t">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Horário de Funcionamento
          </h3>
          <div className="grid md:grid-cols-2 gap-6 text-muted-foreground">
            <div>
              <p className="font-semibold">Segunda à Sexta</p>
              <p>18:00 - 23:30</p>
            </div>
            <div>
              <p className="font-semibold">Sábado e Domingo</p>
              <p>18:00 - 00:00</p>
            </div>
          </div>
          <p className="mt-6 text-green-500 font-semibold">
            🟢 Aberto agora - Fazendo entregas!
          </p>
        </div>
      </section>
    </main>
  )
}

export default Index