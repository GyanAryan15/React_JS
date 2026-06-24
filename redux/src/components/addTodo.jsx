import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
function AddTodo(){
   
  const [input,setInput] = useState('')
  const dispatch = useDispatch()
   
  //dispatch reucer ko use krke reducer k andar value store karta hai
  const addTodoHandler = (e) =>{
    e.preventDefault()
    dispatch(AddTodo(input))
    setInput('')
    //cleaning the input
  }

  return(
    <form onSubmit={addTodoHandler}>
    <input type="text" 
    placeholder='enter todo'
    value={input}
    onChange={(e)=> setInput(e.target.value)}
    />
    <button>

    </button>
   </form>
  )
   
}
export default AddTodo