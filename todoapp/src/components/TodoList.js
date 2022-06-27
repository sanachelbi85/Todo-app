import React from 'react'
import { useSelector } from 'react-redux'
import AddTodo from './AddTodo'
import TodoIteam from './TodoIteam'


function TodoList() {
  const td = useSelector((state) => state.todo.todoliste)


  return (
    <div className="to-list">
       <AddTodo />
      {td.map((el)=><TodoIteam todo={el}/>)}
    </div>
  )
}

export default TodoList