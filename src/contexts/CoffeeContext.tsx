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
}

export const CoffeeContext = createContext({} as ContextProps)

interface ChildrenProps {
  children: ReactNode
}

export function CoffeeProvider({ children }: ChildrenProps) {
  const [coffes, setCoffes] = useState<CoffeeProps[]>(products)

  return (
    <CoffeeContext.Provider value={{ coffes, setCoffes }}>
      {children}
    </CoffeeContext.Provider>
  )
}
