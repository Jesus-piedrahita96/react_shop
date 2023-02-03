import React from "react";
import {datos} from "./useData";
import '../css/checkout.scss'

function OrderItem({data}) {
  return(
    <>
      <div className="order-main">
        <div className="order-main__header">
          <img
            className='order-main__header-img'
            src={data.img}
            alt='image'
          />
          <p>{data.name}</p>
        </div>
        <p>{`$${data.price}`}</p>
      </div>
    </>
  )
}

export default OrderItem;