import React from "react";
import { datos } from "./useData";
import '@styles/product-item.scss'
import shopping from '@icons/bt_add_to_cart.svg';

function ProductItem() {
  return(
    <>
      <div className='container-product'>
        {datos.map(data => (
          <div key={data.id} className="product-card">
            <img src={data.img} alt="imagen_de_json"/>
            <div className="product-info">
              <div>
                <p>{`$${data.price}`}</p>
                <p>{data.name}</p>
              </div>
              <figure>
                <img src={shopping} alt="carrito"/>
              </figure>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default ProductItem;