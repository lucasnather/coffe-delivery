import { styled } from 'styled-components'

export const Subtitle = styled.h2`
  font-size: 1.125rem;
  font-weight: bold;
  margin-bottom: 1rem;
`

export const BackgroundContainer = styled.div`
  border-radius: 6px;
  margin-bottom: 0.75rem;
  padding: 2.5rem;

  ${(props) => `background-color: ${props.theme['base-card']}`};
`

export const InfoContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;

  h3 {
    font-size: 1rem;
    margin-bottom: 0.2rem;
    ${(props) => `color:${props.theme['base-subtitle']}`};
  }

  p {
    font-size: 1rem;
    font-size: 0.875rem;

    ${(props) => `color:${props.theme['base-text']}`};
  }
`

const BaseInput = styled.input`
  ${(props) => `background-color: ${props.theme['base-input']}`};
  padding: 1.125rem;
  margin-bottom: 1rem;
  border-radius: 4px;
  ${(props) => `border: 1px solid ${props.theme['base-button']}`};

  &::placeholder {
    ${(props) => `color: ${props.theme['base-label']}`};
  }
`

export const InputSmall = styled(BaseInput)`
  width: 12.5rem;
`

export const InputMedium = styled(BaseInput)`
  margin-left: 0.75rem;
  width: 21.75rem;
`

export const InputLarge = styled(BaseInput)`
  width: 100%;
`

export const InputCity = styled(BaseInput)`
  margin-left: 0.75rem;
  width: 17rem;
`

export const InputUF = styled(BaseInput)`
  margin-left: 0.75rem;
  width: 3.75rem;
`

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  label {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-size: 0.75rem;
    padding: 1rem;
    border-radius: 6px;

    ${(props) => `background-color: ${props.theme['base-button']}`};
  }
`

export const InputRadio = styled.input`
  opacity: 0;

  &:checked + label {
    ${(props) => `background-color: ${props.theme['purple-light']}`};
    ${(props) => `border: 1px solid ${props.theme.purple}`};
  }
`
