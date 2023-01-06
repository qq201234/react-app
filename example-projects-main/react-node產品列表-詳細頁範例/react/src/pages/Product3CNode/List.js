import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function List(props) {
  const [products, setProducts] = useState([])

  const fetchProducts = async () => {
    //向遠端伺服器get資料
    const response = await fetch('/products')
    const data = await response.json()

    // 載入資料後設定到狀態中
    // 設定到狀態後，因改變狀態會觸發updating生命周期，然後重新render一次
    setProducts(data)
  }

  // didMount
  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <>
      <h1>Product 3C List (Node)</h1>
      <ul>
        {products.map((v, i) => {
          return (
            <li key={v.id}>
              <Link to={`/product-3c-node-detail/${v.id}`}>
                {v.name}/{v.price}
              </Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default List
