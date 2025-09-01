import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, MapPin, Clock, CreditCard } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { useCart } from '@/contexts/CartContext'

const Checkout = () => {
  const navigate = useNavigate()
  const { state } = useCart()

  const deliveryFee = state.total >= 60 ? 0 : 5.90
  const finalTotal = state.total + deliveryFee

  const handleProceedToPayment = () => {
    navigate('/pagamento')
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Button
          variant="ghost"
          onClick={() => navigate('/cardapio')}
          className="mb-4"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Voltar ao Cardápio
        </Button>
        
        <h1 className="text-3xl font-bold text-foreground">
          Finalizar Pedido
        </h1>
        <p className="text-muted-foreground">
          Revise seu pedido e preencha os dados para entrega
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Delivery Info */}
        <div className="lg:col-span-2 space-y-6">
          {/* Delivery Address */}
          <Card className="card-sushi">
            <div className="flex items-center mb-4">
              <MapPin className="h-5 w-5 text-primary mr-2" />
              <h2 className="text-xl font-semibold text-foreground">
                Endereço de Entrega
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="cep">CEP</Label>
                <Input id="cep" placeholder="00000-000" />
              </div>
              <div>
                <Label htmlFor="street">Rua</Label>
                <Input id="street" placeholder="Nome da rua" />
              </div>
              <div>
                <Label htmlFor="number">Número</Label>
                <Input id="number" placeholder="123" />
              </div>
              <div>
                <Label htmlFor="complement">Complemento</Label>
                <Input id="complement" placeholder="Apto, bloco..." />
              </div>
              <div>
                <Label htmlFor="neighborhood">Bairro</Label>
                <Input id="neighborhood" placeholder="Nome do bairro" />
              </div>
              <div>
                <Label htmlFor="city">Cidade</Label>
                <Input id="city" value="São Paulo" disabled />
              </div>
            </div>
          </Card>

          {/* Contact Info */}
          <Card className="card-sushi">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Dados de Contato
            </h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Nome Completo</Label>
                <Input id="name" placeholder="Seu nome" />
              </div>
              <div>
                <Label htmlFor="phone">Telefone</Label>
                <Input id="phone" placeholder="(11) 99999-9999" />
              </div>
            </div>
          </Card>

          {/* Delivery Options */}
          <Card className="card-sushi">
            <div className="flex items-center mb-4">
              <Clock className="h-5 w-5 text-primary mr-2" />
              <h2 className="text-xl font-semibold text-foreground">
                Opções de Entrega
              </h2>
            </div>
            
            <div className="space-y-3">
              <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-muted/50">
                <input type="radio" name="delivery" className="mr-3" defaultChecked />
                <div>
                  <p className="font-medium text-foreground">Entrega Normal</p>
                  <p className="text-sm text-muted-foreground">45-60 minutos</p>
                </div>
                <span className="ml-auto text-primary font-semibold">
                  {deliveryFee === 0 ? 'Grátis' : `R$ ${deliveryFee.toFixed(2).replace('.', ',')}`}
                </span>
              </label>
              
              <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-muted/50">
                <input type="radio" name="delivery" className="mr-3" />
                <div>
                  <p className="font-medium text-foreground">Entrega Expressa</p>
                  <p className="text-sm text-muted-foreground">20-30 minutos</p>
                </div>
                <span className="ml-auto text-primary font-semibold">+ R$ 8,90</span>
              </label>
            </div>
          </Card>

          {/* Additional Notes */}
          <Card className="card-sushi">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Observações (opcional)
            </h2>
            <Textarea 
              placeholder="Alguma observação sobre o pedido ou entrega..."
              className="min-h-[100px]"
            />
          </Card>
        </div>

        {/* Order Summary */}
        <div>
          <Card className="card-sushi sticky top-24">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Resumo do Pedido
            </h2>

            {state.items.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-muted-foreground">
                  Seu carrinho está vazio
                </p>
                <Button
                  onClick={() => navigate('/cardapio')}
                  className="btn-sushi-outline mt-4"
                >
                  Ir ao Cardápio
                </Button>
              </div>
            ) : (
              <>
                <div className="space-y-3 mb-6">
                  {state.items.map((item) => (
                    <div key={item.id} className="flex justify-between items-start">
                      <div className="flex-1">
                        <p className="font-medium text-foreground">
                          {item.quantity}x {item.name}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          R$ {item.price.toFixed(2).replace('.', ',')} cada
                        </p>
                      </div>
                      <p className="font-semibold text-foreground">
                        R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="border-t pt-4 space-y-2">
                  <div className="flex justify-between text-foreground">
                    <span>Subtotal:</span>
                    <span>R$ {state.total.toFixed(2).replace('.', ',')}</span>
                  </div>
                  
                  <div className="flex justify-between text-foreground">
                    <span>Taxa de entrega:</span>
                    <span>
                      {deliveryFee === 0 ? (
                        <span className="text-green-500">Grátis</span>
                      ) : (
                        `R$ ${deliveryFee.toFixed(2).replace('.', ',')}`
                      )}
                    </span>
                  </div>
                  
                  <div className="flex justify-between text-lg font-bold text-foreground border-t pt-2">
                    <span>Total:</span>
                    <span className="text-primary">
                      R$ {finalTotal.toFixed(2).replace('.', ',')}
                    </span>
                  </div>
                </div>

                <Button
                  onClick={handleProceedToPayment}
                  className="w-full btn-sushi-gold mt-6"
                  size="lg"
                >
                  <CreditCard className="h-4 w-4 mr-2" />
                  Ir para Pagamento
                </Button>

                {state.total < 60 && (
                  <p className="text-sm text-muted-foreground text-center mt-2">
                    Adicione R$ {(60 - state.total).toFixed(2).replace('.', ',')} para frete grátis!
                  </p>
                )}
              </>
            )}
          </Card>
        </div>
      </div>
    </main>
  )
}

export default Checkout