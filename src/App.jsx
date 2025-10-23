import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import StudentPortal from './components/StudentPortal'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Header/>
      <Sidebar/> */}
      <StudentPortal/>
    </>
  )
}

export default App
