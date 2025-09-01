import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, CreditCard, QrCode, Shield, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useCart } from '@/contexts/CartContext'

const Payment = () => {
  const navigate = useNavigate()
  const { state, clearCart } = useCart()
  const [paymentMethod, setPaymentMethod] = useState('pix')
  const [isProcessing, setIsProcessing] = useState(false)
  const [isCompleted, setIsCompleted] = useState(false)

  const deliveryFee = state.total >= 60 ? 0 : 5.90
  const finalTotal = state.total + deliveryFee

  const handlePayment = async () => {
    setIsProcessing(true)
    
    // Simular processamento do pagamento
    await new Promise(resolve => setTimeout(resolve, 3000))
    
    setIsProcessing(false)
    setIsCompleted(true)
    
    // Limpar carrinho após pagamento bem-sucedido
    setTimeout(() => {
      clearCart()
      navigate('/')
    }, 3000)
  }

  if (isCompleted) {
    return (
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto text-center">
          <Card className="card-premium p-8">
            <div className="mb-6">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-10 h-10 text-green-600" />
              </div>
              <h1 className="text-2xl font-bold text-foreground mb-2">
                Pagamento Confirmado! 🎉
              </h1>
              <p className="text-muted-foreground">
                Seu pedido foi recebido e está sendo preparado
              </p>
            </div>
            
            <div className="bg-muted/20 rounded-lg p-4 mb-6">
              <p className="text-sm text-muted-foreground">Número do Pedido</p>
              <p className="text-xl font-bold text-primary">#SH2024001</p>
            </div>
            
            <p className="text-sm text-muted-foreground mb-4">
              Tempo estimado de entrega: 35-45 minutos
            </p>
            
            <Button
              onClick={() => navigate('/')}
              className="btn-sushi-gold w-full"
            >
              Voltar ao Início
            </Button>
          </Card>
        </div>
      </main>
    )
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="mb-6">
          <Button
            variant="ghost"
            onClick={() => navigate('/checkout')}
            className="mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar ao Checkout
          </Button>
          
          <h1 className="text-3xl font-bold text-foreground">
            Pagamento
          </h1>
          <p className="text-muted-foreground">
            Escolha sua forma de pagamento e finalize seu pedido
          </p>
        </div>

        {/* Order Summary */}
        <Card className="card-sushi mb-8">
          <h2 className="text-xl font-semibold text-foreground mb-4">
            Resumo do Pedido
          </h2>
          
          <div className="space-y-2 mb-4">
            <div className="flex justify-between">
              <span>Subtotal ({state.items.length} itens):</span>
              <span>R$ {state.total.toFixed(2).replace('.', ',')}</span>
            </div>
            <div className="flex justify-between">
              <span>Taxa de entrega:</span>
              <span>
                {deliveryFee === 0 ? (
                  <span className="text-green-500">Grátis</span>
                ) : (
                  `R$ ${deliveryFee.toFixed(2).replace('.', ',')}`
                )}
              </span>
            </div>
          </div>
          
          <div className="flex justify-between text-xl font-bold text-primary border-t pt-4">
            <span>Total a Pagar:</span>
            <span>R$ {finalTotal.toFixed(2).replace('.', ',')}</span>
          </div>
        </Card>

        {/* Payment Methods */}
        <Card className="card-sushi">
          <h2 className="text-xl font-semibold text-foreground mb-6">
            Forma de Pagamento
          </h2>

          <Tabs value={paymentMethod} onValueChange={setPaymentMethod}>
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="pix" className="flex items-center gap-2">
                <QrCode className="h-4 w-4" />
                PIX
              </TabsTrigger>
              <TabsTrigger value="credit" className="flex items-center gap-2">
                <CreditCard className="h-4 w-4" />
                Crédito
              </TabsTrigger>
              <TabsTrigger value="debit" className="flex items-center gap-2">
                <CreditCard className="h-4 w-4" />
                Débito
              </TabsTrigger>
            </TabsList>

            <TabsContent value="pix" className="mt-6">
              <div className="text-center">
                <div className="bg-muted/20 p-8 rounded-lg mb-6">
                  <QrCode className="w-32 h-32 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-muted-foreground">
                    QR Code será gerado após confirmar o pagamento
                  </p>
                </div>
                
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg mb-6">
                  <p className="text-green-700 dark:text-green-400 font-medium">
                    ✅ Pagamento PIX - Aprovação instantânea
                  </p>
                  <p className="text-sm text-green-600 dark:text-green-500">
                    Escaneie o código QR ou copie a chave PIX
                  </p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="credit" className="mt-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="cardNumber">Número do Cartão</Label>
                  <Input 
                    id="cardNumber" 
                    placeholder="0000 0000 0000 0000"
                    maxLength={19}
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="expiry">Validade</Label>
                    <Input id="expiry" placeholder="MM/AA" maxLength={5} />
                  </div>
                  <div>
                    <Label htmlFor="cvv">CVV</Label>
                    <Input id="cvv" placeholder="123" maxLength={4} />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="cardName">Nome no Cartão</Label>
                  <Input id="cardName" placeholder="Nome como está no cartão" />
                </div>
                
                <div>
                  <Label htmlFor="installments">Parcelas</Label>
                  <select className="w-full p-2 border rounded-lg">
                    <option>1x R$ {finalTotal.toFixed(2).replace('.', ',')} sem juros</option>
                    <option>2x R$ {(finalTotal / 2).toFixed(2).replace('.', ',')} sem juros</option>
                    <option>3x R$ {(finalTotal / 3).toFixed(2).replace('.', ',')} sem juros</option>
                  </select>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="debit" className="mt-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="debitCardNumber">Número do Cartão</Label>
                  <Input 
                    id="debitCardNumber" 
                    placeholder="0000 0000 0000 0000"
                    maxLength={19}
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="debitExpiry">Validade</Label>
                    <Input id="debitExpiry" placeholder="MM/AA" maxLength={5} />
                  </div>
                  <div>
                    <Label htmlFor="debitCvv">CVV</Label>
                    <Input id="debitCvv" placeholder="123" maxLength={4} />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="debitCardName">Nome no Cartão</Label>
                  <Input id="debitCardName" placeholder="Nome como está no cartão" />
                </div>
                
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <p className="text-blue-700 dark:text-blue-400 font-medium">
                    💳 Débito - Desconto direto na conta
                  </p>
                  <p className="text-sm text-blue-600 dark:text-blue-500">
                    Pagamento processado instantaneamente
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          {/* Security Info */}
          <div className="flex items-center justify-center mt-6 p-4 bg-muted/20 rounded-lg">
            <Shield className="h-5 w-5 text-green-500 mr-2" />
            <span className="text-sm text-muted-foreground">
              Pagamento seguro processado pelo Mercado Pago
            </span>
          </div>

          {/* Complete Payment Button */}
          <Button
            onClick={handlePayment}
            disabled={isProcessing || state.items.length === 0}
            className="w-full btn-sushi-gold mt-6"
            size="lg"
          >
            {isProcessing ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                Processando Pagamento...
              </>
            ) : (
              `Pagar R$ ${finalTotal.toFixed(2).replace('.', ',')}`
            )}
          </Button>
        </Card>
      </div>
    </main>
  )
}

export default Payment