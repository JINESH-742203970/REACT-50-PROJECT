import { useState } from 'react'
import counterChallenge from "./counterChallenge"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <counterChallenge/>
    </>
  )
}

export default App
