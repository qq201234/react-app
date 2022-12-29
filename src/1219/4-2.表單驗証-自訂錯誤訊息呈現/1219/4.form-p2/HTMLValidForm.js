import { useState } from 'react'
import './HTMLValidForm.css'

function HTMLValidForm() {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
  })

  // 記錄每個欄位的錯誤訊息
  const [fieldErrors, setFieldErrors] = useState({
    username: '',
    email: '',
    password: '',
  })

  const handleFieldChange = (e) => {
    //console.log(e.target.type, e.target.name, e.target.value)

    // computed property
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names
    const newUser = { ...user, [e.target.name]: e.target.value }

    setUser(newUser)
  }

  const handleFormSubmit = (e) => {
    // 擋住表單預設送出行為
    e.preventDefault()

    // 得到值的方式
    // 1.有綁定到state中時，直接用state中的值
    console.log(user)

    // 2. 送出時才得到表單中各填入值，用FormData
    const formData = new FormData(e.target)
    console.log(
      formData.get('username'),
      formData.get('email'),
      formData.get('password')
    )

    // 作其它驗証…修改/整合資料

    // 送到伺服器
  }

  const handleFormInvalid = (e) => {
    // 擋住預設行為 - 泡泡錯誤訊息
    e.preventDefault()

    //console.log(e.target.name, e.target.validationMessage)

    // 記錄錯誤訊息
    setFieldErrors({
      ...fieldErrors,
      [e.target.name]: e.target.validationMessage,
    })
  }

  // 當使用者回頭修正欄位時，要把表單的錯誤訊息先清空
  const handleFormChange = (e) => {
    setFieldErrors({
      ...fieldErrors,
      [e.target.name]: '',
    })
  }

  return (
    <>
      <h1>表單驗証</h1>
      <form
        onSubmit={handleFormSubmit}
        onInvalid={handleFormInvalid}
        onChange={handleFormChange}
      >
        <label>帳號</label>
        <input
          name="username"
          type="text"
          value={user.username}
          onChange={handleFieldChange}
          required
        />
        <span className="error">{fieldErrors.username}</span>
        <br />
        <label>Email</label>
        <input
          name="email"
          type="email"
          value={user.email}
          onChange={handleFieldChange}
          required
        />
        <span className="error">{fieldErrors.email}</span>
        <br />
        <label>密碼</label>
        <input
          name="password"
          type="password"
          value={user.password}
          onChange={handleFieldChange}
          required
          minLength={6}
          maxLength={10}
        />
        <span className="error">{fieldErrors.password}</span>
        <br />
        <button type="submit">送出</button>
      </form>
    </>
  )
}

export default HTMLValidForm
