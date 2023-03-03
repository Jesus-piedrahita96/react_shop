import React from "react";
import ShoppingCartItem from "../components/ShoppingCartItem";
import flecha from '@icons/flechita.svg'
import '../css/order.scss'
import { useData, useGeneric } from "../hooks/DataContext";

function MyOrder({setState}) {
  const [precio, setPrecio] = React.useState(0)
  const datos = useData()
  const count = useGeneric()
  let aux = []

  React.useEffect(() => {
    datos.map((data) => {
      if(data.selected === true) {
        aux.push(data.price)
      }
    })

    if (aux.length > 0) {
      let suma = aux.reduce((count, value) => count + value, 0)
      setPrecio(suma)
    }
  }, [count])

  const handleClose = () => {
    setState({shopping: false})
  }

  return(
    <>
      <aside className="product-detail">
        <div className="my-order-content">
          <div className="tittle">
            <img src={flecha} alt="arrow" onClick={handleClose} />
            <p>Shopping cart</p>
          </div>
          <ShoppingCartItem />
          <div className="order">
            <p>
                <span>Total</span>
            </p>
            <p>${precio}</p>
          </div>
          <button className="primary-button">
            Checkout
          </button>
        </div>
      </aside>

    </>
  )
}

export default MyOrder