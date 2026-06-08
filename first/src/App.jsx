import {useState} from 'react'

let [counter , setCounter] = useState(0)

const Add = ()=>{
  setCounter(counter+1)
}
const Sub = ()=>{
  setCounter(counter-1)
}
function App() {

  return (
   <div>
      <h1>Adder and Subtractor function</h1>
      <button onClick={Add}>Add Value</button>
      <button onClick={Sub}>Subtract Value</button>
   </div>
  );
}

export default App
