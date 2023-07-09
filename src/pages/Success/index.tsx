import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import Motoboy from '../../assets/illustration.svg'
import {
  BoxContainer,
  IconBackground,
  InfoContainer,
  InfoFormContainer,
  Subtitle,
  SuccessContainer,
} from './styled'

export function Success() {
  return (
    <SuccessContainer>
      <h2>Uhu! Pedido confirmado</h2>
      <p>Agora é só aguardar que logo o café chegará até você</p>

      <InfoFormContainer>
        <BoxContainer>
          <InfoContainer>
            <IconBackground statusColor="purple">
              <MapPin color="#fff" size={15} weight="fill" />
            </IconBackground>
            <div>
              <Subtitle>
                Entrega em <strong>Rua João Daniel Martinelli , 102</strong>
                <br /> Farrapos - Porto Alegre, RS
              </Subtitle>
            </div>
          </InfoContainer>

          <InfoContainer>
            <IconBackground statusColor="yellow">
              <Timer color="#fff" size={15} weight="fill" />
            </IconBackground>
            <div>
              <Subtitle>
                Previsão de entrega <br /> <strong>20 min - 30 min</strong>
              </Subtitle>
            </div>
          </InfoContainer>

          <InfoContainer>
            <IconBackground statusColor="orange">
              <CurrencyDollar color="#fff" size={15} weight="fill" />
            </IconBackground>
            <div>
              <Subtitle>
                Pagamento na entrega <br />
                <strong>Cartão de Crédito</strong>
              </Subtitle>
            </div>
          </InfoContainer>
        </BoxContainer>

        <img
          src={Motoboy}
          alt="motoboy com uma moto roxa e um pacote de entrega na sua garupa"
        />
      </InfoFormContainer>
    </SuccessContainer>
  )
}
