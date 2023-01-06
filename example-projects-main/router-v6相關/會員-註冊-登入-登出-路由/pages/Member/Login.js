import React from 'react'
import { Link } from 'react-router-dom'

function Login(props) {
  return (
    <>
      <h2>登入</h2>
      <div>
        <label>帳號</label>
        <input type="text" />
      </div>
      <div>
        <label>密碼</label>
        <input type="text" />
      </div>
      <button>登入</button>
      <div>
        <Link to="/member/register">註冊</Link>
        {/* 下面的寫法也可以 */}
        {/* 先往上一層，先到路徑`member`再到路徑`register` */}
        {/* <Link to="../register">註冊2</Link> */}
      </div>
      <div>
        <Link to="/member/forget-password">忘記密碼</Link>
         {/* 下面的寫法也可以 */}
        {/* 這裡要先往上一層，先到路徑`member`再到路徑`register` */}
        {/* <Link to="../forget-password">忘記密碼2</Link> */}
      </div>
    </>
  )
}

export default Login
