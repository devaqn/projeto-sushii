import React from 'react'
import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useCart } from '@/contexts/CartContext'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const { state, removeItem, updateQuantity, closeCart } = useCart()
  const navigate = useNavigate()

  const handleCheckout = () => {
    closeCart()
    navigate('/checkout')
  }

  if (!state.isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 z-50"
        onClick={closeCart}
      />
      
      {/* Cart Sidebar */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-background z-50 shadow-2xl transform transition-transform duration-300">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="text-xl font-bold text-foreground flex items-center">
              <ShoppingBag className="h-5 w-5 mr-2" />
              Seu Pedido
            </h2>
            <Button variant="ghost" size="icon" onClick={closeCart}>
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-auto p-6">
            {state.items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="h-16 w-16 text-muted-foreground mb-4" />
                <p className="text-lg font-medium text-muted-foreground">
                  Seu carrinho está vazio
                </p>
                <p className="text-sm text-muted-foreground">
                  Adicione itens deliciosos do nosso cardápio!
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {state.items.map((item) => (
                  <div key={item.id} className="flex items-center space-x-3 p-4 bg-card rounded-lg border">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    
                    <div className="flex-1">
                      <h3 className="font-medium text-foreground">{item.name}</h3>
                      <p className="text-sm text-muted-foreground">{item.category}</p>
                      <p className="font-bold text-primary">
                        R$ {item.price.toFixed(2).replace('.', ',')}
                      </p>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Button
                        size="icon"
                        variant="outline"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      
                      <span className="w-8 text-center font-medium">
                        {item.quantity}
                      </span>
                      
                      <Button
                        size="icon"
                        variant="outline"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                    
                    <Button
                      size="icon"
                      variant="ghost"
                      className="h-8 w-8 text-destructive hover:text-destructive"
                      onClick={() => removeItem(item.id)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {state.items.length > 0 && (
            <div className="border-t p-6 space-y-4">
              <div className="flex justify-between items-center text-lg font-bold">
                <span>Total:</span>
                <span className="text-primary">
                  R$ {state.total.toFixed(2).replace('.', ',')}
                </span>
              </div>
              
              <Button
                onClick={handleCheckout}
                className="w-full btn-sushi-gold"
                size="lg"
              >
                Finalizar Pedido
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Cart