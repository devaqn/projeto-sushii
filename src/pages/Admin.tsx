import React, { useState } from 'react'
import { Eye, EyeOff, Users, ShoppingBag, TrendingUp, Clock, CheckCircle, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const Admin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [credentials, setCredentials] = useState({ username: '', password: '' })
  const [loginError, setLoginError] = useState('')

  // Mock data for demonstration
  const stats = {
    todayOrders: 42,
    revenue: 2850.50,
    avgOrder: 67.87,
    activeOrders: 8
  }

  const orders = [
    {
      id: '#SH2024001',
      customer: 'Maria Silva',
      items: 'Combo 20 peças + Yakisoba',
      total: 85.00,
      status: 'preparing',
      time: '15 min atrás'
    },
    {
      id: '#SH2024002', 
      customer: 'João Santos',
      items: 'Hot Roll + Temaki Salmão',
      total: 42.50,
      status: 'ready',
      time: '5 min atrás'
    },
    {
      id: '#SH2024003',
      customer: 'Ana Costa',
      items: 'Combo Família + 2 Refrigerantes',
      total: 165.00,
      status: 'delivered',
      time: '1 hora atrás'
    },
    {
      id: '#SH2024004',
      customer: 'Pedro Lima',
      items: 'Sashimi + Uramaki California',
      total: 48.00,
      status: 'preparing',
      time: '25 min atrás'
    }
  ]

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Credenciais de exemplo - em produção seria validado no backend
    if (credentials.username === 'admin' && credentials.password === 'sushihouse2024') {
      setIsLoggedIn(true)
      setLoginError('')
    } else {
      setLoginError('Credenciais incorretas. Tente novamente.')
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'preparing':
        return 'bg-yellow-500 hover:bg-yellow-500'
      case 'ready':
        return 'bg-green-500 hover:bg-green-500'
      case 'delivered':
        return 'bg-gray-500 hover:bg-gray-500'
      default:
        return 'bg-blue-500 hover:bg-blue-500'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'preparing':
        return 'Preparando'
      case 'ready':
        return 'Pronto'
      case 'delivered':
        return 'Entregue'
      default:
        return 'Pendente'
    }
  }

  if (!isLoggedIn) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/20">
        <Card className="w-full max-w-md p-8 card-premium">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">
              🍣 Sushi House
            </h1>
            <p className="text-muted-foreground">Painel Administrativo</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <Label htmlFor="username">Usuário</Label>
              <Input
                id="username"
                type="text"
                placeholder="Digite seu usuário"
                value={credentials.username}
                onChange={(e) => setCredentials(prev => ({ ...prev, username: e.target.value }))}
                required
              />
            </div>

            <div>
              <Label htmlFor="password">Senha</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Digite sua senha"
                  value={credentials.password}
                  onChange={(e) => setCredentials(prev => ({ ...prev, password: e.target.value }))}
                  required
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
            </div>

            {loginError && (
              <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-3">
                <p className="text-sm text-destructive">{loginError}</p>
              </div>
            )}

            <Button type="submit" className="w-full btn-sushi-gold">
              Fazer Login
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-xs text-muted-foreground">
              Demo: usuário <strong>admin</strong> | senha <strong>sushihouse2024</strong>
            </p>
          </div>
        </Card>
      </main>
    )
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground">
            Painel Administrativo
          </h1>
          <p className="text-muted-foreground">
            Gerencie pedidos e acompanhe o desempenho do restaurante
          </p>
        </div>
        
        <Button
          variant="outline"
          onClick={() => setIsLoggedIn(false)}
        >
          Sair
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <Card className="card-sushi">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Pedidos Hoje</p>
              <p className="text-2xl font-bold text-primary">{stats.todayOrders}</p>
            </div>
            <ShoppingBag className="h-8 w-8 text-primary/60" />
          </div>
        </Card>

        <Card className="card-sushi">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Faturamento</p>
              <p className="text-2xl font-bold text-primary">
                R$ {stats.revenue.toFixed(2).replace('.', ',')}
              </p>
            </div>
            <TrendingUp className="h-8 w-8 text-green-500" />
          </div>
        </Card>

        <Card className="card-sushi">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Ticket Médio</p>
              <p className="text-2xl font-bold text-primary">
                R$ {stats.avgOrder.toFixed(2).replace('.', ',')}
              </p>
            </div>
            <Users className="h-8 w-8 text-blue-500" />
          </div>
        </Card>

        <Card className="card-sushi">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Em Preparo</p>
              <p className="text-2xl font-bold text-orange-500">{stats.activeOrders}</p>
            </div>
            <Clock className="h-8 w-8 text-orange-500" />
          </div>
        </Card>
      </div>

      {/* Main Content */}
      <Tabs defaultValue="orders" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="orders">Pedidos</TabsTrigger>
          <TabsTrigger value="analytics">Relatórios</TabsTrigger>
        </TabsList>

        <TabsContent value="orders" className="mt-6">
          <Card className="card-sushi">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-foreground">
                Pedidos em Andamento
              </h2>
              <div className="flex items-center space-x-2">
                <Badge variant="outline" className="flex items-center">
                  <AlertCircle className="h-3 w-3 mr-1" />
                  {orders.filter(o => o.status === 'preparing').length} preparando
                </Badge>
                <Badge variant="outline" className="flex items-center bg-green-50 dark:bg-green-900/20">
                  <CheckCircle className="h-3 w-3 mr-1" />
                  {orders.filter(o => o.status === 'ready').length} prontos
                </Badge>
              </div>
            </div>

            <div className="space-y-4">
              {orders.map((order) => (
                <div
                  key={order.id}
                  className="flex items-center justify-between p-4 bg-muted/20 rounded-lg hover:bg-muted/30 transition-colors"
                >
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="font-semibold text-foreground">{order.id}</h3>
                      <Badge className={getStatusColor(order.status)}>
                        {getStatusText(order.status)}
                      </Badge>
                    </div>
                    <p className="text-foreground font-medium">{order.customer}</p>
                    <p className="text-sm text-muted-foreground">{order.items}</p>
                    <p className="text-xs text-muted-foreground mt-1">{order.time}</p>
                  </div>
                  
                  <div className="text-right">
                    <p className="text-lg font-bold text-primary">
                      R$ {order.total.toFixed(2).replace('.', ',')}
                    </p>
                    {order.status === 'preparing' && (
                      <Button size="sm" className="btn-sushi-gold mt-2">
                        Marcar Pronto
                      </Button>
                    )}
                    {order.status === 'ready' && (
                      <Button size="sm" variant="outline" className="mt-2">
                        Entregue
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="mt-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="card-sushi">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Vendas por Período
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Hoje</span>
                  <span className="font-semibold">R$ 2.850,50</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Ontem</span>
                  <span className="font-semibold">R$ 3.120,00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Esta Semana</span>
                  <span className="font-semibold">R$ 18.450,30</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Este Mês</span>
                  <span className="font-semibold">R$ 68.920,15</span>
                </div>
              </div>
            </Card>

            <Card className="card-sushi">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Pratos Mais Vendidos
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Combo 20 peças</span>
                  <span className="font-semibold">156 pedidos</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Hot Roll Salmão</span>
                  <span className="font-semibold">89 pedidos</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Temaki Salmão</span>
                  <span className="font-semibold">67 pedidos</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Combo Executivo</span>
                  <span className="font-semibold">54 pedidos</span>
                </div>
              </div>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </main>
  )
}

export default Admin