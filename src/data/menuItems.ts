import heroSushi from '@/assets/hero-sushi.jpg'
import sushiCombo from '@/assets/sushi-combo.jpg'
import temaki from '@/assets/temaki.jpg'
import hotRoll from '@/assets/hot-roll.jpg'

export interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: 'sushi' | 'sashimi' | 'temaki' | 'hot-roll' | 'uramaki' | 'nigiri' | 'yakisoba' | 'combo' | 'bebida' | 'sobremesa'
}

export const menuItems: MenuItem[] = [
  // Sushi & Nigiri
  {
    id: 'nigiri-salmao',
    name: 'Nigiri de Salmão',
    description: 'Salmão fresco sobre arroz temperado',
    price: 8.50,
    image: sushiCombo,
    category: 'nigiri'
  },
  {
    id: 'nigiri-atum',
    name: 'Nigiri de Atum',
    description: 'Atum fresco sobre arroz temperado',
    price: 9.00,
    image: sushiCombo,
    category: 'nigiri'
  },
  {
    id: 'nigiri-camarao',
    name: 'Nigiri de Camarão',
    description: 'Camarão cozido sobre arroz temperado',
    price: 7.50,
    image: sushiCombo,
    category: 'nigiri'
  },

  // Sashimi
  {
    id: 'sashimi-salmao',
    name: 'Sashimi de Salmão',
    description: 'Fatias frescas de salmão sem arroz (5 peças)',
    price: 22.00,
    image: heroSushi,
    category: 'sashimi'
  },
  {
    id: 'sashimi-atum',
    name: 'Sashimi de Atum',
    description: 'Fatias frescas de atum sem arroz (5 peças)',
    price: 25.00,
    image: heroSushi,
    category: 'sashimi'
  },

  // Temaki
  {
    id: 'temaki-salmao',
    name: 'Temaki de Salmão',
    description: 'Cone de alga com salmão, arroz e vegetais',
    price: 15.00,
    image: temaki,
    category: 'temaki'
  },
  {
    id: 'temaki-california',
    name: 'Temaki California',
    description: 'Cone com salmão, abacate, pepino e maionese',
    price: 16.50,
    image: temaki,
    category: 'temaki'
  },
  {
    id: 'temaki-skin',
    name: 'Temaki Skin',
    description: 'Cone com pele de salmão grelhada crocante',
    price: 14.00,
    image: temaki,
    category: 'temaki'
  },

  // Hot Roll
  {
    id: 'hot-salmao',
    name: 'Hot Roll Salmão',
    description: 'Uramaki empanado e frito com salmão (8 peças)',
    price: 28.00,
    image: hotRoll,
    category: 'hot-roll'
  },
  {
    id: 'hot-philadelphia',
    name: 'Hot Philadelphia',
    description: 'Uramaki empanado com cream cheese e salmão',
    price: 32.00,
    image: hotRoll,
    category: 'hot-roll'
  },

  // Uramaki
  {
    id: 'uramaki-california',
    name: 'Uramaki California',
    description: 'Arroz por fora com salmão, abacate e pepino (8 peças)',
    price: 24.00,
    image: sushiCombo,
    category: 'uramaki'
  },
  {
    id: 'uramaki-philadelphia',
    name: 'Uramaki Philadelphia',
    description: 'Com cream cheese, salmão e gergelim (8 peças)',
    price: 26.00,
    image: sushiCombo,
    category: 'uramaki'
  },

  // Yakisoba
  {
    id: 'yakisoba-frango',
    name: 'Yakisoba de Frango',
    description: 'Macarrão frito com frango e vegetais',
    price: 22.00,
    image: heroSushi,
    category: 'yakisoba'
  },
  {
    id: 'yakisoba-carne',
    name: 'Yakisoba de Carne',
    description: 'Macarrão frito com carne bovina e vegetais',
    price: 25.00,
    image: heroSushi,
    category: 'yakisoba'
  },

  // Combos Prontos
  {
    id: 'combo-20',
    name: 'Combo Sushi House (20 peças)',
    description: '10 uramaki + 8 nigiri + 2 temaki',
    price: 85.00,
    image: heroSushi,
    category: 'combo'
  },
  {
    id: 'combo-executivo',
    name: 'Combo Executivo',
    description: '8 uramaki + 6 nigiri + 1 temaki + 1 yakisoba pequeno',
    price: 65.00,
    image: sushiCombo,
    category: 'combo'
  },
  {
    id: 'combo-familia',
    name: 'Combo Família (40 peças)',
    description: '20 uramaki + 16 nigiri + 4 temaki + 2 hot roll',
    price: 160.00,
    image: heroSushi,
    category: 'combo'
  },

  // Bebidas
  {
    id: 'refrigerante-coca',
    name: 'Coca-Cola 350ml',
    description: 'Refrigerante gelado',
    price: 5.00,
    image: heroSushi,
    category: 'bebida'
  },
  {
    id: 'suco-laranja',
    name: 'Suco de Laranja Natural',
    description: 'Suco natural de laranja 400ml',
    price: 8.00,
    image: heroSushi,
    category: 'bebida'
  },
  {
    id: 'cha-verde',
    name: 'Chá Verde Gelado',
    description: 'Chá verde japonês gelado 500ml',
    price: 7.00,
    image: heroSushi,
    category: 'bebida'
  },

  // Sobremesas
  {
    id: 'rolinho-doce',
    name: 'Rolinho Doce',
    description: 'Uramaki doce com frutas e chocolate (6 peças)',
    price: 18.00,
    image: sushiCombo,
    category: 'sobremesa'
  },
  {
    id: 'petit-gateau',
    name: 'Petit Gateau',
    description: 'Bolinho de chocolate com sorvete de baunilha',
    price: 15.00,
    image: sushiCombo,
    category: 'sobremesa'
  },
  {
    id: 'sorvete-tempura',
    name: 'Sorvete Tempurá',
    description: 'Sorvete empanado e frito servido quente',
    price: 12.00,
    image: sushiCombo,
    category: 'sobremesa'
  }
]

export const categories = [
  { id: 'combo', name: 'Combos', icon: '🍱' },
  { id: 'sushi', name: 'Sushi', icon: '🍣' },
  { id: 'nigiri', name: 'Nigiri', icon: '🍤' },
  { id: 'sashimi', name: 'Sashimi', icon: '🐟' },
  { id: 'temaki', name: 'Temaki', icon: '🌯' },
  { id: 'hot-roll', name: 'Hot Roll', icon: '🔥' },
  { id: 'uramaki', name: 'Uramaki', icon: '🥢' },
  { id: 'yakisoba', name: 'Yakisoba', icon: '🍜' },
  { id: 'bebida', name: 'Bebidas', icon: '🥤' },
  { id: 'sobremesa', name: 'Sobremesas', icon: '🍮' }
]

// Promoções especiais
export const promotions = [
  {
    id: 'promo-rodizio',
    name: 'Rodízio Delivery',
    description: 'Rodízio completo entregue em casa! Mais de 50 opções diferentes.',
    price: 89.90,
    originalPrice: 120.00,
    image: heroSushi,
    validUntil: '2024-12-31'
  },
  {
    id: 'promo-combo-casal',
    name: 'Combo Casal Romântico',
    description: '30 peças variadas + 2 bebidas + 1 sobremesa para compartilhar',
    price: 98.00,
    originalPrice: 130.00,
    image: sushiCombo,
    validUntil: '2024-12-31'
  },
  {
    id: 'promo-sexta',
    name: 'Sexta Premium',
    description: 'Às sextas: 50% OFF em todos os hot rolls!',
    price: 14.00,
    originalPrice: 28.00,
    image: hotRoll,
    validUntil: '2024-12-31'
  }
]