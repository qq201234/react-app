import { useState } from 'react'

function ChildB(props) {
  console.log(props)
  const [cData, setCData] = useState('子女B元件的內部資料')

  return (
    <>
      <h1>Child B</h1>
      <button
        onClick={() => {
          props.setDataFromChild(cData)
        }}
      >
        傳回內部資料到父母元件
      </button>
    </>
  )
}

export default ChildB
