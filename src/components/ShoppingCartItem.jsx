import React from "react";
import { useData } from "../hooks/DataContext";
import iconClose from '@icons/icon_close.png'
import '../css/shopping.scss'


function ShoppingCartItem() {
  const datos = useData()
  const aux = []
  datos.map(data => {
    if(data.selected === true){
      aux.push(data)
    }
  })
  console.log(aux)
  return (
    <>
      <div className="order-item">
        {aux.map(data => (
          <div key={data.id} className="shopping-card">
            <figure>
              <img src={data.img} alt="bike" />
            </figure>
            <p>{data.name}</p>
            <p>${data.price}</p>
            <img src={iconClose} alt="close" />
          </div>
        ))}
      </div>
    </>
  )
}

export default ShoppingCartItem