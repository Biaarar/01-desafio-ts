import { useState } from 'react'
import {ToDo } from './ToDo';
import {Header } from './Header';
import './global.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header/ >
   <ToDo />
    </div>
  )
}

export default App
