import { Minus, Plus, Trash } from 'phosphor-react'
import { useContext } from 'react'
import { CoffeeContext } from '../../../../contexts/CoffeeContext'
import {
  ButtonAmount,
  ButtonConfirm,
  ButtonRemove,
  ButtonsContainer,
  CartContainer,
  PriceCoffee,
  PriceTotalContainer,
  ProductContainer,
  Subtitle,
} from './styled'

export function CoffeeChecked() {
  const { filteredList, amountDecrement, amountIncrement, amountRemove } =
    useContext(CoffeeContext)

  const deliveryFee = 3.5
  const productsPrice = filteredList.reduce((total, acc) => {
    return acc.amount * acc.price + total
  }, 0)

  const totalPrice = deliveryFee + productsPrice

  function handleAmountDecrement(id: string) {
    return amountDecrement(id)
  }

  function handleAmountIncrement(id: string) {
    return amountIncrement(id)
  }

  function handleAmountRemove(id: string) {
    return amountRemove(id)
  }

  return (
    <>
      {filteredList.length > 0 && (
        <section>
          <Subtitle>Cafés selecionados</Subtitle>

          <CartContainer>
            {filteredList.map((coffee) => {
              return (
                <ProductContainer key={coffee.id}>
                  <img src={coffee.image} alt="" />

                  <div>
                    <p>{coffee.title}</p>

                    <ButtonsContainer>
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

                      <ButtonRemove
                        onClick={() => handleAmountRemove(coffee.id)}
                      >
                        <Trash size={16} color="#8047F8" />
                        remover
                      </ButtonRemove>
                    </ButtonsContainer>
                  </div>
                  <PriceCoffee>R$ {coffee.price * coffee.amount}</PriceCoffee>
                </ProductContainer>
              )
            })}

            <PriceTotalContainer>
              <div>
                <p>Total de itens</p>
                <p>Entrega</p>
                <h3>Total</h3>
              </div>

              <div>
                <p>R$ {productsPrice.toFixed(2)}</p>
                <p>R$ {deliveryFee.toFixed(2)}</p>
                <h3>R$ {totalPrice.toFixed(2)}</h3>
              </div>
            </PriceTotalContainer>

            <ButtonConfirm type="submit" form="checkout">
              Confirmar o pedido
            </ButtonConfirm>
          </CartContainer>
        </section>
      )}
    </>
  )
}
