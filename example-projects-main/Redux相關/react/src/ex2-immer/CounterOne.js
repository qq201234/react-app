import React, { useState } from 'react'

function CounterOne(props) {
  const [counter, setCounter] = useState(0)

  return (
    <>
      <h2>CounterOne</h2>
      <p>useState</p>
      <h2>{counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>+1</button>
      <button onClick={() => setCounter(counter - 1)}>-1</button>
      <hr />
    </>
  )
}

export default CounterOne
