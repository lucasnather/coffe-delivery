import Expresso from '../assets/expresso.svg'
import Americano from '../assets/americano.svg'
import Arabe from '../assets/arabe.svg'
import CafeComLeite from '../assets/cafe-com-leite.svg'
import CafeGelado from '../assets/cafe-gelado.svg'
import Capuccino from '../assets/capuccino.svg'
import ChocolateQuente from '../assets/chocolate-quente.svg'
import Cubano from '../assets/cubano.svg'
import ExpressoCremoso from '../assets/expresso-cremoso.svg'
import Havaiano from '../assets/havaiano.svg'
import Irlandes from '../assets/irlandes.svg'
import Latte from '../assets/latte.svg'
import Macchiato from '../assets/macchiato.svg'
import Mochacccino from '../assets/mochaccino.svg'
import { v4 as uuidV4 } from 'uuid'

export const products = [
  {
    id: uuidV4(),
    image: Expresso,
    type: ['tradicional'],
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 4.99,
    amount: 0,
  },
  {
    id: uuidV4(),
    image: Americano,
    type: ['tradicional'],
    title: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 5.99,
    amount: 0,
  },
  {
    id: uuidV4(),
    image: ExpressoCremoso,
    type: ['tradicional'],
    title: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 4.5,
    amount: 0,
  },
  {
    id: uuidV4(),
    image: CafeGelado,
    type: ['tradicional', 'gelado'],
    title: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 5.6,
    amount: 0,
  },
  {
    id: uuidV4(),
    image: CafeComLeite,
    type: ['tradicional', 'com leite'],
    title: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 6.5,
    amount: 0,
  },
  {
    id: uuidV4(),
    image: Latte,
    type: ['tradicional', 'com leite'],
    title: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 8,
    amount: 0,
  },
  {
    id: uuidV4(),
    image: Capuccino,
    type: ['tradicional', 'com leite'],
    title: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.5,
    amount: 0,
  },
  {
    id: uuidV4(),
    image: Macchiato,
    type: ['tradicional', 'com leite'],
    title: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.99,
    amount: 0,
  },
  {
    id: uuidV4(),
    image: Mochacccino,
    type: ['tradicional', 'com leite'],
    title: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.99,
    amount: 0,
  },
  {
    id: uuidV4(),
    image: ChocolateQuente,
    type: ['tradicional', 'com leite'],
    title: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 11,
    amount: 0,
  },
  {
    id: uuidV4(),
    image: Cubano,
    type: ['tradicional', 'com leite', 'gelado'],
    title: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 12,
    amount: 0,
  },
  {
    id: uuidV4(),
    image: Havaiano,
    type: ['especial'],
    title: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 12,
    amount: 0,
  },
  {
    id: uuidV4(),
    image: Arabe,
    type: ['especial'],
    title: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 13,
    amount: 0,
  },
  {
    id: uuidV4(),
    image: Irlandes,
    type: ['especial', 'alcoólico'],
    title: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 15,
    amount: 0,
  },
]
