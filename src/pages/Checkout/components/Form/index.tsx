import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import {
  BackgroundContainer,
  ButtonContainer,
  InfoContainer,
  InputCity,
  InputLarge,
  InputMedium,
  InputRadio,
  InputSmall,
  InputUF,
  Subtitle,
} from './styled'

export function Form() {
  return (
    <section>
      <Subtitle>Complete seu pedido</Subtitle>

      <form action="#" id="checkout">
        <BackgroundContainer>
          <InfoContainer>
            <MapPinLine color="#C47F17" size={22} />
            <div>
              <h3>Endereço de Entrega</h3>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </InfoContainer>
          <InputSmall type="text" name="cep" id="cep" placeholder="CEP" />
          <InputLarge type="text" name="rua" id="rua" placeholder="Rua" />
          <InputSmall
            type="number"
            name="numero"
            id="numero"
            placeholder="Número"
          />
          <InputMedium
            type="text"
            name="complemento"
            id="complemento"
            placeholder="Complemento"
          />
          <InputSmall
            type="text"
            name="bairro"
            id="bairro"
            placeholder="Bairro"
          />
          <InputCity
            type="text"
            name="cidade"
            id="cidade"
            placeholder="Cidade"
          />
          <InputUF type="text" name="uf" id="uf" placeholder="UF" />
        </BackgroundContainer>

        <BackgroundContainer>
          <InfoContainer>
            <CurrencyDollar color="#4B2995" size={22} />
            <div>
              <h3>Pagamento</h3>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </InfoContainer>

          <ButtonContainer>
            <InputRadio type="radio" name="pagamento" id="credito" />
            <label htmlFor="credito">
              <CreditCard size={16} color="#8047F8" />
              Cartão de crédito
            </label>
            <InputRadio type="radio" name="pagamento" id="debito" />
            <label htmlFor="debito">
              <Bank size={16} color="#8047F8" />
              Cartão de débito
            </label>
            <InputRadio type="radio" name="pagamento" id="dinheiro" />
            <label htmlFor="dinheiro">
              <Money size={16} color="#8047F8" />
              Dinheiro
            </label>
          </ButtonContainer>
        </BackgroundContainer>
      </form>
    </section>
  )
}
