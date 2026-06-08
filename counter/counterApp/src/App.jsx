import { useState } from 'react'
import './App.css'






function App() {
   
let [counter , setCounter] = useState(0)

const Add = ()=>{
  setCounter(prev => prev+1)
  setCounter(prev => prev+1)
  setCounter(prev => prev+1)
}
const Sub = ()=>{
  setCounter(prev => prev-1)
  setCounter(prev => prev-1)
  setCounter(prev => prev-1)
}

  return (
   <div>
      <h1>Adder and Subtractor function</h1>
      <button onClick={Add}>Add Value </button>
      <button onClick={Sub}>Subtract Value </button>
      <h2>{counter}</h2>
   </div>
  );
}

export default App
