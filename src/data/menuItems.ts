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
  category: 'sushi' | 'sashimi' | 'temaki' | 'hot-roll' | 'uramaki' | 'nigiri' | 'yakisoba' | 'combo' | 'bebida' | 'sobremesa' | 'especiais'
  isNew?: boolean
  isHot?: boolean
  isPremium?: boolean
}

export const menuItems: MenuItem[] = [
  // Sushi & Nigiri - Expandido
  {
    id: 'nigiri-salmao',
    name: 'Nigiri de Salmão',
    description: 'Salmão fresco sobre arroz temperado com wasabi',
    price: 8.50,
    image: sushiCombo,
    category: 'nigiri'
  },
  {
    id: 'nigiri-atum',
    name: 'Nigiri de Atum',
    description: 'Atum maguro fresco sobre arroz temperado',
    price: 9.00,
    image: sushiCombo,
    category: 'nigiri',
    isPremium: true
  },
  {
    id: 'nigiri-camarao',
    name: 'Nigiri de Camarão',
    description: 'Camarão ebi cozido sobre arroz temperado',
    price: 7.50,
    image: sushiCombo,
    category: 'nigiri'
  },
  {
    id: 'nigiri-polvo',
    name: 'Nigiri de Polvo',
    description: 'Tako (polvo) marinado sobre arroz temperado',
    price: 10.00,
    image: sushiCombo,
    category: 'nigiri',
    isPremium: true
  },
  {
    id: 'nigiri-peixe-branco',
    name: 'Nigiri de Peixe Branco',
    description: 'Tilápia fresca sobre arroz temperado',
    price: 7.00,
    image: sushiCombo,
    category: 'nigiri'
  },
  {
    id: 'nigiri-robalo',
    name: 'Nigiri de Robalo',
    description: 'Robalo fresco com toque de limão siciliano',
    price: 9.50,
    image: sushiCombo,
    category: 'nigiri',
    isNew: true
  },
  {
    id: 'nigiri-lula',
    name: 'Nigiri de Lula',
    description: 'Ika (lula) fresca sobre arroz temperado',
    price: 8.00,
    image: sushiCombo,
    category: 'nigiri'
  },

  // Sashimi - Expandido
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
    description: 'Fatias frescas de atum maguro sem arroz (5 peças)',
    price: 25.00,
    image: heroSushi,
    category: 'sashimi',
    isPremium: true
  },
  {
    id: 'sashimi-peixe-branco',
    name: 'Sashimi de Peixe Branco',
    description: 'Fatias de tilápia fresca sem arroz (5 peças)',
    price: 18.00,
    image: heroSushi,
    category: 'sashimi'
  },
  {
    id: 'sashimi-robalo',
    name: 'Sashimi de Robalo',
    description: 'Fatias de robalo com toque cítrico (5 peças)',
    price: 24.00,
    image: heroSushi,
    category: 'sashimi',
    isNew: true
  },
  {
    id: 'sashimi-mix',
    name: 'Sashimi Mix Premium',
    description: 'Combinado com salmão, atum e robalo (9 peças)',
    price: 38.00,
    image: heroSushi,
    category: 'sashimi',
    isPremium: true,
    isHot: true
  },

  // Temaki - Expandido
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
    category: 'temaki',
    isHot: true
  },
  {
    id: 'temaki-atum',
    name: 'Temaki de Atum',
    description: 'Cone com atum fresco e gergelim torrado',
    price: 17.00,
    image: temaki,
    category: 'temaki'
  },
  {
    id: 'temaki-camarao',
    name: 'Temaki de Camarão',
    description: 'Cone com camarão empanado e maionese',
    price: 16.00,
    image: temaki,
    category: 'temaki'
  },
  {
    id: 'temaki-philadelphia',
    name: 'Temaki Philadelphia',
    description: 'Cone com cream cheese, salmão e cebolinha',
    price: 18.00,
    image: temaki,
    category: 'temaki',
    isPremium: true
  },
  {
    id: 'temaki-spicy-tuna',
    name: 'Temaki Spicy Tuna',
    description: 'Cone com atum temperado e molho picante',
    price: 19.00,
    image: temaki,
    category: 'temaki',
    isNew: true,
    isHot: true
  },

  // Hot Roll - Expandido
  {
    id: 'hot-salmao',
    name: 'Hot Roll Salmão',
    description: 'Uramaki empanado e frito com salmão (8 peças)',
    price: 28.00,
    image: hotRoll,
    category: 'hot-roll',
    isHot: true
  },
  {
    id: 'hot-philadelphia',
    name: 'Hot Philadelphia',
    description: 'Uramaki empanado com cream cheese e salmão',
    price: 32.00,
    image: hotRoll,
    category: 'hot-roll',
    isPremium: true
  },
  {
    id: 'hot-camarao',
    name: 'Hot Roll Camarão',
    description: 'Uramaki empanado com camarão e maionese (8 peças)',
    price: 30.00,
    image: hotRoll,
    category: 'hot-roll'
  },
  {
    id: 'hot-atum',
    name: 'Hot Roll Atum',
    description: 'Uramaki empanado com atum spicy (8 peças)',
    price: 34.00,
    image: hotRoll,
    category: 'hot-roll',
    isHot: true
  },
  {
    id: 'hot-especial',
    name: 'Hot Roll Especial da Casa',
    description: 'Salmão, cream cheese, abacate e molho tarê (8 peças)',
    price: 36.00,
    image: hotRoll,
    category: 'hot-roll',
    isPremium: true,
    isNew: true
  },

  // Uramaki - Expandido
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
  {
    id: 'uramaki-rainbow',
    name: 'Uramaki Rainbow',
    description: 'Cobertura variada de peixes sobre california (8 peças)',
    price: 35.00,
    image: sushiCombo,
    category: 'uramaki',
    isPremium: true,
    isHot: true
  },
  {
    id: 'uramaki-spider',
    name: 'Uramaki Spider',
    description: 'Caranguejo soft shell tempurá com pepino (8 peças)',
    price: 32.00,
    image: sushiCombo,
    category: 'uramaki',
    isPremium: true
  },
  {
    id: 'uramaki-dragon',
    name: 'Uramaki Dragon',
    description: 'Abacate por cima com eel e molho unagi (8 peças)',
    price: 38.00,
    image: sushiCombo,
    category: 'uramaki',
    isPremium: true,
    isNew: true
  },

  // Yakisoba - Expandido
  {
    id: 'yakisoba-frango',
    name: 'Yakisoba de Frango',
    description: 'Macarrão frito com frango e vegetais frescos',
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
  {
    id: 'yakisoba-camarao',
    name: 'Yakisoba de Camarão',
    description: 'Macarrão frito com camarões grandes e vegetais',
    price: 28.00,
    image: heroSushi,
    category: 'yakisoba',
    isPremium: true
  },
  {
    id: 'yakisoba-misto',
    name: 'Yakisoba Misto',
    description: 'Frango, carne e camarão com vegetais',
    price: 32.00,
    image: heroSushi,
    category: 'yakisoba',
    isHot: true
  },

  // Pratos Especiais - Nova categoria
  {
    id: 'chirashi',
    name: 'Chirashi Don',
    description: 'Bowl de arroz com sashimi variado e ovas (12 peças)',
    price: 42.00,
    image: heroSushi,
    category: 'especiais',
    isPremium: true
  },
  {
    id: 'poke-salmao',
    name: 'Poke de Salmão',
    description: 'Cubos de salmão, arroz, abacate e molho ponzu',
    price: 35.00,
    image: heroSushi,
    category: 'especiais',
    isNew: true,
    isHot: true
  },
  {
    id: 'carpaccio-salmao',
    name: 'Carpaccio de Salmão',
    description: 'Fatias finas com alcaparras e molho cítrico',
    price: 28.00,
    image: heroSushi,
    category: 'especiais',
    isPremium: true
  },
  {
    id: 'tempura-mista',
    name: 'Tempura Mista',
    description: 'Camarão e vegetais em massa tempurá crocante',
    price: 26.00,
    image: heroSushi,
    category: 'especiais'
  },

  // Combos Prontos - Expandido
  {
    id: 'combo-20',
    name: 'Combo Sushi House (20 peças)',
    description: '10 uramaki + 8 nigiri + 2 temaki',
    price: 85.00,
    image: heroSushi,
    category: 'combo',
    isHot: true
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
    category: 'combo',
    isPremium: true
  },
  {
    id: 'combo-premium',
    name: 'Combo Premium Master',
    description: '15 uramaki premium + 10 sashimi + 2 temaki especiais',
    price: 120.00,
    image: heroSushi,
    category: 'combo',
    isPremium: true,
    isNew: true
  },
  {
    id: 'combo-iniciante',
    name: 'Combo Iniciante (15 peças)',
    description: '8 uramaki california + 6 nigiri salmão + 1 temaki',
    price: 55.00,
    image: sushiCombo,
    category: 'combo'
  },

  // Bebidas - Expandido
  {
    id: 'refrigerante-coca',
    name: 'Coca-Cola 350ml',
    description: 'Refrigerante gelado tradicional',
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
  {
    id: 'sake-quente',
    name: 'Saquê Quente',
    description: 'Saquê tradicional japonês servido quente',
    price: 15.00,
    image: heroSushi,
    category: 'bebida',
    isPremium: true
  },
  {
    id: 'agua-gas',
    name: 'Água com Gás',
    description: 'Água mineral com gás gelada 500ml',
    price: 4.00,
    image: heroSushi,
    category: 'bebida'
  },
  {
    id: 'suco-acai',
    name: 'Suco de Açaí',
    description: 'Suco natural de açaí com banana 400ml',
    price: 9.00,
    image: heroSushi,
    category: 'bebida',
    isNew: true
  },

  // Sobremesas - Expandido
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
    category: 'sobremesa',
    isHot: true
  },
  {
    id: 'mochi-sortidos',
    name: 'Mochi Sortidos',
    description: 'Docinhos japoneses com recheios variados (4 unidades)',
    price: 16.00,
    image: sushiCombo,
    category: 'sobremesa',
    isPremium: true
  },
  {
    id: 'dorayaki',
    name: 'Dorayaki',
    description: 'Panqueca japonesa recheada com doce de feijão',
    price: 10.00,
    image: sushiCombo,
    category: 'sobremesa',
    isNew: true
  }
]

export const categories = [
  { id: 'combo', name: 'Combos', icon: '🍱' },
  { id: 'especiais', name: 'Especiais', icon: '⭐' },
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

// Promoções especiais - Atualizadas
export const promotions = [
  {
    id: 'promo-rodizio',
    name: 'Rodízio Delivery Premium',
    description: 'Rodízio completo entregue em casa! Mais de 60 opções diferentes incluindo pratos especiais.',
    price: 89.90,
    originalPrice: 120.00,
    image: heroSushi,
    validUntil: '2024-12-31'
  },
  {
    id: 'promo-combo-casal',
    name: 'Combo Romântico para Dois',
    description: '40 peças variadas + 2 bebidas premium + 1 sobremesa especial para compartilhar',
    price: 118.00,
    originalPrice: 150.00,
    image: sushiCombo,
    validUntil: '2024-12-31'
  },
  {
    id: 'promo-sexta',
    name: 'Sexta Premium Hot Roll',
    description: 'Às sextas: 50% OFF em todos os hot rolls! Válido para delivery e retirada.',
    price: 14.00,
    originalPrice: 28.00,
    image: hotRoll,
    validUntil: '2024-12-31'
  },
  {
    id: 'promo-especiais',
    name: 'Festival de Especiais',
    description: '20% OFF em todos os pratos especiais: Chirashi, Poke, Carpaccio e Tempura.',
    price: 28.00,
    originalPrice: 35.00,
    image: heroSushi,
    validUntil: '2024-12-31'
  }
]