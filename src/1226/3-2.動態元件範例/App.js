import { useState } from 'react'
//import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

// 引入頁面元件
import Home from './pages/Home'
import User from './pages/User'
import Product from './pages/Product'
import About from './pages/About'

function App() {
  const [activeIndex, setActiveIndex] = useState(0)

  const pages = [
    {
      path: '/',
      element: Home,
    },
    {
      path: 'user',
      element: User,
    },
  ]

  const MyComponent = pages[activeIndex].element

  return (
    <>
      {pages.map((v, i) => {
        return (
          <button
            onClick={() => {
              setActiveIndex(i)
            }}
          >
            {v.path}
          </button>
        )
      })}
      <hr />
      <MyComponent />
    </>
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="user" element={<User />} />
    //     <Route path="about" element={<About />} />
    //     <Route path="product" element={<Product />} />
    //   </Routes>
    // </BrowserRouter>
  )
}

export default App
