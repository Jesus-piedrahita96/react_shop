import React from "react";
import OrderItem from '../components/OrderItem'
import { datos } from "../components/useData";
import '../css/checkout.scss'

function Checkout() {
  const coutnArticle = datos.length
  const priceArticle = datos.reduce((acum, data) => acum + data.price, 0)

  return(
    <>
      <div className="checkout">
        <div className="checkout__container">
          <div className="checkout__container__header">
            <h2>My orders</h2>
            <div className="checkout__container__header-info">
              <p>
                <span>02.02.2023</span>
                <span>{`${coutnArticle} Articulos`}</span>
              </p>
              <p>{`$${priceArticle}`}</p>
            </div>
          </div>
          <div className="checkout__container__body">
            { datos.map(data => <OrderItem key={data.id} data={data} />) }
          </div>
        </div>
      </div>
    </>
  )
}

export default Checkout;