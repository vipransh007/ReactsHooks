import { useState } from 'react'
import './App.css'

function App() {
const [Text, SetText] = useState("click Me")
  function handleClick(){
    SetText("You Clicked Me MotherFucker")
  }
  return (
    <div>
      <button onClick={handleClick}> 
        {Text}
      </button>
    </div>
  )
}

export default App
