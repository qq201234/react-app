import { useState } from 'react'
import ChildA from './ChildA'
import ChildB from './ChildB'

function Parent() {

  // 專門要給子女B傳回資料用
  const [dataFromChild, setDataFromChild] = useState('')

  return (
    <>
      <ChildA dataFromChild={dataFromChild} /> 
      <ChildB setDataFromChild={setDataFromChild} />
    </>
  )
}

export default Parent
