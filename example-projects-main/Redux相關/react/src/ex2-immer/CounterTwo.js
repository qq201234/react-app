import React, { useState } from 'react'
import produce from 'immer'

function CounterTwo(props) {
  const [counter, setCounter] = useState({ total: 0, secondTotal: 1 })

  return (
    <>
      <h2>CounterTwo</h2>
      <p>useState and state is object</p>
      <h2>{counter.total}</h2>
      <button
        onClick={() => {
          // const newCounter = { ...counter, total: counter.total + 1 }
          // setCounter(newCounter)
          setCounter(
            produce((draft) => {
              draft.total += 1
            })
          )
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          // const newCounter = { ...counter, total: counter.total - 1 }
          // setCounter(newCounter)
          setCounter(
            produce((draft) => {
              draft.total = draft.total - 1
            })
          )
        }}
      >
        -1
      </button>
      <h2>{counter.secondTotal}</h2>
      <button
        onClick={() => {
          // const newCounter = {
          //   ...counter,
          //   secondTotal: counter.secondTotal + 1,
          // }
          // setCounter(newCounter)
          setCounter(
            produce((draft) => {
              draft.secondTotal = draft.secondTotal + 1
            })
          )
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          // const newCounter = {
          //   ...counter,
          //   secondTotal: counter.secondTotal - 1,
          // }
          // setCounter(newCounter)
          setCounter(
            produce((draft) => {
              draft.secondTotal = draft.secondTotal - 1
            })
          )
        }}
      >
        -1
      </button>
      <hr />
    </>
  )
}

export default CounterTwo
