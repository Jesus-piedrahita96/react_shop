import React from "react";
import { NavLink, Link } from "react-router-dom";
import '@styles/header.scss';

import menuIcon from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg'
import shoppingCart from '@icons/icon_shopping_cart.svg'

function Header() {
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
            <li> <Link to='/'> Jesu9606@gmail.com </Link> </li>
            <li className="navbar-shopping-cart">
              <img
                src={shoppingCart}
                alt="shopping-cart"
              />
              <div>2</div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Header;