import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function LoggerComponenets() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log('Component redendered or count changed:', count)
    });
// runs on every render

  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={() => setCount(count+1)}>
        Incremnet
      </button>
    </div>
  )
}

export default LoggerComponenets
