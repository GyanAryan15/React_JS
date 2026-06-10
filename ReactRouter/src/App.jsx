import { useState } from 'react'
import Header from "./components/Header/Header.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <h1 className='bg-green-500 p-4 text-black'>React Router</h1> */}
    <Header />
    </>
  )
}

export default App
