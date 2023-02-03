import React from "react";
import '@styles/account.scss';
import { Link } from "react-router-dom";

import logo from '@logos/logo_yard_sale.svg'

function Login() {
  const send = (event) => {
    event.preventDefault()
    console.log('haciendo login')
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

          <form onSubmit={send} className="form">
            <label htmlFor="email" className="label">Email</label>
            <input type="text"
            id="email"
            placeholder="jesu9606@mail.com"
            className="input input-email"
            />

            <label htmlFor="new-password" className="label">Password</label>
            <input type="password"
            id="new-password"
            placeholder="********"
            className="input input-password"
            />

            <button
              type="submit"
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