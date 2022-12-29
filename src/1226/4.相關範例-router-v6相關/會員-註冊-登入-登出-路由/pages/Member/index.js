import React from 'react'
import { Link } from 'react-router-dom'

function Member(props) {
  return (
    <>
      <p>歡迎來到會員專區!</p>
      <div>
        已是會員 ->
        <Link to="/member/login">登入</Link>
        {/* 下面的寫法也可以 */}
        {/* 要先往上一層，先到路徑`member`再到路徑`login` */}
        {/* <Link to="/member/login">登入</Link> */}
      </div>
      <div>
        尚未成為會員 ->
        <Link to="/member/register">註冊</Link>
        {/* 下面的寫法也可以 */}
        {/* 要先往上一層，先到路徑`member`再到路徑`register` */}
        {/* <Link to="../register">註冊</Link> */}
      </div>
      <div>
        已登入 ->
        <Link to="/member/logout">登出</Link>
        {/* 下面的寫法也可以 */}
        {/* 要先往上一層，先到路徑`member`再到路徑`logout` */}
        {/* <Link to="../logout">註冊</Link> */}
      </div>
    </>
  )
}

export default Member
