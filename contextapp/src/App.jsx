import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Context from './components/Context'
import ThemeManager from './components/themesContextAPI/ThemeManager'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Context /> */}
      <ThemeManager />
    </>
  )
}

export default App
