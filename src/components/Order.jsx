import React from "react";
import '../css/order.scss';

function Order() {
  return(
    <>
      <div className="my-order">
        <div className="my-order-container">
          <h1 className="tittle">My orders</h1>
          <div className="my-order-content">
            <div className="order">
              <p>
                <span>14.06.2022</span>
                <span>6 articles</span>
              </p>
              <p>$560.00</p>
              <img src="../asset/icons/flechita.svg" alt="flecha-back" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Order;