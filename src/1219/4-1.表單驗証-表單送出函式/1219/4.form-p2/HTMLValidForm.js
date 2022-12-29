import { useState } from 'react'

function HTMLValidForm() {
  const [user, setUser] = useState({
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

  const handleSubmit = (e) => {
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

  return (
    <>
      <h1>表單驗証</h1>
      <form onSubmit={handleSubmit}>
        <label>帳號</label>
        <input
          name="username"
          type="text"
          value={user.username}
          onChange={handleFieldChange}
        />
        <br />
        <label>Email</label>
        <input
          name="email"
          type="email"
          value={user.email}
          onChange={handleFieldChange}
        />
        <br />
        <label>密碼</label>
        <input
          name="password"
          type="password"
          value={user.password}
          onChange={handleFieldChange}
        />
        <br />
        <button type="submit">送出</button>
      </form>
    </>
  )
}

export default HTMLValidForm
