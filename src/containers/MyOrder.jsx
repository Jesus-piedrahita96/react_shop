import React from "react";
import ShoppingCartItem from "../components/ShoppingCartItem";
import flecha from '@icons/flechita.svg'
import '../css/order.scss'
import { useData } from "../hooks/DataContext";

function MyOrder() {
  const [precio, setPrecio] = React.useState(0)
  const datos = useData()

  //todo: pendiente organizar la funcion
  datos.map((data) => {
    if(data.selected === true) {
      setPrecio()
    }
  })
  console.log(precio)
  return(
    <>
      <aside className="product-detail">
        <div className="my-order-content">
          <div className="tittle">
            <img src={flecha} alt="arrow" />
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