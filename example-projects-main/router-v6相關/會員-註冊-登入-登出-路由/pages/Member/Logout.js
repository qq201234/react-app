import React from 'react'
import { useNavigate } from 'react-router-dom'

function Logout(props) {
  const navigate = useNavigate()

  return (
    <>
      <h2>登出</h2>
      <button
        onClick={() => {
          alert('登出成功！跳轉到登入頁！')

          // 程式碼中跳轉到另一頁的作法
          navigate('/member/login')
        }}
      >
        登出
      </button>
    </>
  )
}

export default Logout
