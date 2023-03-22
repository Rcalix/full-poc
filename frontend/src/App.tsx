import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col w-64 h-screen bg-gray-900">
    <div className="h-16 flex items-center justify-center text-white text-2xl font-bold">
      My App
    </div>
    <div className="flex-grow p-4">
      {/* Add your content here */}
    </div>
  </div>
  )
}

export default App
