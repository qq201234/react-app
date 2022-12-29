// import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

// 引入頁面元件
import About from './pages/About'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Product from './pages/Product'
// 巢狀使用
import Layout from './pages/User/Layout'
import Register from './pages/User/Register'
import Login from './pages/User/Login'

// 引入排版用元件
import Menubar from './layout/Menubar'
import Footer from './layout/Footer'
import MyContent from './layout/MyContent'

function App() {
  return (
    <BrowserRouter>
      {/* 所有頁面統一選單(導覽列) */}
      <Menubar />

      <MyContent>
        {/* Start: 這裡的頁面元件會切換 */}
        <Routes>
          {/* 這裡加上index與`path="/"`同意思 */}
          <Route index element={<Home />} />
          {/* 巢狀路由 `/user/xxxx` */}
          <Route path="user" element={<Layout />}>
            <Route index element={<Register />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
          </Route>
          <Route path="about" element={<About />} />
          <Route path="product" element={<Product />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* End: 這裡的頁面元件會切換 */}
      </MyContent>

      {/* 所有頁面統一頁尾 */}
      <Footer />
    </BrowserRouter>
  )
}

export default App
