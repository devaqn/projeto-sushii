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
    <main className="container mx-auto px-6 py-12">
      <div className="mb-12 text-center">
        <div className="fade-up-appetite">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="hover-appetite">Cardápio</span>
            <span className="text-primary ml-4">Digital</span>
          </h1>
          <p className="text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Descubra sabores autênticos e crie combinações únicas com nossos pratos premium
          </p>
        </div>
      </div>

      {/* Search */}
      <div className="mb-12 flex justify-center slide-luxury">
        <div className="relative max-w-xl w-full">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
          <Input
            placeholder="Buscar pratos deliciosos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-12 py-4 text-lg rounded-2xl border-2 border-primary/20 focus:border-primary transition-colors glass-luxury"
          />
        </div>
      </div>

      {/* Categories */}
      <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
        <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-11 mb-12 h-auto p-2 rounded-2xl glass-appetite">
          {categories.map((category) => (
            <TabsTrigger 
              key={category.id} 
              value={category.id}
              className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-primary/10 transition-all duration-300 hover:scale-105 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-red-glow"
            >
              <span className="text-2xl">{category.icon}</span>
              <span className="text-sm font-medium">{category.name}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        {categories.map((category) => (
          <TabsContent key={category.id} value={category.id} className="bounce-fresh">
            <div className="mb-8 text-center">
              <h2 className="text-4xl font-bold mb-4 hover-luxury">
                {category.icon} {category.name}
              </h2>
              <div className="flex justify-center items-center space-x-4">
                <span className="badge-hot">
                  {filteredItems.filter(item => item.category === category.id).length} opções disponíveis
                </span>
                {category.id === 'especiais' && (
                  <span className="badge-premium">Novos sabores!</span>
                )}
                {category.id === 'combo' && (
                  <span className="badge-new">Mais procurados!</span>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredItems
                .filter(item => item.category === category.id)
                .map((item, index) => (
                  <div key={item.id} className="fade-up-appetite" style={{ animationDelay: `${index * 0.1}s` }}>
                    <MenuCard
                      id={item.id}
                      name={item.name}
                      description={item.description}
                      price={item.price}
                      image={item.image}
                      category={item.category}
                      isNew={item.isNew}
                      isHot={item.isHot}
                      isPremium={item.isPremium}
                    />
                  </div>
                ))}
            </div>

            {filteredItems.filter(item => item.category === category.id).length === 0 && (
              <div className="text-center py-20">
                <div className="text-8xl mb-6 opacity-20">🍣</div>
                <p className="text-muted-foreground text-xl">
                  Nenhum item encontrado nesta categoria
                </p>
                <p className="text-muted-foreground">
                  Tente ajustar sua busca ou explore outras categorias
                </p>
              </div>
            )}
          </TabsContent>
        ))}
      </Tabs>

      {/* Custom Combo Section */}
      <section className="mt-20 card-deluxe slide-luxury">
        <div className="text-center">
          <div className="text-6xl mb-6">🍱</div>
          <h2 className="text-4xl font-bold mb-6 hover-appetite">
            Monte seu Combo Personalizado
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Selecione suas peças favoritas e crie a experiência perfeita do sushi japonês
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="card-gourmet bg-gradient-fresh/10">
              <div className="text-4xl mb-4">🥢</div>
              <h3 className="font-bold text-xl mb-2 text-foreground">Combo Pequeno</h3>
              <p className="text-muted-foreground mb-3">15-20 peças selecionadas</p>
              <p className="text-2xl font-bold text-primary">A partir de R$ 45,00</p>
            </div>
            <div className="card-gourmet bg-gradient-luxury/10">
              <div className="text-4xl mb-4">🍣</div>
              <h3 className="font-bold text-xl mb-2 text-foreground">Combo Médio</h3>
              <p className="text-muted-foreground mb-3">25-30 peças variadas</p>
              <p className="text-2xl font-bold text-primary">A partir de R$ 70,00</p>
            </div>
            <div className="card-gourmet bg-gradient-appetite/10">
              <div className="text-4xl mb-4">🍱</div>
              <h3 className="font-bold text-xl mb-2 text-foreground">Combo Grande</h3>
              <p className="text-muted-foreground mb-3">35-40 peças premium</p>
              <p className="text-2xl font-bold text-primary">A partir de R$ 95,00</p>
            </div>
          </div>

          <Button className="btn-luxury text-xl px-12 py-6" size="lg">
            ✨ Começar a Montar Combo
          </Button>
        </div>
      </section>
    </main>
  )
}

export default Menu