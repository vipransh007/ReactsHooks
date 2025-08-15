import './App.css'
import { createContext } from 'react'
import ChildA from './components/ChildA.jsx'
import { useState } from 'react'

// Step 1: Create a context
const ThemeContext = createContext();

// Step 2: Create a provider component
// every component that wants to be accessed by the context must be wrappede inside the provider 

// step 3: pass the value to the provider
// step 4: go to the consumer component and use the context

function App() {
// const [user, setUser] = useState({ name: 'Sneha Tandon '});
  const [theme , setTheme] = useState('light');
return (
    <>
  <ThemeContext.Provider value={{theme, setTheme}}>
    <div id = 'container' style={{backgroundColor: theme === 'light' ? '#fff' : '#000000ff'}}>
      <ChildA />
    </div>
  </ThemeContext.Provider>

    {/* <UserContext.Provider value={user}>
      <ChildA/>
    </UserContext.Provider> */}

    </>
  )
}

export default App
export { ThemeContext }; // Export the context to be used in other components