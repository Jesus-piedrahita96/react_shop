import React from 'react'
import '../css/Login.scss'

function NewPass() {
  return(
    <>
      <div className='new-pass'>
        <div className='new-pass__header'>
          <img
            src="../asset/Logos/logo_yard_sale.svg"
            className='new-pass__header__logo'
            alt='logo'
          />
          <h1 className='new-pass__header__title'>
            Create a new password
          </h1>
          <p className='new-pass__header__description'>
            Enter a new passwrd for yue account
          </p>
        </div>
        <form className='new-pass__form'>
          <label
            htmlFor='pass'
            className='new-pass__form__label'
          >
            Password
          </label>
          <input
            id='pass'
            className='new-pass__form__input'
            placeholder='*********'
          />
          <label
            htmlFor='new-pass'
            className='new-pass__form__label'
          >Repeat Password</label>
          <input
            id='new-pass'
            className='new-pass__form__input'
            placeholder='*********'
          />
          <button
            type='submit'
            className='new-pass__form__primary-button login-button'
          >Confirmar</button>
        </form>
      </div>
    </>
  )
}

export {NewPass}