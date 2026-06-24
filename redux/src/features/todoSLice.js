import {createSlice , nanoid} from "@reduxjs/toolkit"
//create slice is enough for making the slice but we have to further use something so we are using naoid as well

//storee k andar sabse importnt chiz hoti hai ki ye empty hoga ya fir tm database se kuch value leke input daaloge 
//isliye sabse pehle initial state define karte hai 
const initialState = {
  todos : [{
    id:1,
    text : "Hello"
  }]
}

export const todoSlice = createSlice(
  {
    name:'todo',
    //ye prop man se nahi di yahi property ka naam hota hai 
    initialState,
    //yahi par hm reducer define karenge , reducer me aata kya hai 
    //object aata hai , properties aur function aati hai 
    reducers:{
      //iske andar hm function likhte hai 
      //in function k andar hme 2 cheeze milti hai 
      //state aur action , state gives you the acccess of all the prop of initialState
      //action tab kaam me aata hai jab hme koi value mile , jaise remove me ek id chahiye hogi wo id hme action e milegi

      addTodo : (state, action)=>{
        const todo = {
          id : nanoid(),
          text : action.payload
        }
        state.todos.push(todo)

      },
      removeTodo : (state,actiom)=>{
        state.todos = state.todos.filter((todos)=>{
          todos.id !== action.payload
        })
      }
    }
  }
)


//this is step 3
//now we will export all the dependencies
export const {addTodo,removeTodo} = todoSlice.actions
export default todoSlice.reducer

