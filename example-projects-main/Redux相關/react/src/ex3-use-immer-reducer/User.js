import React from 'react'
import { useImmerReducer } from 'use-immer'

// 1. 決定state初始值
const initialState = {
  id: '1',
  name: 'Eddy',
  address: {
    country: {
      city: 'New Taipei City',
    },
  },
}

// 額外: 使用變數值的action type
// 目的是為了搭配開發工具動態除錯用，與集中管理所有動作類型
const actionTypes = {
  CHANGE_CITY: 'CHANGE_CITY',
  CHANGE_NAME: 'CHANGE_NAME',
}

// 1. 撰寫reducer
// 給useImmerReducer使用
const reducer = (draft, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_CITY:
      draft.address.country.city = action.payload.city
      break
    case actionTypes.CHANGE_NAME:
      draft.name = action.payload.name
      break
    default:
      throw new Error()
  }
}

function User(props) {
  // 2. 宣告reducer，得到目前的state與發送action用的dispatch函式
  const [state, dispatch] = useImmerReducer(reducer, initialState)

  return (
    <>
      <h2>User</h2>
      <p>useState and state is object</p>
      <h2>Name: {state.name}</h2>
      <h2>City: {state.address.country.city}</h2>
      <button
        onClick={() => {
          // 使用dispatch發送action
          dispatch({ type: actionTypes.CHANGE_NAME, payload: { name: 'Amy' } })
        }}
      >
        change name to Amy
      </button>
      <button
        onClick={() => {
          // 使用dispatch發送action
          dispatch({
            type: actionTypes.CHANGE_CITY,
            payload: { city: 'Taipei' },
          })
        }}
      >
        change city to Taipei
      </button>

      <hr />
    </>
  )
}

export default User
