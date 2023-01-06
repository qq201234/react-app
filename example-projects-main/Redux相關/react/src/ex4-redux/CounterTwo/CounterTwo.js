import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  addTotal,
  subTotal,
  addSecondTotal,
  subSecondTotal,
  addSecondTotalAmount,
} from './counterTwoSlice'

function CounterTwo(props) {
  // 2. 宣告reducer，得到目前的state與發送action用的dispatch函式
  const total = useSelector((state) => state.counter.total)
  const secondTotal = useSelector((state) => state.counter.secondTotal)

  const dispatch = useDispatch()
  
  return (
    <>
      <h2>CounterTwo</h2>
      <p>useState and state is object</p>
      <h2>{total}</h2>
      <button
        onClick={() => {
          // 使用dispatch發送action
          dispatch(addTotal())
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          // 使用dispatch發送action
          dispatch(subTotal())
        }}
      >
        -1
      </button>
      <h2>{secondTotal}</h2>
      <button
        onClick={() => {
          dispatch(addSecondTotal())
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          dispatch(subSecondTotal())
        }}
      >
        -1
      </button>
      <button
        onClick={() => {
          dispatch(addSecondTotalAmount({ value: 5 }))
        }}
      >
        +5
      </button>
      <hr />
    </>
  )
}

export default CounterTwo
