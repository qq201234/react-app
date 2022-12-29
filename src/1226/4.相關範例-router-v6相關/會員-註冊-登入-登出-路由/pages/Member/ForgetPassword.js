import React from 'react'

function ForgetPassword(props) {
  return (
    <>
      <h2>忘記密碼</h2>
      <div>請在下面填入你註冊的email，系統會發送一封email到…</div>
      <div>
        <label>Email</label>
        <input type="text" />
      </div>
      <button>送出</button>
    </>
  )
}

export default ForgetPassword
