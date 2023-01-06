import { useState } from 'react'
import { useEffect } from 'react'
import { Link, useParams, useLocation } from 'react-router-dom'

import products from '../../data/product.json'

import './styles/Product.css'

function Detail() {
  const [product, setProduct] = useState({
    id: 0,
    name: '',
    category: '',
    image: '',
    price: 0,
  })

  // const { productId } = useParams()
  const location = useLocation()

  useEffect(() => {
    let params = new URLSearchParams(location.search)
    let productId = params.get('id')
    let cat = params.get('cat')
    //getProduct
    const p = products.find((v, i) => v.id === Number(productId))

    if (p) {
      setProduct(p)
    }
  }, [location])

  return (
    <div className="product detail">
      <h1>Product Detail</h1>
      <h2>{product.name}</h2>
      <img src={product.image} alt="" className="detail-img" />
      <h3>Price: {product.price}</h3>
      <hr />
      <Link to="/product">Back to Product</Link>
    </div>
  )
}
export default Detail
