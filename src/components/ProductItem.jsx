import React from "react";
import { datos } from "./useData";
import '@styles/product-item.scss';
import shopping from '@icons/bt_add_to_cart.svg';
import { useCrud } from "../hooks/DataContext";
import ProductInfo from "./ProductInfo";
import { Modal } from "../containers/Modal";



function ProductItem() {
  const [state, setState] = React.useState({
    estado: false,
    id: 0
  });

  const crud = useCrud()

  const clik = (id) => {
    crud.onChange(id)
  }

  const handleData = (id) => {
    setState({...state, estado: true, id: id})
  }

  return(
    <>
      <div className='container-product'>
        {datos.map(data => (
          <div key={data.id} className="product-card">
            <img src={data.img} alt="imagen_de_json" onClick={() => handleData(data.id)}/>
            <div className="product-info">
              <div>
                <p>{`$${data.price}`}</p>
                <p>{data.name}</p>
              </div>
              <figure onClick={() => clik(data.id)}>
                <img src={shopping} alt="carrito"/>
              </figure>
            </div>
          </div>
        ))}
      </div>
      {state.estado && (
        <Modal>
          <div>
            <ProductInfo id={state.id} change={setState} value={state}/>
          </div>
        </Modal>
      )}
    </>
  )
}

export default ProductItem;