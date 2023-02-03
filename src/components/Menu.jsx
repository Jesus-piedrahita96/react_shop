import React from "react";
import { Link } from "react-router-dom";

import '../css/menu.scss'

function Menu() {
  return(
    <>
      <div class="desktop-menu">
        <ul>
          <li>
            <Link>
              My order
            </Link>
          </li>
          <li>
            <Link>
              My account
            </Link>
          </li>
          <li>
            <Link>
              sign out
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Menu;