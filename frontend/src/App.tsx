import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/header'
import Menu from './components/menu'
import GithubPage from './pages/githubPage'

function App() {
  return (
    <div>
          <Header>
          </Header>
          <Menu/>
            <main className="ml-auto mb-6 p-5 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
              <div className="flex h-full items-center justify-center bg-white text-center text-5xl font-bold shadow-md">
                <GithubPage />
              </div>
            </main>
    </div>
  )
}

export default App
