import React from "react";
import ProductInfo from "../components/ProductInfo";

function ProductDetail() {
  return(
    <>
      <aside className="product-detail">
        <div className="product-detail-close">
          <img src="../icons/icon_close.png" alt="cerrar" />
        </div>
        <ProductInfo />
      </aside>
    </>
  )
}

export default ProductDetail;