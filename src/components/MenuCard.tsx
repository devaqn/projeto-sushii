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
  isNew?: boolean
  isHot?: boolean
  isPremium?: boolean
}

const MenuCard: React.FC<MenuCardProps> = ({
  id,
  name,
  description,
  price,
  image,
  category,
  className = '',
  isNew,
  isHot,
  isPremium
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
    <Card className={`menu-card-premium ${className}`}>
      <div className="relative aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-125"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1">
          {isNew && <span className="badge-new">Novo</span>}
          {isHot && <span className="badge-hot">Popular</span>}
          {isPremium && <span className="badge-premium">Premium</span>}
        </div>
      </div>
      
      <div className="p-5 relative z-10">
        <h3 className="font-bold text-xl text-foreground mb-2 hover-appetite">
          {name}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-2">
          {description}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-primary hover-luxury">
              R$ {price.toFixed(2).replace('.', ',')}
            </span>
            <span className="text-xs text-muted-foreground">
              {category}
            </span>
          </div>
          
          <Button
            onClick={handleAddToCart}
            className="btn-appetite shadow-red-glow hover:shadow-gold-luxury transition-all duration-300"
          >
            <Plus className="h-4 w-4 mr-2" />
            Adicionar
          </Button>
        </div>
      </div>
    </Card>
  )
}

export default MenuCard