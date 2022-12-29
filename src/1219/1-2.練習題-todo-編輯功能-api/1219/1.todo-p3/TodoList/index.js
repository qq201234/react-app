import React from 'react'

import TodoItem from './TodoItem'

function TodoList({ todos, toggleCompleted, toggleEditing, deleteTodo }) {
  return (
    <>
      <ul>
        {todos.map((v, i) => {
          // 先解構，可以少寫v.id, v.xxx...
          const { id, completed, text } = v

          return (
            <TodoItem
              // key值要加在map的回調函式回傳才是正確位置
              key={id}
              id={id}
              completed={completed}
              text={text}
              toggleCompleted={toggleCompleted}
              toggleEditing={toggleEditing}
              deleteTodo={deleteTodo}
            />
          )
        })}
      </ul>
    </>
  )
}

export default TodoList
