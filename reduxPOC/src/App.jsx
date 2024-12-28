import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NormalComponents from './components/normalComponents'
import ReduxComponent from './components/reduxComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ReduxComponent />
      {/* <NormalComponents /> */}
    </>
  )
}

export default App
