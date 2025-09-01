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
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-depth">
      <div className="container flex h-18 items-center">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="text-3xl">🍣</div>
          <div>
            <h1 className="text-2xl font-bold">
              <span className="hover-appetite cursor-pointer">Sushi</span>
              {' '}
              <span className="hover-luxury cursor-pointer">House</span>
            </h1>
            <p className="text-xs text-muted-foreground">Sabor Autêntico Japonês</p>
          </div>
        </div>

        {/* Location & Status */}
        <div className="hidden md:flex items-center space-x-6 ml-8">
          <div className="flex items-center space-x-2 glass-luxury p-2 rounded-lg">
            <MapPin className="h-4 w-4 text-sushi-gold" />
            <span className="font-medium text-foreground">Recife, PE</span>
          </div>
          <div className="flex items-center space-x-2 glass-appetite p-2 rounded-lg">
            <Clock className="h-4 w-4 text-sushi-emerald" />
            <span className="text-sushi-emerald font-medium">Aberto</span>
            <span className="text-muted-foreground text-sm">até 23:00</span>
          </div>
        </div>

        <div className="flex-1" />

        {/* Actions */}
        <div className="flex items-center space-x-3">
          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="h-10 w-10 hover:bg-primary/10 transition-colors"
          >
            {theme === 'dark' ? (
              <Sun className="h-5 w-5 text-sushi-gold" />
            ) : (
              <Moon className="h-5 w-5 text-sushi-navy" />
            )}
          </Button>

          {/* Cart */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleCart}
            className="h-10 w-10 relative hover:bg-primary/10 transition-all duration-300 hover:scale-105"
          >
            <ShoppingCart className="h-5 w-5 text-primary" />
            {cartState.items.length > 0 && (
              <Badge className="absolute -top-2 -right-2 h-6 w-6 flex items-center justify-center text-xs badge-hot animate-pulse">
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