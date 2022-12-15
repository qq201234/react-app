import { useState } from 'react'

import './TodoApp.css'

function TodoApp() {
  // 文字輸入框用
  const [inputValue, setInputValue] = useState('')
  // todo列表用
  // 每個todo項目: ex. {id: number, text: string, completed: bool }
  const [todos, setTodos] = useState([
    { id: 1, text: '買牛奶', completed: true },
    { id: 2, text: '學react', completed: false },
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
            const newTodo = {
              id: Number(new Date()),
              text: e.target.value,
              completed: false,
            }

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
          return (
            <li
              key={v.id}
              className={v.completed ? 'completed' : 'not-completed'}
            >
              <button
                onClick={() => {
                  //1. 從目前的狀態拷貝出一個新的變數值(陣列/物件)
                  const newTodos = todos.map((v2) => {
                    // 物件的淺拷貝
                    return { ...v2 }
                  })

                  // 2. 在新的變數值(陣列/物件)上作處理
                  // toggle(切換)-> true變false false變true
                  newTodos[i].completed = !newTodos[i].completed

                  // 3. 設定回原本的狀態中
                  setTodos(newTodos)

                  //   setTodos(
                  //     todos.map((v2, i2) =>
                  //       i === i2 ? { ...v2, completed: !v2.completed } : { ...v2 }
                  //     )
                  //   )
                }}
              >
                切換完成狀態
              </button>
              {v.text}
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default TodoApp
