import { CoffeeChecked } from './components/CoffeeChecked'
import { Form } from './components/Form'
import { CheckoutContainer } from './styled'

export function Checkout() {
  return (
    <CheckoutContainer>
      <Form />
      <CoffeeChecked />
    </CheckoutContainer>
  )
}
