import { useState } from 'react'

function HTMLValidForm() {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
  })

  const handleFieldChange = (e) => {
    //console.log(e.target.type, e.target.name, e.target.value)

    //
    const newUser = { ...user, [e.target.name]: e.target.value }

    setUser(newUser)
  }

  return (
    <>
      <h1>表單驗証</h1>
      <form>
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
