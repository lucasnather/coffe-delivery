import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { CoffeeContext } from '../../../../contexts/CoffeeContext'
import {
  CardContainer,
  CoffeeContainer,
  GridContainer,
  PriceContainer,
  SpanContainer,
  Label,
  ButtonAmount,
} from './styled'

export function Cafes() {
  const { coffes, setCoffes } = useContext(CoffeeContext)

  function handleAmountIncrement(id: string) {
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

  function handleAmountDecrement(id: string) {
    setCoffes(
      coffes.map((coffee) => {
        if (coffee.id === id) {
          return {
            ...coffee,
            amount: coffee.amount - 1,
          }
        } else {
          return coffee
        }
      }),
    )
  }

  return (
    <CoffeeContainer>
      <h2>Nossos Cafés</h2>

      <GridContainer>
        {coffes.map((coffee) => {
          return (
            <CardContainer key={coffee.id}>
              <img src={coffee.image} alt="cafe expresso" />
              <SpanContainer>
                {coffee.type.map((types) => {
                  return <span key={types}>{types}</span>
                })}
              </SpanContainer>

              <h3>{coffee.title}</h3>
              <p>{coffee.description}</p>

              <PriceContainer>
                <strong>R$ {coffee.price}</strong>

                <div>
                  <ButtonAmount>
                    <Minus
                      weight="bold"
                      style={{
                        position: 'absolute',
                        left: 8,
                      }}
                      color="#8047F8"
                      onClick={() => handleAmountDecrement(coffee.id)}
                    />
                    {coffee.amount}
                    <Plus
                      weight="bold"
                      style={{ position: 'absolute', right: 8 }}
                      color="#8047F8"
                      onClick={() => handleAmountIncrement(coffee.id)}
                    />
                  </ButtonAmount>

                  <Label htmlFor="quantidade">
                    <ShoppingCart weight="fill" size={16} color="#fff" />
                  </Label>
                </div>
              </PriceContainer>
            </CardContainer>
          )
        })}
      </GridContainer>
    </CoffeeContainer>
  )
}
