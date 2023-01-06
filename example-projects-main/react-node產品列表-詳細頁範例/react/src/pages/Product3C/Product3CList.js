import React from 'react'
import { Link } from 'react-router-dom'
import { product3c } from '../../data/product-3c'

function Product3CList(props) {
  return (
    <>
      <h1>ProductClothingList</h1>
      <ul>
        {product3c.map((v, i) => {
          return (
            <li key={v.id}>
              <Link to={`/product-3c-detail/?product_id=${v.id}`}>
                {v.name}/{v.price}
              </Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default Product3CList
