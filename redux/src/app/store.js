import {configureStore} from "@reduxjs/toolkit"
//here store ban gaya hai but properly tayyar nahi hai
//this is the step 1 


//STEP 4
import todoReducer from "../features/todoSLice.js"


export const store = configureStore({
  reducer : todoReducer
})
//ye apne andar sirf object hi leta hai , but ye yahan pe bhi puri tarah se ready nahi hai

