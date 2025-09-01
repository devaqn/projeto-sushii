import React, { useState } from 'react'
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import MenuCard from '@/components/MenuCard'
import { menuItems, categories } from '@/data/menuItems'

const Menu = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('combo')

  const filteredItems = menuItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory
    
    return matchesSearch && matchesCategory
  })

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-foreground mb-4">
          Cardápio Digital
        </h1>
        <p className="text-xl text-muted-foreground">
          Escolha seus pratos favoritos e monte seu pedido perfeito
        </p>
      </div>

      {/* Search */}
      <div className="mb-8">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Buscar pratos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {/* Categories */}
      <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
        <TabsList className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 mb-8">
          {categories.map((category) => (
            <TabsTrigger 
              key={category.id} 
              value={category.id}
              className="flex flex-col items-center gap-1 p-3"
            >
              <span className="text-lg">{category.icon}</span>
              <span className="text-xs">{category.name}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        {categories.map((category) => (
          <TabsContent key={category.id} value={category.id}>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-foreground mb-2">
                {category.icon} {category.name}
              </h2>
              <p className="text-muted-foreground">
                {filteredItems.filter(item => item.category === category.id).length} item(s) disponível(is)
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredItems
                .filter(item => item.category === category.id)
                .map((item) => (
                  <MenuCard
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    description={item.description}
                    price={item.price}
                    image={item.image}
                    category={item.category}
                  />
                ))}
            </div>

            {filteredItems.filter(item => item.category === category.id).length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">
                  Nenhum item encontrado nesta categoria
                </p>
              </div>
            )}
          </TabsContent>
        ))}
      </Tabs>

      {/* Custom Combo Section */}
      <section className="mt-16 p-8 bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Monte seu Combo Personalizado
          </h2>
          <p className="text-muted-foreground mb-6">
            Selecione suas peças favoritas e crie o combo perfeito para você
          </p>
          
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="bg-card p-4 rounded-lg border">
              <h3 className="font-semibold text-foreground mb-2">Combo Pequeno</h3>
              <p className="text-sm text-muted-foreground">15-20 peças</p>
              <p className="text-primary font-bold">A partir de R$ 45,00</p>
            </div>
            <div className="bg-card p-4 rounded-lg border">
              <h3 className="font-semibold text-foreground mb-2">Combo Médio</h3>
              <p className="text-sm text-muted-foreground">25-30 peças</p>
              <p className="text-primary font-bold">A partir de R$ 70,00</p>
            </div>
            <div className="bg-card p-4 rounded-lg border">
              <h3 className="font-semibold text-foreground mb-2">Combo Grande</h3>
              <p className="text-sm text-muted-foreground">35-40 peças</p>
              <p className="text-primary font-bold">A partir de R$ 95,00</p>
            </div>
          </div>

          <Button className="btn-sushi-gold" size="lg">
            Começar a Montar Combo
          </Button>
        </div>
      </section>
    </main>
  )
}

export default Menu