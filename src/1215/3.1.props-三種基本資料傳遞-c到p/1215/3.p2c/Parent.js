import { useState } from 'react'
import ChildA from './ChildA'
import ChildB from './ChildB'

function Parent() {
  const [pData, setPData] = useState('父母元件的內部資料')

  // 專門要給子女B傳回資料用
  const [dataFromChild, setDataFromChild] = useState('')

  return (
    <>
      <p>來自子女B元件的資料: {dataFromChild}</p>
      <hr />
      <ChildA pData={pData} />
      <ChildB setDataFromChild={setDataFromChild} />
    </>
  )
}

export default Parent
