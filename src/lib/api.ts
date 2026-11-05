import { seedTransactions } from './seed'

export interface Transaction {
  id: number
  description: string
  type: 'income' | 'outcome'
  category: string
  price: number
  createdAt: string
}

export type TransactionInput = {
  description: string
  price: number
  category: string
  type: 'income' | 'outcome'
  createdAt?: string | Date
}

type GetParams = {
  _sort?: keyof Transaction
  _order?: 'asc' | 'desc'
  q?: string
}

interface GetOptions {
  params?: GetParams
}

const STORAGE_KEY = 'dt-money:transactions'

function persist(list: Transaction[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list))
}

function read(): Transaction[] {
  const raw = localStorage.getItem(STORAGE_KEY)

  if (!raw) {
    persist(seedTransactions)
    return [...seedTransactions]
  }

  try {
    const parsed = JSON.parse(raw) as Transaction[]
    if (!Array.isArray(parsed)) throw new Error('formato inválido')
    return parsed
  } catch {
    persist(seedTransactions)
    return [...seedTransactions]
  }
}

/**
 * Substitui o json-server: mesma interface usada pelo app
 * (`api.get('/transactions', { params })` e `api.post('/transactions', body)`),
 * mas com persistência no localStorage — funciona em deploy estático.
 */
export const api = {
  async get<T = Transaction[]>(
    _url: string,
    options: GetOptions = {},
  ): Promise<{ data: T }> {
    const { _sort, _order = 'asc', q } = options.params ?? {}
    let list = read()

    if (q) {
      const term = q.toLowerCase()
      list = list.filter(
        (transaction) =>
          transaction.description.toLowerCase().includes(term) ||
          transaction.category.toLowerCase().includes(term) ||
          transaction.type.toLowerCase().includes(term),
      )
    }

    if (_sort) {
      list = [...list].sort((a, b) => {
        const first = String(a[_sort])
        const second = String(b[_sort])
        return _order === 'desc'
          ? second.localeCompare(first)
          : first.localeCompare(second)
      })
    }

    return { data: list as unknown as T }
  },

  async post<T = Transaction>(
    _url: string,
    body: TransactionInput,
  ): Promise<{ data: T }> {
    const list = read()
    const nextId = list.length ? Math.max(...list.map((t) => t.id)) + 1 : 1

    const transaction: Transaction = {
      id: nextId,
      description: body.description,
      price: body.price,
      category: body.category,
      type: body.type,
      createdAt: new Date(body.createdAt ?? Date.now()).toISOString(),
    }

    persist([...list, transaction])

    return { data: transaction as unknown as T }
  },
}
