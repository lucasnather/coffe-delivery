import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2rem 0;
`

export const ListContainer = styled.ul`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

const BaseButton = styled.button`
  border: none;
  height: 2.3rem;
  padding: 0.5rem;

  border-radius: 6px;
`

export const ButtonLocate = styled(BaseButton)`
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  gap: 0.25rem;

  ${(props) => `background-color: ${props.theme['purple-light']}`};
  ${(props) => `color: ${props.theme['purple-dark']}`};
`

export const ButtonCart = styled(BaseButton)`
  position: relative;
  ${(props) => `background: ${props.theme['yellow-light']}`};

  span {
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: 0;
    right: 0;
    margin-top: -8px;
    margin-right: -8px;
    height: 1rem;
    width: 1.25rem;
    padding: 0.6rem;
    border-radius: 50%;

    ${(props) => `background-color: ${props.theme['yellow-dark']}`};
    ${(props) => `color: ${props.theme.white}`};
  }
`
