import { useState } from 'react'

function FC() {
  const [total, setTotal] = useState(0)
  
  return (
    <>
      <h1>函式型元件</h1>
      <h1
        onClick={() => {
          setTotal(total + 1)
        }}
      >
        {total}
      </h1>
    </>
  )
}

export default FC
