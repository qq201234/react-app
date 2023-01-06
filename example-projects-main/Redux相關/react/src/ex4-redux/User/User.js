import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeCity, changeName } from './userSlice'

function User(props) {
  // 得到目前的state與
  const name = useSelector((state) => state.user.name)
  const city = useSelector((state) => state.user.address.country.city)

  // 從react-rudux得到發送action用的dispatch函式
  const dispatch = useDispatch()

  return (
    <>
      <h2>User</h2>
      <p>useState and state is object</p>
      <h2>Name: {name}</h2>
      <h2>City: {city}</h2>
      <button
        onClick={() => {
          // 使用dispatch發送action
          dispatch(changeName({ name: 'Amy' }))
        }}
      >
        change name to Amy
      </button>
      <button
        onClick={() => {
          // 使用dispatch發送action
          dispatch(changeCity({ city: 'Taipei' }))
        }}
      >
        change city to Taipei
      </button>

      <hr />
    </>
  )
}

export default User
