import React, { useReducer } from 'react'

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
const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_CITY:
      return {
        ...state,
        address: {
          ...state.address,
          country: {
            ...state.address.city,
            city: action.payload.city,
          },
        },
      }
    case actionTypes.CHANGE_NAME:
      return {
        ...state,
        name: action.payload.name,
      }

    default:
      throw new Error()
  }
}
function User(props) {
  // 2. 宣告reducer，得到目前的state與發送action用的dispatch函式
  const [state, dispatch] = useReducer(reducer, initialState)

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
