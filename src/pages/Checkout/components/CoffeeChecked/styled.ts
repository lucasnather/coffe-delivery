import { styled } from 'styled-components'

export const Subtitle = styled.h2`
  font-size: 1.125rem;
  font-weight: bold;
  margin-bottom: 1rem;
`

export const CartContainer = styled.div`
  border-radius: 6px 44px 6px 44px;
  margin-bottom: 0.75rem;
  padding: 2.5rem;

  ${(props) => `background-color: ${props.theme['base-card']}`};
`

export const ProductContainer = styled.div`
  display: flex;
  padding-bottom: 1.5rem;
  gap: 1.2rem;
  ${(props) => `border-bottom: 1px solid ${props.theme['base-button']}`};

  img {
    width: 4rem;
  }

  & div p {
    font-size: 1rem;
    margin-bottom: 0.5rem;

    ${(props) => `color: ${props.theme['base-subtitle']}`};
  }

  & + div {
    padding-top: 1.5rem;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
`

const BaseButton = styled.button`
  width: 4.5rem;
  height: 2.375rem;
  border-radius: 6px;
  border: none;
  ${(props) => `background-color: ${props.theme['base-button']}`};
  ${(props) => `color: ${props.theme['base-title']}`};
`

export const ButtonAmount = styled(BaseButton)`
  position: relative;
  margin-right: 0.5rem;
`

export const ButtonRemove = styled(BaseButton)`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  gap: 0.3rem;
`

export const PriceCoffee = styled.p`
  flex: 1;
  text-align: end;

  font-size: 1rem;

  ${(props) => `color: ${props.theme['base-text']}`};
`

export const PriceTotalContainer = styled.div`
  display: flex;
  justify-content: space-between;

  & div p {
    font-size: 0.875rem;
    margin-bottom: 0.75rem;
    ${(props) => `color: ${props.theme['base-text']}`};
  }

  & div h3 {
    font-size: 1.25rem;
    font-weight: bold;
    ${(props) => `color: ${props.theme['base-subtitle']}`};
  }
`

export const ButtonConfirm = styled.button`
  width: 100%;
  padding: 0.75rem;
  margin-top: 1.5rem;
  border: none;
  border-radius: 6px;
  font-weight: bold;

  ${(props) => `background-color: ${props.theme.yellow}`};
  ${(props) => `color: ${props.theme.white}`};
`
