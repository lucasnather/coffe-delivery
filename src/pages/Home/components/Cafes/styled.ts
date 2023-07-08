import { styled } from 'styled-components'

export const CoffeeContainer = styled.section`
  padding-top: 2rem;

  h2 {
    font-family: 'Baloo 2', cursive;
    font-size: 2rem;
    font-weight: 800;
    margin-bottom: 3.375rem;

    ${(props) => `color: ${props.theme['base-subtitle']}`};
  }
`

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  column-gap: 2rem;
  row-gap: 2.5rem;
`

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  padding: 1.25rem;
  border-radius: 6px 36px 6px 36px;

  ${(props) => `background-color: ${props.theme['base-card']}`};

  img {
    width: 7.5rem;
    margin: -2.5rem auto 0;
  }

  h3 {
    font-size: 1.25rem;
    ${(props) => `color: ${props.theme['base-subtitle']}`};
  }

  & > h3 + p {
    margin: 0.5rem 0 2rem 0;
    font-size: 0.875rem;
    ${(props) => `color: ${props.theme['base-label']}`};
    text-align: center;
  }
`

export const SpanContainer = styled.div`
  margin: 1rem 0 1.25rem 0;
  span {
    margin: 0 0.3rem;
    padding: 0.2rem 0.5rem;
    font-weight: bold;
    font-size: 0.6rem;

    border-radius: 100px;

    ${(props) => `color: ${props.theme['yellow-dark']}`};
    ${(props) => `background-color: ${props.theme['yellow-light']}`};
  }
`

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;

  strong {
    ${(props) => `color: ${props.theme['base-text']}`}
  }
`

export const ButtonAmount = styled.button`
  position: relative;
  width: 4.5rem;
  height: 2.375rem;
  margin-right: 0.5rem;
  border: none;
  border-radius: 6px;
`

export const Label = styled.label`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  padding: 0.5rem;
  height: 2.375rem;

  ${(props) => `background-color: ${props.theme['purple-dark']}`};
`
