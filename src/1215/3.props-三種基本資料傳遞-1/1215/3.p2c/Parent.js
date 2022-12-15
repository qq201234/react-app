import { useState } from 'react'

import ChildA from './ChildA'
import ChildB from './ChildB'

function Parent() {
  const [pData, setPData] = useState('父母元件的內部資料')

  return (
    <>
      <ChildA pData={pData} />
      <ChildB />
    </>
  )
}

export default Parent
