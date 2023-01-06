import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'


function Detail(props) {
  const [product, setProduct] = useState({
    id: '',
    picture: '',
    stock: 0,
    name: '',
    price: 0,
    tags: '',
  })

  const fetchProductByIdParam = async (productId) => {
    //向遠端伺服器get資料
    const response = await fetch('/products/' + productId)
    const data = await response.json()

    // 載入資料後設定到狀態中
    // 設定到狀態後，因改變狀態會觸發updating生命周期，然後重新render一次
    setProduct(data)
  }

  const params = useParams()

  // didmount
  useEffect(() => {
    fetchProductByIdParam(params.productId)
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

export default Detail
