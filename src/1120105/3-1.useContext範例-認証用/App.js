// import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

// 引入頁面元件
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Login from './pages/User/Login'
import Logout from './pages/User/Logout'

// 引入排版用元件
import Menubar from './layout/Menubar'
import Footer from './layout/Footer'
import MyContent from './layout/MyContent'

// 自訂Context，不同頁面或元件要共享state(狀態)用
import { AuthProvider } from './hooks/useAuth'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        {/* 所有頁面統一選單(導覽列) */}
        <Menubar />

        <MyContent>
          {/* Start: 這裡的頁面元件會切換 */}
          <Routes>
            {/* 這裡加上index與`path="/"`同意思 */}
            <Route index element={<Home />} />

            {/* 路由  */}
            <Route path="/user/login" element={<Login />} />
            <Route path="/user/logout" element={<Logout />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
          {/* End: 這裡的頁面元件會切換 */}
        </MyContent>

        {/* 所有頁面統一頁尾 */}
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
