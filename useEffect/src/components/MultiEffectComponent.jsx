import React from 'react'
import { useState, useEffect } from 'react'


function MultiEffectComponent() {
    const [count , setCount] = useState(0);
    const [seconds , setSeconds] = useState(0);
    
    useEffect(() => {
        console.log("Count changed :" , count);
    },[count]);
    // will run whenever count changes

    useEffect(() => {
        const intervalId = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds + 1);
        },1000);
    },[]); // Empty dependency array ensures it runs only on mount

  return (
    <div>
      <h1>count : {count}</h1>
      <button onClick={() => setCount(count+1)}>Increment Count</button>

      <h1>Seconds: {seconds}</h1>
    </div>
  )
}

export default MultiEffectComponent
