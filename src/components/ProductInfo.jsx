import React from "react";
import '../css/product_info.scss';

function ProductInfo() {
  return(
    <>
      <img src="https://olimpica.vtexassets.com/arquivos/ids/524355/Bicicleta-RALI-RIO-Mec%EF%BF%BDnica-29-Hombre--Negro-Verde.jpg?v=637558583193570000" alt="bike"/>
      <div className="product-info">
        <p>$120.00</p>
        <p>Bike</p>
        <p>
          Una bicicleta es un medio de transporte alternativo que te permite desplazarte sin 
          contaminar el medio ambiente, además, te permite mejorar tu resistencia aeróbica y 
          te ayuda a fortalecer los músculos de tu cuerpo
        </p>
        <button className="primary-button">
          <img src="../asset/icons/bt_add_to_cart.svg" alt="add to cart" />
          add to cart
        </button>
      </div>
    </>
  )
}

export default ProductInfo;