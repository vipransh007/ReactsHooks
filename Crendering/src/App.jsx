import { useState } from 'react'

import './App.css'
import Login from './components/Login.jsx'
import Logout from './components/Logout.jsx'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    // Using Ternary Operator to conditionally render Login or Logout component
    <div>
      {isLoggedIn ? (<Logout />) : (<Login />)}
    </div>
  )
}

export default App
 