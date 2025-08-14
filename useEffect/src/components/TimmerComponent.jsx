import React from 'react'
import { useEffect } from 'react'

function TimmerComponent() {
    const [seconds, setSeconds] = React.useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds + 1);
        }, 1000);

        return () => {
            console.log('Cleanup: Timer stopped');    
            clearInterval(intervalId);
        }
    }, []); // Empty dependency array ensures it runs only on mount


  return (
    <div>
      <h1>Seconds : {seconds}</h1>
    </div>
  )
}

export default TimmerComponent
