import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'

// import List from './List'
// import Detail from './Detail'

function Product() {
  return (
    <>
      {/* 這裡可以依需求排版 */}
      <h1>Product Page</h1>
      <Outlet />
    </>
  )
}

export default Product
