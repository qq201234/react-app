import { useRef } from 'react'

function RefsForm() {
  // 經宣告後 inputRef = {current:null}
  // 用null值作為初始化值，是要對比getElementById的設計，
  // getElementById如果沒找到匹配元素物件則返回null
  const inputRef = useRef(null)

  return (
    <>
      <h1>RefsForm</h1>
      <input type="text" ref={inputRef} />
      <button
        onClick={() => {
          inputRef.current.focus()
        }}
      >
        聚焦(focus)
      </button>
      <button
        onClick={() => {
          inputRef.current.blur()
        }}
      >
        失焦(blur)
      </button>
      <button
        onClick={() => {
          console.log(inputRef.current)
          console.log(inputRef.current.value)
        }}
      >
        印出值在主控台
      </button>
    </>
  )
}

export default RefsForm
