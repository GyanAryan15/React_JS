import React from "react";
import { useSelector } from "react-redux";
import {useDispatch} from 'react-redux'
import { addTodo, removeTodo } from "../features/todoSLice";


function Todos(){
//useSelector is a method , only the advantage is we get a state access here 
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()

  return(
   <>
     <div>Todos</div>
     {todos.map((todo) =>(
      <li key={todo.id}>
         {todo.text}
         <button
         onClick={()=>{
          dispatch(removeTodo(todo.id))
         }}
         >X</button>
      </li>
     )
     )}
   </>
  )
}

export default Todos