import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import products from '../../data/product.json'

import './styles/Product.css'

function List() {
  let location = useLocation()

  React.useEffect(() => {
    let params = new URLSearchParams(location.search)
    let cat = params.get('cat')
    let type = params.get('type')

    console.log(cat, type)
    //server fetch
  }, [location])

  return (
    <>
      <div className="product">
        <h1>Product List</h1>
        <Link to="/product?cat=1&type=bbb">bbb</Link>
        <br />
        <Link to="/product?cat=1&type=aaa">aaa</Link>
        <div className="container">
          {products.map((v, i) => {
            return (
              <div class="card" key={v.id}>
                <img src={v.image} className="img" alt="" />
                <div class="content">
                  <h3>
                    <Link to={`/product/detail?id=${v.id}&cat=a`}>
                      {v.name}
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <h4>Price: {v.price}</h4>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
export default List
