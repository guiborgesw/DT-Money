import type { Transaction } from './api'

/**
 * Dados iniciais da demo (mesmo formato do antigo json-server).
 * São gravados no localStorage no primeiro acesso, para a aplicação
 * nunca abrir vazia no deploy estático.
 */
export const seedTransactions: Transaction[] = [
  {
    id: 1,
    description: 'Desenvolvimento de Site',
    type: 'income',
    category: 'Venda',
    price: 14000,
    createdAt: '2026-07-21T18:17:34.106Z',
  },
  {
    id: 2,
    description: 'Hambúrguer',
    type: 'outcome',
    category: 'Alimentação',
    price: 60,
    createdAt: '2026-07-21T18:05:34.106Z',
  },
  {
    id: 3,
    description: 'Curso Udemy',
    type: 'outcome',
    category: 'Educação',
    price: 120,
    createdAt: '2026-07-21T18:15:34.106Z',
  },
  {
    id: 4,
    description: 'Desenvolvimento de App',
    type: 'income',
    category: 'Venda',
    price: 5000,
    createdAt: '2026-08-29T02:16:22.953Z',
  },
  {
    id: 5,
    description: 'Mercado',
    type: 'outcome',
    category: 'Alimentação',
    price: 300,
    createdAt: '2026-08-29T02:16:22.953Z',
  },
  {
    id: 6,
    description: 'Cinema',
    type: 'outcome',
    category: 'Lazer',
    price: 50,
    createdAt: '2026-08-29T02:16:22.953Z',
  },
  {
    id: 7,
    description: 'Passeio de Roda Gigante',
    type: 'outcome',
    category: 'Lazer',
    price: 140,
    createdAt: '2026-08-30T02:16:22.953Z',
  },
  {
    id: 8,
    description: 'Fatura do Cartão',
    type: 'outcome',
    category: 'Cartão de Crédito',
    price: 1990,
    createdAt: '2026-07-28T13:52:12.642Z',
  },
]
