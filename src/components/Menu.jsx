import React from "react";
import { Link } from "react-router-dom";

import '../css/menu.scss'

function Menu() {
  return(
    <>
      <div className="desktop-menu">
        <ul>
          <li>
            <Link className='desktop-menu-link' to='#'>
              My order
            </Link>
          </li>
          <li>
            <Link className='desktop-menu-link' to='#'>
              My account
            </Link>
          </li>
          <li>
            <Link className='desktop-menu-link desktop-menu-ultimate' to='#'>
              sign out
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Menu;