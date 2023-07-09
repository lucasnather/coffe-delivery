import { MapPin, ShoppingCartSimple } from 'phosphor-react'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/logo.svg'
import { CoffeeContext } from '../../contexts/CoffeeContext'
import {
  ButtonCart,
  ButtonLocate,
  HeaderContainer,
  ListContainer,
} from './styled'

export function Header() {
  const { filteredList, form } = useContext(CoffeeContext)

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
                {form !== undefined ? `${form?.cidade}, ${form?.uf}` : ''}
              </ButtonLocate>
            </NavLink>
          </li>
          <li>
            <NavLink to="/checkout">
              <ButtonCart>
                <ShoppingCartSimple size={22} color="#C47F17" weight="fill" />
                {filteredList.length > 0 && <span>{filteredList.length}</span>}
              </ButtonCart>
            </NavLink>
          </li>
        </ListContainer>
      </nav>
    </HeaderContainer>
  )
}
