import { styled } from 'styled-components'

interface IconProps {
  statusColor: 'purple' | 'yellow' | 'orange'
}

const Variants = {
  purple: 'purple-dark',
  yellow: 'yellow',
  orange: 'yellow-dark',
} as const

export const SuccessContainer = styled.section`
  margin-top: 5rem;

  h2 {
    font-size: 2rem;
    font-weight: 800;
    ${(props) => `color: ${props.theme['yellow-dark']}`};
  }

  h2 + p {
    font-size: 1.25rem;
    ${(props) => `color: ${props.theme['base-text']}`};
  }
`

export const InfoFormContainer = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 2.5rem;
`

export const BoxContainer = styled.div`
  padding: 2.5rem 3rem;
  border: 1px solid;

  border-width: 1px;
  border-image: linear-gradient(to right, #dbac2c, #8047f8);
  border-image-slice: 1;
`

export const InfoContainer = styled.div`
  display: flex;

  gap: 0.5rem;
  margin-bottom: 2rem;
`

export const Subtitle = styled.h3`
  font-size: 1rem;
  margin-bottom: 0.2rem;
  font-weight: 400;
  ${(props) => `color:${props.theme['base-text']}`};

  strong {
    font-weight: bold;
  }
`

export const IconBackground = styled.div<IconProps>`
  width: 2rem;
  height: 2rem;
  padding: 0.5rem;
  border-radius: 1000px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${(props) => `background-color: ${props.theme[Variants[props.statusColor]]}`}
`
