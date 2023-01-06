import React, { useReducer } from 'react'

// 1. 決定state初始值
const initialState = { total: 0, secondTotal: 1 }

// 額外: 使用變數值的action type
// 目的是為了搭配開發工具動態除錯用，與集中管理所有動作類型
const actionTypes = {
  ADD_TOTAL: 'ADD_TOTAL',
  SUB_TOTAL: 'SUB_TOTAL',
  ADD_SECOND_TOTAL: 'ADD_SECOND_TOTAL',
  SUB_SECOND_TOTAL: 'SUB_SECOND_TOTAL',
}

// 1. 撰寫reducer
const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_TOTAL:
      return { ...state, total: state.total + 1 }
    case actionTypes.SUB_TOTAL:
      return { ...state, total: state.total - 1 }
    case actionTypes.ADD_SECOND_TOTAL:
      return { ...state, secondTotal: state.secondTotal + 1 }
    case actionTypes.SUB_SECOND_TOTAL:
      return { ...state, secondTotal: state.secondTotal - 1 }
    default:
      throw new Error()
  }
}

function CounterTwo(props) {
  // 2. 宣告reducer，得到目前的state與發送action用的dispatch函式
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
      <h2>CounterTwo</h2>
      <p>useState and state is object</p>
      <h2>{state.total}</h2>
      <button
        onClick={() => {
          // 使用dispatch發送action
          dispatch({ type: actionTypes.ADD_TOTAL })
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          // 使用dispatch發送action
          dispatch({ type: actionTypes.SUB_TOTAL })
        }}
      >
        -1
      </button>
      <h2>{state.secondTotal}</h2>
      <button
        onClick={() => {
          dispatch({ type: actionTypes.ADD_SECOND_TOTAL })
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          dispatch({ type: actionTypes.SUB_SECOND_TOTAL })
        }}
      >
        -1
      </button>
      <hr />
    </>
  )
}

export default CounterTwo
