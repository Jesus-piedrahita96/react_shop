import React from "react";
import { NavLink, Link } from "react-router-dom"
import {useGeneric} from '../hooks/DataContext'
import Menu from '../components/Menu'
import '@styles/header.scss';

import menuIcon from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg'
import shoppingCart from '@icons/icon_shopping_cart.svg'

function Header() {
  const [state, setState] = React.useState(false)
  const count = useGeneric()

  const tooggle = () => {
    setState(!state)
  }

  return(
    <>
      <nav>
        <img
          src={menuIcon}
          alt="menu-mobil" className="menu"
        />
        <div className="navbar-left">
          <img
            src={logo}
            alt="logo"
            className="logo"
          />
          <ul>
            <li> <Link to='/'> All        </Link>  </li>
            <li> <Link to='/'> Clothes    </Link>  </li>
            <li> <Link to='/'> Eletronics </Link>  </li>
            <li> <Link to='/'> Furniture  </Link>  </li>
            <li> <Link to='/'> Toys       </Link>  </li>
            <li> <Link to='/'> Others     </Link>  </li>
          </ul>
        </div>
        <div className="navbar-right">
          <ul>
            <li>
              <Link to='#' onClick={tooggle}>
                Jesu9606@gmail.com
              </Link>
            </li>
            <li className="navbar-shopping-cart">
              <img
                src={shoppingCart}
                alt="shopping-cart"
              />
              <div>{count}</div>
            </li>
          </ul>
        </div>
        {state && <Menu />}
      </nav>
    </>
  )
}

export default Header;