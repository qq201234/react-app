import React from 'react'
import { useNavigate } from 'react-router-dom'

function Register(props) {
  const navigate = useNavigate()

  return (
    <>
      <h2>註冊</h2>
      <div>
        <label>姓名</label>
        <input type="text" />
      </div>
      <div>
        <label>Email</label>
        <input type="text" />
      </div>
      <div>
        <label>帳號</label>
        <input type="text" />
      </div>
      <div>
        <label>密碼</label>
        <input type="text" />
      </div>
      <button
        onClick={() => {
          alert('註冊完成！跳轉到登入頁！')

          // 程式碼中跳轉到另一頁的作法
          navigate('/member/login')
        }}
      >
        註冊
      </button>
    </>
  )
}

export default Register
