import React from 'react'
import Home  from './pages/Home';
import { useState } from 'react'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home />
      <div className="py-16 text-center">
        <h3 className="font-raleway font-bold">Дани Полани, 2023</h3>
      </div>
    </>
  )
}

export default App
