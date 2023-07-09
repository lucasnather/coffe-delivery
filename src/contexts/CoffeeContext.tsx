import { createContext, ReactNode, useState } from 'react'
import { products } from '../utils/products'

interface CoffeeProps {
  id: string
  image: string
  type: string[]
  title: string
  description: string
  price: number
  amount: number
}

interface ContextProps {
  coffes: CoffeeProps[]
  setCoffes: React.Dispatch<React.SetStateAction<CoffeeProps[]>>
  filteredList: CoffeeProps[]
  amountIncrement: (id: string) => void
  amountDecrement: (id: string) => void
  amountRemove: (id: string) => void
}

export const CoffeeContext = createContext({} as ContextProps)

interface ChildrenProps {
  children: ReactNode
}

export function CoffeeProvider({ children }: ChildrenProps) {
  const [coffes, setCoffes] = useState<CoffeeProps[]>(products)

  const filteredList = coffes.filter((coffee) => coffee.amount > 0)

  function amountIncrement(id: string) {
    setCoffes(
      coffes.map((coffee) => {
        if (coffee.id === id) {
          return {
            ...coffee,
            amount: coffee.amount + 1,
          }
        } else {
          return coffee
        }
      }),
    )
  }

  function amountDecrement(id: string) {
    setCoffes(
      coffes.map((coffee) => {
        if (coffee.id === id) {
          return {
            ...coffee,
            amount: coffee.amount <= 0 ? 0 : coffee.amount - 1,
          }
        } else {
          return coffee
        }
      }),
    )
  }

  function amountRemove(id: string) {
    setCoffes(
      coffes.map((coffee) => {
        if (coffee.id === id) {
          return {
            ...coffee,
            amount: coffee.amount * 0,
          }
        } else {
          return coffee
        }
      }),
    )
  }

  return (
    <CoffeeContext.Provider
      value={{
        coffes,
        setCoffes,
        filteredList,
        amountDecrement,
        amountIncrement,
        amountRemove,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}
