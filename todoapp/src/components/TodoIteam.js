import React from 'react';
import { useDispatch } from 'react-redux';
import { removeTask , doneTask } from '../js/TodoSlice';
import EditTask from './EditTask';


function TodoIteam({todo}) {
  const dispatch = useDispatch()
  console.log(todo.isDone)
  return (
    <div className={`iteam ${todo.isDone ? "done" : "undone"}`}>
      <div className="todo-it">
        <h2>{todo.title}</h2>
        <h3>{todo.description}</h3> 
        </div>
        <span onClick={()=> dispatch(doneTask({id : todo.id}))}>{todo.isDone? "Done" : "Not Done"}</span>
        
        <EditTask id={todo.id} />

      <botton onClick={()=> dispatch(removeTask({id : todo.id}))}>Remove</botton>
      </div>
  )
}

export default TodoIteam