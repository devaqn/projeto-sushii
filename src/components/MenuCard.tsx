import React from 'react'
import { Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { useCart } from '@/contexts/CartContext'
import { CartItem } from '@/contexts/CartContext'

interface MenuCardProps {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: string
  className?: string
}

const MenuCard: React.FC<MenuCardProps> = ({
  id,
  name,
  description,
  price,
  image,
  category,
  className = ''
}) => {
  const { addItem } = useCart()

  const handleAddToCart = () => {
    const item: CartItem = {
      id,
      name,
      price,
      image,
      quantity: 1,
      category,
      description
    }
    addItem(item)
  }

  return (
    <Card className={`menu-card ${className}`}>
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-lg text-foreground mb-1">{name}</h3>
        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{description}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-primary">
            R$ {price.toFixed(2).replace('.', ',')}
          </span>
          
          <Button
            onClick={handleAddToCart}
            size="sm"
            className="btn-sushi-gold"
          >
            <Plus className="h-4 w-4 mr-1" />
            Adicionar
          </Button>
        </div>
      </div>
    </Card>
  )
}

export default MenuCard