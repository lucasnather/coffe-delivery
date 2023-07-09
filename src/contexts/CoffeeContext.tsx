import { createContext, ReactNode, useState } from 'react'
import { useForm } from 'react-hook-form'
import { products } from '../utils/products'
import { useNavigate } from 'react-router-dom'

export interface FormProps {
  cep: string
  rua: string
  numero: number
  complemento?: string
  pagamento: string
  bairro: string
  cidade: string
  uf: string
}

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
  form: FormProps | undefined
  amountIncrement: (id: string) => void
  amountDecrement: (id: string) => void
  amountRemove: (id: string) => void
  submitForm: (data: FormProps) => void
}

export const CoffeeContext = createContext({} as ContextProps)

interface ChildrenProps {
  children: ReactNode
}

export function CoffeeProvider({ children }: ChildrenProps) {
  const navigate = useNavigate()
  const { reset } = useForm()

  const [coffes, setCoffes] = useState<CoffeeProps[]>(products)
  const [form, setForm] = useState<FormProps>()
  console.log(form)

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

  function submitForm(data: FormProps) {
    const formCheckout: FormProps = {
      cep: data.cep,
      rua: data.rua,
      cidade: data.cidade,
      complemento: data.complemento,
      numero: data.numero,
      bairro: data.bairro,
      uf: data.uf,
      pagamento: data.pagamento,
    }

    setForm(formCheckout)

    reset()

    navigate('/success')

    return formCheckout
  }

  return (
    <CoffeeContext.Provider
      value={{
        coffes,
        setCoffes,
        filteredList,
        form,
        amountDecrement,
        amountIncrement,
        amountRemove,
        submitForm,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}
