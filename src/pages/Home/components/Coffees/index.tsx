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
  const { coffes, amountDecrement, amountIncrement } = useContext(CoffeeContext)

  function handleAmountDecrement(id: string) {
    return amountDecrement(id)
  }

  function handleAmountIncrement(id: string) {
    return amountIncrement(id)
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
                <strong>R$ {coffee.price.toFixed(2).replace('.', ',')}</strong>

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
