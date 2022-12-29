// import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

// 引入頁面元件
import Home from './pages/Home'
import User from './pages/User'
import Product from './pages/Product'
import About from './pages/About'

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
          <Route path="/" element={<Home />} />
          <Route path="user" element={<User />} />
          <Route path="about" element={<About />} />
          <Route path="product" element={<Product />} />
        </Routes>
        {/* End: 這裡的頁面元件會切換 */}
      </MyContent>

      {/* 所有頁面統一頁尾 */}
      <Footer />
    </BrowserRouter>
  )
}

export default App
