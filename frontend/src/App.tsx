import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/header'
import Menu from './components/menu'
import GithubPage from './pages/githubPage'
import { UserContext } from './context/userContent'
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
  console.log(process.env)
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
    <div className='bg-black'>
          <UserContext.Provider value={profile?.data?.avatar_url}>
          <Header />
          <Menu data={profile} />
            <main className=" bg-black ml-auto mb-6 p-5 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
              <div className=" flex h-full items-center justify-center text-center text-5xl font-bold shadow-md">
                <GithubPage />
              </div>
            </main>
        </UserContext.Provider>
    </div>
  )
}

export default App
