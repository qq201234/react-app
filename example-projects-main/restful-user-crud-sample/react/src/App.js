// 使用套件
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom'
import { useState } from 'react'

// 頁面用元件
import Home from './pages/Home'
import Register from './pages/User/Register'
import Login from './pages/User/Login'
import Profile from './pages/User/Profile'
import NotFoundPage from './pages/NotFoundPage'

// 組合用元件
import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter'
import MainContent from './components/MainContent'

/* ScrollToTop是為了讓連到另一頁內容時，頁面回到最上方 */
import ScrollToTop from './components/ScrollToTop'
/* 麵包屑元件，定義在config/index.js */
import MultiLevelMatchBreadCrumb from './components/MultiLevelMatchBreadCrumb'

import { AuthProvider } from './utils/useAuth'

function App() {
  return (
    <AuthProvider>
      <Router>
        {/* LOGO+標題+導覽列+上方選單 */}
        <MyNavbar />
        {/* 主內容區 */}
        <MainContent>
          {/* 麵包屑元件，定義在config/index.js */}
          <MultiLevelMatchBreadCrumb />
          {/* 匹配路由表(路徑單一匹配) */}
          {/* 切換顯示的元件畫面放在這下面 */}
          {/* ScrollToTop是為了讓連到另一頁內容時，頁面回到最上方 */}
          <ScrollToTop>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="profile" element={<Profile />} />
              <Route
                path="register"
                element={<Register />}
              />
              <Route path="login" element={<Login />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
            {/* end 匹配路由表 */}
          </ScrollToTop>
        </MainContent>
        {/* 頁尾+版權訊息 */}
        <MyFooter />
      </Router>
    </AuthProvider>
  )
}

export default App
