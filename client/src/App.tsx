import { useEffect, useState, useContext } from 'react'
import Header from './components/header'
import Menu from './components/menu'
import GithubPage from './pages/githubPage'
import { UserContext, UserContextProvider } from './context/userContent'

interface User {
  userImage: string;
}

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

function mapGithubUserToUser(githubUser: GithubUserType): User {
  return {
    userImage: githubUser?.data.avatar_url,
  };
}

function App() {
  const [profile, setProfile] = useState<GithubUserType | null>(null)
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    const getUser = async () => {
      const response = await fetch('http://localhost:3000/github');
      const data = await response.json();
      setProfile(data);
      setUser({data: data})
    }
    getUser();
  },[])

  return (
        <div className='bg-black'>
          <Header />
          {profile && <Menu data={profile.data} />}
          <main className=" bg-black ml-auto mb-6 p-5 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
            <div className=" flex h-full items-center justify-center text-center text-5xl font-bold shadow-md">
              <GithubPage />
            </div>
          </main>
        </div>
  )
}


function AppWithUserContext() {
  return (
    <UserContextProvider>
      <App />
    </UserContextProvider>
  )
}

export default AppWithUserContext;