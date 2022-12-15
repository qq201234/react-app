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
