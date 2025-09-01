import React from 'react'
import { ShoppingCart, Sun, Moon, MapPin, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useTheme } from '@/contexts/ThemeContext'
import { useCart } from '@/contexts/CartContext'

const Header = () => {
  const { theme, toggleTheme } = useTheme()
  const { state: cartState, toggleCart } = useCart()

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <h1 className="text-2xl font-bold text-foreground">
            🍣 <span className="text-primary">Sushi House</span>
          </h1>
        </div>

        {/* Location & Status */}
        <div className="hidden md:flex items-center space-x-4 ml-8">
          <div className="flex items-center space-x-1 text-sm">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <span className="font-medium text-foreground">São Paulo, SP</span>
          </div>
          <div className="flex items-center space-x-1 text-sm">
            <Clock className="h-4 w-4 text-green-500" />
            <span className="text-green-500 font-medium">Aberto</span>
            <span className="text-muted-foreground">até 23:00</span>
          </div>
        </div>

        <div className="flex-1" />

        {/* Actions */}
        <div className="flex items-center space-x-2">
          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="h-9 w-9"
          >
            {theme === 'dark' ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </Button>

          {/* Cart */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleCart}
            className="h-9 w-9 relative"
          >
            <ShoppingCart className="h-4 w-4" />
            {cartState.items.length > 0 && (
              <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center text-xs bg-primary text-primary-foreground">
                {cartState.items.reduce((sum, item) => sum + item.quantity, 0)}
              </Badge>
            )}
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Header