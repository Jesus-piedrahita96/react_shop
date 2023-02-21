import React from "react";
import '@styles/account.scss';
import { Link } from "react-router-dom";

import logo from '@logos/logo_yard_sale.svg'

function Login() {
  const form = React.useRef(null)

  const handleLogin = (event) => {
    event.preventDefault()
    const dataFrom = new FormData(form.current)
    const data = {
      username: dataFrom.get('email'),
      password: dataFrom.get('new-password')
    }

    console.log(data)
  }

  return(
    <>
      <div className="login">
        <div className="form-container">
          <img
            src={logo}
            alt="logo"
            className="logo"
            />

          <form ref={form} className="form">
            <label htmlFor="email" className="label">Email</label>
            <input type="text"
            name="email"
            id="email"
            placeholder="jesu9606@mail.com"
            className="input input-email"
            />

            <label htmlFor="new-password" className="label">Password</label>
            <input type="password"
            id="new-password"
            name="new-password"
            placeholder="********"
            className="input input-password"
            />

            <button
              onClick={handleLogin}
              className="primary-button login-button"
            >Login
            </button>


            <Link to='/password-recovery' className="link">
              Forgot my password
            </Link>
          </form>

          <button className="secondary-button sing-button">
              Signup
          </button>
        </div>
      </div>
    </>
  )
}

export default Login;