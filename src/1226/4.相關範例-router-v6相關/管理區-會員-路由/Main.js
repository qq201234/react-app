import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// 版面頁面元件
import Layout from './layouts/Layout'
// 其它子頁面
import Home from './pages/Home'
import Page2 from './pages/Page2'
import Page3 from './pages/Page3'
import NoFound from './pages/NoFound'
// 會員專區使用頁面與區域
import MemberLayout from './pages/Member/layout/MemberLayout'
import Member from './pages/Member' // 只是說明頁，一進入 `/member` 路徑的首頁
import Profile from './pages/Member/Profile'
import Order from './pages/Member/Order'
import Favorite from './pages/Member/Favorite'
import Support from './pages/Member/Support'

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* index代表此路由中的預設子頁 */}
          <Route index element={<Home />} />

          {/* 其它子頁面 */}
          <Route path="member" element={<MemberLayout />}>
            {/* index代表此路由中的預設子頁 */}
            {/* 會員專區，/member/XXXX 之後的頁面*/}
            <Route index element={<Member />} />
            <Route path="profile" element={<Profile />} />
            <Route path="order" element={<Order />} />
            <Route path="favorite" element={<Favorite />} />
            <Route path="support" element={<Support />} />
          </Route>

          <Route path="page2" element={<Page2 />} />
          <Route path="page3" element={<Page3 />} />
          {/* 404未找到的頁面路由，需放在最下方 */}
          <Route path="*" element={<NoFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Main
