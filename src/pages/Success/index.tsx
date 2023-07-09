import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useContext } from 'react'
import Motoboy from '../../assets/illustration.svg'
import { CoffeeContext } from '../../contexts/CoffeeContext'
import {
  BoxContainer,
  IconBackground,
  InfoContainer,
  InfoFormContainer,
  Subtitle,
  SuccessContainer,
} from './styled'

export function Success() {
  const { form } = useContext(CoffeeContext)

  return (
    <>
      {form !== undefined ? (
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
                    Entrega em{' '}
                    <strong>
                      {form.rua} , {form?.numero}
                    </strong>
                    <br /> {form?.bairro} - {form.cidade}, {form.uf}
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
                    <strong>{form.pagamento}</strong>
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
      ) : (
        <p>Nenhum pedido</p>
      )}
    </>
  )
}
