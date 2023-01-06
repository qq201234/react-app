import React from 'react'
import { useImmerReducer } from 'use-immer'

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
// 給useImmerReducer使用
const reducer = (draft, action) => {
  switch (action.type) {
    case actionTypes.ADD_TOTAL:
      draft.total += 1
      break
    case actionTypes.SUB_TOTAL:
      draft.total -= 1
      break
    case actionTypes.ADD_SECOND_TOTAL:
      draft.secondTotal += 1
      break
    case actionTypes.SUB_SECOND_TOTAL:
      draft.secondTotal -= 1
      break
    default:
      throw new Error()
  }
}

function CounterTwo(props) {
  // 2. 宣告reducer，得到目前的state與發送action用的dispatch函式
  const [state, dispatch] = useImmerReducer(reducer, initialState)

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
