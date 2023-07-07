import { MapPin, ShoppingCartSimple } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/logo.svg'
import {
  ButtonCart,
  ButtonLocate,
  HeaderContainer,
  ListContainer,
} from './styled'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={Logo} alt="copo de café e alo lado escrito coffee delivery" />
      </NavLink>

      <nav>
        <ListContainer>
          <li>
            <NavLink to="/success">
              <ButtonLocate>
                <MapPin size={22} color="#8047F8" weight="fill" />
                Manaus
              </ButtonLocate>
            </NavLink>
          </li>
          <li>
            <NavLink to="/checkout">
              <ButtonCart>
                <ShoppingCartSimple size={22} color="#C47F17" weight="fill" />
              </ButtonCart>
            </NavLink>
          </li>
        </ListContainer>
      </nav>
    </HeaderContainer>
  )
}
