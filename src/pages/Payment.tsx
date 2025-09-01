import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, CreditCard, QrCode, Shield, Check, Copy, Clock, Info } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useCart } from '@/contexts/CartContext'
import QRCodeGenerator from '@/components/QRCodeGenerator'

const Payment = () => {
  const navigate = useNavigate()
  const { state, clearCart } = useCart()
  const [paymentMethod, setPaymentMethod] = useState('pix')
  const [isProcessing, setIsProcessing] = useState(false)
  const [isCompleted, setIsCompleted] = useState(false)
  const [pixCopied, setPixCopied] = useState(false)

  const deliveryFee = state.total >= 60 ? 0 : 5.90
  const finalTotal = state.total + deliveryFee

  // Chave PIX real fornecida pelo usuário
  const pixKey = "pedromiguelaqn@gmail.com"
  
  // Criar string PIX para o QR Code
  const pixString = `00020126580014br.gov.bcb.pix0136${pixKey}52040000530398654${finalTotal.toFixed(2)}5802BR5925Pedro Miguel6009Sao Paulo62070503***6304`

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
    }, 4000)
  }

  const copyPixKey = () => {
    navigator.clipboard.writeText(pixKey)
    setPixCopied(true)
    setTimeout(() => setPixCopied(false), 2000)
  }

  if (isCompleted) {
    return (
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-lg mx-auto text-center">
          <Card className="card-deluxe p-10 fade-up-appetite">
            <div className="mb-8">
              <div className="w-24 h-24 bg-gradient-fresh rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                <Check className="w-12 h-12 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-foreground mb-4 hover-appetite">
                Pagamento Confirmado! 🎉
              </h1>
              <p className="text-muted-foreground text-lg">
                Seu pedido foi recebido e está sendo preparado com carinho pelos nossos chefs
              </p>
            </div>
            
            <div className="glass-luxury rounded-2xl p-6 mb-8">
              <p className="text-sm text-muted-foreground mb-2">Número do Pedido</p>
              <p className="text-2xl font-bold text-primary">#SH2024001</p>
              <div className="flex items-center justify-center mt-4 text-sm text-muted-foreground">
                <Clock className="h-4 w-4 mr-2" />
                <span>Tempo estimado: 35-45 minutos</span>
              </div>
            </div>
            
            <Button
              onClick={() => navigate('/')}
              className="btn-luxury w-full text-lg py-4"
            >
              ✨ Voltar ao Início
            </Button>
          </Card>
        </div>
      </main>
    )
  }

  return (
    <main className="container mx-auto px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate('/checkout')}
            className="mb-6 hover:bg-primary/10 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Voltar ao Checkout
          </Button>
          
          <div className="text-center mb-8 fade-up-appetite">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="hover-appetite">Pagamento</span>
              <span className="text-primary ml-4">Seguro</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Finalize seu pedido de forma rápida e segura
            </p>
          </div>
        </div>

        {/* Order Summary */}
        <Card className="card-gourmet mb-8 slide-luxury">
          <h2 className="text-2xl font-bold text-foreground mb-6 hover-luxury">
            💰 Resumo do Pedido
          </h2>
          
          <div className="space-y-4 mb-6">
            <div className="flex justify-between items-center">
              <span className="text-lg">Subtotal ({state.items.length} itens):</span>
              <span className="text-lg font-semibold">R$ {state.total.toFixed(2).replace('.', ',')}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-lg">Taxa de entrega:</span>
              <span className="text-lg font-semibold">
                {deliveryFee === 0 ? (
                  <span className="text-sushi-emerald">Grátis! 🎉</span>
                ) : (
                  `R$ ${deliveryFee.toFixed(2).replace('.', ',')}`
                )}
              </span>
            </div>
          </div>
          
          <div className="flex justify-between text-2xl font-bold text-primary border-t border-border pt-6">
            <span>Total a Pagar:</span>
            <span className="hover-luxury">R$ {finalTotal.toFixed(2).replace('.', ',')}</span>
          </div>
        </Card>

        {/* Payment Methods */}
        <Card className="card-gourmet bounce-fresh">
          <h2 className="text-2xl font-bold text-foreground mb-8 hover-appetite">
            🔐 Forma de Pagamento
          </h2>

          <Tabs value={paymentMethod} onValueChange={setPaymentMethod}>
            <TabsList className="grid w-full grid-cols-3 glass-luxury p-2 rounded-2xl">
              <TabsTrigger 
                value="pix" 
                className="flex items-center gap-3 py-4 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-red-glow"
              >
                <QrCode className="h-5 w-5" />
                PIX Instantâneo
              </TabsTrigger>
              <TabsTrigger 
                value="credit" 
                className="flex items-center gap-3 py-4 data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground"
              >
                <CreditCard className="h-5 w-5" />
                Crédito
              </TabsTrigger>
              <TabsTrigger 
                value="debit" 
                className="flex items-center gap-3 py-4 data-[state=active]:bg-accent data-[state=active]:text-accent-foreground"
              >
                <CreditCard className="h-5 w-5" />
                Débito
              </TabsTrigger>
            </TabsList>

            <TabsContent value="pix" className="mt-8">
              <div className="text-center">
                <div className="card-deluxe p-8 mb-8">
                  <h3 className="text-xl font-bold text-foreground mb-6 hover-appetite">
                    📱 Pague com PIX - Aprovação Instantânea
                  </h3>
                  
                  <div className="bg-white p-6 rounded-2xl shadow-depth mb-6">
                    <QRCodeGenerator 
                      value={pixString}
                      size={200}
                      className="mb-4"
                    />
                  </div>
                  
                  <div className="space-y-4">
                    <div className="glass-luxury p-4 rounded-xl">
                      <Label className="text-sm font-medium text-muted-foreground">Chave PIX (E-mail):</Label>
                      <div className="flex items-center justify-between mt-2">
                        <code className="text-sm font-mono bg-muted/20 px-3 py-2 rounded">
                          {pixKey}
                        </code>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={copyPixKey}
                          className="hover:bg-primary/10"
                        >
                          {pixCopied ? (
                            <>
                              <Check className="h-4 w-4 mr-2 text-sushi-emerald" />
                              Copiado!
                            </>
                          ) : (
                            <>
                              <Copy className="h-4 w-4 mr-2" />
                              Copiar
                            </>
                          )}
                        </Button>
                      </div>
                    </div>
                    
                    <div className="glass-appetite p-4 rounded-xl">
                      <div className="flex items-start space-x-3">
                        <Info className="h-5 w-5 text-sushi-coral mt-1" />
                        <div className="text-sm text-left">
                          <p className="font-semibold text-foreground mb-2">Como pagar:</p>
                          <ol className="list-decimal list-inside text-muted-foreground space-y-1">
                            <li>Escaneie o QR Code com o app do seu banco</li>
                            <li>Ou copie a chave PIX acima</li>
                            <li>Confirme o valor de R$ {finalTotal.toFixed(2).replace('.', ',')}</li>
                            <li>Finalize o pagamento</li>
                          </ol>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="credit" className="mt-8">
              <div className="space-y-6 max-w-md mx-auto">
                <div>
                  <Label htmlFor="cardNumber" className="text-base font-semibold">Número do Cartão</Label>
                  <Input 
                    id="cardNumber" 
                    placeholder="0000 0000 0000 0000"
                    maxLength={19}
                    className="mt-2 py-3 text-lg rounded-xl border-2 border-primary/20 focus:border-primary"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="expiry" className="text-base font-semibold">Validade</Label>
                    <Input 
                      id="expiry" 
                      placeholder="MM/AA" 
                      maxLength={5}
                      className="mt-2 py-3 text-lg rounded-xl border-2 border-primary/20 focus:border-primary"
                    />
                  </div>
                  <div>
                    <Label htmlFor="cvv" className="text-base font-semibold">CVV</Label>
                    <Input 
                      id="cvv" 
                      placeholder="123" 
                      maxLength={4}
                      className="mt-2 py-3 text-lg rounded-xl border-2 border-primary/20 focus:border-primary"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="cardName" className="text-base font-semibold">Nome no Cartão</Label>
                  <Input 
                    id="cardName" 
                    placeholder="Nome como está no cartão"
                    className="mt-2 py-3 text-lg rounded-xl border-2 border-primary/20 focus:border-primary"
                  />
                </div>
                
                <div>
                  <Label htmlFor="installments" className="text-base font-semibold">Parcelas</Label>
                  <select className="w-full mt-2 p-3 border-2 border-primary/20 rounded-xl text-lg focus:border-primary focus:outline-none bg-background">
                    <option>1x R$ {finalTotal.toFixed(2).replace('.', ',')} sem juros</option>
                    <option>2x R$ {(finalTotal / 2).toFixed(2).replace('.', ',')} sem juros</option>
                    <option>3x R$ {(finalTotal / 3).toFixed(2).replace('.', ',')} sem juros</option>
                    <option>6x R$ {(finalTotal / 6).toFixed(2).replace('.', ',')} sem juros</option>
                  </select>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="debit" className="mt-8">
              <div className="space-y-6 max-w-md mx-auto">
                <div>
                  <Label htmlFor="debitCardNumber" className="text-base font-semibold">Número do Cartão</Label>
                  <Input 
                    id="debitCardNumber" 
                    placeholder="0000 0000 0000 0000"
                    maxLength={19}
                    className="mt-2 py-3 text-lg rounded-xl border-2 border-primary/20 focus:border-primary"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="debitExpiry" className="text-base font-semibold">Validade</Label>
                    <Input 
                      id="debitExpiry" 
                      placeholder="MM/AA" 
                      maxLength={5}
                      className="mt-2 py-3 text-lg rounded-xl border-2 border-primary/20 focus:border-primary"
                    />
                  </div>
                  <div>
                    <Label htmlFor="debitCvv" className="text-base font-semibold">CVV</Label>
                    <Input 
                      id="debitCvv" 
                      placeholder="123" 
                      maxLength={4}
                      className="mt-2 py-3 text-lg rounded-xl border-2 border-primary/20 focus:border-primary"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="debitCardName" className="text-base font-semibold">Nome no Cartão</Label>
                  <Input 
                    id="debitCardName" 
                    placeholder="Nome como está no cartão"
                    className="mt-2 py-3 text-lg rounded-xl border-2 border-primary/20 focus:border-primary"
                  />
                </div>
                
                <div className="glass-fresh p-4 rounded-xl">
                  <div className="flex items-center space-x-3">
                    <CreditCard className="h-6 w-6 text-sushi-emerald" />
                    <div>
                      <p className="font-semibold text-foreground">💳 Débito Instantâneo</p>
                      <p className="text-sm text-muted-foreground">
                        Desconto direto da sua conta corrente
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          {/* Security Info */}
          <div className="flex items-center justify-center mt-8 p-6 glass-luxury rounded-2xl">
            <Shield className="h-6 w-6 text-sushi-emerald mr-3" />
            <div>
              <p className="font-semibold text-foreground">🔐 Pagamento 100% Seguro</p>
              <p className="text-sm text-muted-foreground">
                Processado pelo Mercado Pago com criptografia SSL
              </p>
            </div>
          </div>

          {/* Complete Payment Button */}
          <Button
            onClick={handlePayment}
            disabled={isProcessing || state.items.length === 0}
            className="w-full btn-appetite text-xl py-6 mt-8 shadow-red-glow hover:shadow-gold-luxury"
            size="lg"
          >
            {isProcessing ? (
              <>
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3" />
                Processando Pagamento...
              </>
            ) : (
              <>
                🍣 Finalizar Pedido - R$ {finalTotal.toFixed(2).replace('.', ',')}
              </>
            )}
          </Button>
        </Card>
      </div>
    </main>
  )
}

export default Payment