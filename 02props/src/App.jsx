import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className=' bg-green-500 p-4 rounded-xl mb-4 text-black '>Taildind Test</h1>
     <Card username="Anish" text="Anna Manna" />
     <Card username="Mnish" />
    </>
  )
}

export default App
