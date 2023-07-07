import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import Imagem from '../../../../assets/imagem.svg'
import {
  BannerContainer,
  ButtonContainer,
  ButtonsContainer,
  Icone,
} from './styled'

export function Banner() {
  return (
    <BannerContainer>
      <div>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>

        <h2>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </h2>

        <ButtonsContainer>
          <div>
            <ButtonContainer>
              <Icone statusColor="dark">
                <ShoppingCart weight="fill" size={15} color="#fff" />
              </Icone>
              Compra simples e segura
            </ButtonContainer>

            <ButtonContainer>
              <Icone statusColor="yellow">
                <Timer size={15} weight="fill" color="#fff" />
              </Icone>
              Entrega rápida e rastreada
            </ButtonContainer>
          </div>

          <div>
            <ButtonContainer>
              <Icone statusColor="grey">
                <Package size={15} weight="fill" color="#fff" />
              </Icone>
              Embalagem mantém o café intacto
            </ButtonContainer>

            <ButtonContainer>
              <Icone statusColor="purple">
                <Coffee size={15} weight="fill" color="#fff" />
              </Icone>
              O café chega fresquinho até você
            </ButtonContainer>
          </div>
        </ButtonsContainer>
      </div>

      <div>
        <img
          src={Imagem}
          alt="copo de café, com vários grãos de café do lado e um fundo amerelo"
        />
      </div>
    </BannerContainer>
  )
}
