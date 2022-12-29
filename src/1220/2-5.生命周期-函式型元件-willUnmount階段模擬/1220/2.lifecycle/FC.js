import { useState, useEffect, useRef } from 'react'

function FC() {
  const [total, setTotal] = useState(0)

  // 記憶didMount時間點用的內部變數(並非是DOM元素實體物件使用)
  const didMountRef = useRef(false)

  // 模擬didMount
  useEffect(() => {
    console.log('模擬 didMount')
  }, [])

  //模擬didMount+didUpdate
  useEffect(() => {
    console.log('模擬 didMount+didUpdate ', 'total=', total)
  }, [total])
  // ^^^^^^^ 相依性陣列中，放入與更新階段有關的props或state
  // 意義為當放入的props或state有更動時，會執行第一參數函式裡的程式碼
  // 只有當接收到新的props或本身的state有變動時，才會觸發re-render(updating)階段

  // 只模擬didUpdate
  // 簡易語法，判斷是否為初始值
  useEffect(() => {
    // total為初始值時不執行
    if (total !== 0) {
      console.log('只模擬 didUpdate(判斷初始值) ', 'total=', total)
    }
  }, [total])

  // 完整模擬didUpdate
  // 利用refs記錄didMount時間點
  useEffect(() => {
    if (didMountRef.current) {
      console.log('完整模擬 didUpdate ', 'total=', total)
    } else {
      didMountRef.current = true
    }
  }, [total])

  // 模擬willUnmount
  useEffect(() => {
    return () => {
      // willUnmount寫在這裡
      console.log('模擬willUnmount')
    }
  }, [])

  return (
    <>
      {console.log('render')}
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
