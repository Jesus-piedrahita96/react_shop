import React from 'react'
import axios from 'axios'

function useGetProduct(API) {
  const [product, setProduct] = React.useState('')

  React.useEffect(async () => {
    const response = await axios(API)
    setProduct(response.data)

  }, [])

  return product
}

export default useGetProduct;