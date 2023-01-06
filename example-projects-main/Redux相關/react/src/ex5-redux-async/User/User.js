import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  fetchUserById,
  fetchUsers,
  fetchAddUser,
  fetchUpdateUserById,
} from './userSlice'
import { nanoid } from '@reduxjs/toolkit'
import produce from 'immer'

function User(props) {
  // 得到目前的state
  const users = useSelector((state) => state.user.users)
  // status可以觀察與server的連線情況，呈現spinner...
  const status = useSelector((state) => state.user.status)
  // error 伺服器錯誤訊息
  const error = useSelector((state) => state.user.error)

  // 從react-rudux得到發送action用的dispatch函式
  const dispatch = useDispatch()

  // didMount時載入資料
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchUsers())
    }
  }, [status, dispatch])

  return (
    <>
      <h2>User</h2>
      <p>useState and state is object</p>
      <h2>Users</h2>
      {users.map((user) => (
        <div key={user.id}>
          {user.name}/{user.address.country.city}
        </div>
      ))}

      <button
        onClick={() => {
          // 使用dispatch發送action
          dispatch(fetchUsers())
        }}
      >
        fetchUsers
      </button>

      <button
        onClick={() => {
          // 使用dispatch發送action
          dispatch(fetchUserById(2))
        }}
      >
        fetchUserById
      </button>

      <button
        onClick={() => {
          // 使用dispatch發送action
          dispatch(
            fetchAddUser({
              id: nanoid(),
              username: 'mione',
              name: 'Hermione Granger',
              password: '33333',
              role: 'user',
              address: {
                country: {
                  city: 'London',
                },
              },
            })
          )
        }}
      >
        fetchAddUser
      </button>
      <button
        onClick={() => {
          // 使用dispatch發送action
          dispatch(
            fetchUpdateUserById({
              id: 2,
              username: 'eddy',
              name: 'Eddy',
              password: '33333',
              role: 'admin',
              address: {
                country: {
                  city: 'Taipei',
                },
              },
            })
          )
        }}
      >
        fetchUpdateUserById
      </button>
      <button
        onClick={() => {
          const user = users.find((v) => v.id === 2)
          const newUser = produce(user, (draft) => {
            draft.name = 'Amy'
          })

          dispatch(fetchUpdateUserById(newUser))
        }}
      >
        change name to Amy
      </button>
      <button
        onClick={() => {
          const user = users.find((v) => v.id === 2)
          const newUser = produce(user, (draft) => {
            draft.address.country.city = 'Taipei'
          })

          dispatch(fetchUpdateUserById(newUser))
        }}
      >
        change city to Taipei
      </button>

      <hr />
    </>
  )
}

export default User
