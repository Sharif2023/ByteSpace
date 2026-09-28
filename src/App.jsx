import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <h1 className="text-5xl font-bold text-white">
        React + Vite + Tailwind CSS
      </h1>
    </div>
    </>
  )
}

export default App
