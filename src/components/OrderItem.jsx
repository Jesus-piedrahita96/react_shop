import React from "react";
import {datos} from "./useData";
import '../css/checkout.scss'

function OrderItem() {
  console.log(datos)
  return(
    <>
      {datos.map(data => (
        <div className="order-main">
          <div className="order-main__header">
            <img src={data.img} />
            <p>{data.name}</p>
          </div>
          <p>{`$${data.price}`}</p>
        </div>
      ))}
    </>
  )
}

export default OrderItem;