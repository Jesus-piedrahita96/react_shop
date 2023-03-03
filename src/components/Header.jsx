import React from "react";
import { Link } from "react-router-dom"
import { useGeneric } from '../hooks/DataContext'
import Menu from '../components/Menu'
import '@styles/header.scss';

import menuIcon from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg'
import shoppingCart from '@icons/icon_shopping_cart.svg'
import { Modal } from "../containers/Modal";
import MyOrder from "../containers/MyOrder";

function Header() {
  const [ state, setState ] = React.useState({
    menu: false,
    shopping: false
  })
  const count = useGeneric()

  const tooggle = () => {
    setState({ menu: !state.menu })
  }

  const handleModal = () => {
    if (count != 0) {
      setState({ shopping: !state.shopping })
    }

  }

  return (
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
                onClick={handleModal}
                src={shoppingCart}
                alt="shopping-cart"
              />
              <div>{count}</div>
            </li>
          </ul>
        </div>
        {state.menu && <Menu />}
        {state.shopping &&
          <Modal>
            <MyOrder setState={setState} />
          </Modal>
        }
      </nav>
    </>
  )
}

export default Header;