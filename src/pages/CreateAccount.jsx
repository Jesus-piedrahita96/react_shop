import React from "react";
import '../css/account.scss'

function CreateAccount() {
  const send = (event) => {
    event.preventDefault()
    console.log('creando usuario')
  }

  return(
    <>
      <div className="login">
        <div className="form-container">
          <h1 className="title">My account</h1>
          <form onSubmit={send} className="form">
            <div>
              <label htmlFor="name" className="label">Name</label>
              <input type="text"
              id="name"
              placeholder="Jesus Piedrahita"
              className="input input-name"
              />

              <label htmlFor="email" className="label">Email</label>
              <input type="text"
              id="email"
              placeholder="jesu9606@gmail.com"
              className="input input-email"
              />

              <label htmlFor="password" className="label">Password</label>
              <input type="password"
              id="password"
              placeholder="********"
              className="input input-password"
              />
            </div>

            <button
              type="submit"
              className="primary-button login-button"
            >Create</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default CreateAccount;