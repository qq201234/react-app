import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { product3c } from '../../data/product-3c'

function Product3CDetail(props) {
  const [product, setProduct] = useState({
    id: '',
    picture: '',
    stock: 0,
    name: '',
    price: 0,
    tags: '',
  })

  const location = useLocation()
  console.log(location)

  // didmount
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search)
    const productId = searchParams.get('product_id')

    const item = product3c.find((v) => String(v.id) === productId)

    if (item) {
      setProduct(item)
    }
  }, [])

  return (
    <>
      <h1>Product3CDetail</h1>
      <p>產品id: {product.id}</p>
      <p>name:{product.name}</p>
      <p>price:{product.price}</p>
    </>
  )
}

export default Product3CDetail
