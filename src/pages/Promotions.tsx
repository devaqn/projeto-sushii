import React from 'react'
import { ArrowLeft, Clock, Tag } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useCart } from '@/contexts/CartContext'
import { promotions } from '@/data/menuItems'

const Promotions = () => {
  const navigate = useNavigate()
  const { addItem } = useCart()

  const handleAddPromotion = (promotion: any) => {
    const item = {
      id: promotion.id,
      name: promotion.name,
      price: promotion.price,
      image: promotion.image,
      quantity: 1,
      category: 'promocao' as any,
      description: promotion.description
    }
    addItem(item)
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Button
          variant="ghost"
          onClick={() => navigate('/')}
          className="mb-4"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Voltar ao Início
        </Button>
        
        <h1 className="text-4xl font-bold text-foreground mb-4">
          🔥 Promoções Especiais
        </h1>
        <p className="text-xl text-muted-foreground">
          Aproveite nossas ofertas exclusivas e economize no seu pedido!
        </p>
      </div>

      {/* Promotion Banner */}
      <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-2xl p-8 mb-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          🎉 Semana do Sushi
        </h2>
        <p className="text-lg opacity-90 mb-4">
          Descontos de até 50% em combos selecionados!
        </p>
        <Badge variant="secondary" className="bg-white/20 text-white">
          <Clock className="h-3 w-3 mr-1" />
          Válido até o final do mês
        </Badge>
      </div>

      {/* Promotions Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {promotions.map((promotion, index) => (
          <Card key={promotion.id} className="card-premium overflow-hidden animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="relative">
              <img
                src={promotion.image}
                alt={promotion.name}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-4 left-4">
                <Badge className="bg-red-500 hover:bg-red-500 text-white">
                  <Tag className="h-3 w-3 mr-1" />
                  {Math.round(((promotion.originalPrice - promotion.price) / promotion.originalPrice) * 100)}% OFF
                </Badge>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-2">
                {promotion.name}
              </h3>
              <p className="text-muted-foreground mb-4 text-sm">
                {promotion.description}
              </p>
              
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl font-bold text-primary">
                  R$ {promotion.price.toFixed(2).replace('.', ',')}
                </span>
                <span className="text-lg text-muted-foreground line-through">
                  R$ {promotion.originalPrice.toFixed(2).replace('.', ',')}
                </span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 mr-1" />
                  Até {new Date(promotion.validUntil).toLocaleDateString('pt-BR')}
                </div>
                
                <Button
                  onClick={() => handleAddPromotion(promotion)}
                  className="btn-sushi-gold"
                  size="sm"
                >
                  Pedir Agora
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Special Offers Section */}
      <section className="bg-card rounded-2xl p-8 border">
        <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
          🎯 Ofertas Especiais do Dia
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-r from-green-500/10 to-green-600/10 p-6 rounded-xl border border-green-200 dark:border-green-800">
            <h3 className="text-lg font-semibold text-green-700 dark:text-green-400 mb-2">
              🍱 Combo Segunda-feira
            </h3>
            <p className="text-green-600 dark:text-green-500 mb-3">
              20% OFF em todos os combos executivos
            </p>
            <p className="text-sm text-muted-foreground">
              Válido apenas às segundas-feiras
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-blue-500/10 to-blue-600/10 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
            <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-400 mb-2">
              🥤 Combo + Bebida
            </h3>
            <p className="text-blue-600 dark:text-blue-500 mb-3">
              Bebida grátis em pedidos acima de R$ 80
            </p>
            <p className="text-sm text-muted-foreground">
              Escolha entre refrigerantes ou chá gelado
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-purple-500/10 to-purple-600/10 p-6 rounded-xl border border-purple-200 dark:border-purple-800">
            <h3 className="text-lg font-semibold text-purple-700 dark:text-purple-400 mb-2">
              👥 Pedido em Grupo
            </h3>
            <p className="text-purple-600 dark:text-purple-500 mb-3">
              15% OFF em pedidos acima de R$ 150
            </p>
            <p className="text-sm text-muted-foreground">
              Perfeito para compartilhar com a família
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 p-6 rounded-xl border border-orange-200 dark:border-orange-800">
            <h3 className="text-lg font-semibold text-orange-700 dark:text-orange-400 mb-2">
              🌙 Happy Hour
            </h3>
            <p className="text-orange-600 dark:text-orange-500 mb-3">
              10% OFF das 18h às 20h
            </p>
            <p className="text-sm text-muted-foreground">
              Todos os dias da semana
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center mt-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Não perca essas ofertas!
        </h2>
        <p className="text-muted-foreground mb-6">
          Promoções por tempo limitado. Faça seu pedido agora!
        </p>
        
        <Button
          size="lg"
          className="btn-sushi-gold"
          onClick={() => navigate('/cardapio')}
        >
          Ver Cardápio Completo
        </Button>
      </section>
    </main>
  )
}

export default Promotions