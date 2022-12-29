import { useState, useEffect } from 'react'

//需先安裝`yarn add axios`
import axios from 'axios'

import './User.css'

function User() {
  // 陣列中物件的樣貌:
  // ex. {"id": "107001","name": "張佳蓉","age": "22"}
  const [users, setUsers] = useState([])

  const getUsers = async () => {
    const response = await axios.get(
      'https://my-json-server.typicode.com/eyesofkids/json-fake-data/users'
    )

    console.log(response)

    // 設定到state中
    setUsers(response.data)
  }

  // didMount時與伺服器要求資料
  useEffect(() => {
    getUsers()
  }, [])

  return (
    <>
      <h1>會員資料</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>姓名</th>
            <th>年紀</th>
          </tr>
        </thead>
        <tbody>
          {users.map((v, i) => {
            return (
              <tr key={v.id}>
                <td>{v.id}</td>
                <td>{v.name}</td>
                <td>{v.age}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}

export default User
