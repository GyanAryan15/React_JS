import { useState } from 'react'
import './App.css'
import Header from "./components/header/Header.jsx"
import Footer from "./components/footer/Footer.jsx"
import Home from "./components/Home/Home.jsx"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Footer />
    <Home />
    </>
  )
}

export default App
