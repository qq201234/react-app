import React from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.css'

function Sidebar(props) {
  return (
    <div class="sidenav">
      <Link to="profile">個人資料</Link>
      <Link to="order">訂購記錄</Link>
      <Link to="favorite">收藏文章</Link>
      <Link to="support">客服中心</Link>
    </div>
  )
}

export default Sidebar
