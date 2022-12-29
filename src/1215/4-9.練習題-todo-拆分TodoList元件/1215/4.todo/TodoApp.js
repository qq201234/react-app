import { useState } from 'react'

import AddForm from './AddForm'
import TodoList from './TodoList'

import './TodoApp.css'

function TodoApp() {
  // todo列表用
  // 每個todo項目: ex. {id: number, text: string, completed: boolean }
  const [todos, setTodos] = useState([
    { id: 1, text: '買牛奶', completed: true },
    { id: 2, text: '學react', completed: false },
  ])

  // 下面為處理todos state各種操作用方法
  const addTodo = (text) => {
    // id產生的幾種方式:
    // 1. 用加入當下的時間微秒值(ps. 不適合多人使用系統)
    // 2. id是數字時，可求出最大值再遞增(類似資料庫中的auto increment)
    // 3. 隨機產生語法或函式庫 例如 uuid/nanoid 等函式庫

    // 先寫出要新增的物件值
    // id用時間日期物件的微秒值
    const newTodo = {
      id: Number(new Date()),
      text: text,
      completed: false,
    }

    // 1 2 3 三步驟(拷貝 -> 加入到新陣列中 -> 設定回state)
    setTodos([newTodo, ...todos])
  }

  const toggleCompleted = (id) => {
    //1. 從目前的state拷貝出一個新的物件陣列
    const newTodos = todos.map((v2) => {
      return { ...v2 }
    })

    // 2. 在新的物件陣列上作處理
    // toggle(切換)-> true變false false變true
    const index = newTodos.findIndex((v3, i3) => {
      return v3.id === id
    })

    // 有找到時
    if (index !== -1) {
      newTodos[index].completed = !newTodos[index].completed

      // 3. 設定回state中
      setTodos(newTodos)
    }
  }

  const deleteTodo = (id) => {
    //1, 2
    const newTodos = todos.filter((v2, i2) => {
      return id !== v2.id
    })

    // 3
    setTodos(newTodos)
  }

  return (
    <>
      <AddForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        toggleCompleted={toggleCompleted}
        deleteTodo={deleteTodo}
      />
    </>
  )
}

export default TodoApp
