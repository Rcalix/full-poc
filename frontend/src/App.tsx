import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/header'
import Menu from './components/menu'
import GithubPage from './pages/githubPage'
export interface GithubUserType {
  data: {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    bio: string | null;
    twitter_username: string | null;
    public_repos: number;
    followers: number;
    following: number;
  }

}
function App() {
  const [profile, setProfile] = useState<GithubUserType>()

  const getUser = async() => {
      const response = await fetch('http://localhost:3000/github');
      setProfile(await response.json())
  }
  useEffect(() => {
      const fetchData = async () => {
          getUser()
      }
      fetchData();
  },[])
  return (
    <div className=' bg-black'>
          <Header>
          </Header>
          <Menu data={profile}/>
            <main className="ml-auto mb-6 p-5 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
              <div className="flex h-full items-center justify-center bg-white text-center text-5xl font-bold shadow-md">
                <GithubPage />
              </div>
            </main>
    </div>
  )
}

export default App
