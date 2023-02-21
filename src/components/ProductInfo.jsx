import React from "react";
import '../css/product_info.scss';
import { useData } from "../hooks/DataContext";
import carrito from '@icons/bt_add_to_cart.svg'
import cerrar from '@icons/icon_close.png'

function ProductInfo({id, change, value}) {
  const datos = useData()
  const item = datos.find(data => data.id === id)

  const handleClose = () => {
    change({...value, estado: false})
  }

  return(
    <>
      <aside className="product-detail">
      <div className="product-detail-close" onClick={handleClose}>
        <img src={cerrar} alt="cerrar"/>
      </div>
        <img src={item.img} alt="bike"/>
        <div className="product-detail__info">
          <p>${item.price}</p>
          <p>{item.name}</p>
          <p>
            {item.description}
          </p>
          <button className="primary-button">
            <img src={carrito} alt="add to cart" />
            add to cart
          </button>
        </div>
      </aside>
    </>
  )
}

export default ProductInfo;