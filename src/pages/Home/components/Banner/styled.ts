import { styled } from 'styled-components'

interface IButtonProps {
  statusColor: 'dark' | 'yellow' | 'grey' | 'purple'
}
const ButtonColors = {
  dark: 'yellow-dark',
  yellow: 'yellow',
  grey: 'base-text',
  purple: 'purple-dark',
} as const

export const BannerContainer = styled.section`
  display: flex;
  gap: 3.5rem;
  margin: 5.75rem 0;

  h1 {
    font-size: 3rem;
    font-weight: 800;
    ${(props) => `color: ${props.theme['base-title']}`}
  }

  h2 {
    font-size: 1.25rem;
    ${(props) => `color: ${props.theme['base-subtitle']}`};
    margin: 1rem 0 4.125rem 0;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 3.5rem;
`

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.7rem;
`

export const Icone = styled.div<IButtonProps>`
  padding: 0.5rem;
  border-radius: 1000px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) =>
    `background-color: ${props.theme[ButtonColors[props.statusColor]]}`};
`
