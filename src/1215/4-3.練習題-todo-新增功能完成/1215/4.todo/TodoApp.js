import { useState } from 'react'

function TodoApp() {
  // 文字輸入框用
  const [inputValue, setInputValue] = useState('')
  // todo列表用
  // 每個todo項目: ex. {id: 123, text: 'xxxx' }
  const [todos, setTodos] = useState([
    { id: 1, text: '買牛奶' },
    { id: 2, text: '學react' },
  ])

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value)
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            // id產生的幾種方式:
            // 1. 用加入當下的時間微秒值(ps. 不適合多人使用系統)
            // 2. id是數字時，可求出最大值再遞增(類似資料庫中的auto increment)
            // 3. 隨機產生語法或函式庫 例如 uuid/nanoid 等函式庫

            // 先寫出要新增的物件值
            // id用時間日期物件的微秒值
            const newTodo = { id: Number(new Date()), text: e.target.value }

            // 1 2 3 三步驟(拷貝 -> 加入到新陣列中 -> 設定回state)
            setTodos([newTodo, ...todos])

            // 清空文字輸入框
            setInputValue('')
          }
        }}
      />
      <hr />
      <ul>
        {todos.map((v, i) => {
          return <li key={v.id}>{v.text}</li>
        })}
      </ul>
    </>
  )
}

export default TodoApp
