import React from 'react'
import useGetProduct from '../hooks/useGetProduct.js'

function ProductList() {
  const API = 'http://localhost:8000/api/companies/';
  const product = useGetProduct(API)

  //todo: organizar la respuestas de la api
  return(
    <>
      <h1>lista de del Home</h1>
      {/* {product.companies.map(data => (
        <div key={data.id}>
          <p>data.name</p>
          <p>data.foundation</p>
        </div>
      ))} */}
    </>
  )
}

export default ProductList;
